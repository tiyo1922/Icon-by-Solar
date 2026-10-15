const React = require('react');

const iconName = 'repeat';
const category = 'Video, Audio, Sound';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M8.46967 2.46967C8.76256 2.17678 9.23744 2.17678 9.53033 2.46967L11.5303 4.46967C11.7448 4.68417 11.809 5.00676 11.6929 5.28701C11.5768 5.56727 11.3033 5.75 11 5.75H9C5.54822 5.75 2.75 8.54822 2.75 12C2.75 15.4517 5.54846 18.25 9.00028 18.25H9.5C9.91421 18.25 10.25 18.5858 10.25 19C10.25 19.4142 9.91421 19.75 9.5 19.75H9.00028C4.72011 19.75 1.25 16.2802 1.25 12C1.25 7.71979 4.71979 4.25 9 4.25H9.18934L8.46967 3.53033C8.17678 3.23744 8.17678 2.76256 8.46967 2.46967ZM13.75 5C13.75 4.58579 14.0858 4.25 14.5 4.25H15C19.2802 4.25 22.75 7.71979 22.75 12C22.75 16.2802 19.2802 19.75 15 19.75H14.8107L15.5303 20.4697C15.8232 20.7626 15.8232 21.2374 15.5303 21.5303C15.2374 21.8232 14.7626 21.8232 14.4697 21.5303L12.4697 19.5303C12.2552 19.3158 12.191 18.9932 12.3071 18.713C12.4232 18.4327 12.6967 18.25 13 18.25H15C18.4518 18.25 21.25 15.4518 21.25 12C21.25 8.54822 18.4518 5.75 15 5.75H14.5C14.0858 5.75 13.75 5.41421 13.75 5Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M9.53033 2.46967C9.23744 2.17678 8.76256 2.17678 8.46967 2.46967C8.17678 2.76256 8.17678 3.23744 8.46967 3.53033L9.18934 4.25H9C4.71979 4.25 1.25 7.71979 1.25 12C1.25 16.2802 4.72011 19.75 9.00028 19.75H9.5C9.91421 19.75 10.25 19.4142 10.25 19C10.25 18.5858 9.91421 18.25 9.5 18.25H9.00028C5.54846 18.25 2.75 15.4517 2.75 12C2.75 8.54822 5.54822 5.75 9 5.75H11C11.3033 5.75 11.5768 5.56727 11.6929 5.28701C11.809 5.00676 11.7448 4.68417 11.5303 4.46967L9.53033 2.46967Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M14.5 4.25C14.0858 4.25 13.75 4.58579 13.75 5C13.75 5.41421 14.0858 5.75 14.5 5.75H15C18.4518 5.75 21.25 8.54822 21.25 12C21.25 15.4518 18.4518 18.25 15 18.25H13C12.6967 18.25 12.4232 18.4327 12.3071 18.713C12.191 18.9932 12.2552 19.3158 12.4697 19.5303L14.4697 21.5303C14.7626 21.8232 15.2375 21.8232 15.5304 21.5303C15.8232 21.2374 15.8232 20.7626 15.5304 20.4697L14.8107 19.75H15C19.2802 19.75 22.75 16.2802 22.75 12C22.75 7.71979 19.2802 4.25 15 4.25H14.5Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M8.46967 2.46967C8.76256 2.17678 9.23744 2.17678 9.53033 2.46967L11.5303 4.46967C11.7448 4.68417 11.809 5.00676 11.6929 5.28701C11.5768 5.56727 11.3033 5.75 11 5.75H9C5.54822 5.75 2.75 8.54822 2.75 12C2.75 15.4517 5.54846 18.25 9.00028 18.25H9.5C9.91421 18.25 10.25 18.5858 10.25 19C10.25 19.4142 9.91421 19.75 9.5 19.75H9.00028C4.72011 19.75 1.25 16.2802 1.25 12C1.25 7.71979 4.71979 4.25 9 4.25H9.18934L8.46967 3.53033C8.17678 3.23744 8.17678 2.76256 8.46967 2.46967ZM13.75 5C13.75 4.58579 14.0858 4.25 14.5 4.25H15C19.2802 4.25 22.75 7.71979 22.75 12C22.75 16.2802 19.2802 19.75 15 19.75H14.8107L15.5303 20.4697C15.8232 20.7626 15.8232 21.2374 15.5303 21.5303C15.2374 21.8232 14.7626 21.8232 14.4697 21.5303L12.4697 19.5303C12.2552 19.3158 12.191 18.9932 12.3071 18.713C12.4232 18.4327 12.6967 18.25 13 18.25H15C18.4518 18.25 21.25 15.4518 21.25 12C21.25 8.54822 18.4518 5.75 15 5.75H14.5C14.0858 5.75 13.75 5.41421 13.75 5Z", "fill": "white"}]]};

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

const SolarRepeat = React.forwardRef((props, ref) => {
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

SolarRepeat.nodes = nodes;
SolarRepeat.iconName = iconName;
SolarRepeat.category = category;

const RepeatOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarRepeat, Object.assign({ ref, variant: 'outline' }, props));
});

const RepeatBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarRepeat, Object.assign({ ref, variant: 'bold' }, props));
});

const RepeatBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarRepeat, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const Repeat = SolarRepeat;

module.exports = {
  iconName,
  category,
  nodes,
  SolarRepeat,
  Repeat,
  RepeatOutline,
  RepeatBold,
  RepeatBoldDuotone,
  default: SolarRepeat
};
