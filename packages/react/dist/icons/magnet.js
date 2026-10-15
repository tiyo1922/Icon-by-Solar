import React from 'react';

export const iconName = 'magnet';
export const category = 'Essentional, UI';
export const nodes = {"bold": [["path", {"d": "M16.25 2H13C7.47715 2 3 6.47715 3 12C3 17.5228 7.47715 22 13 22H16.25V17H13C10.2386 17 8 14.7614 8 12C8 9.23858 10.2386 7 13 7H16.25V2Z", "fill": "#1C274C"}], ["path", {"d": "M17.75 7H19.5C20.3284 7 21 6.32843 21 5.5V3.5C21 2.67157 20.3284 2 19.5 2H17.75V7Z", "fill": "#1C274C"}], ["path", {"d": "M17.75 17V22H19.5C20.3284 22 21 21.3284 21 20.5V18.5C21 17.6716 20.3284 17 19.5 17H17.75Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"d": "M17 2H13C7.47715 2 3 6.47715 3 12C3 17.5228 7.47715 22 13 22H17V17H13C10.2386 17 8 14.7614 8 12C8 9.23858 10.2386 7 13 7H17V2Z", "fill": "#1C274C"}], ["g", {"opacity": "0.5"}], ["path", {"d": "M17 7H19.5C20.3284 7 21 6.32843 21 5.5V3.5C21 2.67157 20.3284 2 19.5 2H17V7Z", "fill": "#1C274C"}], ["path", {"d": "M17 17V22H19.5C20.3284 22 21 21.3284 21 20.5V18.5C21 17.6716 20.3284 17 19.5 17H17Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M13 2.75C7.89137 2.75 3.75 6.89137 3.75 12C3.75 17.1086 7.89137 21.25 13 21.25H16.25V17.75H13C9.82436 17.75 7.25 15.1756 7.25 12C7.25 8.82436 9.82436 6.25 13 6.25H16.25V2.75H13ZM17.75 2.75V6.25H19.5C19.9142 6.25 20.25 5.91421 20.25 5.5V3.5C20.25 3.08579 19.9142 2.75 19.5 2.75H17.75ZM17.75 17.75V21.25H19.5C19.9142 21.25 20.25 20.9142 20.25 20.5V18.5C20.25 18.0858 19.9142 17.75 19.5 17.75H17.75ZM2.25 12C2.25 6.06294 7.06294 1.25 13 1.25H19.5C20.7426 1.25 21.75 2.25736 21.75 3.5V5.5C21.75 6.74264 20.7426 7.75 19.5 7.75H13C10.6528 7.75 8.75 9.65279 8.75 12C8.75 14.3472 10.6528 16.25 13 16.25H19.5C20.7426 16.25 21.75 17.2574 21.75 18.5V20.5C21.75 21.7426 20.7426 22.75 19.5 22.75H13C7.06294 22.75 2.25 17.9371 2.25 12Z", "fill": "white"}]]};

function renderNodes(variantNodes, color = 'currentColor', secondaryColor, secondaryOpacity) {
  return variantNodes.map(([tag, attrs], index) => {
    const computed = { ...attrs };
    if (color !== 'original' && color !== 'source') {
      if ('opacity' in attrs) {
        computed.opacity = secondaryOpacity ?? attrs.opacity;
        computed.fill = secondaryColor || color;
      } else if (attrs.fill && attrs.fill !== 'none' && attrs.fill !== 'transparent') {
        const isWhite = attrs.fill === 'white' || attrs.fill === '#FEFEFF' || attrs.fill === '#FBFCFF';
        if (!isWhite || variantNodes.length === 1) computed.fill = color;
      }
      if (attrs.stroke && attrs.stroke !== 'none') computed.stroke = color;
    }
    return React.createElement(tag, { key: index, ...computed });
  });
}

export const SolarMagnet = /* @__PURE__ */ React.forwardRef((props, ref) => {
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
  }, title && React.createElement('title', null, title), ...renderNodes(variantNodes, color, secondaryColor, secondaryOpacity));
});

SolarMagnet.nodes = nodes;
SolarMagnet.iconName = iconName;
SolarMagnet.category = category;

export const MagnetOutline = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarMagnet, Object.assign({ ref, variant: 'outline' }, props));
});

export const MagnetBold = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarMagnet, Object.assign({ ref, variant: 'bold' }, props));
});

export const MagnetBoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarMagnet, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

export const Magnet = SolarMagnet;
export default SolarMagnet;
