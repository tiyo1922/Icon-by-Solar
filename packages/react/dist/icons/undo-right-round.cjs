const React = require('react');

const iconName = 'undo-right-round';
const category = 'Arrows Action';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M16.4697 3.46967C16.7626 3.17678 17.2374 3.17678 17.5303 3.46967L20.5303 6.46967C20.8232 6.76256 20.8232 7.23744 20.5303 7.53033L17.5303 10.5303C17.2374 10.8232 16.7626 10.8232 16.4697 10.5303C16.1768 10.2374 16.1768 9.76256 16.4697 9.46967L18.1893 7.75H9.00001C6.6528 7.75 4.75 9.65279 4.75 12C4.75 14.3472 6.65279 16.25 9 16.25H16C16.4142 16.25 16.75 16.5858 16.75 17C16.75 17.4142 16.4142 17.75 16 17.75H9C5.82436 17.75 3.25 15.1756 3.25 12C3.25 8.82436 5.82437 6.25 9.00001 6.25H18.1893L16.4697 4.53033C16.1768 4.23744 16.1768 3.76256 16.4697 3.46967Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M16.4697 3.46967C16.7626 3.17678 17.2374 3.17678 17.5303 3.46967L20.5303 6.46967C20.8232 6.76256 20.8232 7.23744 20.5303 7.53033L17.5303 10.5303C17.2374 10.8232 16.7626 10.8232 16.4697 10.5303C16.1768 10.2374 16.1768 9.76256 16.4697 9.46967L18.9393 7L16.4697 4.53033C16.1768 4.23744 16.1768 3.76256 16.4697 3.46967Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M18.1893 6.25H9.00001C5.82437 6.25 3.25 8.82436 3.25 12C3.25 15.1756 5.82436 17.75 9 17.75H16C16.4142 17.75 16.75 17.4142 16.75 17C16.75 16.5858 16.4142 16.25 16 16.25H9C6.65279 16.25 4.75 14.3472 4.75 12C4.75 9.65279 6.6528 7.75 9.00001 7.75H18.1893L18.9393 7L18.1893 6.25Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M16.4772 2.46225C16.7742 2.17351 17.249 2.1802 17.5377 2.47719L22.5377 7.62005C22.8208 7.91114 22.8208 8.37458 22.5377 8.66567L17.5377 13.8085C17.249 14.1055 16.7742 14.1122 16.4772 13.8235C16.1802 13.5347 16.1735 13.0599 16.4623 12.7629L20.2248 8.89286H8.25001C5.23222 8.89286 2.75 11.4152 2.75 14.5714C2.75 17.7277 5.23221 20.25 8.25 20.25H17C17.4142 20.25 17.75 20.5858 17.75 21C17.75 21.4142 17.4142 21.75 17 21.75H8.25C4.36423 21.75 1.25 18.516 1.25 14.5714C1.25001 10.6269 4.36424 7.39286 8.25001 7.39286H20.2248L16.4623 3.52281C16.1735 3.22582 16.1802 2.75099 16.4772 2.46225Z", "fill": "white"}]]};

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

const UndoRightRoundOutline = React.forwardRef((props, ref) => {
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

const UndoRightRoundBold = React.forwardRef((props, ref) => {
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

const UndoRightRoundBoldDuotone = React.forwardRef((props, ref) => {
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

const UndoRightRound = UndoRightRoundOutline;

module.exports = {
  iconName,
  category,
  nodes,
  UndoRightRound,
  UndoRightRoundOutline,
  UndoRightRoundBold,
  UndoRightRoundBoldDuotone,
  default: UndoRightRound
};
