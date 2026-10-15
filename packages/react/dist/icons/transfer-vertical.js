import React from 'react';

export const iconName = 'transfer-vertical';
export const category = 'Arrows';
export const nodes = {"bold": [["path", {"d": "M4.00003 13.75C3.69074 13.75 3.41317 13.9399 3.30105 14.2281C3.18892 14.5164 3.26524 14.8439 3.49324 15.0529L9.49324 20.5529C9.71249 20.7539 10.0298 20.8063 10.302 20.6865C10.5743 20.5668 10.75 20.2974 10.75 20L10.75 4.00002C10.75 3.5858 10.4142 3.25002 10 3.25002C9.58582 3.25002 9.25003 3.5858 9.25003 4.00002V13.75H4.00003Z", "fill": "#1C274C"}], ["path", {"d": "M20 10.25L14.75 10.25V20C14.75 20.4142 14.4142 20.75 14 20.75C13.5858 20.75 13.25 20.4142 13.25 20L13.25 4.00002C13.25 3.70259 13.4258 3.43327 13.698 3.3135C13.9703 3.19374 14.2876 3.24617 14.5068 3.44715L20.5068 8.94715C20.7348 9.15614 20.8111 9.48366 20.699 9.77191C20.5869 10.0602 20.3093 10.25 20 10.25Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"d": "M20 10.25C20.3093 10.25 20.5869 10.0602 20.699 9.77191C20.8111 9.48366 20.7348 9.15614 20.5068 8.94715L14.5068 3.44715C14.2875 3.24617 13.9703 3.19374 13.698 3.3135C13.4258 3.43327 13.25 3.70259 13.25 4.00002L13.25 20C13.25 20.4142 13.5858 20.75 14 20.75C14.4142 20.75 14.75 20.4142 14.75 20L14.75 10.25L20 10.25Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M4.00003 13.75L9.25003 13.75L9.25003 4C9.25003 3.58579 9.58581 3.25 10 3.25C10.4142 3.25 10.75 3.58579 10.75 4V20C10.75 20.2974 10.5743 20.5667 10.302 20.6865C10.0298 20.8063 9.71248 20.7538 9.49323 20.5529L3.49324 15.0529C3.26524 14.8439 3.18892 14.5164 3.30105 14.2281C3.41317 13.9399 3.69074 13.75 4.00003 13.75Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M13.698 3.3135C13.9703 3.19374 14.2875 3.24617 14.5068 3.44715L20.5068 8.94715C20.8121 9.22704 20.8328 9.70147 20.5529 10.0068C20.273 10.3121 19.7985 10.3328 19.4932 10.0529L14.75 5.70494L14.75 20C14.75 20.4142 14.4142 20.75 14 20.75C13.5858 20.75 13.25 20.4142 13.25 20L13.25 4.00002C13.25 3.70259 13.4258 3.43327 13.698 3.3135ZM10 3.25002C10.4142 3.25002 10.75 3.5858 10.75 4.00002L10.75 20C10.75 20.2974 10.5743 20.5668 10.302 20.6865C10.0298 20.8063 9.71246 20.7539 9.49321 20.5529L3.49321 15.0529C3.18787 14.773 3.16724 14.2986 3.44714 13.9932C3.72703 13.6879 4.20146 13.6673 4.5068 13.9471L9.25001 18.2951L9.25 4.00002C9.25 3.5858 9.58579 3.25002 10 3.25002Z", "fill": "white"}]]};

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

export const SolarTransferVertical = /* @__PURE__ */ React.forwardRef((props, ref) => {
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

SolarTransferVertical.nodes = nodes;
SolarTransferVertical.iconName = iconName;
SolarTransferVertical.category = category;

export const TransferVerticalOutline = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarTransferVertical, Object.assign({ ref, variant: 'outline' }, props));
});

export const TransferVerticalBold = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarTransferVertical, Object.assign({ ref, variant: 'bold' }, props));
});

export const TransferVerticalBoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarTransferVertical, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

export const TransferVertical = SolarTransferVertical;
export default SolarTransferVertical;
