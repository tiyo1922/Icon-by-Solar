const React = require('react');

const iconName = 'round-arrow-left-down';
const category = 'Arrows';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM14.25 15C14.25 15.4142 13.9142 15.75 13.5 15.75H9C8.58579 15.75 8.25 15.4142 8.25 15V10.5C8.25 10.0858 8.58579 9.75 9 9.75C9.41421 9.75 9.75 10.0858 9.75 10.5V13.1893L14.4697 8.46967C14.7626 8.17678 15.2374 8.17678 15.5303 8.46967C15.8232 8.76256 15.8232 9.23744 15.5303 9.53033L10.8107 14.25H13.5C13.9142 14.25 14.25 14.5858 14.25 15Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z", "fill": "#1C274C"}], ["path", {"d": "M13.5 15.75C13.9142 15.75 14.25 15.4142 14.25 15C14.25 14.5858 13.9142 14.25 13.5 14.25H10.8107L15.5303 9.53033C15.8232 9.23744 15.8232 8.76256 15.5303 8.46967C15.2374 8.17678 14.7626 8.17678 14.4697 8.46967L9.75 13.1893V10.5C9.75 10.0858 9.41421 9.75 9 9.75C8.58579 9.75 8.25 10.0858 8.25 10.5V15C8.25 15.4142 8.58579 15.75 9 15.75H13.5Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM15.5303 8.46967C15.8232 8.76256 15.8232 9.23744 15.5303 9.53033L10.8107 14.25H13.5C13.9142 14.25 14.25 14.5858 14.25 15C14.25 15.4142 13.9142 15.75 13.5 15.75H9C8.58579 15.75 8.25 15.4142 8.25 15V10.5C8.25 10.0858 8.58579 9.75 9 9.75C9.41421 9.75 9.75 10.0858 9.75 10.5V13.1893L14.4697 8.46967C14.7626 8.17678 15.2374 8.17678 15.5303 8.46967Z", "fill": "white"}]]};

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

const SolarRoundArrowLeftDown = React.forwardRef((props, ref) => {
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

SolarRoundArrowLeftDown.nodes = nodes;
SolarRoundArrowLeftDown.iconName = iconName;
SolarRoundArrowLeftDown.category = category;

const RoundArrowLeftDownOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarRoundArrowLeftDown, Object.assign({ ref, variant: 'outline' }, props));
});

const RoundArrowLeftDownBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarRoundArrowLeftDown, Object.assign({ ref, variant: 'bold' }, props));
});

const RoundArrowLeftDownBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarRoundArrowLeftDown, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const RoundArrowLeftDown = SolarRoundArrowLeftDown;

module.exports = {
  iconName,
  category,
  nodes,
  SolarRoundArrowLeftDown,
  RoundArrowLeftDown,
  RoundArrowLeftDownOutline,
  RoundArrowLeftDownBold,
  RoundArrowLeftDownBoldDuotone,
  default: SolarRoundArrowLeftDown
};
