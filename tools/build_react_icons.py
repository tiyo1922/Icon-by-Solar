#!/usr/bin/env python3
"""Generates per-icon selective modules in packages/react/dist/icons with multi-variant support."""
import json
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PKG = ROOT / 'packages' / 'react'
MANIFEST_FILE = ROOT / 'manifest.json'

def parse_svg_elements(svg_text: str):
    root = ET.fromstring(svg_text)
    elements = []
    
    def process_elem(elem):
        tag = elem.tag.rsplit('}', 1)[-1]
        if tag in ('defs', 'clipPath', 'svg'):
            return
        attrs = {}
        for k, v in elem.attrib.items():
            attr_name = k.rsplit('}', 1)[-1]
            if attr_name == 'fill-rule':
                attrs['fillRule'] = v
            elif attr_name == 'clip-rule':
                attrs['clipRule'] = v
            elif attr_name == 'stroke-width':
                attrs['strokeWidth'] = v
            elif attr_name == 'stroke-linecap':
                attrs['strokeLinecap'] = v
            elif attr_name == 'stroke-linejoin':
                attrs['strokeLinejoin'] = v
            else:
                attrs[attr_name] = v
        elements.append([tag, attrs])

    for child in root:
        process_elem(child)
        for subchild in child:
            process_elem(subchild)

    return elements

