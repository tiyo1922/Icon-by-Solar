const React = require('react');

const iconName = 'magnifer-zoom-out';
const category = 'Search';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M21.7883 21.7883C22.0706 21.506 22.0706 21.0483 21.7883 20.7659L18.1224 17.1002C19.4884 15.5007 20.3133 13.425 20.3133 11.1566C20.3133 6.09956 16.2137 2 11.1566 2C6.09956 2 2 6.09956 2 11.1566C2 16.2137 6.09956 20.3133 11.1566 20.3133C13.4249 20.3133 15.5006 19.4885 17.1 18.1225L20.7659 21.7883C21.0483 22.0706 21.506 22.0706 21.7883 21.7883ZM8.0241 11.1566C8.0241 10.7574 8.34775 10.4337 8.74699 10.4337H13.5663C13.9655 10.4337 14.2892 10.7574 14.2892 11.1566C14.2892 11.5559 13.9655 11.8795 13.5663 11.8795H8.74699C8.34775 11.8795 8.0241 11.5559 8.0241 11.1566Z", "fill": "#1C274C"}]], "bold-duotone": [["g", {"opacity": "0.5"}], ["path", {"d": "M11.1566 20.3133C16.2137 20.3133 20.3133 16.2137 20.3133 11.1566C20.3133 6.09956 16.2137 2 11.1566 2C6.09956 2 2 6.09956 2 11.1566C2 16.2137 6.09956 20.3133 11.1566 20.3133Z", "fill": "#1C274C"}], ["path", {"d": "M17.1001 18.1239C17.4671 17.8105 17.809 17.4685 18.1224 17.1016L21.7887 20.7679C22.071 21.0502 22.071 21.5079 21.7887 21.7902C21.5064 22.0725 21.0487 22.0725 20.7664 21.7902L17.1001 18.1239Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M8.02393 11.1565C8.02393 10.7572 8.34758 10.4336 8.74682 10.4336H13.5661C13.9653 10.4336 14.289 10.7572 14.289 11.1565C14.289 11.5557 13.9653 11.8794 13.5661 11.8794H8.74682C8.34758 11.8794 8.02393 11.5557 8.02393 11.1565Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M11.5 2.75C6.66751 2.75 2.75 6.66751 2.75 11.5C2.75 16.3325 6.66751 20.25 11.5 20.25C16.3325 20.25 20.25 16.3325 20.25 11.5C20.25 6.66751 16.3325 2.75 11.5 2.75ZM1.25 11.5C1.25 5.83908 5.83908 1.25 11.5 1.25C17.1609 1.25 21.75 5.83908 21.75 11.5C21.75 14.0605 20.8111 16.4017 19.2589 18.1982L22.5303 21.4697C22.8232 21.7626 22.8232 22.2374 22.5303 22.5303C22.2374 22.8232 21.7626 22.8232 21.4697 22.5303L18.1982 19.2589C16.4017 20.8111 14.0605 21.75 11.5 21.75C5.83908 21.75 1.25 17.1609 1.25 11.5ZM8.25 11.5C8.25 11.0858 8.58579 10.75 9 10.75H14C14.4142 10.75 14.75 11.0858 14.75 11.5C14.75 11.9142 14.4142 12.25 14 12.25H9C8.58579 12.25 8.25 11.9142 8.25 11.5Z", "fill": "white"}]]};

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

const MagniferZoomOutOutline = React.forwardRef((props, ref) => {
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

const MagniferZoomOutBold = React.forwardRef((props, ref) => {
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

const MagniferZoomOutBoldDuotone = React.forwardRef((props, ref) => {
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

const MagniferZoomOut = MagniferZoomOutOutline;

module.exports = {
  iconName,
  category,
  nodes,
  MagniferZoomOut,
  MagniferZoomOutOutline,
  MagniferZoomOutBold,
  MagniferZoomOutBoldDuotone,
  default: MagniferZoomOut
};
