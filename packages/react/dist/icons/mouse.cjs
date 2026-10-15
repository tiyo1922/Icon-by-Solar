const React = require('react');

const iconName = 'mouse';
const category = 'Electronic, Devices';
const nodes = {"bold": [["path", {"d": "M19 8.97414V14.9861C19 18.8598 15.866 22 12 22C8.13401 22 5 18.8598 5 14.9861V8.97414C5 5.35433 7.73668 2.37497 11.25 2V5.38542C10.6588 5.66685 10.25 6.27067 10.25 6.97016V8.97414C10.25 9.94256 11.0335 10.7276 12 10.7276C12.9665 10.7276 13.75 9.94256 13.75 8.97414V6.97016C13.75 6.27067 13.3412 5.66685 12.75 5.38542V2C16.2633 2.37497 19 5.35433 19 8.97414Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M19 8.97414V14.986C19 18.8597 15.866 21.9999 12 21.9999C8.13401 21.9999 5 18.8597 5 14.986V8.97414C5 5.35433 7.73668 2.37497 11.25 2V5.38542C10.6588 5.66685 10.25 6.27067 10.25 6.97016V8.97414C10.25 9.94256 11.0335 10.7276 12 10.7276C12.9665 10.7276 13.75 9.94256 13.75 8.97414V6.97016C13.75 6.27067 13.3412 5.66685 12.75 5.38542V2C16.2633 2.37497 19 5.35433 19 8.97414Z", "fill": "#1C274C"}], ["path", {"d": "M13.75 8.97483V6.97085C13.75 6.27136 13.3412 5.66754 12.75 5.38611V2.00069C12.5036 1.97439 12.2534 1.96094 12 1.96094C11.7466 1.96094 11.4964 1.97439 11.25 2.00069V5.38611C10.6588 5.66754 10.25 6.27136 10.25 6.97085V8.97483C10.25 9.94325 11.0335 10.7283 12 10.7283C12.9665 10.7283 13.75 9.94325 13.75 8.97483Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M4.25 9C4.25 4.71979 7.71979 1.25 12 1.25C16.2802 1.25 19.75 4.71979 19.75 9V15C19.75 19.2802 16.2802 22.75 12 22.75C7.71979 22.75 4.25 19.2802 4.25 15V9ZM11.25 2.79454C8.15183 3.16505 5.75 5.80204 5.75 9V15C5.75 18.4518 8.54822 21.25 12 21.25C15.4518 21.25 18.25 18.4518 18.25 15V9C18.25 5.80204 15.8482 3.16505 12.75 2.79454V6.37803C13.6239 6.68691 14.25 7.52034 14.25 8.5V10.5C14.25 11.7426 13.2426 12.75 12 12.75C10.7574 12.75 9.75 11.7426 9.75 10.5V8.5C9.75 7.52034 10.3761 6.68691 11.25 6.37803V2.79454ZM12 7.75C11.5858 7.75 11.25 8.08579 11.25 8.5V10.5C11.25 10.9142 11.5858 11.25 12 11.25C12.4142 11.25 12.75 10.9142 12.75 10.5V8.5C12.75 8.08579 12.4142 7.75 12 7.75Z", "fill": "white"}]]};

function renderNodes(variantNodes, color = 'currentColor', secondaryColor, secondaryOpacity) {
  return variantNodes.map(([tag, attrs], index) => {
    const computed = Object.assign({}, attrs);
    if (color !== 'original' && color !== 'source') {
      if ('opacity' in attrs) {
        computed.opacity = secondaryOpacity !== undefined ? secondaryOpacity : attrs.opacity;
        computed.fill = secondaryColor || color;
      } else if (attrs.fill && attrs.fill !== 'none' && attrs.fill !== 'transparent') {
        const isWhite = attrs.fill === 'white' || attrs.fill === '#FEFEFF' || attrs.fill === '#FBFCFF';
        if (!isWhite || variantNodes.length === 1) computed.fill = color;
      }
      if (attrs.stroke && attrs.stroke !== 'none') computed.stroke = color;
    }
    return React.createElement(tag, Object.assign({ key: index }, computed));
  });
}

const SolarMouse = React.forwardRef((props, ref) => {
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
  return React.createElement('svg', Object.assign({
    ref,
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className,
    style: Object.assign({ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }, style),
    'aria-hidden': title ? undefined : 'true',
    role: title ? 'img' : 'presentation'
  }, rest), title && React.createElement('title', null, title), ...renderNodes(variantNodes, color, secondaryColor, secondaryOpacity));
});

SolarMouse.nodes = nodes;
SolarMouse.iconName = iconName;
SolarMouse.category = category;

const MouseOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarMouse, Object.assign({ ref, variant: 'outline' }, props));
});

const MouseBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarMouse, Object.assign({ ref, variant: 'bold' }, props));
});

const MouseBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarMouse, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const Mouse = SolarMouse;

module.exports = {
  iconName,
  category,
  nodes,
  SolarMouse,
  Mouse,
  MouseOutline,
  MouseBold,
  MouseBoldDuotone,
  default: SolarMouse
};
