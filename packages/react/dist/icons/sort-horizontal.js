import React from 'react';

export const iconName = 'sort-horizontal';
export const category = 'Arrows';
export const nodes = {"bold": [["path", {"d": "M13.125 12C13.125 11.6988 13.3052 11.4268 13.5827 11.3093C13.8601 11.1919 14.1808 11.2519 14.3971 11.4616L18.5221 15.4616C18.6678 15.6029 18.75 15.7971 18.75 16C18.75 16.2029 18.6678 16.3972 18.5221 16.5384L14.3971 20.5384C14.1808 20.7482 13.8601 20.8081 13.5827 20.6907C13.3052 20.5733 13.125 20.3013 13.125 20V16.75H6C5.58579 16.75 5.25 16.4142 5.25 16C5.25 15.5858 5.58579 15.25 6 15.25L13.125 15.25L13.125 12Z", "fill": "#1C274C"}], ["path", {"d": "M10.875 4.00002C10.875 3.69877 10.6948 3.42676 10.4173 3.30934C10.1399 3.19192 9.81916 3.25188 9.60289 3.46159L5.47789 7.4616C5.33222 7.60285 5.25 7.79711 5.25 8.00002C5.25 8.20293 5.33222 8.39719 5.47789 8.53844L9.60289 12.5384C9.81916 12.7482 10.1399 12.8081 10.4173 12.6907C10.6948 12.5733 10.875 12.3013 10.875 12V8.75002L18 8.75002C18.4142 8.75002 18.75 8.41423 18.75 8.00002C18.75 7.58581 18.4142 7.25002 18 7.25002L10.875 7.25002V4.00002Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"d": "M10.875 4.00002C10.875 3.69877 10.6948 3.42676 10.4173 3.30934C10.1399 3.19192 9.81916 3.25188 9.60289 3.46159L5.47789 7.4616C5.33222 7.60285 5.25 7.79711 5.25 8.00002C5.25 8.20293 5.33222 8.39719 5.47789 8.53844L9.60289 12.5384C9.81916 12.7482 10.1399 12.8081 10.4173 12.6907C10.6948 12.5733 10.875 12.3013 10.875 12V8.75002L18 8.75002C18.4142 8.75002 18.75 8.41423 18.75 8.00002C18.75 7.58581 18.4142 7.25002 18 7.25002L10.875 7.25002V4.00002Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M13.125 12C13.125 11.6988 13.3052 11.4268 13.5827 11.3093C13.8601 11.1919 14.1808 11.2519 14.3971 11.4616L18.5221 15.4616C18.6678 15.6029 18.75 15.7971 18.75 16C18.75 16.2029 18.6678 16.3972 18.5221 16.5384L14.3971 20.5384C14.1808 20.7482 13.8601 20.8081 13.5827 20.6907C13.3052 20.5733 13.125 20.3013 13.125 20V16.75H6C5.58579 16.75 5.25 16.4142 5.25 16C5.25 15.5858 5.58579 15.25 6 15.25L13.125 15.25L13.125 12Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M10.6634 3.47789C10.9518 3.77526 10.9445 4.25007 10.6471 4.53843L7.8508 7.25H18C18.4142 7.25 18.75 7.58579 18.75 8C18.75 8.41421 18.4142 8.75 18 8.75H7.8508L10.6471 11.4616C10.9445 11.7499 10.9518 12.2247 10.6634 12.5221C10.3751 12.8195 9.90025 12.8268 9.60289 12.5384L5.47789 8.53843C5.33222 8.39717 5.25 8.20291 5.25 8C5.25 7.79709 5.33222 7.60283 5.47789 7.46158L9.60289 3.46158C9.90025 3.17322 10.3751 3.18053 10.6634 3.47789ZM13.3366 11.4779C13.6249 11.1805 14.0997 11.1732 14.3971 11.4616L18.5221 15.4616C18.6678 15.6028 18.75 15.7971 18.75 16C18.75 16.2029 18.6678 16.3972 18.5221 16.5384L14.3971 20.5384C14.0997 20.8268 13.6249 20.8195 13.3366 20.5221C13.0482 20.2247 13.0555 19.7499 13.3529 19.4616L16.1492 16.75L6 16.75C5.58579 16.75 5.25 16.4142 5.25 16C5.25 15.5858 5.58579 15.25 6 15.25L16.1492 15.25L13.3529 12.5384C13.0555 12.2501 13.0482 11.7753 13.3366 11.4779Z", "fill": "white"}]]};

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

export const SolarSortHorizontal = /* @__PURE__ */ React.forwardRef((props, ref) => {
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

SolarSortHorizontal.nodes = nodes;
SolarSortHorizontal.iconName = iconName;
SolarSortHorizontal.category = category;

export const SortHorizontalOutline = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarSortHorizontal, Object.assign({ ref, variant: 'outline' }, props));
});

export const SortHorizontalBold = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarSortHorizontal, Object.assign({ ref, variant: 'bold' }, props));
});

export const SortHorizontalBoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarSortHorizontal, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

export const SortHorizontal = SolarSortHorizontal;
export default SolarSortHorizontal;
