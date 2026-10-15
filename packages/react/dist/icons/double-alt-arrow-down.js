import React from 'react';

export const iconName = 'double-alt-arrow-down';
export const category = 'Arrows';
export const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M4.43057 10.5119C4.70014 10.1974 5.17361 10.161 5.48811 10.4306L12 16.0122L18.5119 10.4306C18.8264 10.161 19.2999 10.1974 19.5695 10.5119C19.839 10.8264 19.8026 11.2999 19.4881 11.5694L12.4881 17.5694C12.2072 17.8102 11.7928 17.8102 11.5119 17.5694L4.51192 11.5694C4.19743 11.2999 4.161 10.8264 4.43057 10.5119Z", "fill": "#1C274C"}], ["path", {"d": "M5.00005 6.25C4.68619 6.25 4.40553 6.44543 4.29664 6.73979C4.18774 7.03415 4.27366 7.36519 4.51196 7.56944L11.512 13.5694C11.7928 13.8102 12.2073 13.8102 12.4881 13.5694L19.4881 7.56944C19.7264 7.36519 19.8124 7.03415 19.7035 6.73979C19.5946 6.44543 19.3139 6.25 19 6.25H5.00005Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M5.00004 6.25C4.68618 6.25 4.40551 6.44543 4.29662 6.73979C4.18773 7.03415 4.27364 7.36519 4.51194 7.56944L11.5119 13.5694C11.7928 13.8102 12.2073 13.8102 12.4881 13.5694L19.4881 7.56944C19.7264 7.36519 19.8123 7.03415 19.7035 6.73979C19.5946 6.44543 19.3139 6.25 19 6.25H5.00004Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M4.43057 10.5119C4.70014 10.1974 5.17361 10.161 5.48811 10.4306L12 16.0122L18.5119 10.4306C18.8264 10.161 19.2999 10.1974 19.5695 10.5119C19.839 10.8264 19.8026 11.2999 19.4881 11.5695L12.4881 17.5695C12.2072 17.8102 11.7928 17.8102 11.5119 17.5695L4.51192 11.5695C4.19743 11.2999 4.161 10.8264 4.43057 10.5119Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M4.43057 6.51192C4.70014 6.19743 5.17361 6.161 5.48811 6.43057L12 12.0122L18.5119 6.43057C18.8264 6.161 19.2999 6.19743 19.5695 6.51192C19.839 6.82641 19.8026 7.29989 19.4881 7.56946L12.4881 13.5695C12.2072 13.8102 11.7928 13.8102 11.5119 13.5695L4.51192 7.56946C4.19743 7.29989 4.161 6.82641 4.43057 6.51192ZM4.43057 10.5119C4.70014 10.1974 5.17361 10.161 5.48811 10.4306L12 16.0122L18.5119 10.4306C18.8264 10.161 19.2999 10.1974 19.5695 10.5119C19.839 10.8264 19.8026 11.2999 19.4881 11.5695L12.4881 17.5695C12.2072 17.8102 11.7928 17.8102 11.5119 17.5695L4.51192 11.5695C4.19743 11.2999 4.161 10.8264 4.43057 10.5119Z", "fill": "white"}]]};

function renderNodes(variantNodes, variant, color = 'currentColor', secondaryColor, secondaryOpacity) {
  return variantNodes.map(([tag, attrs], index) => {
    const computed = { ...attrs };
    if (color !== 'original' && color !== 'source') {
      if ('opacity' in attrs) {
        computed.opacity = secondaryOpacity ?? attrs.opacity;
        computed.fill = secondaryColor || color;
      } else if (attrs.fill && attrs.fill !== 'none' && attrs.fill !== 'transparent') {
        const isWhite = attrs.fill === 'white' || attrs.fill === '#FEFEFF' || attrs.fill === '#FBFCFF';
        if (!(variant === 'bold' && isWhite && variantNodes.length > 1)) computed.fill = color;
      }
      if (attrs.stroke && attrs.stroke !== 'none') computed.stroke = color;
    }
    return React.createElement(tag, { key: index, ...computed });
  });
}

export const SolarDoubleAltArrowDown = /* @__PURE__ */ React.forwardRef((props, ref) => {
  const {
    variant = 'outline',
    size = 24,
    color = 'currentColor',
    secondaryColor,
    secondaryOpacity,
    className,
    style,
    title,
    ...rest
  } = props;
  const normVariant = variant === 'bold_duotone' ? 'bold-duotone' : variant.toLowerCase();
  const variantNodes = nodes[normVariant] || nodes['outline'] || [];
  return React.createElement('svg', {
    ref,
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className,
    style: { display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, ...style },
    'aria-hidden': title ? undefined : 'true',
    role: title ? 'img' : 'presentation',
    ...rest
  }, title && React.createElement('title', null, title), ...renderNodes(variantNodes, normVariant, color, secondaryColor, secondaryOpacity));
});

SolarDoubleAltArrowDown.nodes = nodes;
SolarDoubleAltArrowDown.iconName = iconName;
SolarDoubleAltArrowDown.category = category;

export const DoubleAltArrowDownOutline = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarDoubleAltArrowDown, Object.assign({ ref, variant: 'outline' }, props));
});

export const DoubleAltArrowDownBold = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarDoubleAltArrowDown, Object.assign({ ref, variant: 'bold' }, props));
});

export const DoubleAltArrowDownBoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarDoubleAltArrowDown, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

export const DoubleAltArrowDown = SolarDoubleAltArrowDown;
export default SolarDoubleAltArrowDown;
