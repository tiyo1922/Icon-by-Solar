const React = require('react');

const iconName = 'routing-3';
const category = 'Map & Location';
const nodes = {"bold": [["circle", {"cx": "5", "cy": "5", "r": "3", "fill": "#1C274C"}], ["circle", {"cx": "19", "cy": "19", "r": "3", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M10.2501 5C10.2501 4.58579 10.5859 4.25 11.0001 4.25H16.132C18.8832 4.25 19.9295 7.843 17.6084 9.32007L7.19713 15.9454C6.14207 16.6168 6.61766 18.25 7.86821 18.25H11.1894L10.9698 18.0303C10.6769 17.7374 10.6769 17.2626 10.9698 16.9697C11.2627 16.6768 11.7375 16.6768 12.0304 16.9697L13.5304 18.4697C13.8233 18.7626 13.8233 19.2374 13.5304 19.5303L12.0304 21.0303C11.7375 21.3232 11.2627 21.3232 10.9698 21.0303C10.6769 20.7374 10.6769 20.2626 10.9698 19.9697L11.1894 19.75H7.86821C5.11697 19.75 4.07071 16.157 6.39181 14.6799L16.8031 8.05458C17.8581 7.38318 17.3825 5.75 16.132 5.75H11.0001C10.5859 5.75 10.2501 5.41421 10.2501 5Z", "fill": "#1C274C"}]], "bold-duotone": [["circle", {"opacity": "0.5", "cx": "5", "cy": "5", "r": "3", "fill": "#1C274C"}], ["circle", {"opacity": "0.5", "cx": "19", "cy": "19", "r": "3", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M10.2501 5C10.2501 4.58579 10.5859 4.25 11.0001 4.25H16.132C18.8832 4.25 19.9295 7.843 17.6084 9.32007L7.19713 15.9454C6.14207 16.6168 6.61766 18.25 7.86821 18.25H11.1894L10.9698 18.0303C10.6769 17.7374 10.6769 17.2626 10.9698 16.9697C11.2627 16.6768 11.7375 16.6768 12.0304 16.9697L13.5304 18.4697C13.8233 18.7626 13.8233 19.2374 13.5304 19.5303L12.0304 21.0303C11.7375 21.3232 11.2627 21.3232 10.9698 21.0303C10.6769 20.7374 10.6769 20.2626 10.9698 19.9697L11.1894 19.75H7.86821C5.11697 19.75 4.07071 16.157 6.39181 14.6799L16.8031 8.05458C17.8581 7.38318 17.3825 5.75 16.132 5.75H11.0001C10.5859 5.75 10.2501 5.41421 10.2501 5Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M5 2.75C3.75736 2.75 2.75 3.75736 2.75 5C2.75 6.24264 3.75736 7.25 5 7.25C6.24264 7.25 7.25 6.24264 7.25 5C7.25 3.75736 6.24264 2.75 5 2.75ZM1.25 5C1.25 2.92893 2.92893 1.25 5 1.25C7.07107 1.25 8.75 2.92893 8.75 5C8.75 7.07107 7.07107 8.75 5 8.75C2.92893 8.75 1.25 7.07107 1.25 5ZM10.25 5C10.25 4.58579 10.5858 4.25 11 4.25H16.1319C18.8831 4.25 19.9294 7.843 17.6083 9.32007L7.19703 15.9454C6.14197 16.6168 6.61756 18.25 7.86812 18.25H11.1893L10.9697 18.0303C10.6768 17.7374 10.6768 17.2626 10.9697 16.9697C11.2626 16.6768 11.7374 16.6768 12.0303 16.9697L13.5303 18.4697C13.8232 18.7626 13.8232 19.2374 13.5303 19.5303L12.0303 21.0303C11.7374 21.3232 11.2626 21.3232 10.9697 21.0303C10.6768 20.7374 10.6768 20.2626 10.9697 19.9697L11.1893 19.75H7.86812C5.11688 19.75 4.07062 16.157 6.39172 14.6799L16.803 8.05458C17.858 7.38318 17.3824 5.75 16.1319 5.75H11C10.5858 5.75 10.25 5.41421 10.25 5ZM19 16.75C17.7574 16.75 16.75 17.7574 16.75 19C16.75 20.2426 17.7574 21.25 19 21.25C20.2426 21.25 21.25 20.2426 21.25 19C21.25 17.7574 20.2426 16.75 19 16.75ZM15.25 19C15.25 16.9289 16.9289 15.25 19 15.25C21.0711 15.25 22.75 16.9289 22.75 19C22.75 21.0711 21.0711 22.75 19 22.75C16.9289 22.75 15.25 21.0711 15.25 19Z", "fill": "white"}]]};

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

const Routing3Outline = React.forwardRef((props, ref) => {
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

const Routing3Bold = React.forwardRef((props, ref) => {
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

const Routing3BoldDuotone = React.forwardRef((props, ref) => {
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

const Routing3 = Routing3Outline;

module.exports = {
  iconName,
  category,
  nodes,
  Routing3,
  Routing3Outline,
  Routing3Bold,
  Routing3BoldDuotone,
  default: Routing3
};
