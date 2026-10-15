const React = require('react');

const iconName = 'alt-arrow-down';
const category = 'Arrows';
const nodes = {"bold": [["path", {"d": "M12.3704 15.8351L18.8001 9.20467C19.2013 8.79094 18.9581 8 18.4297 8H5.5703C5.04189 8 4.79869 8.79094 5.1999 9.20467L11.6296 15.8351C11.8427 16.055 12.1573 16.0549 12.3704 15.8351Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"d": "M8.30273 12.4044L11.6296 15.8351C11.8428 16.0549 12.1573 16.0549 12.3704 15.8351L18.8001 9.20467C19.2013 8.79094 18.9581 8 18.4297 8H12.7071L8.30273 12.4044Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M11.2929 8H5.5703C5.04189 8 4.79869 8.79094 5.1999 9.20467L7.60648 11.6864L11.2929 8Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M4.43057 8.51192C4.70014 8.19743 5.17361 8.161 5.48811 8.43057L12 14.0122L18.5119 8.43057C18.8264 8.16101 19.2999 8.19743 19.5695 8.51192C19.839 8.82642 19.8026 9.29989 19.4881 9.56946L12.4881 15.5695C12.2072 15.8102 11.7928 15.8102 11.5119 15.5695L4.51192 9.56946C4.19743 9.29989 4.161 8.82641 4.43057 8.51192Z", "fill": "white"}]]};

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

const SolarAltArrowDown = React.forwardRef((props, ref) => {
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

SolarAltArrowDown.nodes = nodes;
SolarAltArrowDown.iconName = iconName;
SolarAltArrowDown.category = category;

const AltArrowDownOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarAltArrowDown, Object.assign({ ref, variant: 'outline' }, props));
});

const AltArrowDownBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarAltArrowDown, Object.assign({ ref, variant: 'bold' }, props));
});

const AltArrowDownBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarAltArrowDown, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const AltArrowDown = SolarAltArrowDown;

module.exports = {
  iconName,
  category,
  nodes,
  SolarAltArrowDown,
  AltArrowDown,
  AltArrowDownOutline,
  AltArrowDownBold,
  AltArrowDownBoldDuotone,
  default: SolarAltArrowDown
};
