import React from 'react';

export const iconName = 'text-italic';
export const category = 'Text Formatting';
export const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M14.9768 1.00026H9C8.44772 1.00026 8 1.44798 8 2.00026C8 2.55255 8.44772 3.00026 9 3.00026H13.656L8.25597 21.0003H3C2.44772 21.0003 2 21.448 2 22.0003C2 22.5525 2.44772 23.0003 3 23.0003H8.97753C8.99281 23.0006 9.00805 23.0006 9.02325 23.0003H15C15.5523 23.0003 16 22.5525 16 22.0003C16 21.448 15.5523 21.0003 15 21.0003H10.344L15.744 3.00026H21C21.5523 3.00026 22 2.55255 22 2.00026C22 1.44798 21.5523 1.00026 21 1.00026H15.0225C15.0072 0.999911 14.992 0.999913 14.9768 1.00026Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M9 1.00026H14.9768C14.992 0.999913 15.0072 0.999911 15.0225 1.00026H21C21.5523 1.00026 22 1.44798 22 2.00026C22 2.55255 21.5523 3.00026 21 3.00026H15.744H13.656H9C8.44772 3.00026 8 2.55255 8 2.00026C8 1.44798 8.44772 1.00026 9 1.00026ZM8.25597 21.0003H3C2.44772 21.0003 2 21.448 2 22.0003C2 22.5525 2.44772 23.0003 3 23.0003H8.97753C8.99281 23.0006 9.00805 23.0006 9.02325 23.0003H15C15.5523 23.0003 16 22.5525 16 22.0003C16 21.448 15.5523 21.0003 15 21.0003H10.344H8.25597Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M13.6559 3L8.25586 21H10.3439L15.7439 3H13.6559Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M14.9826 1.2502H9C8.58579 1.2502 8.25 1.58598 8.25 2.0002C8.25 2.41441 8.58579 2.7502 9 2.7502H13.992L8.44198 21.2502H3C2.58579 21.2502 2.25 21.586 2.25 22.0002C2.25 22.4144 2.58579 22.7502 3 22.7502H8.98314C8.9946 22.7505 9.00604 22.7505 9.01744 22.7502H15C15.4142 22.7502 15.75 22.4144 15.75 22.0002C15.75 21.586 15.4142 21.2502 15 21.2502H10.008L15.558 2.7502H21C21.4142 2.7502 21.75 2.41441 21.75 2.0002C21.75 1.58598 21.4142 1.2502 21 1.2502H15.0169C15.0054 1.24993 14.994 1.24993 14.9826 1.2502Z", "fill": "white"}]]};

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

export const TextItalicOutline = React.forwardRef((props, ref) => {
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

export const TextItalicBold = React.forwardRef((props, ref) => {
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

export const TextItalicBoldDuotone = React.forwardRef((props, ref) => {
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

export const TextItalic = TextItalicOutline;
export default TextItalic;
