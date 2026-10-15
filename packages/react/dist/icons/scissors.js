import React from 'react';

export const iconName = 'scissors';
export const category = 'Essentional, UI';
export const nodes = {"bold": [["path", {"d": "M6.65376 1.63257C6.45076 1.27151 5.99349 1.14338 5.63244 1.34638C5.27138 1.54938 5.14324 2.00664 5.34624 2.3677L11.1396 12.6718L8.43226 17.4871C7.85064 16.1697 6.5327 15.2501 5 15.2501C2.92893 15.2501 1.25 16.9291 1.25 19.0001C1.25 21.0712 2.92893 22.7501 5 22.7501C6.42286 22.7501 7.66063 21.9577 8.29606 20.7901L12 14.2022L15.7039 20.79C16.3393 21.9577 17.5771 22.7501 19 22.7501C21.0711 22.7501 22.75 21.0712 22.75 19.0001C22.75 16.9291 21.0711 15.2501 19 15.2501C17.4673 15.2501 16.1494 16.1696 15.5677 17.4871L12.8604 12.6718L18.6538 2.3677C18.8568 2.00664 18.7286 1.54938 18.3676 1.34638C18.0065 1.14338 17.5492 1.27151 17.3462 1.63257L12 11.1415L6.65376 1.63257Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M6.65389 1.63257C6.45089 1.27151 5.99363 1.14338 5.63257 1.34638C5.27151 1.54938 5.14338 2.00664 5.34638 2.3677L15.7041 20.7901C16.3395 21.9577 17.5773 22.7501 19.0001 22.7501C21.0712 22.7501 22.7501 21.0712 22.7501 19.0001C22.7501 16.9291 21.0712 15.2501 19.0001 15.2501C17.4674 15.2501 16.1495 16.1697 15.5679 17.4871L6.65389 1.63257Z", "fill": "#1C274C"}], ["path", {"d": "M17.3462 1.63257C17.5492 1.27151 18.0065 1.14338 18.3676 1.34638C18.7286 1.54938 18.8568 2.00664 18.6538 2.3677L8.29606 20.7901C7.66064 21.9577 6.42286 22.7501 5 22.7501C2.92893 22.7501 1.25 21.0712 1.25 19.0001C1.25 16.9291 2.92893 15.2501 5 15.2501C6.5327 15.2501 7.85064 16.1697 8.43226 17.4871L17.3462 1.63257Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M17.3462 1.63257C17.5492 1.27151 18.0065 1.14338 18.3676 1.34638C18.7286 1.54938 18.8568 2.00664 18.6538 2.3677L12.8604 12.6718L15.5677 17.4871C16.1494 16.1697 17.4673 15.2501 19 15.2501C21.0711 15.2501 22.75 16.9291 22.75 19.0001C22.75 21.0712 21.0711 22.7501 19 22.7501C17.5771 22.7501 16.3394 21.9577 15.7039 20.7901L12 14.2022L8.29606 20.7901C7.66064 21.9577 6.42286 22.7501 5 22.7501C2.92893 22.7501 1.25 21.0712 1.25 19.0001C1.25 16.9291 2.92893 15.2501 5 15.2501C6.5327 15.2501 7.85064 16.1697 8.43226 17.4871L11.1396 12.6718L5.34624 2.3677C5.14324 2.00664 5.27138 1.54938 5.63244 1.34638C5.99349 1.14338 6.45076 1.27151 6.65376 1.63257L12 11.1415L17.3462 1.63257ZM5 21.2501C5.83538 21.2501 6.56442 20.7949 6.95257 20.1189L6.97252 20.0834C7.14938 19.7621 7.25 19.3929 7.25 19.0001C7.25 17.7575 6.24264 16.7501 5 16.7501C3.75736 16.7501 2.75 17.7575 2.75 19.0001C2.75 20.2428 3.75736 21.2501 5 21.2501ZM19 21.2501C18.1646 21.2501 17.4356 20.7949 17.0474 20.1189L17.0275 20.0834C16.8506 19.7621 16.75 19.3929 16.75 19.0001C16.75 17.7575 17.7574 16.7501 19 16.7501C20.2426 16.7501 21.25 17.7575 21.25 19.0001C21.25 20.2428 20.2426 21.2501 19 21.2501Z", "fill": "white"}]]};

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

export const ScissorsOutline = React.forwardRef((props, ref) => {
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

export const ScissorsBold = React.forwardRef((props, ref) => {
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

export const ScissorsBoldDuotone = React.forwardRef((props, ref) => {
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

export const Scissors = ScissorsOutline;
export default Scissors;
