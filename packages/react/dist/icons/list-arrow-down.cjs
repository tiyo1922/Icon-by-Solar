const React = require('react');

const iconName = 'list-arrow-down';
const category = 'List';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H21C21.4142 5.25 21.75 5.58579 21.75 6C21.75 6.41421 21.4142 6.75 21 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6ZM2.25 10C2.25 9.58579 2.58579 9.25 3 9.25H21C21.4142 9.25 21.75 9.58579 21.75 10C21.75 10.4142 21.4142 10.75 21 10.75H3C2.58579 10.75 2.25 10.4142 2.25 10ZM2.25 14C2.25 13.5858 2.58579 13.25 3 13.25H11C11.4142 13.25 11.75 13.5858 11.75 14C11.75 14.4142 11.4142 14.75 11 14.75H3C2.58579 14.75 2.25 14.4142 2.25 14ZM17.5 13.25C17.9142 13.25 18.25 13.5858 18.25 14V18.1893L19.4697 16.9697C19.7626 16.6768 20.2374 16.6768 20.5303 16.9697C20.8232 17.2626 20.8232 17.7374 20.5303 18.0303L18.0303 20.5303C17.7374 20.8232 17.2626 20.8232 16.9697 20.5303L14.4697 18.0303C14.1768 17.7374 14.1768 17.2626 14.4697 16.9697C14.7626 16.6768 15.2374 16.6768 15.5303 16.9697L16.75 18.1893V14C16.75 13.5858 17.0858 13.25 17.5 13.25ZM2.25 18C2.25 17.5858 2.58579 17.25 3 17.25H11C11.4142 17.25 11.75 17.5858 11.75 18C11.75 18.4142 11.4142 18.75 11 18.75H3C2.58579 18.75 2.25 18.4142 2.25 18Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "fillRule": "evenodd", "clipRule": "evenodd", "d": "M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H21C21.4142 5.25 21.75 5.58579 21.75 6C21.75 6.41421 21.4142 6.75 21 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6ZM2.25 10C2.25 9.58579 2.58579 9.25 3 9.25H21C21.4142 9.25 21.75 9.58579 21.75 10C21.75 10.4142 21.4142 10.75 21 10.75H3C2.58579 10.75 2.25 10.4142 2.25 10ZM2.25 14C2.25 13.5858 2.58579 13.25 3 13.25H11C11.4142 13.25 11.75 13.5858 11.75 14C11.75 14.4142 11.4142 14.75 11 14.75H3C2.58579 14.75 2.25 14.4142 2.25 14ZM2.25 18C2.25 17.5858 2.58579 17.25 3 17.25H11C11.4142 17.25 11.75 17.5858 11.75 18C11.75 18.4142 11.4142 18.75 11 18.75H3C2.58579 18.75 2.25 18.4142 2.25 18Z", "fill": "#1C274C"}], ["path", {"d": "M17.5 13.25C17.9142 13.25 18.25 13.5858 18.25 14V18.1893L19.4697 16.9697C19.7626 16.6768 20.2374 16.6768 20.5303 16.9697C20.8232 17.2626 20.8232 17.7374 20.5303 18.0303L18.0303 20.5303C17.7374 20.8232 17.2626 20.8232 16.9697 20.5303L14.4697 18.0303C14.1768 17.7374 14.1768 17.2626 14.4697 16.9697C14.7626 16.6768 15.2374 16.6768 15.5303 16.9697L16.75 18.1893V14C16.75 13.5858 17.0858 13.25 17.5 13.25Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M2.25 5C2.25 4.58579 2.58579 4.25 3 4.25H21C21.4142 4.25 21.75 4.58579 21.75 5C21.75 5.41421 21.4142 5.75 21 5.75H3C2.58579 5.75 2.25 5.41421 2.25 5ZM2.25 9C2.25 8.58579 2.58579 8.25 3 8.25H21C21.4142 8.25 21.75 8.58579 21.75 9C21.75 9.41421 21.4142 9.75 21 9.75H3C2.58579 9.75 2.25 9.41421 2.25 9ZM2.25 13C2.25 12.5858 2.58579 12.25 3 12.25H11C11.4142 12.25 11.75 12.5858 11.75 13C11.75 13.4142 11.4142 13.75 11 13.75H3C2.58579 13.75 2.25 13.4142 2.25 13ZM17.5 12.25C17.9142 12.25 18.25 12.5858 18.25 13V17.1893L19.4697 15.9697C19.7626 15.6768 20.2374 15.6768 20.5303 15.9697C20.8232 16.2626 20.8232 16.7374 20.5303 17.0303L18.0303 19.5303C17.7374 19.8232 17.2626 19.8232 16.9697 19.5303L14.4697 17.0303C14.1768 16.7374 14.1768 16.2626 14.4697 15.9697C14.7626 15.6768 15.2374 15.6768 15.5303 15.9697L16.75 17.1893V13C16.75 12.5858 17.0858 12.25 17.5 12.25ZM2.25 17C2.25 16.5858 2.58579 16.25 3 16.25H11C11.4142 16.25 11.75 16.5858 11.75 17C11.75 17.4142 11.4142 17.75 11 17.75H3C2.58579 17.75 2.25 17.4142 2.25 17Z", "fill": "white"}]]};

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

const ListArrowDownOutline = React.forwardRef((props, ref) => {
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

const ListArrowDownBold = React.forwardRef((props, ref) => {
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

const ListArrowDownBoldDuotone = React.forwardRef((props, ref) => {
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

const ListArrowDown = ListArrowDownOutline;

module.exports = {
  iconName,
  category,
  nodes,
  ListArrowDown,
  ListArrowDownOutline,
  ListArrowDownBold,
  ListArrowDownBoldDuotone,
  default: ListArrowDown
};
