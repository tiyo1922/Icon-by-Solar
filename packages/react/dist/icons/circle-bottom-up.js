import React from 'react';

export const iconName = 'circle-bottom-up';
export const category = 'Arrows Action';
export const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M2.46967 21.5303C2.17678 21.2374 2.17678 20.7626 2.46967 20.4697L10.1893 12.75H6.65625C6.24204 12.75 5.90625 12.4142 5.90625 12C5.90625 11.5858 6.24204 11.25 6.65625 11.25H12C12.4142 11.25 12.75 11.5858 12.75 12V17.3438C12.75 17.758 12.4142 18.0938 12 18.0938C11.5858 18.0938 11.25 17.758 11.25 17.3438V13.8107L3.53033 21.5303C3.23744 21.8232 2.76256 21.8232 2.46967 21.5303Z", "fill": "#1C274C"}], ["path", {"d": "M3.51828 17.2997L6.56966 14.2484C5.36715 14.2029 4.40625 13.2136 4.40625 12C4.40625 10.7574 5.41361 9.75 6.65625 9.75H12C13.2426 9.75 14.25 10.7574 14.25 12V17.3438C14.25 18.5864 13.2426 19.5937 12 19.5937C10.7864 19.5937 9.79714 18.6329 9.75164 17.4303L6.70026 20.4817C8.23678 21.4438 10.0534 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.9466 2.55618 15.7632 3.51828 17.2997Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M4.25 13C4.25 12.5858 4.58579 12.25 5 12.25H11C11.4142 12.25 11.75 12.5858 11.75 13V19C11.75 19.4142 11.4142 19.75 11 19.75C10.5858 19.75 10.25 19.4142 10.25 19V14.8107L3.53033 21.5303C3.23744 21.8232 2.76256 21.8232 2.46967 21.5303C2.17678 21.2374 2.17678 20.7626 2.46967 20.4697L9.18934 13.75H5C4.58579 13.75 4.25 13.4142 4.25 13Z", "fill": "#1C274C"}]], "outline": [["path", {"d": "M2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C11.5858 21.25 11.25 21.5858 11.25 22C11.25 22.4142 11.5858 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 12.4142 1.58579 12.75 2 12.75C2.41421 12.75 2.75 12.4142 2.75 12Z", "fill": "white"}], ["path", {"d": "M5 12.25C4.58579 12.25 4.25 12.5858 4.25 13C4.25 13.4142 4.58579 13.75 5 13.75H9.18934L2.46967 20.4697C2.17678 20.7626 2.17678 21.2374 2.46967 21.5303C2.76256 21.8232 3.23744 21.8232 3.53033 21.5303L10.25 14.8107V19C10.25 19.4142 10.5858 19.75 11 19.75C11.4142 19.75 11.75 19.4142 11.75 19V13C11.75 12.5858 11.4142 12.25 11 12.25H5Z", "fill": "white"}]]};

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

export const SolarCircleBottomUp = /* @__PURE__ */ React.forwardRef((props, ref) => {
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

SolarCircleBottomUp.nodes = nodes;
SolarCircleBottomUp.iconName = iconName;
SolarCircleBottomUp.category = category;

export const CircleBottomUpOutline = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarCircleBottomUp, Object.assign({ ref, variant: 'outline' }, props));
});

export const CircleBottomUpBold = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarCircleBottomUp, Object.assign({ ref, variant: 'bold' }, props));
});

export const CircleBottomUpBoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarCircleBottomUp, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

export const CircleBottomUp = SolarCircleBottomUp;
export default SolarCircleBottomUp;
