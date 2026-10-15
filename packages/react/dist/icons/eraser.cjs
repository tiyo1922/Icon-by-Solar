const React = require('react');

const iconName = 'eraser';
const category = 'Text Formatting';
const nodes = {"bold": [["path", {"d": "M11.4096 5.50506C13.0796 3.83502 13.9146 3 14.9522 3C15.9899 3 16.8249 3.83502 18.4949 5.50506C20.165 7.1751 21 8.01013 21 9.04776C21 10.0854 20.165 10.9204 18.4949 12.5904L14.3017 16.7837L7.21634 9.69828L11.4096 5.50506Z", "fill": "#1C274C"}], ["path", {"d": "M6.1557 10.759L13.2411 17.8443L12.5904 18.4949C12.2127 18.8727 11.8777 19.2077 11.5734 19.5H21C21.4142 19.5 21.75 19.8358 21.75 20.25C21.75 20.6642 21.4142 21 21 21H9C7.98423 20.9747 7.1494 20.1393 5.50506 18.4949C3.83502 16.8249 3 15.9899 3 14.9522C3 13.9146 3.83502 13.0796 5.50506 11.4096L6.1557 10.759Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M14.9522 3C13.9146 3 13.0796 3.83502 11.4096 5.50506L6.5 10.4146L13.5854 17.5L18.4949 12.5904C20.165 10.9204 21 10.0854 21 9.04776C21 8.01013 20.165 7.1751 18.4949 5.50506C16.8249 3.83502 15.9899 3 14.9522 3Z", "fill": "#1C274C"}], ["path", {"d": "M13.5854 17.4994L6.5 10.4141L5.50506 11.409C3.83502 13.079 3 13.9141 3 14.9517C3 15.9893 3.83502 16.8243 5.50506 18.4944C7.1751 20.1644 8.01013 20.9994 9.04776 20.9994C10.0854 20.9994 10.9204 20.1644 12.5904 18.4944L13.5854 17.4994Z", "fill": "#1C274C"}], ["g", {"opacity": "0.5"}], ["path", {"d": "M9.03264 21H9C9.01086 21.0003 9.02174 20.9999 9.03264 21Z", "fill": "#1C274C"}], ["path", {"d": "M9.06287 21C9.85928 20.9938 10.5389 20.4938 11.5734 19.5L21 19.5C21.4142 19.5 21.75 19.8358 21.75 20.25C21.75 20.6642 21.4142 21 21 21H9.06287Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M13.0828 19.0632C12.6389 19.5072 12.2399 19.9062 11.8725 20.25H21C21.4142 20.25 21.75 20.5858 21.75 21C21.75 21.4142 21.4142 21.75 21 21.75H9C8.98166 21.75 8.96347 21.7493 8.94546 21.748C8.24156 21.7211 7.64439 21.4169 7.05863 20.97C6.47124 20.5218 5.81539 19.866 5.01269 19.0632L4.93674 18.9873C4.13402 18.1846 3.47815 17.5288 3.03 16.9414C2.56159 16.3274 2.25 15.701 2.25 14.9522C2.25 14.2035 2.56159 13.577 3.03 12.9631C3.47816 12.3757 4.13402 11.7199 4.93674 10.9172L10.9172 4.93674C11.7199 4.13403 12.3757 3.47815 12.9631 3.03C13.577 2.56159 14.2035 2.25 14.9522 2.25C15.701 2.25 16.3274 2.56159 16.9414 3.03C17.5288 3.47816 18.1846 4.13402 18.9873 4.93674L19.0632 5.01269C19.866 5.81539 20.5218 6.47124 20.97 7.05863C21.4384 7.67256 21.75 8.29902 21.75 9.04776C21.75 9.79649 21.4384 10.423 20.97 11.0369C20.5219 11.6243 19.866 12.2801 19.0633 13.0827L13.0828 19.0632ZM11.9399 6.03539C12.7899 5.18538 13.3752 4.60235 13.873 4.22253C14.3535 3.85592 14.6633 3.75 14.9522 3.75C15.2411 3.75 15.551 3.85592 16.0315 4.22253C16.5293 4.60235 17.1146 5.18538 17.9646 6.03539C18.8146 6.88541 19.3977 7.47069 19.7775 7.9685C20.1441 8.449 20.25 8.75886 20.25 9.04776C20.25 9.33665 20.1441 9.64651 19.7775 10.127C19.3977 10.6248 18.8146 11.2101 17.9646 12.0601L13.7713 16.2534L7.74662 10.2287L11.9399 6.03539ZM9.04776 20.25C9.33665 20.25 9.64651 20.1441 10.127 19.7775C10.6248 19.3977 11.2101 18.8146 12.0601 17.9646L12.7107 17.314L6.68596 11.2893L6.03539 11.9399C5.18538 12.7899 4.60235 13.3752 4.22253 13.873C3.85592 14.3535 3.75 14.6633 3.75 14.9522C3.75 15.2411 3.85592 15.551 4.22253 16.0315C4.60235 16.5293 5.18538 17.1146 6.03539 17.9646C6.88541 18.8146 7.47069 19.3977 7.9685 19.7775C8.449 20.1441 8.75886 20.25 9.04776 20.25Z", "fill": "white"}]]};

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

const EraserOutline = React.forwardRef((props, ref) => {
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

const EraserBold = React.forwardRef((props, ref) => {
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

const EraserBoldDuotone = React.forwardRef((props, ref) => {
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

const Eraser = EraserOutline;

module.exports = {
  iconName,
  category,
  nodes,
  Eraser,
  EraserOutline,
  EraserBold,
  EraserBoldDuotone,
  default: Eraser
};
