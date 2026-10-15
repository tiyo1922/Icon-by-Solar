#!/usr/bin/env python3
"""Generate centralized manifest and metadata for Icon by Solar.

This script scans all 3,738 source SVG icons across Bold, Bold Duotone, and Outline,
normalizes filenames (handling anomalies like double spaces), assigns canonical slugs,
resolves the 11 cross-category naming collisions, and writes:
- manifest.json (root)
- packages/react/src/manifest.json (or exported icon definitions)
- packages/laravel-blade/resources/manifest.json
"""
from __future__ import annotations
import json
import re
import sys
import xml.etree.ElementTree as ET
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
STYLES = ['Bold', 'Bold Duotone', 'Outline']
STYLE_MAP = {
    'Bold': 'bold',
    'Bold Duotone': 'bold-duotone',
    'Outline': 'outline'
}

# 11 known cross-category collisions and their primary vs disambiguated slugs
COLLISION_SPECS = {
    'Bill': {
        'Money': ('bill', ['bill-money', 'money/bill', 'cash-bill']),
        'List': ('list-bill', ['bill-receipt', 'bill-invoice', 'list/bill'])
    },
    'Cup': {
        'Food, Kitchen': ('cup', ['cup-kitchen', 'coffee-cup', 'food-kitchen/cup']),
        'Essentional, UI': ('cup-trophy', ['trophy', 'trophy-cup', 'essentional-ui/cup'])
    },
    'Document': {
        'Notes': ('document', ['document-notes', 'notes/document']),
        'School': ('document-school', ['document-diploma', 'diploma', 'school/document'])
    },
    'Forward': {
        'Arrows Action': ('forward', ['forward-arrow', 'fast-forward', 'arrows-action/forward']),
        'Messages, Conversation': ('forward-message', ['message-forward', 'share-message', 'messages-conversation/forward'])
    },
    'Home': {
        'Essentional, UI': ('home', ['home-ui', 'essentional-ui/home']),
        'Building, Infrastructure': ('home-building', ['building-home', 'house', 'building-infrastructure/home'])
    },
    'Mirror': {
        'Home, Furniture': ('mirror', ['mirror-furniture', 'home-furniture/mirror']),
        'Essentional, UI': ('mirror-tool', ['flip-tool', 'mirror-ui', 'essentional-ui/mirror'])
    },
    'Notebook': {
        'Notes': ('notebook', ['notebook-notes', 'notes/notebook']),
        'School': ('notebook-school', ['school-notebook', 'notebook-book', 'school/notebook'])
    },
    'Record Circle': {
        'Video, Audio, Sound': ('record-circle', ['record-circle-video', 'video-audio-sound/record-circle']),
        'Call': ('record-circle-call', ['call-record-circle', 'call/record-circle'])
    },
    'Reorder': {
        'Essentional, UI': ('reorder', ['reorder-ui', 'essentional-ui/reorder']),
        'Arrows Action': ('reorder-arrows', ['sort-arrows', 'arrows-action/reorder'])
    },
    'Star': {
        'Like': ('star', ['star-like', 'favorite-star', 'rating-star', 'like/star']),
        'Astronomy': ('star-astronomy', ['celestial-star', 'sparkle-star', 'astronomy/star'])
    },
    'Stars': {
        'Weather': ('stars', ['stars-weather', 'night-stars', 'weather/stars']),
        'Astronomy': ('stars-astronomy', ['constellation-stars', 'astronomy/stars'])
    }
}

def normalize_stem(stem: str) -> str:
    """Collapses multiple spaces and strips whitespace."""
    return re.sub(r'\s+', ' ', stem).strip()

def slugify(text: str) -> str:
    """Converts a string to a lower-kebab-case slug."""
    text = normalize_stem(text)
    slug = re.sub(r'[^a-zA-Z0-9]+', '-', text).strip('-').lower()
    return slug

def parse_svg_elements(svg_text: str):
    """Parses SVG and extracts inner elements preserving attributes and order."""
    root = ET.fromstring(svg_text)
    elements = []
    
    def process_elem(elem):
        tag = elem.tag.rsplit('}', 1)[-1]
        if tag in ('defs', 'clipPath'):
            return
        attrs = dict(elem.attrib)
        elements.append({
            'tag': tag,
            'attrs': attrs
        })
    
    for child in root:
        process_elem(child)
        for subchild in child:
            process_elem(subchild)
            
    return elements

