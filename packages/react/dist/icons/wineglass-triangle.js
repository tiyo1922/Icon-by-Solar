import React from 'react';

export const iconName = 'wineglass-triangle';
export const category = 'Food, Kitchen';
export const nodes = {"bold": [["path", {"d": "M19.2991 3H4.70095C3.20008 3 2.43759 4.79409 3.48381 5.86382L6.23508 9H17.7649L20.5162 5.86382C21.5624 4.79409 20.7999 3 19.2991 3Z", "fill": "#1C274C"}], ["path", {"d": "M16.449 10.5H7.55099L11.2498 14.7162V20.2499H7.75586C7.34165 20.2499 7.00586 20.5856 7.00586 20.9999C7.00586 21.4141 7.34165 21.7499 7.75586 21.7499H16.2437C16.6579 21.7499 16.9937 21.4141 16.9937 20.9999C16.9937 20.5856 16.6579 20.2499 16.2437 20.2499H12.7498V14.7168L16.449 10.5Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M19.2991 3H4.70095C3.20008 3 2.43759 4.79409 3.48381 5.86382L11.2851 13.8404C11.6773 14.2415 12.3227 14.2415 12.7149 13.8404L20.5162 5.86382C21.5624 4.79409 20.7999 3 19.2991 3Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M7.00586 21C7.00586 20.5858 7.34165 20.25 7.75586 20.25H16.2437C16.6579 20.25 16.9937 20.5858 16.9937 21C16.9937 21.4142 16.6579 21.75 16.2437 21.75H7.75586C7.34165 21.75 7.00586 21.4142 7.00586 21Z", "fill": "#1C274C"}], ["path", {"d": "M11.2853 13.8404C11.6776 14.2415 12.3229 14.2415 12.7152 13.8404L16.4712 10H7.5293L11.2853 13.8404Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M11.2853 13.8408C11.6776 14.2419 12.3229 14.2419 12.7152 13.8408L12.75 13.8052V20.2502H11.25V13.8047L11.2853 13.8408Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M2.94762 6.38823C1.43049 4.837 2.54526 2.25 4.70095 2.25H19.2991C21.4547 2.25 22.5695 4.83699 21.0524 6.38822L12.75 14.8772V20.25H16.2439C16.6581 20.25 16.9939 20.5858 16.9939 21C16.9939 21.4142 16.6581 21.75 16.2439 21.75H7.75611C7.34189 21.75 7.00611 21.4142 7.00611 21C7.00611 20.5858 7.34189 20.25 7.75611 20.25H11.25V14.8772L2.94762 6.38823ZM12 13.4988L14.9329 10.5H9.06714L12 13.4988ZM7.60012 9H16.3999L19.98 5.33942C20.5553 4.75118 20.1451 3.75 19.2991 3.75H4.70095C3.85492 3.75 3.4447 4.75118 4.02001 5.33942L7.60012 9Z", "fill": "white"}]]};

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

export const SolarWineglassTriangle = /* @__PURE__ */ React.forwardRef((props, ref) => {
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

SolarWineglassTriangle.nodes = nodes;
SolarWineglassTriangle.iconName = iconName;
SolarWineglassTriangle.category = category;

export const WineglassTriangleOutline = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarWineglassTriangle, Object.assign({ ref, variant: 'outline' }, props));
});

export const WineglassTriangleBold = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarWineglassTriangle, Object.assign({ ref, variant: 'bold' }, props));
});

export const WineglassTriangleBoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarWineglassTriangle, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

export const WineglassTriangle = SolarWineglassTriangle;
export default SolarWineglassTriangle;