def main():
    with open(MANIFEST_FILE, encoding='utf-8') as f:
        manifest = json.load(f)
        
    dist_icons = PKG / 'dist' / 'icons'
    dist_icons.mkdir(parents=True, exist_ok=True)
    
    re_exports_esm = []
    re_exports_cjs = []
    re_exports_dts = []
    
    for canonical, info in manifest['icons'].items():
        pascal = info['pascalName']
        var_data = {}
        for variant_key, var_info in info['variants'].items():
            svg_file = ROOT / var_info['file']
            svg_text = svg_file.read_text(encoding='utf-8')
            var_data[variant_key] = parse_svg_elements(svg_text)
            
        # ESM (.js)
        esm_code = f"""import React from 'react';

export const iconName = '{canonical}';
export const category = '{info['category']}';
export const nodes = {json.dumps(var_data)};

function renderNodes(variantNodes, color = 'currentColor', secondaryColor, secondaryOpacity) {{
  return variantNodes.map(([tag, attrs], index) => {{
    const computed = {{ ...attrs }};
    if (color !== 'original' && color !== 'source') {{
      if ('opacity' in attrs) {{
        computed.opacity = secondaryOpacity ?? attrs.opacity;
        computed.fill = secondaryColor || color;
      }} else if (attrs.fill && attrs.fill !== 'none' && attrs.fill !== 'transparent') {{
        const isWhite = attrs.fill === 'white' || attrs.fill === '#FEFEFF' || attrs.fill === '#FBFCFF';
        if (!isWhite || variantNodes.length === 1) computed.fill = color;
      }}
      if (attrs.stroke && attrs.stroke !== 'none') computed.stroke = color;
    }}
    return React.createElement(tag, {{ key: index, ...computed }});
  }});
}}

export const Solar{pascal} = /* @__PURE__ */ React.forwardRef((props, ref) => {{
  const {{
    variant = 'outline',
    size = 24,
    color = 'currentColor',
    secondaryColor,
    secondaryOpacity,
    className,
    style,
    title,
    ...rest
  }} = props;
  const normVariant = variant === 'bold_duotone' ? 'bold-duotone' : variant.toLowerCase();
  const variantNodes = nodes[normVariant] || nodes['outline'] || [];
  return React.createElement('svg', {{
    ref,
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className,
    style: {{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, ...style }},
    'aria-hidden': title ? undefined : 'true',
    role: title ? 'img' : 'presentation',
    ...rest
  }}, title && React.createElement('title', null, title), ...renderNodes(variantNodes, color, secondaryColor, secondaryOpacity));
}});

Solar{pascal}.nodes = nodes;
Solar{pascal}.iconName = iconName;
Solar{pascal}.category = category;

export const {pascal}Outline = /* @__PURE__ */ React.forwardRef((props, ref) => {{
  return React.createElement(Solar{pascal}, Object.assign({{ ref, variant: 'outline' }}, props));
}});

export const {pascal}Bold = /* @__PURE__ */ React.forwardRef((props, ref) => {{
  return React.createElement(Solar{pascal}, Object.assign({{ ref, variant: 'bold' }}, props));
}});

export const {pascal}BoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {{
  return React.createElement(Solar{pascal}, Object.assign({{ ref, variant: 'bold-duotone' }}, props));
}});

export const {pascal} = Solar{pascal};
export default Solar{pascal};
"""
        (dist_icons / f"{canonical}.js").write_text(esm_code, encoding='utf-8')

        # CJS (.cjs)
        cjs_code = f"""const React = require('react');

const iconName = '{canonical}';
const category = '{info['category']}';
const nodes = {json.dumps(var_data)};

function renderNodes(variantNodes, color = 'currentColor', secondaryColor, secondaryOpacity) {{
  return variantNodes.map(([tag, attrs], index) => {{
    const computed = Object.assign({{}}, attrs);
    if (color !== 'original' && color !== 'source') {{
      if ('opacity' in attrs) {{
        computed.opacity = secondaryOpacity !== undefined ? secondaryOpacity : attrs.opacity;
        computed.fill = secondaryColor || color;
      }} else if (attrs.fill && attrs.fill !== 'none' && attrs.fill !== 'transparent') {{
        const isWhite = attrs.fill === 'white' || attrs.fill === '#FEFEFF' || attrs.fill === '#FBFCFF';
        if (!isWhite || variantNodes.length === 1) computed.fill = color;
      }}
      if (attrs.stroke && attrs.stroke !== 'none') computed.stroke = color;
    }}
    return React.createElement(tag, Object.assign({{ key: index }}, computed));
  }});
}}

const Solar{pascal} = React.forwardRef((props, ref) => {{
  const {{
    variant = 'outline',
    size = 24,
    color = 'currentColor',
    secondaryColor,
    secondaryOpacity,
    className,
    style,
    title,
    ...rest
  }} = props;
  const normVariant = variant === 'bold_duotone' ? 'bold-duotone' : variant.toLowerCase();
  const variantNodes = nodes[normVariant] || nodes['outline'] || [];
  return React.createElement('svg', Object.assign({{
    ref,
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className,
    style: Object.assign({{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}, style),
    'aria-hidden': title ? undefined : 'true',
    role: title ? 'img' : 'presentation'
  }}, rest), title && React.createElement('title', null, title), ...renderNodes(variantNodes, color, secondaryColor, secondaryOpacity));
}});

Solar{pascal}.nodes = nodes;
Solar{pascal}.iconName = iconName;
Solar{pascal}.category = category;

const {pascal}Outline = React.forwardRef((props, ref) => {{
  return React.createElement(Solar{pascal}, Object.assign({{ ref, variant: 'outline' }}, props));
}});

const {pascal}Bold = React.forwardRef((props, ref) => {{
  return React.createElement(Solar{pascal}, Object.assign({{ ref, variant: 'bold' }}, props));
}});

const {pascal}BoldDuotone = React.forwardRef((props, ref) => {{
  return React.createElement(Solar{pascal}, Object.assign({{ ref, variant: 'bold-duotone' }}, props));
}});

const {pascal} = Solar{pascal};

module.exports = {{
  iconName,
  category,
  nodes,
  Solar{pascal},
  {pascal},
  {pascal}Outline,
  {pascal}Bold,
  {pascal}BoldDuotone,
  default: Solar{pascal}
}};
"""
        (dist_icons / f"{canonical}.cjs").write_text(cjs_code, encoding='utf-8')

        # Types (.d.ts)
        dts_code = f"""import React from 'react';
import {{ IconNode, IconVariant }} from '../types';

export interface MultiVariantIconProps extends React.SVGAttributes<SVGSVGElement> {{
  variant?: IconVariant;
  size?: number | string;
  color?: string;
  secondaryColor?: string;
  secondaryOpacity?: number | string;
  title?: string;
}}

export interface SingleVariantIconProps extends React.SVGAttributes<SVGSVGElement> {{
  size?: number | string;
  color?: string;
  secondaryColor?: string;
  secondaryOpacity?: number | string;
  title?: string;
}}

export declare const iconName: '{canonical}';
export declare const category: '{info['category']}';
export declare const nodes: Record<string, IconNode[]>;

export interface SolarIconComponent extends React.ForwardRefExoticComponent<MultiVariantIconProps & React.RefAttributes<SVGSVGElement>> {{
  nodes: Record<string, IconNode[]>;
  iconName: string;
  category: string;
}}

export declare const Solar{pascal}: SolarIconComponent;
export declare const {pascal}Outline: React.ForwardRefExoticComponent<SingleVariantIconProps & React.RefAttributes<SVGSVGElement>>;
export declare const {pascal}Bold: React.ForwardRefExoticComponent<SingleVariantIconProps & React.RefAttributes<SVGSVGElement>>;
export declare const {pascal}BoldDuotone: React.ForwardRefExoticComponent<SingleVariantIconProps & React.RefAttributes<SVGSVGElement>>;
export declare const {pascal}: SolarIconComponent;
export default Solar{pascal};
"""
        (dist_icons / f"{canonical}.d.ts").write_text(dts_code, encoding='utf-8')
        
        re_exports_esm.append(f"export * from './{canonical}.js';")
        re_exports_cjs.append(f"Object.assign(module.exports, require('./{canonical}.cjs'));")
        re_exports_dts.append(f"export * from './{canonical}';")

    # Generate dist/icons/index.js, .cjs, .d.ts
    (dist_icons / 'index.js').write_text('\n'.join(re_exports_esm) + '\n', encoding='utf-8')
    (dist_icons / 'index.cjs').write_text('module.exports = {};\n' + '\n'.join(re_exports_cjs) + '\n', encoding='utf-8')
    (dist_icons / 'index.d.ts').write_text('\n'.join(re_exports_dts) + '\n', encoding='utf-8')

    print(f"Generated {len(manifest['icons'])} selective import modules + index in {dist_icons}")

if __name__ == '__main__':
    main()
