const React = require('react');

const iconName = 'palette-round';
const category = 'Design, Tools';
const nodes = {"bold": [["path", {"d": "M17.8994 22C20.1086 22 21.8994 20.2091 21.8994 18C21.8994 15.7909 20.1086 14 17.8994 14H17.6797L11.878 19.798C11.636 20.0399 11.5 20.3391 11.5 20.6813C11.5 21.3936 12.0774 22 12.7897 22H17.8994Z", "fill": "#1C274C"}], ["path", {"d": "M13.2839 4.95882L12.2291 6.01357C11.7633 6.48107 11.5012 7.11381 11.5 7.7738L11.5 16.0119C11.5 17.0666 11.5 17.5939 11.8135 17.7199C12.1271 17.8459 12.492 17.4653 13.2219 16.704L19.0599 10.6144C20.5819 9.02691 20.5554 6.51391 19.0003 4.95883C17.4218 3.38026 14.8624 3.38026 13.2839 4.95882Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M10 6V18C10 20.2091 8.20914 22 6 22C3.79086 22 2 20.2091 2 18V6C2 3.79086 3.79086 2 6 2C8.20914 2 10 3.79086 10 6ZM6 19C6.55228 19 7 18.5523 7 18C7 17.4477 6.55228 17 6 17C5.44772 17 5 17.4477 5 18C5 18.5523 5.44772 19 6 19Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"d": "M7 18C7 18.5523 6.55228 19 6 19C5.44772 19 5 18.5523 5 18C5 17.4477 5.44772 17 6 17C6.55228 17 7 17.4477 7 18Z", "fill": "#1C274C"}], ["path", {"opacity": "0.4", "d": "M10 6V18C10 20.2091 8.20914 22 6 22C3.79086 22 2 20.2091 2 18V6C2 3.79086 3.79086 2 6 2C8.20914 2 10 3.79086 10 6Z", "fill": "#1C274C"}], ["path", {"opacity": "0.7", "d": "M9.24756 20.335L13.2218 16.3607L19.0599 10.2712C20.5819 8.68364 20.5554 6.17065 19.0003 4.61556C17.4218 3.037 14.8624 3.037 13.2838 4.61556L10 7.89941V17.9993C10 18.8711 9.72106 19.6778 9.24756 20.335Z", "fill": "#1C274C"}], ["path", {"d": "M13.2218 16.3617L9.24756 20.336C9.72014 19.6801 9.99891 18.8752 10 18.0053C9.99711 20.212 8.20736 22 6 22H17.8994C20.1086 22 21.8994 20.2091 21.8994 18C21.8994 15.7909 20.1086 14 17.8994 14H15.486L13.2218 16.3617Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M1.25 6C1.25 3.37665 3.37665 1.25 6 1.25C8.62335 1.25 10.75 3.37665 10.75 6V6.43202L12.7833 4.39868C14.6383 2.54369 17.6459 2.54369 19.5008 4.39868C21.3558 6.25367 21.3558 9.26121 19.5008 11.1162L17.367 13.25H18C20.6234 13.25 22.75 15.3766 22.75 18C22.75 20.6234 20.6234 22.75 18 22.75H6C3.37665 22.75 1.25 20.6234 1.25 18V6ZM9.46412 21.25H18C19.7949 21.25 21.25 19.7949 21.25 18C21.25 16.2051 19.7949 14.75 18 14.75H15.867L9.8889 20.7281C9.7596 20.9121 9.61758 21.0865 9.46412 21.25ZM10.75 17.7457L18.4402 10.0555C19.7094 8.78633 19.7094 6.72855 18.4402 5.45934C17.171 4.19014 15.1132 4.19014 13.844 5.45934L10.75 8.55334V17.7457ZM6 2.75C4.20507 2.75 2.75 4.20507 2.75 6V18C2.75 19.7949 4.20507 21.25 6 21.25C7.79493 21.25 9.25 19.7949 9.25 18V6C9.25 4.20507 7.79493 2.75 6 2.75ZM6 17.75C5.86193 17.75 5.75 17.8619 5.75 18C5.75 18.1381 5.86193 18.25 6 18.25C6.13807 18.25 6.25 18.1381 6.25 18C6.25 17.8619 6.13807 17.75 6 17.75ZM4.25 18C4.25 17.0335 5.0335 16.25 6 16.25C6.9665 16.25 7.75 17.0335 7.75 18C7.75 18.9665 6.9665 19.75 6 19.75C5.0335 19.75 4.25 18.9665 4.25 18Z", "fill": "#FBFCFF"}]]};

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

const PaletteRoundOutline = React.forwardRef((props, ref) => {
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

const PaletteRoundBold = React.forwardRef((props, ref) => {
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

const PaletteRoundBoldDuotone = React.forwardRef((props, ref) => {
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

const PaletteRound = PaletteRoundOutline;

module.exports = {
  iconName,
  category,
  nodes,
  PaletteRound,
  PaletteRoundOutline,
  PaletteRoundBold,
  PaletteRoundBoldDuotone,
  default: PaletteRound
};
