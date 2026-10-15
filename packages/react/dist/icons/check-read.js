import React from 'react';

export const iconName = 'check-read';
export const category = 'Messages, Conversation';
export const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM14.4743 8.419C14.7952 8.68094 14.8429 9.15341 14.581 9.47428L8.86671 16.4743C8.72427 16.6488 8.51096 16.75 8.28571 16.75C8.06047 16.75 7.84716 16.6488 7.70472 16.4743L5.419 13.6743C5.15707 13.3534 5.20484 12.8809 5.52572 12.619C5.84659 12.3571 6.31906 12.4048 6.581 12.7257L8.28571 14.814L13.419 8.52572C13.6809 8.20484 14.1534 8.15707 14.4743 8.419ZM18.4743 8.41901C18.7952 8.68095 18.8429 9.15342 18.581 9.47429L12.8665 16.4743C12.7152 16.6596 12.4846 16.7617 12.2457 16.7489C12.0068 16.7362 11.7883 16.6103 11.6575 16.4099L11.3719 15.9724C11.1455 15.6256 11.2432 15.1608 11.5901 14.9344C11.7939 14.8014 12.0384 14.7803 12.2514 14.8558L17.419 8.52571C17.681 8.20484 18.1534 8.15707 18.4743 8.41901Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355Z", "fill": "#1C274C"}], ["path", {"d": "M18.581 9.47431C18.843 9.15344 18.7952 8.68098 18.4743 8.41903C18.1534 8.15709 17.681 8.20486 17.419 8.52573L12.2514 14.8559C12.0385 14.7803 11.7939 14.8014 11.5901 14.9345C11.2432 15.1609 11.1456 15.6256 11.372 15.9724L11.6575 16.4099C11.7883 16.6103 12.0068 16.7362 12.2457 16.749C12.4846 16.7617 12.7153 16.6597 12.8666 16.4743L18.581 9.47431Z", "fill": "#1C274C"}], ["path", {"d": "M14.581 9.47431C14.843 9.15343 14.7952 8.68097 14.4743 8.41903C14.1534 8.15709 13.681 8.20487 13.419 8.52574L8.28574 14.814L6.58102 12.7257C6.31908 12.4049 5.84662 12.3571 5.52574 12.619C5.20487 12.881 5.15709 13.3534 5.41903 13.6743L7.70474 16.4743C7.84718 16.6488 8.0605 16.75 8.28574 16.75C8.51098 16.75 8.7243 16.6488 8.86673 16.4743L14.581 9.47431Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M15.4933 6.93502C15.8053 7.20743 15.8374 7.68122 15.565 7.99325L7.70786 16.9933C7.56543 17.1564 7.35943 17.25 7.14287 17.25C6.9263 17.25 6.72031 17.1564 6.57788 16.9933L3.43502 13.3933C3.16261 13.0812 3.19473 12.6074 3.50677 12.335C3.8188 12.0626 4.29259 12.0947 4.565 12.4068L7.14287 15.3596L14.435 7.00677C14.7074 6.69473 15.1812 6.66261 15.4933 6.93502Z", "fill": "white"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M20.5175 7.01946C20.8174 7.30513 20.829 7.77986 20.5433 8.07981L11.9716 17.0798C11.8201 17.2389 11.6065 17.3235 11.3872 17.3114C11.1679 17.2993 10.9649 17.1917 10.8318 17.0169L10.4035 16.4544C10.1526 16.1249 10.2163 15.6543 10.5458 15.4034C10.8289 15.1878 11.2161 15.2044 11.4787 15.4223L19.4571 7.04531C19.7428 6.74537 20.2175 6.73379 20.5175 7.01946Z", "fill": "white"}]]};

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

export const SolarCheckRead = /* @__PURE__ */ React.forwardRef((props, ref) => {
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

SolarCheckRead.nodes = nodes;
SolarCheckRead.iconName = iconName;
SolarCheckRead.category = category;

export const CheckReadOutline = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarCheckRead, Object.assign({ ref, variant: 'outline' }, props));
});

export const CheckReadBold = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarCheckRead, Object.assign({ ref, variant: 'bold' }, props));
});

export const CheckReadBoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarCheckRead, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

export const CheckRead = SolarCheckRead;
export default SolarCheckRead;
