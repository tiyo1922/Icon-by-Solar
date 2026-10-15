const React = require('react');

const iconName = 'round-arrow-down';
const category = 'Arrows';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM15.5303 12.4697C15.8232 12.7626 15.8232 13.2374 15.5303 13.5303L12.5303 16.5303C12.2374 16.8232 11.7626 16.8232 11.4697 16.5303L8.46967 13.5303C8.17678 13.2374 8.17678 12.7626 8.46967 12.4697C8.76256 12.1768 9.23744 12.1768 9.53033 12.4697L11.25 14.1893V8C11.25 7.58579 11.5858 7.25 12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V14.1893L14.4697 12.4697C14.7626 12.1768 15.2374 12.1768 15.5303 12.4697Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z", "fill": "#1C274C"}], ["path", {"d": "M8.46967 13.5303C8.17678 13.2374 8.17678 12.7626 8.46967 12.4697C8.76256 12.1768 9.23744 12.1768 9.53033 12.4697L11.25 14.1893L11.25 8C11.25 7.58579 11.5858 7.25 12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V14.1893L14.4697 12.4697C14.7626 12.1768 15.2374 12.1768 15.5303 12.4697C15.8232 12.7626 15.8232 13.2374 15.5303 13.5303L12.5303 16.5303C12.2374 16.8232 11.7626 16.8232 11.4697 16.5303L8.46967 13.5303Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V14.1893L14.4697 12.4697C14.7626 12.1768 15.2374 12.1768 15.5303 12.4697C15.8232 12.7626 15.8232 13.2374 15.5303 13.5303L12.5303 16.5303C12.2374 16.8232 11.7626 16.8232 11.4697 16.5303L8.46967 13.5303C8.17678 13.2374 8.17678 12.7626 8.46967 12.4697C8.76256 12.1768 9.23744 12.1768 9.53033 12.4697L11.25 14.1893V8C11.25 7.58579 11.5858 7.25 12 7.25Z", "fill": "white"}]]};

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

const SolarRoundArrowDown = React.forwardRef((props, ref) => {
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

SolarRoundArrowDown.nodes = nodes;
SolarRoundArrowDown.iconName = iconName;
SolarRoundArrowDown.category = category;

const RoundArrowDownOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarRoundArrowDown, Object.assign({ ref, variant: 'outline' }, props));
});

const RoundArrowDownBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarRoundArrowDown, Object.assign({ ref, variant: 'bold' }, props));
});

const RoundArrowDownBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarRoundArrowDown, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const RoundArrowDown = SolarRoundArrowDown;

module.exports = {
  iconName,
  category,
  nodes,
  SolarRoundArrowDown,
  RoundArrowDown,
  RoundArrowDownOutline,
  RoundArrowDownBold,
  RoundArrowDownBoldDuotone,
  default: SolarRoundArrowDown
};
