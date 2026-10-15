const React = require('react');

const iconName = 'arrow-left-up';
const category = 'Arrows';
const nodes = {"bold": [["path", {"d": "M18.5303 17.4697C18.8232 17.7626 18.8232 18.2374 18.5303 18.5303C18.2374 18.8232 17.7626 18.8232 17.4697 18.5303L10.5 11.5607L6.53033 15.5303C6.31583 15.7448 5.99324 15.809 5.71299 15.6929C5.43273 15.5768 5.25 15.3033 5.25 15V6C5.25 5.58579 5.58579 5.25 6 5.25L15 5.25C15.3033 5.25 15.5768 5.43273 15.6929 5.71299C15.809 5.99324 15.7448 6.31583 15.5303 6.53033L11.5607 10.5L18.5303 17.4697Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M6.53033 15.5303C6.31583 15.7448 5.99324 15.809 5.71299 15.6929C5.43273 15.5768 5.25 15.3033 5.25 15V6C5.25 5.58579 5.58579 5.25 6 5.25L15 5.25C15.3033 5.25 15.5768 5.43273 15.6929 5.71299C15.809 5.99324 15.7448 6.31583 15.5303 6.53033L6.53033 15.5303Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M18.5303 17.4697C18.8232 17.7626 18.8232 18.2374 18.5303 18.5303C18.2374 18.8232 17.7626 18.8232 17.4697 18.5303L10.5 11.5607L11.5607 10.5L18.5303 17.4697Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M5.25 6C5.25 5.58579 5.58579 5.25 6 5.25H15C15.4142 5.25 15.75 5.58579 15.75 6C15.75 6.41421 15.4142 6.75 15 6.75H7.81066L18.5303 17.4697C18.8232 17.7626 18.8232 18.2374 18.5303 18.5303C18.2374 18.8232 17.7626 18.8232 17.4697 18.5303L6.75 7.81066V15C6.75 15.4142 6.41421 15.75 6 15.75C5.58579 15.75 5.25 15.4142 5.25 15V6Z", "fill": "white"}]]};

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

const ArrowLeftUpOutline = React.forwardRef((props, ref) => {
  const { size = 24, color = 'currentColor', secondaryColor, secondaryOpacity, className, style, title, ...rest } = props;
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
  }, rest), title && React.createElement('title', null, title), ...renderNodes(nodes['outline'] || [], color, secondaryColor, secondaryOpacity));
});

const ArrowLeftUpBold = React.forwardRef((props, ref) => {
  const { size = 24, color = 'currentColor', secondaryColor, secondaryOpacity, className, style, title, ...rest } = props;
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
  }, rest), title && React.createElement('title', null, title), ...renderNodes(nodes['bold'] || [], color, secondaryColor, secondaryOpacity));
});

const ArrowLeftUpBoldDuotone = React.forwardRef((props, ref) => {
  const { size = 24, color = 'currentColor', secondaryColor, secondaryOpacity, className, style, title, ...rest } = props;
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
  }, rest), title && React.createElement('title', null, title), ...renderNodes(nodes['bold-duotone'] || [], color, secondaryColor, secondaryOpacity));
});

const ArrowLeftUp = ArrowLeftUpOutline;

module.exports = {
  iconName,
  category,
  nodes,
  ArrowLeftUp,
  ArrowLeftUpOutline,
  ArrowLeftUpBold,
  ArrowLeftUpBoldDuotone,
  default: ArrowLeftUp
};
