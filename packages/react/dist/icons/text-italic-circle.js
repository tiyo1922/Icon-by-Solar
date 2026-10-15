import React from 'react';

export const iconName = 'text-italic-circle';
export const category = 'Text Formatting';
export const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM10.6667 6.25H13.3162C13.3273 6.24975 13.3384 6.24975 13.3495 6.25H16C16.4142 6.25 16.75 6.58579 16.75 7C16.75 7.41421 16.4142 7.75 16 7.75H13.9095L11.6429 16.25H13.3333C13.7475 16.25 14.0833 16.5858 14.0833 17C14.0833 17.4142 13.7475 17.75 13.3333 17.75H10.6838C10.6727 17.7502 10.6616 17.7502 10.6505 17.75H8C7.58579 17.75 7.25 17.4142 7.25 17C7.25 16.5858 7.58579 16.25 8 16.25H10.0905L12.3571 7.75H10.6667C10.2525 7.75 9.91667 7.41421 9.91667 7C9.91667 6.58579 10.2525 6.25 10.6667 6.25Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z", "fill": "#1C274C"}], ["path", {"d": "M10.6667 6.25019H13.3162C13.3273 6.24994 13.3384 6.24994 13.3495 6.25019H16C16.4142 6.25019 16.75 6.58597 16.75 7.00019C16.75 7.4144 16.4142 7.75019 16 7.75019H13.9095L11.6429 16.2502H13.3333C13.7475 16.2502 14.0833 16.586 14.0833 17.0002C14.0833 17.4144 13.7475 17.7502 13.3333 17.7502H10.6838C10.6727 17.7504 10.6616 17.7504 10.6505 17.7502H8C7.58579 17.7502 7.25 17.4144 7.25 17.0002C7.25 16.586 7.58579 16.2502 8 16.2502H10.0905L12.3571 7.75019H10.6667C10.2525 7.75019 9.91667 7.4144 9.91667 7.00019C9.91667 6.58597 10.2525 6.25019 10.6667 6.25019Z", "fill": "#1C274C"}]], "outline": [["path", {"d": "M10.6667 6.25H13.3162C13.3273 6.24975 13.3384 6.24975 13.3495 6.25H16C16.4142 6.25 16.75 6.58579 16.75 7C16.75 7.41421 16.4142 7.75 16 7.75H13.9095L11.6429 16.25H13.3333C13.7475 16.25 14.0833 16.5858 14.0833 17C14.0833 17.4142 13.7475 17.75 13.3333 17.75H10.6838C10.6727 17.7502 10.6616 17.7502 10.6505 17.75H8C7.58579 17.75 7.25 17.4142 7.25 17C7.25 16.5858 7.58579 16.25 8 16.25H10.0905L12.3571 7.75H10.6667C10.2525 7.75 9.91667 7.41421 9.91667 7C9.91667 6.58579 10.2525 6.25 10.6667 6.25Z", "fill": "white"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z", "fill": "white"}]]};

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

export const TextItalicCircleOutline = React.forwardRef((props, ref) => {
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

export const TextItalicCircleBold = React.forwardRef((props, ref) => {
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

export const TextItalicCircleBoldDuotone = React.forwardRef((props, ref) => {
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

export const TextItalicCircle = TextItalicCircleOutline;
export default TextItalicCircle;
