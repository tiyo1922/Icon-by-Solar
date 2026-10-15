import React from 'react';

export const iconName = 'men';
export const category = 'Astronomy';
export const nodes = {"bold": [["path", {"d": "M17.0001 1.25C16.5858 1.25 16.2501 1.58579 16.2501 2C16.2501 2.41421 16.5858 2.75 17.0001 2.75H20.1894L15.1018 7.8376C13.717 6.68989 11.9391 6 10 6C5.58172 6 2 9.58172 2 14C2 18.4183 5.58172 22 10 22C14.4183 22 18 18.4183 18 14C18 12.0609 17.3101 10.283 16.1624 8.89827L21.2501 3.81066V7C21.2501 7.41421 21.5858 7.75 22.0001 7.75C22.4143 7.75 22.7501 7.41421 22.7501 7V2C22.7501 1.58579 22.4143 1.25 22.0001 1.25H17.0001Z", "fill": "#1C274C"}]], "bold-duotone": [["circle", {"opacity": "0.5", "cx": "10", "cy": "14", "r": "8", "fill": "#1C274C"}], ["path", {"d": "M16.9998 1.25C16.5856 1.25 16.2498 1.58579 16.2498 2C16.2498 2.41421 16.5856 2.75 16.9998 2.75H20.1891L15.1016 7.83758C15.4873 8.15728 15.8425 8.5125 16.1622 8.89824L21.2498 3.81066V7C21.2498 7.41421 21.5856 7.75 21.9998 7.75C22.414 7.75 22.7498 7.41421 22.7498 7V2.25C22.7498 1.69772 22.3021 1.25 21.7498 1.25H16.9998Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M16.25 2C16.25 1.58579 16.5858 1.25 17 1.25H22C22.4142 1.25 22.75 1.58579 22.75 2V7C22.75 7.41421 22.4142 7.75 22 7.75C21.5858 7.75 21.25 7.41421 21.25 7V3.81066L16.6949 8.36578C17.9773 9.88802 18.75 11.8538 18.75 14C18.75 18.8325 14.8325 22.75 10 22.75C5.16751 22.75 1.25 18.8325 1.25 14C1.25 9.16751 5.16751 5.25 10 5.25C12.1462 5.25 14.112 6.02271 15.6342 7.30512L20.1893 2.75H17C16.5858 2.75 16.25 2.41421 16.25 2ZM10 6.75C5.99594 6.75 2.75 9.99594 2.75 14C2.75 18.0041 5.99594 21.25 10 21.25C14.0041 21.25 17.25 18.0041 17.25 14C17.25 9.99594 14.0041 6.75 10 6.75Z", "fill": "white"}]]};

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

export const SolarMen = /* @__PURE__ */ React.forwardRef((props, ref) => {
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

SolarMen.nodes = nodes;
SolarMen.iconName = iconName;
SolarMen.category = category;

export const MenOutline = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarMen, Object.assign({ ref, variant: 'outline' }, props));
});

export const MenBold = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarMen, Object.assign({ ref, variant: 'bold' }, props));
});

export const MenBoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarMen, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

export const Men = SolarMen;
export default SolarMen;
