import React from 'react';

export const iconName = 'map-arrow-down';
export const category = 'Map & Location';
export const nodes = {"bold": [["path", {"d": "M3.16496 4.49747L10.5275 21.0072C11.1178 22.3309 12.8822 22.3309 13.4725 21.0072L20.835 4.49747C21.5021 3.00163 20.0209 1.45006 18.6331 2.19099L12.7294 5.34303C12.2702 5.58818 11.7298 5.58818 11.2706 5.34303L5.36689 2.19099C3.97914 1.45007 2.49789 3.00163 3.16496 4.49747Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"d": "M8.0374 14.1427C7.78266 14.2701 7.47314 14.1593 7.35714 13.8991L3.16447 4.49746C2.49741 3.00163 3.97865 1.45006 5.36641 2.19099L11.2701 5.34302C11.7293 5.58818 12.2697 5.58817 12.7289 5.34302L18.6326 2.19099C20.0204 1.45006 21.5016 3.00163 20.8346 4.49746L19.2629 8.02178C19.0743 8.44465 18.7448 8.78899 18.3307 8.99606L8.0374 14.1427Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M8.60901 15.5322C8.3697 15.6519 8.267 15.9387 8.37597 16.1831L10.5266 21.0057C11.1169 22.3294 12.8813 22.3294 13.4717 21.0057L17.4396 12.1079C17.6308 11.6792 17.1792 11.2471 16.7593 11.4571L8.60901 15.5322Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M21.0472 1.98842C21.7008 2.67298 21.9874 3.75611 21.5201 4.8038L14.1576 21.3135C13.303 23.23 10.6973 23.23 9.8426 21.3135L2.4801 4.8038C2.01289 3.75611 2.29947 2.67298 2.95301 1.98842C3.61206 1.29808 4.68829 0.979282 5.72025 1.53025L5.36701 2.19186L5.72025 1.53025L11.624 4.68228L11.2707 5.34389L11.624 4.68229C11.8624 4.80958 12.1379 4.80958 12.3763 4.68228L18.28 1.53025L18.6332 2.19186L18.28 1.53025C19.312 0.979281 20.3882 1.29808 21.0472 1.98842ZM18.9865 2.85347L18.6358 2.19669L18.9865 2.85347L13.0827 6.0055C12.4028 6.3685 11.5974 6.36851 10.9175 6.0055L5.01378 2.85347C4.65799 2.66351 4.29972 2.75003 4.03797 3.0242C3.77072 3.30415 3.6502 3.74472 3.85005 4.19287L11.2126 20.7026C11.5386 21.4336 12.4617 21.4336 12.7877 20.7026L20.1502 4.19287C20.35 3.74472 20.2295 3.30414 19.9623 3.0242C19.7005 2.75003 19.3423 2.66351 18.9865 2.85347Z", "fill": "white"}]]};

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

export const SolarMapArrowDown = /* @__PURE__ */ React.forwardRef((props, ref) => {
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

SolarMapArrowDown.nodes = nodes;
SolarMapArrowDown.iconName = iconName;
SolarMapArrowDown.category = category;

export const MapArrowDownOutline = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarMapArrowDown, Object.assign({ ref, variant: 'outline' }, props));
});

export const MapArrowDownBold = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarMapArrowDown, Object.assign({ ref, variant: 'bold' }, props));
});

export const MapArrowDownBoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarMapArrowDown, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

export const MapArrowDown = SolarMapArrowDown;
export default SolarMapArrowDown;
