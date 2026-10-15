const React = require('react');

const iconName = 'list-arrow-down-minimalistic';
const category = 'List';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6ZM2.25 11C2.25 10.5858 2.58579 10.25 3 10.25H12C12.4142 10.25 12.75 10.5858 12.75 11C12.75 11.4142 12.4142 11.75 12 11.75H3C2.58579 11.75 2.25 11.4142 2.25 11ZM2.25 16C2.25 15.5858 2.58579 15.25 3 15.25H11C11.4142 15.25 11.75 15.5858 11.75 16C11.75 16.4142 11.4142 16.75 11 16.75H3C2.58579 16.75 2.25 16.4142 2.25 16Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303L20.5303 15.0303C20.8232 14.7374 20.8232 14.2626 20.5303 13.9697C20.2374 13.6768 19.7626 13.6768 19.4697 13.9697L18.25 15.1893V9C18.25 8.58579 17.9142 8.25 17.5 8.25C17.0858 8.25 16.75 8.58579 16.75 9V15.1893L15.5303 13.9697C15.2374 13.6768 14.7626 13.6768 14.4697 13.9697C14.1768 14.2626 14.1768 14.7374 14.4697 15.0303L16.9697 17.5303Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "fillRule": "evenodd", "clipRule": "evenodd", "d": "M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6ZM2.25 11C2.25 10.5858 2.58579 10.25 3 10.25H12C12.4142 10.25 12.75 10.5858 12.75 11C12.75 11.4142 12.4142 11.75 12 11.75H3C2.58579 11.75 2.25 11.4142 2.25 11ZM2.25 16C2.25 15.5858 2.58579 15.25 3 15.25H11C11.4142 15.25 11.75 15.5858 11.75 16C11.75 16.4142 11.4142 16.75 11 16.75H3C2.58579 16.75 2.25 16.4142 2.25 16Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303L20.5303 15.0303C20.8232 14.7374 20.8232 14.2626 20.5303 13.9697C20.2374 13.6768 19.7626 13.6768 19.4697 13.9697L18.25 15.1893V9C18.25 8.58579 17.9142 8.25 17.5 8.25C17.0858 8.25 16.75 8.58579 16.75 9V15.1893L15.5303 13.9697C15.2374 13.6768 14.7626 13.6768 14.4697 13.9697C14.1768 14.2626 14.1768 14.7374 14.4697 15.0303L16.9697 17.5303Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6ZM17.5 8.25C17.9142 8.25 18.25 8.58579 18.25 9V15.1893L19.4697 13.9697C19.7626 13.6768 20.2374 13.6768 20.5303 13.9697C20.8232 14.2626 20.8232 14.7374 20.5303 15.0303L18.0303 17.5303C17.7374 17.8232 17.2626 17.8232 16.9697 17.5303L14.4697 15.0303C14.1768 14.7374 14.1768 14.2626 14.4697 13.9697C14.7626 13.6768 15.2374 13.6768 15.5303 13.9697L16.75 15.1893V9C16.75 8.58579 17.0858 8.25 17.5 8.25ZM2.25 11C2.25 10.5858 2.58579 10.25 3 10.25H12C12.4142 10.25 12.75 10.5858 12.75 11C12.75 11.4142 12.4142 11.75 12 11.75H3C2.58579 11.75 2.25 11.4142 2.25 11ZM2.25 16C2.25 15.5858 2.58579 15.25 3 15.25H11C11.4142 15.25 11.75 15.5858 11.75 16C11.75 16.4142 11.4142 16.75 11 16.75H3C2.58579 16.75 2.25 16.4142 2.25 16Z", "fill": "white"}]]};

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

const SolarListArrowDownMinimalistic = React.forwardRef((props, ref) => {
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

SolarListArrowDownMinimalistic.nodes = nodes;
SolarListArrowDownMinimalistic.iconName = iconName;
SolarListArrowDownMinimalistic.category = category;

const ListArrowDownMinimalisticOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarListArrowDownMinimalistic, Object.assign({ ref, variant: 'outline' }, props));
});

const ListArrowDownMinimalisticBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarListArrowDownMinimalistic, Object.assign({ ref, variant: 'bold' }, props));
});

const ListArrowDownMinimalisticBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarListArrowDownMinimalistic, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const ListArrowDownMinimalistic = SolarListArrowDownMinimalistic;

module.exports = {
  iconName,
  category,
  nodes,
  SolarListArrowDownMinimalistic,
  ListArrowDownMinimalistic,
  ListArrowDownMinimalisticOutline,
  ListArrowDownMinimalisticBold,
  ListArrowDownMinimalisticBoldDuotone,
  default: SolarListArrowDownMinimalistic
};
