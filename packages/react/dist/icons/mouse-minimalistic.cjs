const React = require('react');

const iconName = 'mouse-minimalistic';
const category = 'Electronic, Devices';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9ZM12 4.25C12.4142 4.25 12.75 4.58579 12.75 5V8C12.75 8.41421 12.4142 8.75 12 8.75C11.5858 8.75 11.25 8.41421 11.25 8V5C11.25 4.58579 11.5858 4.25 12 4.25Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M19 15V9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9V15C5 18.866 8.13401 22 12 22C15.866 22 19 18.866 19 15Z", "fill": "#1C274C"}], ["path", {"d": "M12 4.25C12.4142 4.25 12.75 4.58579 12.75 5V8C12.75 8.41421 12.4142 8.75 12 8.75C11.5858 8.75 11.25 8.41421 11.25 8V5C11.25 4.58579 11.5858 4.25 12 4.25Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M4.25 9C4.25 4.71979 7.71979 1.25 12 1.25C16.2802 1.25 19.75 4.71979 19.75 9V15C19.75 19.2802 16.2802 22.75 12 22.75C7.71979 22.75 4.25 19.2802 4.25 15V9ZM12 2.75C8.54822 2.75 5.75 5.54822 5.75 9V15C5.75 18.4518 8.54822 21.25 12 21.25C15.4518 21.25 18.25 18.4518 18.25 15V9C18.25 5.54822 15.4518 2.75 12 2.75ZM12 4.25C12.4142 4.25 12.75 4.58579 12.75 5V8C12.75 8.41421 12.4142 8.75 12 8.75C11.5858 8.75 11.25 8.41421 11.25 8V5C11.25 4.58579 11.5858 4.25 12 4.25Z", "fill": "white"}]]};

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

const MouseMinimalisticOutline = React.forwardRef((props, ref) => {
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

const MouseMinimalisticBold = React.forwardRef((props, ref) => {
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

const MouseMinimalisticBoldDuotone = React.forwardRef((props, ref) => {
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

const MouseMinimalistic = MouseMinimalisticOutline;

module.exports = {
  iconName,
  category,
  nodes,
  MouseMinimalistic,
  MouseMinimalisticOutline,
  MouseMinimalisticBold,
  MouseMinimalisticBoldDuotone,
  default: MouseMinimalistic
};
