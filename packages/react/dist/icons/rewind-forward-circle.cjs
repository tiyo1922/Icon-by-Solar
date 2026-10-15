const React = require('react');

const iconName = 'rewind-forward-circle';
const category = 'Video, Audio, Sound';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.436 7.46105C13.0989 7.22029 12.6305 7.29836 12.3898 7.63542C12.149 7.97248 12.2271 8.44089 12.5641 8.68165L15.7857 10.9828C16.4836 11.4813 16.4836 12.5186 15.7857 13.0171L12.5641 15.3182C12.2271 15.5589 12.149 16.0274 12.3898 16.3644C12.6305 16.7015 13.0989 16.7795 13.436 16.5388L16.6575 14.2377C18.193 13.1409 18.193 10.8589 16.6575 9.76215L13.436 7.46105ZM7.5 15.1318V8.86887C7.5 8.07017 8.39015 7.59378 9.0547 8.03682L13.7519 11.1683C14.3457 11.5641 14.3457 12.4366 13.7519 12.8324L9.0547 15.9639C8.39014 16.4069 7.5 15.9305 7.5 15.1318Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", "fill": "#1C274C"}], ["path", {"d": "M13.4365 7.46007C13.0994 7.21931 12.631 7.29738 12.3902 7.63444C12.1495 7.9715 12.2276 8.43991 12.5646 8.68067L15.7862 10.9818C16.4841 11.4803 16.4841 12.5176 15.7862 13.0161L12.5646 15.3172C12.2276 15.558 12.1495 16.0264 12.3902 16.3634C12.631 16.7005 13.0994 16.7786 13.4365 16.5378L16.658 14.2367C18.1935 13.14 18.1935 10.8579 16.658 9.76118L13.4365 7.46007Z", "fill": "#1C274C"}], ["path", {"d": "M7.50049 15.1309V8.86789C7.50049 8.0692 8.39063 7.59281 9.05519 8.03584L13.7524 11.1673C14.3461 11.5631 14.3461 12.4356 13.7524 12.8314L9.05519 15.9629C8.39063 16.4059 7.50049 15.9296 7.50049 15.1309Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM8.64531 8.73976C8.47984 8.62157 8.25 8.73985 8.25 8.94319V15.0568C8.25 15.2602 8.47984 15.3784 8.64531 15.2602L12.9248 12.2034C13.0644 12.1037 13.0644 11.8963 12.9248 11.7966L8.64531 8.73976ZM6.75 8.94319C6.75 7.51979 8.3589 6.69182 9.51717 7.51916L13.7967 10.576C14.7738 11.2739 14.7738 12.7261 13.7967 13.424L9.51717 16.4808C8.3589 17.3082 6.75 16.4802 6.75 15.0568V8.94319ZM12.3897 7.6355C12.6305 7.29844 13.0989 7.22037 13.4359 7.46113L16.6575 9.76223C18.1929 10.859 18.1929 13.141 16.6575 14.2378L13.4359 16.5389C13.0989 16.7796 12.6305 16.7016 12.3897 16.3645C12.1489 16.0274 12.227 15.559 12.5641 15.3183L15.7856 13.0172C16.4836 12.5186 16.4836 11.4814 15.7856 10.9828L12.5641 8.68173C12.227 8.44097 12.1489 7.97256 12.3897 7.6355Z", "fill": "white"}]]};

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

const SolarRewindForwardCircle = React.forwardRef((props, ref) => {
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

SolarRewindForwardCircle.nodes = nodes;
SolarRewindForwardCircle.iconName = iconName;
SolarRewindForwardCircle.category = category;

const RewindForwardCircleOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarRewindForwardCircle, Object.assign({ ref, variant: 'outline' }, props));
});

const RewindForwardCircleBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarRewindForwardCircle, Object.assign({ ref, variant: 'bold' }, props));
});

const RewindForwardCircleBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarRewindForwardCircle, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const RewindForwardCircle = SolarRewindForwardCircle;

module.exports = {
  iconName,
  category,
  nodes,
  SolarRewindForwardCircle,
  RewindForwardCircle,
  RewindForwardCircleOutline,
  RewindForwardCircleBold,
  RewindForwardCircleBoldDuotone,
  default: SolarRewindForwardCircle
};
