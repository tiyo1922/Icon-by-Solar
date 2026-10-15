const React = require('react');

const iconName = 'arrow-right-down';
const category = 'Arrows';
const nodes = {"bold": [["path", {"d": "M5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L13.5 12.4393L17.4697 8.46967C17.6842 8.25517 18.0068 8.191 18.287 8.30709C18.5673 8.42318 18.75 8.69665 18.75 9V18C18.75 18.4142 18.4142 18.75 18 18.75L9 18.75C8.69665 18.75 8.42318 18.5673 8.30709 18.287C8.19101 18.0068 8.25517 17.6842 8.46967 17.4697L12.4393 13.5L5.46967 6.53033Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M17.4697 8.46969C17.6842 8.25519 18.0068 8.19103 18.287 8.30711C18.5673 8.4232 18.75 8.69668 18.75 9.00002V18C18.75 18.4142 18.4142 18.75 18 18.75L9.00002 18.75C8.69668 18.75 8.4232 18.5673 8.30711 18.287C8.19103 18.0068 8.25519 17.6842 8.46969 17.4697L17.4697 8.46969Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L13.5 12.4393L12.4393 13.5L5.46967 6.53033Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L17.25 16.1893L17.25 9C17.25 8.58579 17.5858 8.25 18 8.25C18.4142 8.25 18.75 8.58579 18.75 9L18.75 18C18.75 18.4142 18.4142 18.75 18 18.75L9 18.75C8.58579 18.75 8.25 18.4142 8.25 18C8.25 17.5858 8.58579 17.25 9 17.25L16.1893 17.25L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967Z", "fill": "white"}]]};

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

const SolarArrowRightDown = React.forwardRef((props, ref) => {
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

SolarArrowRightDown.nodes = nodes;
SolarArrowRightDown.iconName = iconName;
SolarArrowRightDown.category = category;

const ArrowRightDownOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarArrowRightDown, Object.assign({ ref, variant: 'outline' }, props));
});

const ArrowRightDownBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarArrowRightDown, Object.assign({ ref, variant: 'bold' }, props));
});

const ArrowRightDownBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarArrowRightDown, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const ArrowRightDown = SolarArrowRightDown;

module.exports = {
  iconName,
  category,
  nodes,
  SolarArrowRightDown,
  ArrowRightDown,
  ArrowRightDownOutline,
  ArrowRightDownBold,
  ArrowRightDownBoldDuotone,
  default: SolarArrowRightDown
};
