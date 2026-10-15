import React from 'react';

export const iconName = 'map-arrow-right';
export const category = 'Map & Location';
export const nodes = {"bold": [["path", {"d": "M4.49746 20.835L21.0072 13.4725C22.3309 12.8822 22.3309 11.1178 21.0072 10.5275L4.49746 3.16496C3.00163 2.49789 1.45006 3.97914 2.19099 5.36689L5.34302 11.2706C5.58817 11.7298 5.58818 12.2702 5.34302 12.7294L2.19099 18.6331C1.45007 20.0209 3.00163 21.5021 4.49746 20.835Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"d": "M14.1427 15.9621C14.2701 16.2169 14.1593 16.5264 13.8991 16.6424L4.49746 20.835C3.00163 21.5021 1.45007 20.0209 2.19099 18.6331L5.34302 12.7294C5.58818 12.2702 5.58818 11.7298 5.34302 11.2706L2.19099 5.36689C1.45006 3.97914 3.00163 2.49789 4.49746 3.16496L8.02178 4.73662C8.44465 4.9252 8.78899 5.25466 8.99606 5.6688L14.1427 15.9621Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M15.5337 15.3914C15.6534 15.6307 15.9402 15.7334 16.1846 15.6244L21.0071 13.4738C22.3309 12.8835 22.3309 11.1191 21.0071 10.5287L12.1094 6.5608C11.6807 6.36962 11.2486 6.82121 11.4585 7.24106L15.5337 15.3914Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M1.98744 2.95325C2.67201 2.29971 3.75513 2.01313 4.80282 2.48035L21.3125 9.84285C23.229 10.6975 23.229 13.3032 21.3125 14.1579L4.80282 21.5204C3.75513 21.9876 2.67201 21.701 1.98744 21.0475C1.2971 20.3884 0.978305 19.3122 1.52928 18.2802L4.68131 12.3765L5.34291 12.7298L4.68131 12.3765C4.8086 12.1381 4.8086 11.8626 4.68131 11.6242L1.52928 5.72049C0.978304 4.68853 1.2971 3.6123 1.98744 2.95325ZM3.02323 4.03821C2.74905 4.29996 2.66253 4.65823 2.85249 5.01402L2.19088 5.36725L2.85249 5.01402L6.00452 10.9177C6.36753 11.5976 6.36753 12.4031 6.00452 13.083L2.85249 18.9867C2.66253 19.3425 2.74905 19.7008 3.02323 19.9625C3.30317 20.2298 3.74374 20.3503 4.19189 20.1504L20.7016 12.7879C21.4326 12.4619 21.4327 11.5388 20.7016 11.2128L4.19189 3.8503C3.74374 3.65045 3.30317 3.77096 3.02323 4.03821Z", "fill": "white"}]]};

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

export const MapArrowRightOutline = React.forwardRef((props, ref) => {
  const { size = 24, color = 'currentColor', secondaryColor, secondaryOpacity, className, style, title, ...rest } = props;
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
  }, title && React.createElement('title', null, title), ...renderNodes(nodes['outline'] || [], color, secondaryColor, secondaryOpacity));
});

export const MapArrowRightBold = React.forwardRef((props, ref) => {
  const { size = 24, color = 'currentColor', secondaryColor, secondaryOpacity, className, style, title, ...rest } = props;
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
  }, title && React.createElement('title', null, title), ...renderNodes(nodes['bold'] || [], color, secondaryColor, secondaryOpacity));
});

export const MapArrowRightBoldDuotone = React.forwardRef((props, ref) => {
  const { size = 24, color = 'currentColor', secondaryColor, secondaryOpacity, className, style, title, ...rest } = props;
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
  }, title && React.createElement('title', null, title), ...renderNodes(nodes['bold-duotone'] || [], color, secondaryColor, secondaryOpacity));
});

export const MapArrowRight = MapArrowRightOutline;
export default MapArrowRight;
