#!/usr/bin/env python3
"""Synchronizes SVG files and manifest.json into packages/laravel-blade/resources.

Idempotent: Only updates files when content has changed or files are missing,
preventing unnecessary filesystem churn and preserving timestamps.
"""
import filecmp
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BLADE_RES = ROOT / 'packages' / 'laravel-blade' / 'resources'
BLADE_SVG = BLADE_RES / 'svg'

def sync_manifest():
    src_manifest = ROOT / 'manifest.json'
    dst_manifest = BLADE_RES / 'manifest.json'
    BLADE_RES.mkdir(parents=True, exist_ok=True)
    if not dst_manifest.exists() or not filecmp.cmp(src_manifest, dst_manifest, shallow=False):
        shutil.copy2(src_manifest, dst_manifest)
        print("Updated manifest.json in Blade package resources.")
    else:
        print("manifest.json in Blade package resources is already up to date.")

def sync_style_directory(style: str):
    src_dir = ROOT / style
    dst_dir = BLADE_SVG / style

    if dst_dir.is_symlink():
        dst_dir.unlink()
        dst_dir.mkdir(parents=True, exist_ok=True)
    else:
        dst_dir.mkdir(parents=True, exist_ok=True)

    copied = 0
    skipped = 0

    # Sync files from source to destination
    for src_file in src_dir.rglob('*.svg'):
        rel_path = src_file.relative_to(src_dir)
        dst_file = dst_dir / rel_path
        dst_file.parent.mkdir(parents=True, exist_ok=True)

        if not dst_file.exists() or not filecmp.cmp(src_file, dst_file, shallow=False):
            shutil.copy2(src_file, dst_file)
            copied += 1
        else:
            skipped += 1

    # Remove orphaned files in destination if any
    removed = 0
    for dst_file in dst_dir.rglob('*.svg'):
        rel_path = dst_file.relative_to(dst_dir)
        src_file = src_dir / rel_path
        if not src_file.exists():
            dst_file.unlink()
            removed += 1

    print(f"[{style}] Total: {skipped + copied} (synced: {copied}, up-to-date: {skipped}, removed: {removed})")

def main():
    sync_manifest()
    for style in ['Bold', 'Bold Duotone', 'Outline']:
        sync_style_directory(style)

if __name__ == '__main__':
    main()
