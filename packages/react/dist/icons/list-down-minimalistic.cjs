const React = require('react');

const iconName = 'list-down-minimalistic';
const category = 'List';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6ZM2.25 11C2.25 10.5858 2.58579 10.25 3 10.25H20C20.4142 10.25 20.75 10.5858 20.75 11C20.75 11.4142 20.4142 11.75 20 11.75H3C2.58579 11.75 2.25 11.4142 2.25 11ZM2.25 16C2.25 15.5858 2.58579 15.25 3 15.25H10C10.4142 15.25 10.75 15.5858 10.75 16C10.75 16.4142 10.4142 16.75 10 16.75H3C2.58579 16.75 2.25 16.4142 2.25 16Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M17.0119 18.5694C17.2928 18.8102 17.7072 18.8102 17.9881 18.5694L21.4881 15.5694C21.8026 15.2999 21.839 14.8264 21.5694 14.5119C21.2999 14.1974 20.8264 14.161 20.5119 14.4306L17.5 17.0122L14.4881 14.4306C14.1736 14.161 13.7001 14.1974 13.4306 14.5119C13.161 14.8264 13.1974 15.2999 13.5119 15.5694L17.0119 18.5694Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "fillRule": "evenodd", "clipRule": "evenodd", "d": "M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6ZM2.25 11C2.25 10.5858 2.58579 10.25 3 10.25H20C20.4142 10.25 20.75 10.5858 20.75 11C20.75 11.4142 20.4142 11.75 20 11.75H3C2.58579 11.75 2.25 11.4142 2.25 11ZM2.25 16C2.25 15.5858 2.58579 15.25 3 15.25H10C10.4142 15.25 10.75 15.5858 10.75 16C10.75 16.4142 10.4142 16.75 10 16.75H3C2.58579 16.75 2.25 16.4142 2.25 16Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M17.0119 18.5695C17.2928 18.8102 17.7072 18.8102 17.9881 18.5695L21.4881 15.5695C21.8026 15.2999 21.839 14.8264 21.5695 14.5119C21.2999 14.1974 20.8264 14.161 20.5119 14.4306L17.5 17.0122L14.4881 14.4306C14.1736 14.161 13.7001 14.1974 13.4306 14.5119C13.161 14.8264 13.1974 15.2999 13.5119 15.5695L17.0119 18.5695Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6ZM2.25 11C2.25 10.5858 2.58579 10.25 3 10.25H20C20.4142 10.25 20.75 10.5858 20.75 11C20.75 11.4142 20.4142 11.75 20 11.75H3C2.58579 11.75 2.25 11.4142 2.25 11ZM13.4306 14.5119C13.7001 14.1974 14.1736 14.161 14.4881 14.4306L17.5 17.0122L20.5119 14.4306C20.8264 14.161 21.2999 14.1974 21.5694 14.5119C21.839 14.8264 21.8026 15.2999 21.4881 15.5694L17.9881 18.5694C17.7072 18.8102 17.2928 18.8102 17.0119 18.5694L13.5119 15.5694C13.1974 15.2999 13.161 14.8264 13.4306 14.5119ZM2.25 16C2.25 15.5858 2.58579 15.25 3 15.25H10C10.4142 15.25 10.75 15.5858 10.75 16C10.75 16.4142 10.4142 16.75 10 16.75H3C2.58579 16.75 2.25 16.4142 2.25 16Z", "fill": "white"}]]};

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

const SolarListDownMinimalistic = React.forwardRef((props, ref) => {
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

SolarListDownMinimalistic.nodes = nodes;
SolarListDownMinimalistic.iconName = iconName;
SolarListDownMinimalistic.category = category;

const ListDownMinimalisticOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarListDownMinimalistic, Object.assign({ ref, variant: 'outline' }, props));
});

const ListDownMinimalisticBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarListDownMinimalistic, Object.assign({ ref, variant: 'bold' }, props));
});

const ListDownMinimalisticBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarListDownMinimalistic, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const ListDownMinimalistic = SolarListDownMinimalistic;

module.exports = {
  iconName,
  category,
  nodes,
  SolarListDownMinimalistic,
  ListDownMinimalistic,
  ListDownMinimalisticOutline,
  ListDownMinimalisticBold,
  ListDownMinimalisticBoldDuotone,
  default: SolarListDownMinimalistic
};
