const React = require('react');

const iconName = 'round-arrow-right-down';
const category = 'Arrows';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM9.75 15C9.75 15.4142 10.0858 15.75 10.5 15.75H15C15.4142 15.75 15.75 15.4142 15.75 15V10.5C15.75 10.0858 15.4142 9.75 15 9.75C14.5858 9.75 14.25 10.0858 14.25 10.5V13.1893L9.53033 8.46967C9.23744 8.17678 8.76256 8.17678 8.46967 8.46967C8.17678 8.76256 8.17678 9.23744 8.46967 9.53033L13.1893 14.25H10.5C10.0858 14.25 9.75 14.5858 9.75 15Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2Z", "fill": "#1C274C"}], ["path", {"d": "M10.5 15.75C10.0858 15.75 9.75 15.4142 9.75 15C9.75 14.5858 10.0858 14.25 10.5 14.25H13.1893L8.46967 9.53033C8.17678 9.23744 8.17678 8.76256 8.46967 8.46967C8.76256 8.17678 9.23744 8.17678 9.53033 8.46967L14.25 13.1893V10.5C14.25 10.0858 14.5858 9.75 15 9.75C15.4142 9.75 15.75 10.0858 15.75 10.5V15C15.75 15.4142 15.4142 15.75 15 15.75H10.5Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM8.46967 8.46967C8.76256 8.17678 9.23744 8.17678 9.53033 8.46967L14.25 13.1893V10.5C14.25 10.0858 14.5858 9.75 15 9.75C15.4142 9.75 15.75 10.0858 15.75 10.5V15C15.75 15.4142 15.4142 15.75 15 15.75H10.5C10.0858 15.75 9.75 15.4142 9.75 15C9.75 14.5858 10.0858 14.25 10.5 14.25H13.1893L8.46967 9.53033C8.17678 9.23744 8.17678 8.76256 8.46967 8.46967Z", "fill": "white"}]]};

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

const SolarRoundArrowRightDown = React.forwardRef((props, ref) => {
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

SolarRoundArrowRightDown.nodes = nodes;
SolarRoundArrowRightDown.iconName = iconName;
SolarRoundArrowRightDown.category = category;

const RoundArrowRightDownOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarRoundArrowRightDown, Object.assign({ ref, variant: 'outline' }, props));
});

const RoundArrowRightDownBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarRoundArrowRightDown, Object.assign({ ref, variant: 'bold' }, props));
});

const RoundArrowRightDownBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarRoundArrowRightDown, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const RoundArrowRightDown = SolarRoundArrowRightDown;

module.exports = {
  iconName,
  category,
  nodes,
  SolarRoundArrowRightDown,
  RoundArrowRightDown,
  RoundArrowRightDownOutline,
  RoundArrowRightDownBold,
  RoundArrowRightDownBoldDuotone,
  default: SolarRoundArrowRightDown
};
