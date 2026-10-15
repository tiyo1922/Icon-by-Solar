import React from 'react';

export const iconName = 'streets';
export const category = 'Map & Location';
export const nodes = {"bold": [["path", {"d": "M3.46447 3.46447C2 4.92893 2 7.28596 2 12C2 16.134 2 18.4553 2.98767 19.9517L19.9517 2.98766C18.4553 2 16.134 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447Z", "fill": "#1C274C"}], ["path", {"d": "M21.0123 4.04833L13.0607 12L21.0123 19.9517C22 18.4553 22 16.134 22 12C22 7.866 22 5.54466 21.0123 4.04833Z", "fill": "#1C274C"}], ["path", {"d": "M12 13.0607L4.04833 21.0123C5.54466 22 7.866 22 12 22C16.134 22 18.4553 22 19.9517 21.0123L12 13.0607Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"d": "M21.0124 4.04688L13.0607 11.9986L21.0124 19.9502C22 18.4539 22 16.1326 22 11.9986C22 7.86455 22 5.54321 21.0124 4.04688Z", "fill": "#1C274C"}], ["path", {"d": "M12 13.0592L4.04834 21.0109C5.54468 21.9985 7.86601 21.9985 12 21.9985C16.134 21.9985 18.4554 21.9985 19.9517 21.0109L12 13.0592Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M3.46447 3.46447C2 4.92893 2 7.28596 2 12C2 16.134 2 18.4553 2.98767 19.9517L19.9517 2.98766C18.4553 2 16.134 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M17.3864 2.92637C16.0864 2.75159 14.3782 2.75 12 2.75C9.62178 2.75 7.91356 2.75159 6.61358 2.92637C5.33517 3.09825 4.56445 3.42514 3.9948 3.9948C3.42514 4.56445 3.09825 5.33517 2.92637 6.61358C2.75159 7.91356 2.75 9.62178 2.75 12C2.75 14.3782 2.75159 16.0864 2.92637 17.3864C3.0449 18.268 3.23714 18.9082 3.53188 19.4075L19.4075 3.53188C18.9082 3.23714 18.268 3.0449 17.3864 2.92637ZM20.4681 4.59254L13.0607 12L20.4681 19.4075C20.7629 18.9082 20.9551 18.268 21.0736 17.3864C21.2484 16.0864 21.25 14.3782 21.25 12C21.25 9.62178 21.2484 7.91356 21.0736 6.61358C20.9551 5.73199 20.7629 5.09183 20.4681 4.59254ZM19.4075 20.4681L12 13.0607L4.59254 20.4681C5.09183 20.7629 5.73199 20.9551 6.61358 21.0736C7.91356 21.2484 9.62178 21.25 12 21.25C14.3782 21.25 16.0864 21.2484 17.3864 21.0736C18.268 20.9551 18.9082 20.7629 19.4075 20.4681ZM17.5863 1.43975C19.031 1.63399 20.1711 2.03933 21.0659 2.93414C21.9607 3.82895 22.366 4.96897 22.5603 6.41371C22.75 7.82519 22.75 9.63423 22.75 11.9426V12.0574C22.75 14.3658 22.75 16.1748 22.5603 17.5863C22.366 19.031 21.9607 20.1711 21.0659 21.0659C20.1711 21.9607 19.031 22.366 17.5863 22.5603C16.1748 22.75 14.3658 22.75 12.0574 22.75H11.9426C9.63423 22.75 7.82519 22.75 6.41371 22.5603C4.96897 22.366 3.82895 21.9607 2.93414 21.0659C2.03933 20.1711 1.63399 19.031 1.43975 17.5863C1.24998 16.1748 1.24999 14.3658 1.25 12.0574V11.9426C1.24999 9.63423 1.24998 7.82519 1.43975 6.41371C1.63399 4.96897 2.03933 3.82895 2.93414 2.93414C3.82895 2.03933 4.96897 1.63399 6.41371 1.43975C7.82519 1.24998 9.63423 1.24999 11.9426 1.25H12.0574C14.3658 1.24999 16.1748 1.24998 17.5863 1.43975Z", "fill": "white"}]]};

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

export const SolarStreets = /* @__PURE__ */ React.forwardRef((props, ref) => {
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

SolarStreets.nodes = nodes;
SolarStreets.iconName = iconName;
SolarStreets.category = category;

export const StreetsOutline = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarStreets, Object.assign({ ref, variant: 'outline' }, props));
});

export const StreetsBold = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarStreets, Object.assign({ ref, variant: 'bold' }, props));
});

export const StreetsBoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarStreets, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

export const Streets = SolarStreets;
export default SolarStreets;
