const React = require('react');

const iconName = 'play';
const category = 'Video, Audio, Sound';
const nodes = {"bold": [["path", {"d": "M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M23 12C23 10.9648 22.4695 9.92953 21.4086 9.35258L8.59661 2.38548C6.53435 1.26402 4 2.72368 4 5.0329L4 12H23Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M8.59662 21.6145L21.4086 14.6474C22.4695 14.0705 23 13.0352 23 12H4L4 18.9671C4 21.2763 6.53435 22.736 8.59662 21.6145Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M7.23832 3.04347C5.65196 2.18082 3.75 3.3186 3.75 5.03201L3.75 18.9662C3.75 20.6796 5.65196 21.8174 7.23832 20.9548L20.0503 13.9877C21.6499 13.1178 21.6499 10.8805 20.0503 10.0106L7.23832 3.04347ZM2.25 5.03201C2.25 2.127 5.41674 0.345462 7.95491 1.72571L20.7669 8.69282C23.411 10.1307 23.411 13.8675 20.7669 15.3054L7.95491 22.2725C5.41674 23.6528 2.25 21.8712 2.25 18.9662L2.25 5.03201Z", "fill": "white"}]]};

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

const SolarPlay = React.forwardRef((props, ref) => {
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

SolarPlay.nodes = nodes;
SolarPlay.iconName = iconName;
SolarPlay.category = category;

const PlayOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarPlay, Object.assign({ ref, variant: 'outline' }, props));
});

const PlayBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarPlay, Object.assign({ ref, variant: 'bold' }, props));
});

const PlayBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarPlay, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const Play = SolarPlay;

module.exports = {
  iconName,
  category,
  nodes,
  SolarPlay,
  Play,
  PlayOutline,
  PlayBold,
  PlayBoldDuotone,
  default: SolarPlay
};
