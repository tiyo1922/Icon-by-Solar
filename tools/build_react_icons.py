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
            
        is_digit_start = pascal[0].isdigit() if pascal else False
        safe_pascal = f"Icon{pascal}" if is_digit_start else pascal

        if is_digit_start:
            extra_esm = f"""export const {safe_pascal}Outline = /* @__PURE__ */ React.forwardRef((props, ref) => {{
  return React.createElement(Solar{pascal}, Object.assign({{ ref, variant: 'outline' }}, props));
}});

export const {safe_pascal}Bold = /* @__PURE__ */ React.forwardRef((props, ref) => {{
  return React.createElement(Solar{pascal}, Object.assign({{ ref, variant: 'bold' }}, props));
}});

export const {safe_pascal}BoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {{
  return React.createElement(Solar{pascal}, Object.assign({{ ref, variant: 'bold-duotone' }}, props));
}});

export const {safe_pascal} = Solar{pascal};
"""
            if canonical == '4k':
                extra_esm += f"""export const FourKOutline = {safe_pascal}Outline;
export const FourKBold = {safe_pascal}Bold;
export const FourKBoldDuotone = {safe_pascal}BoldDuotone;
export const FourK = Solar{pascal};
"""
        else:
            extra_esm = f"""export const {pascal}Outline = /* @__PURE__ */ React.forwardRef((props, ref) => {{
  return React.createElement(Solar{pascal}, Object.assign({{ ref, variant: 'outline' }}, props));
}});

export const {pascal}Bold = /* @__PURE__ */ React.forwardRef((props, ref) => {{
  return React.createElement(Solar{pascal}, Object.assign({{ ref, variant: 'bold' }}, props));
}});

export const {pascal}BoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {{
  return React.createElement(Solar{pascal}, Object.assign({{ ref, variant: 'bold-duotone' }}, props));
}});

export const {pascal} = Solar{pascal};
"""

        # ESM (.js)
        esm_code = f"""import React from 'react';

export const iconName = '{canonical}';
export const category = '{info['category']}';
export const nodes = {json.dumps(var_data)};

function renderNodes(variantNodes, variant, color = 'currentColor', secondaryColor, secondaryOpacity) {{
  return variantNodes.map(([tag, attrs], index) => {{
    const computed = {{ ...attrs }};
    if (color !== 'original' && color !== 'source') {{
      if ('opacity' in attrs) {{
        computed.opacity = secondaryOpacity ?? attrs.opacity;
        computed.fill = secondaryColor || color;
      }} else if (attrs.fill && attrs.fill !== 'none' && attrs.fill !== 'transparent') {{
        const isWhite = attrs.fill === 'white' || attrs.fill === '#FEFEFF' || attrs.fill === '#FBFCFF';
        if (!(variant === 'bold' && isWhite && variantNodes.length > 1)) computed.fill = color;
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
  }}, title && React.createElement('title', null, title), ...renderNodes(variantNodes, normVariant, color, secondaryColor, secondaryOpacity));
}});

Solar{pascal}.nodes = nodes;
Solar{pascal}.iconName = iconName;
Solar{pascal}.category = category;

{extra_esm}export default Solar{pascal};
"""
        (dist_icons / f"{canonical}.js").write_text(esm_code, encoding='utf-8')

        # CJS (.cjs)
        if is_digit_start:
            extra_cjs = f"""const {safe_pascal}Outline = React.forwardRef((props, ref) => {{
  return React.createElement(Solar{pascal}, Object.assign({{ ref, variant: 'outline' }}, props));
}});

const {safe_pascal}Bold = React.forwardRef((props, ref) => {{
  return React.createElement(Solar{pascal}, Object.assign({{ ref, variant: 'bold' }}, props));
}});

const {safe_pascal}BoldDuotone = React.forwardRef((props, ref) => {{
  return React.createElement(Solar{pascal}, Object.assign({{ ref, variant: 'bold-duotone' }}, props));
}});

const {safe_pascal} = Solar{pascal};
"""
            if canonical == '4k':
                extra_cjs += f"""const FourKOutline = {safe_pascal}Outline;
const FourKBold = {safe_pascal}Bold;
const FourKBoldDuotone = {safe_pascal}BoldDuotone;
const FourK = Solar{pascal};
"""
            exports_cjs = f"""module.exports = {{
  iconName,
  category,
  nodes,
  Solar{pascal},
  {safe_pascal},
  {safe_pascal}Outline,
  {safe_pascal}Bold,
  {safe_pascal}BoldDuotone,"""
            if canonical == '4k':
                exports_cjs += f"""
  FourK,
  FourKOutline,
  FourKBold,
  FourKBoldDuotone,
  '{canonical}': Solar{pascal},
  '{canonical}Outline': {safe_pascal}Outline,
  '{canonical}Bold': {safe_pascal}Bold,
  '{canonical}BoldDuotone': {safe_pascal}BoldDuotone,"""
            exports_cjs += f"""
  default: Solar{pascal}
}};"""
        else:
            extra_cjs = f"""const {pascal}Outline = React.forwardRef((props, ref) => {{
  return React.createElement(Solar{pascal}, Object.assign({{ ref, variant: 'outline' }}, props));
}});

const {pascal}Bold = React.forwardRef((props, ref) => {{
  return React.createElement(Solar{pascal}, Object.assign({{ ref, variant: 'bold' }}, props));
}});

const {pascal}BoldDuotone = React.forwardRef((props, ref) => {{
  return React.createElement(Solar{pascal}, Object.assign({{ ref, variant: 'bold-duotone' }}, props));
}});

const {pascal} = Solar{pascal};
"""
            exports_cjs = f"""module.exports = {{
  iconName,
  category,
  nodes,
  Solar{pascal},
  {pascal},
  {pascal}Outline,
  {pascal}Bold,
  {pascal}BoldDuotone,
  default: Solar{pascal}
}};"""

        cjs_code = f"""const React = require('react');

const iconName = '{canonical}';
const category = '{info['category']}';
const nodes = {json.dumps(var_data)};

function renderNodes(variantNodes, variant, color = 'currentColor', secondaryColor, secondaryOpacity) {{
  return variantNodes.map(([tag, attrs], index) => {{
    const computed = Object.assign({{}}, attrs);
    if (color !== 'original' && color !== 'source') {{
      if ('opacity' in attrs) {{
        computed.opacity = secondaryOpacity !== undefined ? secondaryOpacity : attrs.opacity;
        computed.fill = secondaryColor || color;
      }} else if (attrs.fill && attrs.fill !== 'none' && attrs.fill !== 'transparent') {{
        const isWhite = attrs.fill === 'white' || attrs.fill === '#FEFEFF' || attrs.fill === '#FBFCFF';
        if (!(variant === 'bold' && isWhite && variantNodes.length > 1)) computed.fill = color;
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
  }}, rest), title && React.createElement('title', null, title), ...renderNodes(variantNodes, normVariant, color, secondaryColor, secondaryOpacity));
}});

Solar{pascal}.nodes = nodes;
Solar{pascal}.iconName = iconName;
Solar{pascal}.category = category;

{extra_cjs}
{exports_cjs}
"""
        (dist_icons / f"{canonical}.cjs").write_text(cjs_code, encoding='utf-8')

        # Types (.d.ts)
        if is_digit_start:
            extra_dts = f"""export declare const Solar{pascal}: SolarIconComponent;
export declare const {safe_pascal}Outline: React.ForwardRefExoticComponent<SingleVariantIconProps & React.RefAttributes<SVGSVGElement>>;
export declare const {safe_pascal}Bold: React.ForwardRefExoticComponent<SingleVariantIconProps & React.RefAttributes<SVGSVGElement>>;
export declare const {safe_pascal}BoldDuotone: React.ForwardRefExoticComponent<SingleVariantIconProps & React.RefAttributes<SVGSVGElement>>;
export declare const {safe_pascal}: SolarIconComponent;"""
            if canonical == '4k':
                extra_dts += f"""
export declare const FourKOutline: React.ForwardRefExoticComponent<SingleVariantIconProps & React.RefAttributes<SVGSVGElement>>;
export declare const FourKBold: React.ForwardRefExoticComponent<SingleVariantIconProps & React.RefAttributes<SVGSVGElement>>;
export declare const FourKBoldDuotone: React.ForwardRefExoticComponent<SingleVariantIconProps & React.RefAttributes<SVGSVGElement>>;
export declare const FourK: SolarIconComponent;"""
        else:
            extra_dts = f"""export declare const Solar{pascal}: SolarIconComponent;
export declare const {pascal}Outline: React.ForwardRefExoticComponent<SingleVariantIconProps & React.RefAttributes<SVGSVGElement>>;
export declare const {pascal}Bold: React.ForwardRefExoticComponent<SingleVariantIconProps & React.RefAttributes<SVGSVGElement>>;
export declare const {pascal}BoldDuotone: React.ForwardRefExoticComponent<SingleVariantIconProps & React.RefAttributes<SVGSVGElement>>;
export declare const {pascal}: SolarIconComponent;"""

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

{extra_dts}
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
