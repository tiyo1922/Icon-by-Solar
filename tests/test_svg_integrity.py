#!/usr/bin/env python3
"""Validates all 3,738 source SVG files for XML well-formedness, root tag, and viewBox."""
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
STYLES = ['Bold', 'Bold Duotone', 'Outline']

def main():
    print("Running SVG Integrity Test across 3,738 source files...")
    total_parsed = 0
    errors = []

    for style in STYLES:
        dir_path = ROOT / style
        if not dir_path.is_dir():
            errors.append(f"Directory {style} does not exist.")
            continue

        for p in dir_path.rglob('*.svg'):
            total_parsed += 1
            rel = p.relative_to(ROOT).as_posix()
            try:
                tree = ET.parse(p)
                root = tree.getroot()
                tag = root.tag.rsplit('}', 1)[-1]
                if tag != 'svg':
                    errors.append(f"{rel}: Document root is not <svg> (got <{tag}>)")
                vb = root.get('viewBox')
                if vb != '0 0 24 24':
                    errors.append(f"{rel}: Invalid viewBox (expected '0 0 24 24', got '{vb}')")
            except Exception as e:
                errors.append(f"{rel}: Parse error: {e}")

    print(f"Total SVGs parsed: {total_parsed}")
    if total_parsed != 3738:
        errors.append(f"Expected exactly 3,738 SVGs, but found {total_parsed}")

    if errors:
        print(f"❌ SVG Integrity Test FAILED with {len(errors)} error(s):")
        for err in errors[:10]:
            print(f"  - {err}")
        if len(errors) > 10:
            print(f"  ... and {len(errors) - 10} more.")
        sys.exit(1)

    print(f"✅ All {total_parsed} SVG files are 100% valid XML with viewBox='0 0 24 24'!")

if __name__ == '__main__':
    main()
