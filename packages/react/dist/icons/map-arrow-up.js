import React from 'react';

export const iconName = 'map-arrow-up';
export const category = 'Map & Location';
export const nodes = {"bold": [["path", {"d": "M3.16496 19.5025L10.5275 2.99281C11.1178 1.66906 12.8822 1.66906 13.4725 2.99281L20.835 19.5025C21.5021 20.9984 20.0209 22.5499 18.6331 21.809L12.7294 18.657C12.2702 18.4118 11.7298 18.4118 11.2706 18.657L5.36689 21.809C3.97914 22.5499 2.49789 20.9984 3.16496 19.5025Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"d": "M8.0374 9.85761C7.78266 9.73024 7.47314 9.84107 7.35714 10.1012L3.16447 19.5029C2.49741 20.9987 3.97865 22.5503 5.36641 21.8093L11.2701 18.6573C11.7293 18.4121 12.2697 18.4121 12.7289 18.6573L18.6326 21.8093C20.0204 22.5503 21.5016 20.9987 20.8346 19.5029L19.2629 15.9785C19.0743 15.5557 18.7448 15.2113 18.3307 15.0043L8.0374 9.85761Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M8.6095 8.46623C8.37019 8.34658 8.26749 8.05974 8.37646 7.81538L10.5271 2.99281C11.1174 1.66906 12.8818 1.66906 13.4722 2.99281L17.4401 11.8905C17.6313 12.3193 17.1797 12.7513 16.7598 12.5414L8.6095 8.46623Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M21.0472 22.0116C21.7008 21.327 21.9874 20.2439 21.5201 19.1962L14.1576 2.68648C13.303 0.770016 10.6973 0.770016 9.8426 2.68648L2.4801 19.1962C2.01289 20.2439 2.29947 21.327 2.95301 22.0116C3.61206 22.7019 4.68829 23.0207 5.72025 22.4697L5.36701 21.8081L5.72025 22.4697L11.624 19.3177L11.2707 18.6561L11.624 19.3177C11.8624 19.1904 12.1379 19.1904 12.3763 19.3177L18.28 22.4697L18.6332 21.8081L18.28 22.4697C19.312 23.0207 20.3882 22.7019 21.0472 22.0116ZM18.9865 21.1465L18.6358 21.8033L18.9865 21.1465L13.0827 17.9945C12.4028 17.6315 11.5974 17.6315 10.9175 17.9945L5.01378 21.1465C4.65799 21.3365 4.29972 21.25 4.03797 20.9758C3.77072 20.6959 3.6502 20.2553 3.85005 19.8071L11.2126 3.29741C11.5386 2.56637 12.4617 2.56637 12.7877 3.29741L20.1502 19.8071C20.35 20.2553 20.2295 20.6959 19.9623 20.9758C19.7005 21.25 19.3423 21.3365 18.9865 21.1465Z", "fill": "white"}]]};

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

export const SolarMapArrowUp = /* @__PURE__ */ React.forwardRef((props, ref) => {
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

SolarMapArrowUp.nodes = nodes;
SolarMapArrowUp.iconName = iconName;
SolarMapArrowUp.category = category;

export const MapArrowUpOutline = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarMapArrowUp, Object.assign({ ref, variant: 'outline' }, props));
});

export const MapArrowUpBold = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarMapArrowUp, Object.assign({ ref, variant: 'bold' }, props));
});

export const MapArrowUpBoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarMapArrowUp, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

export const MapArrowUp = SolarMapArrowUp;
export default SolarMapArrowUp;
