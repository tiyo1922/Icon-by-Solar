const React = require('react');

const iconName = 'minimize';
const category = 'Arrows Action';
const nodes = {"bold": [["path", {"d": "M20.8571 9.75C21.2714 9.75 21.6071 9.41421 21.6071 9C21.6071 8.58579 21.2714 8.25 20.8571 8.25H16.8107L22.5303 2.53033C22.8232 2.23744 22.8232 1.76256 22.5303 1.46967C22.2374 1.17678 21.7626 1.17678 21.4697 1.46967L15.75 7.18934V3.14286C15.75 2.72864 15.4142 2.39286 15 2.39286C14.5858 2.39286 14.25 2.72864 14.25 3.14286V9C14.25 9.41421 14.5858 9.75 15 9.75H20.8571Z", "fill": "#1C274C"}], ["path", {"d": "M3.14286 14.25C2.72864 14.25 2.39286 14.5858 2.39286 15C2.39286 15.4142 2.72864 15.75 3.14286 15.75H7.18934L1.46967 21.4697C1.17678 21.7626 1.17678 22.2374 1.46967 22.5303C1.76256 22.8232 2.23744 22.8232 2.53033 22.5303L8.25 16.8107V20.8571C8.25 21.2714 8.58579 21.6071 9 21.6071C9.41421 21.6071 9.75 21.2714 9.75 20.8571V15C9.75 14.5858 9.41421 14.25 9 14.25H3.14286Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.6", "fillRule": "evenodd", "clipRule": "evenodd", "d": "M2.39286 15C2.39286 14.5858 2.72864 14.25 3.14286 14.25H9C9.41421 14.25 9.75 14.5858 9.75 15V20.8571C9.75 21.2714 9.41421 21.6071 9 21.6071C8.58579 21.6071 8.25 21.2714 8.25 20.8571V16.8107L2.53033 22.5303C2.23744 22.8232 1.76256 22.8232 1.46967 22.5303C1.17678 22.2374 1.17678 21.7626 1.46967 21.4697L7.18934 15.75H3.14286C2.72864 15.75 2.39286 15.4142 2.39286 15Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M21.6071 9C21.6071 9.41421 21.2714 9.75 20.8571 9.75H15C14.5858 9.75 14.25 9.41421 14.25 9V3.14286C14.25 2.72864 14.5858 2.39286 15 2.39286C15.4142 2.39286 15.75 2.72864 15.75 3.14286V7.18934L21.4697 1.46967C21.7626 1.17678 22.2374 1.17678 22.5303 1.46967C22.8232 1.76256 22.8232 2.23744 22.5303 2.53033L16.8107 8.25H20.8571C21.2714 8.25 21.6071 8.58579 21.6071 9Z", "fill": "#1C274C"}]], "outline": [["path", {"d": "M20.8571 9.75C21.2714 9.75 21.6071 9.41421 21.6071 9C21.6071 8.58579 21.2714 8.25 20.8571 8.25H16.8107L22.5303 2.53033C22.8232 2.23744 22.8232 1.76256 22.5303 1.46967C22.2374 1.17678 21.7626 1.17678 21.4697 1.46967L15.75 7.18934V3.14286C15.75 2.72864 15.4142 2.39286 15 2.39286C14.5858 2.39286 14.25 2.72864 14.25 3.14286V9C14.25 9.41421 14.5858 9.75 15 9.75H20.8571Z", "fill": "white"}], ["path", {"d": "M3.14286 14.25C2.72864 14.25 2.39286 14.5858 2.39286 15C2.39286 15.4142 2.72864 15.75 3.14286 15.75H7.18934L1.46967 21.4697C1.17678 21.7626 1.17678 22.2374 1.46967 22.5303C1.76256 22.8232 2.23744 22.8232 2.53033 22.5303L8.25 16.8107V20.8571C8.25 21.2714 8.58579 21.6071 9 21.6071C9.41421 21.6071 9.75 21.2714 9.75 20.8571V15C9.75 14.5858 9.41421 14.25 9 14.25H3.14286Z", "fill": "white"}]]};

function renderNodes(variantNodes, variant, color = 'currentColor', secondaryColor, secondaryOpacity) {
  return variantNodes.map(([tag, attrs], index) => {
    const computed = Object.assign({}, attrs);
    if (color !== 'original' && color !== 'source') {
      if ('opacity' in attrs) {
        computed.opacity = secondaryOpacity !== undefined ? secondaryOpacity : attrs.opacity;
        computed.fill = secondaryColor || color;
      } else if (attrs.fill && attrs.fill !== 'none' && attrs.fill !== 'transparent') {
        const isWhite = attrs.fill === 'white' || attrs.fill === '#FEFEFF' || attrs.fill === '#FBFCFF';
        if (!(variant === 'bold' && isWhite && variantNodes.length > 1)) computed.fill = color;
      }
      if (attrs.stroke && attrs.stroke !== 'none') computed.stroke = color;
    }
    return React.createElement(tag, Object.assign({ key: index }, computed));
  });
}

const SolarMinimize = React.forwardRef((props, ref) => {
  const {
    variant = 'outline',
    size = 24,
    color = 'currentColor',
    secondaryColor,
    secondaryOpacity,
    className,
    style,
    title,
    ...rest
  } = props;
  const normVariant = variant === 'bold_duotone' ? 'bold-duotone' : variant.toLowerCase();
  const variantNodes = nodes[normVariant] || nodes['outline'] || [];
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
  }, rest), title && React.createElement('title', null, title), ...renderNodes(variantNodes, normVariant, color, secondaryColor, secondaryOpacity));
});

SolarMinimize.nodes = nodes;
SolarMinimize.iconName = iconName;
SolarMinimize.category = category;

const MinimizeOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarMinimize, Object.assign({ ref, variant: 'outline' }, props));
});

const MinimizeBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarMinimize, Object.assign({ ref, variant: 'bold' }, props));
});

const MinimizeBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarMinimize, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const Minimize = SolarMinimize;

module.exports = {
  iconName,
  category,
  nodes,
  SolarMinimize,
  Minimize,
  MinimizeOutline,
  MinimizeBold,
  MinimizeBoldDuotone,
  default: SolarMinimize
};
