const React = require('react');

const iconName = 'clipboard-remove';
const category = 'Notes';
const nodes = {"bold": [["path", {"d": "M8 3.5C8 2.67157 8.67157 2 9.5 2H14.5C15.3284 2 16 2.67157 16 3.5V4.5C16 5.32843 15.3284 6 14.5 6H9.5C8.67157 6 8 5.32843 8 4.5V3.5Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M6.5 4.03662C5.24209 4.10719 4.44798 4.30764 3.87868 4.87694C3 5.75562 3 7.16983 3 9.99826V15.9983C3 18.8267 3 20.2409 3.87868 21.1196C4.75736 21.9983 6.17157 21.9983 9 21.9983H15C17.8284 21.9983 19.2426 21.9983 20.1213 21.1196C21 20.2409 21 18.8267 21 15.9983V9.99826C21 7.16983 21 5.75562 20.1213 4.87694C19.552 4.30764 18.7579 4.10719 17.5 4.03662V4.5C17.5 6.15685 16.1569 7.5 14.5 7.5H9.5C7.84315 7.5 6.5 6.15685 6.5 4.5V4.03662ZM9.53035 10.4697C9.23746 10.1768 8.76259 10.1768 8.4697 10.4697C8.1768 10.7626 8.1768 11.2375 8.46969 11.5304L10.9394 14L8.46972 16.4697C8.17683 16.7626 8.17683 17.2375 8.46972 17.5304C8.76261 17.8232 9.23749 17.8232 9.53038 17.5304L12 15.0607L14.4697 17.5303C14.7626 17.8232 15.2374 17.8232 15.5303 17.5303C15.8232 17.2374 15.8232 16.7626 15.5303 16.4697L13.0607 14L15.5304 11.5304C15.8232 11.2375 15.8232 10.7626 15.5304 10.4697C15.2375 10.1768 14.7626 10.1768 14.4697 10.4697L12 12.9394L9.53035 10.4697Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"d": "M8 3.5C8 2.67157 8.67157 2 9.5 2H14.5C15.3284 2 16 2.67157 16 3.5V4.5C16 5.32843 15.3284 6 14.5 6H9.5C8.67157 6 8 5.32843 8 4.5V3.5Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M6.5 4C5.24209 4.07073 4.44798 4.2716 3.87868 4.84212C3 5.72268 3 7.13991 3 9.97438V15.9872C3 18.8217 3 20.2389 3.87868 21.1194C4.75736 22 6.17157 22 9 22H15C17.8284 22 19.2426 22 20.1213 21.1194C21 20.2389 21 18.8217 21 15.9872V9.97438C21 7.13991 21 5.72268 20.1213 4.84212C19.552 4.2716 18.7579 4.07073 17.5 4V4.46437C17.5 6.12477 16.1569 7.47078 14.5 7.47078H9.5C7.84315 7.47078 6.5 6.12477 6.5 4.46437V4Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M8.46967 10.4697C8.76256 10.1768 9.23744 10.1768 9.53033 10.4697L12 12.9394L14.4697 10.4697C14.7626 10.1768 15.2374 10.1768 15.5303 10.4697C15.8232 10.7626 15.8232 11.2375 15.5303 11.5304L13.0607 14L15.5303 16.4696C15.8232 16.7625 15.8232 17.2374 15.5303 17.5303C15.2374 17.8232 14.7625 17.8232 14.4696 17.5303L12 15.0607L9.53036 17.5303C9.23746 17.8232 8.76259 17.8232 8.4697 17.5303C8.1768 17.2374 8.1768 16.7626 8.4697 16.4697L10.9394 14L8.46967 11.5303C8.17678 11.2374 8.17678 10.7626 8.46967 10.4697Z", "fill": "#1C274C"}]], "outline": [["path", {"d": "M9.53036 10.4697C9.23746 10.1768 8.76259 10.1768 8.4697 10.4697C8.1768 10.7626 8.1768 11.2375 8.4697 11.5304L10.9394 14L8.46972 16.4697C8.17683 16.7626 8.17683 17.2375 8.46972 17.5304C8.76262 17.8232 9.23749 17.8232 9.53038 17.5304L12 15.0607L14.4697 17.5303C14.7626 17.8232 15.2374 17.8232 15.5303 17.5303C15.8232 17.2374 15.8232 16.7626 15.5303 16.4697L13.0607 14L15.5304 11.5304C15.8233 11.2375 15.8233 10.7626 15.5304 10.4697C15.2375 10.1768 14.7626 10.1768 14.4697 10.4697L12 12.9394L9.53036 10.4697Z", "fill": "white"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M18.7236 3.41721C18.1602 3.31372 17.5004 3.27425 16.7372 3.25871C16.6168 2.12953 15.6611 1.25 14.5 1.25H9.5C8.33887 1.25 7.38317 2.12953 7.26279 3.25871C6.49963 3.27425 5.83977 3.31372 5.27635 3.41721C4.51836 3.55644 3.87328 3.82168 3.34835 4.34661C2.74643 4.94853 2.48754 5.7064 2.36652 6.60651C2.24996 7.47348 2.24998 8.57579 2.25 9.94337V16.0531C2.24998 17.4207 2.24996 18.5231 2.36652 19.39C2.48754 20.2901 2.74643 21.048 3.34835 21.6499C3.95027 22.2518 4.70814 22.5107 5.60825 22.6317C6.47522 22.7483 7.57754 22.7483 8.94513 22.7483H15.0549C16.4225 22.7483 17.5248 22.7483 18.3918 22.6317C19.2919 22.5107 20.0497 22.2518 20.6517 21.6499C21.2536 21.048 21.5125 20.2901 21.6335 19.39C21.75 18.523 21.75 17.4207 21.75 16.0531V9.94339C21.75 8.5758 21.75 7.47348 21.6335 6.60651C21.5125 5.7064 21.2536 4.94853 20.6517 4.34661C20.1267 3.82168 19.4816 3.55644 18.7236 3.41721ZM5.54735 4.89253C5.99332 4.81061 6.54668 4.77447 7.26476 4.75913C7.39326 5.87972 8.345 6.75 9.5 6.75H14.5C15.655 6.75 16.6067 5.87972 16.7352 4.75913C17.4533 4.77447 18.0067 4.81061 18.4527 4.89253C19.0195 4.99664 19.3475 5.16382 19.591 5.40727C19.8678 5.68403 20.0482 6.07261 20.1469 6.80638C20.2484 7.56173 20.25 8.56285 20.25 9.99826V15.9983C20.25 17.4337 20.2484 18.4348 20.1469 19.1901C20.0482 19.9239 19.8678 20.3125 19.591 20.5893C19.3142 20.866 18.9257 21.0465 18.1919 21.1451C17.4365 21.2467 16.4354 21.2483 15 21.2483H9C7.56459 21.2483 6.56347 21.2467 5.80812 21.1451C5.07435 21.0465 4.68577 20.866 4.40901 20.5893C4.13225 20.3125 3.9518 19.9239 3.85315 19.1901C3.75159 18.4348 3.75 17.4337 3.75 15.9983V9.99826C3.75 8.56285 3.75159 7.56173 3.85315 6.80638C3.9518 6.07261 4.13225 5.68403 4.40901 5.40727C4.65246 5.16382 4.98054 4.99664 5.54735 4.89253ZM9.5 2.75C9.08579 2.75 8.75 3.08579 8.75 3.5V4.5C8.75 4.91421 9.08579 5.25 9.5 5.25H14.5C14.9142 5.25 15.25 4.91421 15.25 4.5V3.5C15.25 3.08579 14.9142 2.75 14.5 2.75H9.5Z", "fill": "white"}]]};

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

const ClipboardRemoveOutline = React.forwardRef((props, ref) => {
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

const ClipboardRemoveBold = React.forwardRef((props, ref) => {
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

const ClipboardRemoveBoldDuotone = React.forwardRef((props, ref) => {
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

const ClipboardRemove = ClipboardRemoveOutline;

module.exports = {
  iconName,
  category,
  nodes,
  ClipboardRemove,
  ClipboardRemoveOutline,
  ClipboardRemoveBold,
  ClipboardRemoveBoldDuotone,
  default: ClipboardRemove
};
