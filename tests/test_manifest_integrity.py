#!/usr/bin/env python3
"""Validates manifest.json integrity, variant pairings, disk file existence, and alias resolution."""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MANIFEST_FILE = ROOT / 'manifest.json'

def main():
    print("Running Manifest Integrity Test...")
    if not MANIFEST_FILE.is_file():
        print("❌ manifest.json does not exist!")
        sys.exit(1)

    with open(MANIFEST_FILE, encoding='utf-8') as f:
        manifest = json.load(f)

    icons = manifest.get('icons', {})
    aliases = manifest.get('aliases', {})
    errors = []

    if len(icons) != 1246:
        errors.append(f"Expected 1,246 unique icons in manifest, found {len(icons)}")

    expected_styles = {'bold', 'bold-duotone', 'outline'}

    for canonical, info in icons.items():
        # Check canonical format
        if not re.match(r'^[a-z0-9-]+$', canonical):
            errors.append(f"Invalid canonical format: '{canonical}'")

        # Check styles
        variants = set(info.get('variants', {}).keys())
        if variants != expected_styles:
            errors.append(f"Icon '{canonical}' missing styles: {expected_styles - variants}")

        # Check file exists on disk
        for style_key, var_info in info.get('variants', {}).items():
            file_rel = var_info.get('file')
            if not file_rel:
                errors.append(f"Icon '{canonical}' variant '{style_key}' missing 'file' property")
                continue
            file_path = ROOT / file_rel
            if not file_path.is_file():
                errors.append(f"File not found on disk: {file_rel}")

    # Check Bold Duotone double space aliases
    double_space_test = [
        'Chat  Square Arrow',
        'Chat  Square Call',
        'Chat  Square Check',
        'Chat  Square Code',
    ]
    for raw in double_space_test:
        raw_lower = raw.lower()
        if raw_lower not in aliases:
            errors.append(f"Alias '{raw}' not found in aliases dictionary")

    # Check 11 collision disambiguation
    collision_slugs = [
        ('home', 'home-building'),
        ('bill', 'list-bill'),
        ('cup', 'cup-trophy'),
        ('document', 'document-school'),
        ('forward', 'forward-message'),
        ('mirror', 'mirror-tool'),
        ('notebook', 'notebook-school'),
        ('record-circle', 'record-circle-call'),
        ('reorder', 'reorder-arrows'),
        ('star', 'star-astronomy'),
        ('stars', 'stars-astronomy'),
    ]
    for s1, s2 in collision_slugs:
        if s1 not in icons:
            errors.append(f"Primary collision slug '{s1}' missing from icons")
        if s2 not in icons:
            errors.append(f"Disambiguated collision slug '{s2}' missing from icons")

    if errors:
        print(f"❌ Manifest Integrity Test FAILED with {len(errors)} error(s):")
        for err in errors[:10]:
            print(f"  - {err}")
        sys.exit(1)

    print(f"✅ Manifest Integrity Test PASSED! All 1,246 icons, 3 styles each ({len(icons)*3} total variants), files verified on disk.")

if __name__ == '__main__':
    main()
