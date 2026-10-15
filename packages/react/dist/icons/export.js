import React from 'react';

export const iconName = 'export';
export const category = 'Arrows Action';
export const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M8.84467 7.90533C9.13756 8.19822 9.61244 8.19822 9.90533 7.90533L11.625 6.18566L11.625 14.375C11.625 14.7892 11.9608 15.125 12.375 15.125C12.7892 15.125 13.125 14.7892 13.125 14.375V6.18566L14.8447 7.90533C15.1376 8.19822 15.6124 8.19822 15.9053 7.90533C16.1982 7.61244 16.1982 7.13756 15.9053 6.84467L12.9053 3.84467C12.6124 3.55178 12.1376 3.55178 11.8447 3.84467L8.84467 6.84467C8.55178 7.13756 8.55178 7.61244 8.84467 7.90533Z", "fill": "#1C274C"}], ["path", {"d": "M12.375 20.375C16.7933 20.375 20.375 16.7933 20.375 12.375L16.625 12.375C15.6822 12.375 15.2108 12.375 14.9179 12.6679C14.625 12.9608 14.625 13.4322 14.625 14.375C14.625 15.6176 13.6176 16.625 12.375 16.625C11.1324 16.625 10.125 15.6176 10.125 14.375C10.125 13.4322 10.125 12.9608 9.83211 12.6679C9.53921 12.375 9.06781 12.375 8.125 12.375H4.375C4.375 16.7933 7.95672 20.375 12.375 20.375Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12L4 12Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M15.5303 7.53033C15.2374 7.82322 14.7626 7.82322 14.4697 7.53033L12.75 5.81066L12.75 14C12.75 14.4142 12.4142 14.75 12 14.75C11.5858 14.75 11.25 14.4142 11.25 14L11.25 5.81066L9.53033 7.53033C9.23744 7.82322 8.76256 7.82322 8.46967 7.53033C8.17678 7.23744 8.17678 6.76256 8.46967 6.46967L11.4697 3.46967C11.7626 3.17678 12.2374 3.17678 12.5303 3.46967L15.5303 6.46967C15.8232 6.76256 15.8232 7.23744 15.5303 7.53033Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 11.5858 1.58579 11.25 2 11.25C2.41421 11.25 2.75 11.5858 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12L22.75 12C22.75 17.9371 17.9371 22.75 12 22.75ZM5.46967 8.53033C5.17678 8.23744 5.17678 7.76256 5.46967 7.46967L11.4697 1.46967C11.7626 1.17678 12.2374 1.17678 12.5303 1.46967L18.5303 7.46967C18.8232 7.76256 18.8232 8.23744 18.5303 8.53033C18.2374 8.82322 17.7626 8.82322 17.4697 8.53033L12.75 3.81066L12.75 14C12.75 14.4142 12.4142 14.75 12 14.75C11.5858 14.75 11.25 14.4142 11.25 14L11.25 3.81066L6.53033 8.53033C6.23744 8.82322 5.76256 8.82322 5.46967 8.53033Z", "fill": "white"}]]};

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

export const ExportOutline = React.forwardRef((props, ref) => {
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

export const ExportBold = React.forwardRef((props, ref) => {
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

export const ExportBoldDuotone = React.forwardRef((props, ref) => {
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

export const Export = ExportOutline;
export default Export;