def main():
    print("Scanning source SVG files for Icon by Solar...")
    
    # 1. Index all raw SVGs: (category, normalized_name) -> { style: { file, raw_name, path } }
    raw_index = defaultdict(dict)
    
    for style in STYLES:
        base = ROOT / style
        if not base.is_dir():
            print(f"Error: Directory {base} not found!", file=sys.stderr)
            sys.exit(1)
            
        for path in sorted(base.rglob('*.svg')):
            cat = path.parent.relative_to(base).as_posix()
            norm_name = normalize_stem(path.stem)
            rel_file = path.relative_to(ROOT).as_posix()
            
            raw_index[(cat, norm_name)][style] = {
                'raw_name': path.stem,
                'file': rel_file,
                'abs_path': path
            }
            
    print(f"Indexed {len(raw_index)} unique (category, icon) items across 3 styles.")
    if len(raw_index) != 1246:
        print(f"Warning: Expected 1246 items, found {len(raw_index)}")

    # 2. Assign canonical slugs and aliases
    icons = {}
    aliases = {}
    categories = sorted({cat for cat, _ in raw_index.keys()})
    
    for (cat, norm_name), style_files in sorted(raw_index.items()):
        # Determine canonical slug
        if norm_name in COLLISION_SPECS and cat in COLLISION_SPECS[norm_name]:
            canonical_slug, extra_aliases = COLLISION_SPECS[norm_name][cat]
        else:
            canonical_slug = slugify(norm_name)
            extra_aliases = []
            
        # Collect variants
        variants = {}
        svg_nodes = {}
        for style_name, meta in style_files.items():
            variant_key = STYLE_MAP[style_name]
            svg_content = meta['abs_path'].read_text(encoding='utf-8')
            
            variants[variant_key] = {
                'file': meta['file'],
                'rawName': meta['raw_name'],
                'viewBox': '0 0 24 24',
            }
            svg_nodes[variant_key] = parse_svg_elements(svg_content)
            
        # Compile aliases
        icon_aliases = set(extra_aliases)
        icon_aliases.add(norm_name.lower())
        icon_aliases.add(slugify(norm_name))
        icon_aliases.add(f"{slugify(cat)}/{canonical_slug}")
        icon_aliases.add(f"{cat.lower()}/{norm_name.lower()}")
        
        # Check if raw names had double spaces (e.g. Chat  Square ...)
        for meta in style_files.values():
            if '  ' in meta['raw_name']:
                icon_aliases.add(meta['raw_name'].lower())
                icon_aliases.add(slugify(meta['raw_name']))

        # Convert to PascalCase for component naming
        pascal_name = ''.join(word.capitalize() for word in re.findall(r'[a-zA-Z0-9]+', norm_name))

        icons[canonical_slug] = {
            'canonical': canonical_slug,
            'name': norm_name,
            'pascalName': pascal_name,
            'category': cat,
            'variants': variants,
            'aliases': sorted(icon_aliases)
        }
        
        # Register in global alias dictionary
        aliases[canonical_slug] = canonical_slug
        aliases[pascal_name] = canonical_slug
        aliases[norm_name.lower()] = canonical_slug
        for a in icon_aliases:
            aliases[a] = canonical_slug

    manifest = {
        'library': 'Icon by Solar',
        'credit': 'Icon by Solar',
        'attribution': 'Original icon designs by 480 Design (CC BY 4.0). Wrapper and tooling under MIT License.',
        'version': '1.0.0',
        'stats': {
            'totalFiles': len(raw_index) * 3,
            'uniqueIcons': len(icons),
            'categories': len(categories),
            'styles': list(STYLE_MAP.values())
        },
        'categories': categories,
        'icons': icons,
        'aliases': aliases
    }
    
    # Save root manifest.json
    out_manifest = ROOT / 'manifest.json'
    out_manifest.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f"Generated root manifest: {out_manifest} ({len(icons)} canonical icons, {len(aliases)} aliases)")

if __name__ == '__main__':
    main()
