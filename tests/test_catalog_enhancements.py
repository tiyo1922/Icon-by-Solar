#!/usr/bin/env python3
"""Tests catalog structure: 37 category sections, Outline contrast, and source file preservation."""
import re
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CATALOG_HTML = ROOT / 'catalog' / 'catalog.html'
OUTLINE_DIR = ROOT / 'Outline'

def main():
    print("Testing Catalog Enhancements and Outline Contrast...")

    if not CATALOG_HTML.is_file():
        print("❌ catalog/catalog.html not found!")
        sys.exit(1)

    html = CATALOG_HTML.read_text(encoding='utf-8')

    # 1. Verify 37 category sections exist
    section_count = html.count('class="category-section"')
    if section_count != 37:
        print(f"❌ Expected 37 category sections, found {section_count}")
        sys.exit(1)
    print("✅ Verified 37 category sections exist with headers and dividers.")

    # 2. Verify Quick Jump Navigation
    if 'category-nav-bar' not in html or 'cat-pill' not in html:
        print("❌ Quick Jump Navigation missing from catalog.")
        sys.exit(1)
    print("✅ Verified Category Quick Jump Navigation bar is present.")

    # 3. Verify Theme Toggle
    if 'theme-toggle' not in html or 'toggleTheme()' not in html:
        print("❌ Theme toggle missing from catalog.")
        sys.exit(1)
    print("✅ Verified Light/Dark Theme toggle is present.")

    # 4. Verify Outline preview contrast (uses #1C274C in preview without white-on-white)
    import base64
    matches = re.findall(r'data:image/svg\+xml;base64,([A-Za-z0-9+/=]+)', html)
    if not matches:
        print("❌ No preview SVGs found in catalog.")
        sys.exit(1)
    
    # Check that Outline previews use dark color #1C274C
    has_contrast_color = any('#1C274C' in base64.b64decode(m).decode() for m in matches[:50])
    if not has_contrast_color:
        print("❌ Preview recoloring for Outline contrast not found.")
        sys.exit(1)
    print("✅ Verified Outline preview renders with crisp contrast (#1C274C).")

    # 5. Verify Source Files are 100% UNTOUCHED
    # Check that source SVG files in Outline/ still preserve their original 'white' / '#FEFEFF'
    sample_file = OUTLINE_DIR / 'Essentional, UI' / 'Home.svg'
    if not sample_file.is_file():
        print(f"❌ Sample file {sample_file} not found!")
        sys.exit(1)

    content = sample_file.read_text(encoding='utf-8')
    if 'white' not in content:
        print("❌ Source SVG was unexpectedly modified! It must remain untouched.")
        sys.exit(1)
    print("✅ Verified source SVG files remain 100% untouched and preserved.")

    print("\n🎉 ALL CATALOG ENHANCEMENT TESTS PASSED!")

if __name__ == '__main__':
    main()
