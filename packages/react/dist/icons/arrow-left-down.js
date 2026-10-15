import React from 'react';

export const iconName = 'arrow-left-down';
export const category = 'Arrows';
export const nodes = {"bold": [["path", {"d": "M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967C18.2374 5.17678 17.7626 5.17678 17.4697 5.46967L10.5 12.4393L6.53033 8.46967C6.31583 8.25517 5.99324 8.191 5.71299 8.30709C5.43273 8.42318 5.25 8.69665 5.25 9V18C5.25 18.4142 5.58579 18.75 6 18.75L15 18.75C15.3033 18.75 15.5768 18.5673 15.6929 18.287C15.809 18.0068 15.7448 17.6842 15.5303 17.4697L11.5607 13.5L18.5303 6.53033Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M11.5607 13.5L10.5 12.4394L6.53033 8.46969C6.31583 8.25519 5.99324 8.19103 5.71299 8.30711C5.43273 8.4232 5.25 8.69668 5.25 9.00002V18C5.25 18.4142 5.58579 18.75 6 18.75L15 18.75C15.3033 18.75 15.5768 18.5673 15.6929 18.287C15.809 18.0068 15.7448 17.6842 15.5303 17.4697L11.5607 13.5Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967C18.2374 5.17678 17.7626 5.17678 17.4697 5.46967L10.5 12.4393L11.5607 13.5L18.5303 6.53033Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M18.5303 5.46967C18.8232 5.76256 18.8232 6.23744 18.5303 6.53033L7.81066 17.25L15 17.25C15.4142 17.25 15.75 17.5858 15.75 18C15.75 18.4142 15.4142 18.75 15 18.75L6 18.75C5.58579 18.75 5.25 18.4142 5.25 18L5.25 9C5.25 8.58579 5.58579 8.25 6 8.25C6.41421 8.25 6.75 8.58579 6.75 9L6.75 16.1893L17.4697 5.46967C17.7626 5.17678 18.2374 5.17678 18.5303 5.46967Z", "fill": "white"}]]};

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

export const SolarArrowLeftDown = /* @__PURE__ */ React.forwardRef((props, ref) => {
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

SolarArrowLeftDown.nodes = nodes;
SolarArrowLeftDown.iconName = iconName;
SolarArrowLeftDown.category = category;

export const ArrowLeftDownOutline = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarArrowLeftDown, Object.assign({ ref, variant: 'outline' }, props));
});

export const ArrowLeftDownBold = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarArrowLeftDown, Object.assign({ ref, variant: 'bold' }, props));
});

export const ArrowLeftDownBoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarArrowLeftDown, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

export const ArrowLeftDown = SolarArrowLeftDown;
export default SolarArrowLeftDown;
