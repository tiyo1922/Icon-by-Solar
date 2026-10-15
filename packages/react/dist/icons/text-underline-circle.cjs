const React = require('react');

const iconName = 'text-underline-circle';
const category = 'Text Formatting';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM7.25 17C7.25 16.5858 7.58579 16.25 8 16.25H16C16.4142 16.25 16.75 16.5858 16.75 17C16.75 17.4142 16.4142 17.75 16 17.75H8C7.58579 17.75 7.25 17.4142 7.25 17ZM8.75 7C8.75 6.58579 8.41421 6.25 8 6.25C7.58579 6.25 7.25 6.58579 7.25 7V10C7.25 12.6234 9.37665 14.75 12 14.75C14.6234 14.75 16.75 12.6234 16.75 10V7C16.75 6.58579 16.4142 6.25 16 6.25C15.5858 6.25 15.25 6.58579 15.25 7V10C15.25 11.7949 13.7949 13.25 12 13.25C10.2051 13.25 8.75 11.7949 8.75 10V7Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z", "fill": "#1C274C"}], ["path", {"d": "M7.25 17C7.25 16.5858 7.58579 16.25 8 16.25H16C16.4142 16.25 16.75 16.5858 16.75 17C16.75 17.4142 16.4142 17.75 16 17.75H8C7.58579 17.75 7.25 17.4142 7.25 17Z", "fill": "#1C274C"}], ["path", {"d": "M8.75 7C8.75 6.58579 8.41421 6.25 8 6.25C7.58579 6.25 7.25 6.58579 7.25 7V10C7.25 12.6234 9.37665 14.75 12 14.75C14.6234 14.75 16.75 12.6234 16.75 10V7C16.75 6.58579 16.4142 6.25 16 6.25C15.5858 6.25 15.25 6.58579 15.25 7V10C15.25 11.7949 13.7949 13.25 12 13.25C10.2051 13.25 8.75 11.7949 8.75 10V7Z", "fill": "#1C274C"}]], "outline": [["path", {"d": "M7.25 17C7.25 16.5858 7.58579 16.25 8 16.25H16C16.4142 16.25 16.75 16.5858 16.75 17C16.75 17.4142 16.4142 17.75 16 17.75H8C7.58579 17.75 7.25 17.4142 7.25 17Z", "fill": "white"}], ["path", {"d": "M8.75 7C8.75 6.58579 8.41421 6.25 8 6.25C7.58579 6.25 7.25 6.58579 7.25 7V10C7.25 12.6234 9.37665 14.75 12 14.75C14.6234 14.75 16.75 12.6234 16.75 10V7C16.75 6.58579 16.4142 6.25 16 6.25C15.5858 6.25 15.25 6.58579 15.25 7V10C15.25 11.7949 13.7949 13.25 12 13.25C10.2051 13.25 8.75 11.7949 8.75 10V7Z", "fill": "white"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75Z", "fill": "white"}]]};

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

const TextUnderlineCircleOutline = React.forwardRef((props, ref) => {
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

const TextUnderlineCircleBold = React.forwardRef((props, ref) => {
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

const TextUnderlineCircleBoldDuotone = React.forwardRef((props, ref) => {
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

const TextUnderlineCircle = TextUnderlineCircleOutline;

module.exports = {
  iconName,
  category,
  nodes,
  TextUnderlineCircle,
  TextUnderlineCircleOutline,
  TextUnderlineCircleBold,
  TextUnderlineCircleBoldDuotone,
  default: TextUnderlineCircle
};
