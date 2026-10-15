const React = require('react');

const iconName = 'wind';
const category = 'Weather';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M6.25 5.5C6.25 3.70508 7.70507 2.25 9.5 2.25C11.2949 2.25 12.75 3.70507 12.75 5.5C12.75 7.29493 11.2949 8.75 9.5 8.75H3C2.58579 8.75 2.25 8.41421 2.25 8C2.25 7.58579 2.58579 7.25 3 7.25H9.5C10.4665 7.25 11.25 6.4665 11.25 5.5C11.25 4.5335 10.4665 3.75 9.5 3.75C8.5335 3.75 7.75 4.5335 7.75 5.5V5.85714C7.75 6.27136 7.41421 6.60714 7 6.60714C6.58579 6.60714 6.25 6.27136 6.25 5.85714V5.5ZM14.25 7.5C14.25 5.15279 16.1528 3.25 18.5 3.25C20.8472 3.25 22.75 5.15279 22.75 7.5C22.75 9.84721 20.8472 11.75 18.5 11.75H2C1.58579 11.75 1.25 11.4142 1.25 11C1.25 10.5858 1.58579 10.25 2 10.25H18.5C20.0188 10.25 21.25 9.01878 21.25 7.5C21.25 5.98122 20.0188 4.75 18.5 4.75C16.9812 4.75 15.75 5.98122 15.75 7.5V8C15.75 8.41421 15.4142 8.75 15 8.75C14.5858 8.75 14.25 8.41421 14.25 8V7.5ZM3.25 14C3.25 13.5858 3.58579 13.25 4 13.25H18.5C20.8472 13.25 22.75 15.1528 22.75 17.5C22.75 19.8472 20.8472 21.75 18.5 21.75C16.1528 21.75 14.25 19.8472 14.25 17.5V17C14.25 16.5858 14.5858 16.25 15 16.25C15.4142 16.25 15.75 16.5858 15.75 17V17.5C15.75 19.0188 16.9812 20.25 18.5 20.25C20.0188 20.25 21.25 19.0188 21.25 17.5C21.25 15.9812 20.0188 14.75 18.5 14.75H4C3.58579 14.75 3.25 14.4142 3.25 14Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M6.25 5.5C6.25 3.70508 7.70507 2.25 9.5 2.25C11.2949 2.25 12.75 3.70507 12.75 5.5C12.75 7.29493 11.2949 8.75 9.5 8.75H3C2.58579 8.75 2.25 8.41421 2.25 8C2.25 7.58579 2.58579 7.25 3 7.25H9.5C10.4665 7.25 11.25 6.4665 11.25 5.5C11.25 4.5335 10.4665 3.75 9.5 3.75C8.5335 3.75 7.75 4.5335 7.75 5.5V5.85714C7.75 6.27136 7.41421 6.60714 7 6.60714C6.58579 6.60714 6.25 6.27136 6.25 5.85714V5.5Z", "fill": "#1C274C"}], ["path", {"opacity": "0.4", "d": "M3.25 14C3.25 13.5858 3.58579 13.25 4 13.25H18.5C20.8472 13.25 22.75 15.1528 22.75 17.5C22.75 19.8472 20.8472 21.75 18.5 21.75C16.1528 21.75 14.25 19.8472 14.25 17.5V17C14.25 16.5858 14.5858 16.25 15 16.25C15.4142 16.25 15.75 16.5858 15.75 17V17.5C15.75 19.0188 16.9812 20.25 18.5 20.25C20.0188 20.25 21.25 19.0188 21.25 17.5C21.25 15.9812 20.0188 14.75 18.5 14.75H4C3.58579 14.75 3.25 14.4142 3.25 14Z", "fill": "#1C274C"}], ["path", {"opacity": "0.7", "d": "M14.25 7.5C14.25 5.15279 16.1528 3.25 18.5 3.25C20.8472 3.25 22.75 5.15279 22.75 7.5C22.75 9.84721 20.8472 11.75 18.5 11.75H2C1.58579 11.75 1.25 11.4142 1.25 11C1.25 10.5858 1.58579 10.25 2 10.25H18.5C20.0188 10.25 21.25 9.01878 21.25 7.5C21.25 5.98122 20.0188 4.75 18.5 4.75C16.9812 4.75 15.75 5.98122 15.75 7.5V8C15.75 8.41421 15.4142 8.75 15 8.75C14.5858 8.75 14.25 8.41421 14.25 8V7.5Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M6.25 5.5C6.25 3.70508 7.70507 2.25 9.5 2.25C11.2949 2.25 12.75 3.70507 12.75 5.5C12.75 7.29493 11.2949 8.75 9.5 8.75H3C2.58579 8.75 2.25 8.41421 2.25 8C2.25 7.58579 2.58579 7.25 3 7.25H9.5C10.4665 7.25 11.25 6.4665 11.25 5.5C11.25 4.5335 10.4665 3.75 9.5 3.75C8.5335 3.75 7.75 4.5335 7.75 5.5V5.85714C7.75 6.27136 7.41421 6.60714 7 6.60714C6.58579 6.60714 6.25 6.27136 6.25 5.85714V5.5ZM14.25 7.5C14.25 5.15279 16.1528 3.25 18.5 3.25C20.8472 3.25 22.75 5.15279 22.75 7.5C22.75 9.84721 20.8472 11.75 18.5 11.75H2C1.58579 11.75 1.25 11.4142 1.25 11C1.25 10.5858 1.58579 10.25 2 10.25H18.5C20.0188 10.25 21.25 9.01878 21.25 7.5C21.25 5.98122 20.0188 4.75 18.5 4.75C16.9812 4.75 15.75 5.98122 15.75 7.5V8C15.75 8.41421 15.4142 8.75 15 8.75C14.5858 8.75 14.25 8.41421 14.25 8V7.5ZM3.25 14C3.25 13.5858 3.58579 13.25 4 13.25H18.5C20.8472 13.25 22.75 15.1528 22.75 17.5C22.75 19.8472 20.8472 21.75 18.5 21.75C16.1528 21.75 14.25 19.8472 14.25 17.5V17C14.25 16.5858 14.5858 16.25 15 16.25C15.4142 16.25 15.75 16.5858 15.75 17V17.5C15.75 19.0188 16.9812 20.25 18.5 20.25C20.0188 20.25 21.25 19.0188 21.25 17.5C21.25 15.9812 20.0188 14.75 18.5 14.75H4C3.58579 14.75 3.25 14.4142 3.25 14Z", "fill": "white"}]]};

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

const SolarWind = React.forwardRef((props, ref) => {
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

SolarWind.nodes = nodes;
SolarWind.iconName = iconName;
SolarWind.category = category;

const WindOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarWind, Object.assign({ ref, variant: 'outline' }, props));
});

const WindBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarWind, Object.assign({ ref, variant: 'bold' }, props));
});

const WindBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarWind, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const Wind = SolarWind;

module.exports = {
  iconName,
  category,
  nodes,
  SolarWind,
  Wind,
  WindOutline,
  WindBold,
  WindBoldDuotone,
  default: SolarWind
};
