import React from 'react';

export const iconName = 'waterdrop';
export const category = 'Essentional, UI';
export const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M11.6115 22C6.85549 22 3 18.0569 3 13.1928V12.9281C3 8.31651 5.72854 4.16347 9.90329 2.42077C11.2473 1.85974 12.7527 1.85974 14.0967 2.42077C18.2715 4.16347 21 8.31651 21 12.9281V13.1928C21 18.0569 17.1445 22 12.3885 22H11.6115ZM12.0664 5.96145C12.2402 6.33741 12.0764 6.78313 11.7004 6.95699C10.155 7.6717 8.90712 9.12534 8.32961 10.9499C8.20462 11.3449 7.78316 11.5637 7.38826 11.4387C6.99335 11.3137 6.77454 10.8922 6.89954 10.4973C7.59154 8.31097 9.10593 6.50418 11.0708 5.59552C11.4468 5.42166 11.8925 5.5855 12.0664 5.96145Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M11.6115 22H12.3885C17.1445 22 21 18.0569 21 13.1928V12.9281C21 8.31651 18.2715 4.16347 14.0967 2.42077C12.7527 1.85974 11.2473 1.85974 9.90329 2.42077C5.72854 4.16347 3 8.31651 3 12.9281V13.1928C3 18.0569 6.85549 22 11.6115 22Z", "fill": "#1C274C"}], ["path", {"d": "M12.0663 5.96272C12.2401 6.33868 12.0763 6.7844 11.7003 6.95826C10.1548 7.67296 8.90701 9.1266 8.3295 10.9512C8.20451 11.3461 7.78305 11.5649 7.38814 11.4399C6.99324 11.3149 6.77443 10.8935 6.89942 10.4986C7.59142 8.31224 9.10582 6.50545 11.0707 5.59679C11.4467 5.42293 11.8924 5.58676 12.0663 5.96272Z", "fill": "#1C274C"}]], "outline": [["path", {"d": "M11.7006 6.9571C12.0766 6.78324 12.2404 6.33752 12.0665 5.96157C11.8927 5.58561 11.447 5.42177 11.071 5.59563C9.1061 6.50429 7.59171 8.31108 6.89971 10.4974C6.77471 10.8923 6.99352 11.3138 7.38843 11.4388C7.78333 11.5638 8.20479 11.345 8.32978 10.9501C8.9073 9.12545 10.1551 7.67181 11.7006 6.9571Z", "fill": "white"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M14.3856 1.72865C12.8568 1.09045 11.1432 1.09045 9.61438 1.72865C5.15333 3.59087 2.25 8.02164 2.25 12.9281V13.1928C2.25 18.4551 6.42548 22.75 11.6115 22.75H12.3885C17.5745 22.75 21.75 18.4551 21.75 13.1928V12.9281C21.75 8.02164 18.8467 3.59087 14.3856 1.72865ZM10.1922 3.11289C11.3513 2.62904 12.6487 2.62904 13.8078 3.11289C17.6962 4.73608 20.25 8.61139 20.25 12.9281V13.1928C20.25 17.6587 16.7145 21.25 12.3885 21.25H11.6115C7.2855 21.25 3.75 17.6587 3.75 13.1928V12.9281C3.75 8.61139 6.30376 4.73608 10.1922 3.11289Z", "fill": "white"}]]};

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

export const SolarWaterdrop = /* @__PURE__ */ React.forwardRef((props, ref) => {
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

SolarWaterdrop.nodes = nodes;
SolarWaterdrop.iconName = iconName;
SolarWaterdrop.category = category;

export const WaterdropOutline = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarWaterdrop, Object.assign({ ref, variant: 'outline' }, props));
});

export const WaterdropBold = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarWaterdrop, Object.assign({ ref, variant: 'bold' }, props));
});

export const WaterdropBoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarWaterdrop, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

export const Waterdrop = SolarWaterdrop;
export default SolarWaterdrop;
