const React = require('react');

const iconName = 'women';
const category = 'Astronomy';
const nodes = {"bold": [["path", {"d": "M12.7497 15.9603C16.2632 15.5862 19 12.6127 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 12.6125 7.73654 15.5859 11.2497 15.9603V17.75H9.5C9.08579 17.75 8.75 18.0858 8.75 18.5C8.75 18.9142 9.08579 19.25 9.5 19.25H11.2498L11.25 22.0001C11.25 22.4143 11.5858 22.75 12.0001 22.75C12.4143 22.75 12.75 22.4142 12.75 21.9999L12.7498 19.25H14.5C14.9142 19.25 15.25 18.9142 15.25 18.5C15.25 18.0858 14.9142 17.75 14.5 17.75H12.7497V15.9603Z", "fill": "#1C274C"}]], "bold-duotone": [["circle", {"opacity": "0.5", "cx": "12", "cy": "9", "r": "7", "fill": "#1C274C"}], ["path", {"d": "M11.25 15.9609V17.7506H9.5C9.08579 17.7506 8.75 18.0864 8.75 18.5006C8.75 18.9149 9.08579 19.2506 9.5 19.2506H11.25V22.0006C11.25 22.4149 11.5858 22.7506 12 22.7506C12.4142 22.7506 12.75 22.4149 12.75 22.0006V19.2506H14.5C14.9142 19.2506 15.25 18.9149 15.25 18.5006C15.25 18.0864 14.9142 17.7506 14.5 17.7506L12.75 17.7506V15.9609C12.5036 15.9872 12.2534 16.0006 12 16.0006C11.7466 16.0006 11.4964 15.9872 11.25 15.9609Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 2.75C8.54822 2.75 5.75 5.54822 5.75 9C5.75 12.4518 8.54802 15.25 11.9998 15.25C15.4516 15.25 18.25 12.4517 18.25 9C18.25 5.54822 15.4518 2.75 12 2.75ZM4.25 9C4.25 4.71979 7.71979 1.25 12 1.25C16.2802 1.25 19.75 4.71979 19.75 9C19.75 13.0272 16.6781 16.337 12.7498 16.7142V17.75H14.5C14.9142 17.75 15.25 18.0858 15.25 18.5C15.25 18.9142 14.9142 19.25 14.5 19.25H12.7498L12.75 21.9999C12.7501 22.4142 12.4143 22.75 12.0001 22.75C11.5859 22.75 11.2501 22.4143 11.25 22.0001L11.2498 19.25H9.50003C9.08582 19.25 8.75003 18.9142 8.75003 18.5C8.75003 18.0858 9.08582 17.75 9.50003 17.75H11.2498V16.7142C7.32147 16.3369 4.25 13.0272 4.25 9Z", "fill": "white"}]]};

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

const SolarWomen = React.forwardRef((props, ref) => {
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

SolarWomen.nodes = nodes;
SolarWomen.iconName = iconName;
SolarWomen.category = category;

const WomenOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarWomen, Object.assign({ ref, variant: 'outline' }, props));
});

const WomenBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarWomen, Object.assign({ ref, variant: 'bold' }, props));
});

const WomenBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarWomen, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const Women = SolarWomen;

module.exports = {
  iconName,
  category,
  nodes,
  SolarWomen,
  Women,
  WomenOutline,
  WomenBold,
  WomenBoldDuotone,
  default: SolarWomen
};
