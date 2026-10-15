import React from 'react';

export const iconName = 'text-bold-circle';
export const category = 'Text Formatting';
export const nodes = {"bold": [["path", {"d": "M8.75 11.25H12C13.2426 11.25 14.25 10.2426 14.25 9C14.25 7.75736 13.2426 6.75 12 6.75H9.52174C9.09552 6.75 8.75 7.09552 8.75 7.52174V11.25Z", "fill": "#1C274C"}], ["path", {"d": "M8.75 12.75V16.8235C8.75 17.0591 8.94094 17.25 9.17647 17.25H13C14.2426 17.25 15.25 16.2426 15.25 15C15.25 13.7574 14.2426 12.75 13 12.75H8.75Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM7.25 7.52174C7.25 6.26709 8.26709 5.25 9.52174 5.25H12C14.0711 5.25 15.75 6.92893 15.75 9C15.75 10.029 15.3356 10.9612 14.6645 11.6387C15.9004 12.2519 16.75 13.5268 16.75 15C16.75 17.0711 15.0711 18.75 13 18.75H9.17647C8.11251 18.75 7.25 17.8875 7.25 16.8235V7.52174Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M9.52174 5.25C8.26709 5.25 7.25 6.26709 7.25 7.52174V16.8235C7.25 17.8875 8.11251 18.75 9.17647 18.75H13C15.0711 18.75 16.75 17.0711 16.75 15C16.75 13.5268 15.9004 12.2519 14.6645 11.6387C15.3356 10.9612 15.75 10.029 15.75 9C15.75 6.92893 14.0711 5.25 12 5.25H9.52174ZM12 11.25H8.75V7.52174C8.75 7.09552 9.09552 6.75 9.52174 6.75H12C13.2426 6.75 14.25 7.75736 14.25 9C14.25 10.2426 13.2426 11.25 12 11.25ZM8.75 16.8235V12.75H13C14.2426 12.75 15.25 13.7574 15.25 15C15.25 16.2426 14.2426 17.25 13 17.25H9.17647C8.94094 17.25 8.75 17.0591 8.75 16.8235Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M7.25 7.52174C7.25 6.26709 8.26709 5.25 9.52174 5.25H12C14.0711 5.25 15.75 6.92893 15.75 9C15.75 10.029 15.3356 10.9612 14.6645 11.6387C15.9004 12.2519 16.75 13.5268 16.75 15C16.75 17.0711 15.0711 18.75 13 18.75H9.17647C8.11251 18.75 7.25 17.8875 7.25 16.8235V7.52174ZM8.75 11.25H12C13.2426 11.25 14.25 10.2426 14.25 9C14.25 7.75736 13.2426 6.75 12 6.75H9.52174C9.09552 6.75 8.75 7.09552 8.75 7.52174V11.25ZM8.75 12.75V16.8235C8.75 17.0591 8.94094 17.25 9.17647 17.25H13C14.2426 17.25 15.25 16.2426 15.25 15C15.25 13.7574 14.2426 12.75 13 12.75H8.75Z", "fill": "white"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75Z", "fill": "white"}]]};

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

export const SolarTextBoldCircle = /* @__PURE__ */ React.forwardRef((props, ref) => {
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

SolarTextBoldCircle.nodes = nodes;
SolarTextBoldCircle.iconName = iconName;
SolarTextBoldCircle.category = category;

export const TextBoldCircleOutline = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarTextBoldCircle, Object.assign({ ref, variant: 'outline' }, props));
});

export const TextBoldCircleBold = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarTextBoldCircle, Object.assign({ ref, variant: 'bold' }, props));
});

export const TextBoldCircleBoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarTextBoldCircle, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

export const TextBoldCircle = SolarTextBoldCircle;
export default SolarTextBoldCircle;
