import React from 'react';

export const iconName = 'undo-left-round';
export const category = 'Arrows Action';
export const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M7.53033 3.46967C7.82322 3.76256 7.82322 4.23744 7.53033 4.53033L5.81066 6.25H15C18.1756 6.25 20.75 8.82436 20.75 12C20.75 15.1756 18.1756 17.75 15 17.75H8.00001C7.58579 17.75 7.25001 17.4142 7.25001 17C7.25001 16.5858 7.58579 16.25 8.00001 16.25H15C17.3472 16.25 19.25 14.3472 19.25 12C19.25 9.65279 17.3472 7.75 15 7.75H5.81066L7.53033 9.46967C7.82322 9.76256 7.82322 10.2374 7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L3.46967 7.53033C3.17678 7.23744 3.17678 6.76256 3.46967 6.46967L6.46967 3.46967C6.76256 3.17678 7.23744 3.17678 7.53033 3.46967Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M7.53033 3.46967C7.23744 3.17678 6.76256 3.17678 6.46967 3.46967L3.46967 6.46967C3.17678 6.76256 3.17678 7.23744 3.46967 7.53033L6.46967 10.5303C6.76256 10.8232 7.23744 10.8232 7.53033 10.5303C7.82322 10.2374 7.82322 9.76256 7.53033 9.46967L5.06066 7L7.53033 4.53033C7.82322 4.23744 7.82322 3.76256 7.53033 3.46967Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M5.81066 6.25H15C18.1756 6.25 20.75 8.82436 20.75 12C20.75 15.1756 18.1756 17.75 15 17.75H8C7.58579 17.75 7.25 17.4142 7.25 17C7.25 16.5858 7.58579 16.25 8 16.25H15C17.3472 16.25 19.25 14.3472 19.25 12C19.25 9.65279 17.3472 7.75 15 7.75H5.81066L5.06066 7L5.81066 6.25Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M7.52281 2.46225C7.8198 2.75099 7.82648 3.22582 7.53774 3.52281L3.7752 7.39286H15.75C19.6358 7.39286 22.75 10.6269 22.75 14.5714C22.75 18.516 19.6358 21.75 15.75 21.75H7.00001C6.58579 21.75 6.25001 21.4142 6.25001 21C6.25001 20.5858 6.58579 20.25 7.00001 20.25H15.75C18.7678 20.25 21.25 17.7277 21.25 14.5714C21.25 11.4152 18.7678 8.89286 15.75 8.89286H3.7752L7.53774 12.7629C7.82648 13.0599 7.8198 13.5347 7.52281 13.8235C7.22582 14.1122 6.75099 14.1055 6.46225 13.8085L1.46225 8.66567C1.17925 8.37458 1.17925 7.91114 1.46225 7.62005L6.46225 2.47719C6.75099 2.1802 7.22582 2.17351 7.52281 2.46225Z", "fill": "white"}]]};

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

export const UndoLeftRoundOutline = React.forwardRef((props, ref) => {
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

export const UndoLeftRoundBold = React.forwardRef((props, ref) => {
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

export const UndoLeftRoundBoldDuotone = React.forwardRef((props, ref) => {
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

export const UndoLeftRound = UndoLeftRoundOutline;
export default UndoLeftRound;
