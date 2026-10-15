import React from 'react';

export const iconName = 'bell-bing';
export const category = 'Notifications';
export const nodes = {"bold": [["path", {"d": "M8.35179 20.2418C9.19288 21.311 10.5142 22 12 22C13.4858 22 14.8071 21.311 15.6482 20.2418C13.2264 20.57 10.7736 20.57 8.35179 20.2418Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M18.7491 9.7041V9C18.7491 5.13401 15.7274 2 12 2C8.27256 2 5.25087 5.13401 5.25087 9V9.7041C5.25087 10.5491 5.00972 11.3752 4.5578 12.0782L3.45036 13.8012C2.43882 15.3749 3.21105 17.5139 4.97036 18.0116C9.57274 19.3134 14.4273 19.3134 19.0296 18.0116C20.789 17.5139 21.5612 15.3749 20.5496 13.8012L19.4422 12.0782C18.9903 11.3752 18.7491 10.5491 18.7491 9.7041ZM12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V10C12.75 10.4142 12.4142 10.75 12 10.75C11.5858 10.75 11.25 10.4142 11.25 10V6C11.25 5.58579 11.5858 5.25 12 5.25Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M18.7491 9V9.7041C18.7491 10.5491 18.9903 11.3752 19.4422 12.0782L20.5496 13.8012C21.5612 15.3749 20.789 17.5139 19.0296 18.0116C14.4273 19.3134 9.57274 19.3134 4.97036 18.0116C3.21105 17.5139 2.43882 15.3749 3.45036 13.8012L4.5578 12.0782C5.00972 11.3752 5.25087 10.5491 5.25087 9.7041V9C5.25087 5.13401 8.27256 2 12 2C15.7274 2 18.7491 5.13401 18.7491 9Z", "fill": "#1C274C"}], ["path", {"d": "M12.75 6C12.75 5.58579 12.4142 5.25 12 5.25C11.5858 5.25 11.25 5.58579 11.25 6V10C11.25 10.4142 11.5858 10.75 12 10.75C12.4142 10.75 12.75 10.4142 12.75 10V6Z", "fill": "#1C274C"}], ["path", {"d": "M7.24316 18.5449C7.8941 20.5501 9.77767 21.9997 11.9998 21.9997C14.222 21.9997 16.1055 20.5501 16.7565 18.5449C13.611 19.1352 10.3886 19.1352 7.24316 18.5449Z", "fill": "#1C274C"}]], "outline": [["path", {"d": "M12.75 6C12.75 5.58579 12.4142 5.25 12 5.25C11.5858 5.25 11.25 5.58579 11.25 6V10C11.25 10.4142 11.5858 10.75 12 10.75C12.4142 10.75 12.75 10.4142 12.75 10V6Z", "fill": "white"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M4.25004 9C4.25004 4.71979 7.71983 1.25 12 1.25C16.2802 1.25 19.75 4.71979 19.75 9V9.7041C19.75 10.401 19.9563 11.0824 20.3429 11.6622L21.4915 13.3851C22.8246 15.3848 21.8069 18.1028 19.4883 18.7351C18.7327 18.9412 17.9706 19.1155 17.2042 19.2581L17.2023 19.2632C16.4333 21.3151 14.378 22.75 12 22.75C9.62198 22.75 7.56667 21.3151 6.79768 19.2632L6.79578 19.2581C6.02937 19.1155 5.26738 18.9412 4.51177 18.7351C2.19318 18.1028 1.17547 15.3848 2.50856 13.3851L3.65717 11.6622C4.04375 11.0824 4.25004 10.401 4.25004 9.7041V9ZM8.62349 19.5369C10.8664 19.8049 13.1335 19.805 15.3764 19.537C14.6655 20.5585 13.4289 21.25 12 21.25C10.571 21.25 9.33444 20.5585 8.62349 19.5369ZM12 2.75C8.54826 2.75 5.75004 5.54822 5.75004 9V9.7041C5.75004 10.6972 5.45609 11.668 4.90524 12.4943L3.75664 14.2172C2.99147 15.3649 3.57561 16.925 4.90644 17.288C9.5507 18.5546 14.4494 18.5546 19.0936 17.288C20.4245 16.925 21.0086 15.3649 20.2434 14.2172L19.0948 12.4943C18.544 11.668 18.25 10.6972 18.25 9.7041V9C18.25 5.54822 15.4518 2.75 12 2.75Z", "fill": "white"}]]};

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

export const SolarBellBing = /* @__PURE__ */ React.forwardRef((props, ref) => {
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

SolarBellBing.nodes = nodes;
SolarBellBing.iconName = iconName;
SolarBellBing.category = category;

export const BellBingOutline = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarBellBing, Object.assign({ ref, variant: 'outline' }, props));
});

export const BellBingBold = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarBellBing, Object.assign({ ref, variant: 'bold' }, props));
});

export const BellBingBoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarBellBing, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

export const BellBing = SolarBellBing;
export default SolarBellBing;
