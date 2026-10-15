const React = require('react');

const iconName = 'alt-arrow-up';
const category = 'Arrows';
const nodes = {"bold": [["path", {"d": "M12.3704 8.16485L18.8001 14.7953C19.2013 15.2091 18.9581 16 18.4297 16H5.5703C5.04189 16 4.79869 15.2091 5.1999 14.7953L11.6296 8.16485C11.8427 7.94505 12.1573 7.94505 12.3704 8.16485Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"d": "M8.30273 11.5956L11.6296 8.16485C11.8428 7.94505 12.1573 7.94505 12.3704 8.16485L18.8001 14.7953C19.2013 15.2091 18.9581 16 18.4297 16H12.7071L8.30273 11.5956Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M11.2929 15.9989H5.5703C5.04189 15.9989 4.79869 15.208 5.1999 14.7942L7.60648 12.3125L11.2929 15.9989Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M11.5119 8.43056C11.7928 8.18981 12.2072 8.18981 12.4881 8.43056L19.4881 14.4306C19.8026 14.7001 19.839 15.1736 19.5695 15.4881C19.2999 15.8026 18.8264 15.839 18.5119 15.5694L12 9.98781L5.48811 15.5694C5.17361 15.839 4.70014 15.8026 4.43057 15.4881C4.161 15.1736 4.19743 14.7001 4.51192 14.4306L11.5119 8.43056Z", "fill": "white"}]]};

function renderNodes(variantNodes, variant, color = 'currentColor', secondaryColor, secondaryOpacity) {
  return variantNodes.map(([tag, attrs], index) => {
    const computed = Object.assign({}, attrs);
    if (color !== 'original' && color !== 'source') {
      if ('opacity' in attrs) {
        computed.opacity = secondaryOpacity !== undefined ? secondaryOpacity : attrs.opacity;
        computed.fill = secondaryColor || color;
      } else if (attrs.fill && attrs.fill !== 'none' && attrs.fill !== 'transparent') {
        const isWhite = attrs.fill === 'white' || attrs.fill === '#FEFEFF' || attrs.fill === '#FBFCFF';
        if (!(variant === 'bold' && isWhite && variantNodes.length > 1)) computed.fill = color;
      }
      if (attrs.stroke && attrs.stroke !== 'none') computed.stroke = color;
    }
    return React.createElement(tag, Object.assign({ key: index }, computed));
  });
}

const SolarAltArrowUp = React.forwardRef((props, ref) => {
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
  }, rest), title && React.createElement('title', null, title), ...renderNodes(variantNodes, normVariant, color, secondaryColor, secondaryOpacity));
});

SolarAltArrowUp.nodes = nodes;
SolarAltArrowUp.iconName = iconName;
SolarAltArrowUp.category = category;

const AltArrowUpOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarAltArrowUp, Object.assign({ ref, variant: 'outline' }, props));
});

const AltArrowUpBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarAltArrowUp, Object.assign({ ref, variant: 'bold' }, props));
});

const AltArrowUpBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarAltArrowUp, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const AltArrowUp = SolarAltArrowUp;

module.exports = {
  iconName,
  category,
  nodes,
  SolarAltArrowUp,
  AltArrowUp,
  AltArrowUpOutline,
  AltArrowUpBold,
  AltArrowUpBoldDuotone,
  default: SolarAltArrowUp
};
