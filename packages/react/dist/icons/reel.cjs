const React = require('react');

const iconName = 'reel';
const category = 'Video, Audio, Sound';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M2 12C2 17.5228 6.47715 22 12 22H21.25C21.6642 22 22 21.6642 22 21.25C22 20.8358 21.6642 20.5 21.25 20.5H17.2704C20.1097 18.7358 22 15.5887 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM12 9C12.8284 9 13.5 8.32843 13.5 7.5C13.5 6.67157 12.8284 6 12 6C11.1716 6 10.5 6.67157 10.5 7.5C10.5 8.32843 11.1716 9 12 9ZM12 18C12.8284 18 13.5 17.3284 13.5 16.5C13.5 15.6716 12.8284 15 12 15C11.1716 15 10.5 15.6716 10.5 16.5C10.5 17.3284 11.1716 18 12 18ZM7.5 10.5C8.32843 10.5 9 11.1716 9 12C9 12.8284 8.32843 13.5 7.5 13.5C6.67157 13.5 6 12.8284 6 12C6 11.1716 6.67157 10.5 7.5 10.5ZM18 12C18 11.1716 17.3284 10.5 16.5 10.5C15.6716 10.5 15 11.1716 15 12C15 12.8284 15.6716 13.5 16.5 13.5C17.3284 13.5 18 12.8284 18 12Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "fillRule": "evenodd", "clipRule": "evenodd", "d": "M2 12C2 17.5228 6.47715 22 12 22H21.25C21.6642 22 22 21.6642 22 21.25C22 20.8358 21.6642 20.5 21.25 20.5H17.2704C20.1097 18.7358 22 15.5887 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z", "fill": "#1C274C"}], ["path", {"d": "M16.5 10.5C17.3284 10.5 18 11.1716 18 12C18 12.8284 17.3284 13.5 16.5 13.5C15.6716 13.5 15 12.8284 15 12C15 11.1716 15.6716 10.5 16.5 10.5Z", "fill": "#1C274C"}], ["path", {"d": "M9 12C9 11.1716 8.32843 10.5 7.5 10.5C6.67157 10.5 6 11.1716 6 12C6 12.8284 6.67157 13.5 7.5 13.5C8.32843 13.5 9 12.8284 9 12Z", "fill": "#1C274C"}], ["path", {"d": "M13.5 7.5C13.5 8.32843 12.8284 9 12 9C11.1716 9 10.5 8.32843 10.5 7.5C10.5 6.67157 11.1716 6 12 6C12.8284 6 13.5 6.67157 13.5 7.5Z", "fill": "#1C274C"}], ["path", {"d": "M13.5 16.5C13.5 17.3284 12.8284 18 12 18C11.1716 18 10.5 17.3284 10.5 16.5C10.5 15.6716 11.1716 15 12 15C12.8284 15 13.5 15.6716 13.5 16.5Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM17.4805 21.25C20.6354 19.3767 22.75 15.9353 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22C22.75 21.5858 22.4142 21.25 22 21.25H17.4805ZM12 6.75C11.5858 6.75 11.25 7.08579 11.25 7.5C11.25 7.91421 11.5858 8.25 12 8.25C12.4142 8.25 12.75 7.91421 12.75 7.5C12.75 7.08579 12.4142 6.75 12 6.75ZM9.75 7.5C9.75 6.25736 10.7574 5.25 12 5.25C13.2426 5.25 14.25 6.25736 14.25 7.5C14.25 8.74264 13.2426 9.75 12 9.75C10.7574 9.75 9.75 8.74264 9.75 7.5ZM7.5 11.25C7.08579 11.25 6.75 11.5858 6.75 12C6.75 12.4142 7.08579 12.75 7.5 12.75C7.91421 12.75 8.25 12.4142 8.25 12C8.25 11.5858 7.91421 11.25 7.5 11.25ZM5.25 12C5.25 10.7574 6.25736 9.75 7.5 9.75C8.74264 9.75 9.75 10.7574 9.75 12C9.75 13.2426 8.74264 14.25 7.5 14.25C6.25736 14.25 5.25 13.2426 5.25 12ZM16.5 11.25C16.0858 11.25 15.75 11.5858 15.75 12C15.75 12.4142 16.0858 12.75 16.5 12.75C16.9142 12.75 17.25 12.4142 17.25 12C17.25 11.5858 16.9142 11.25 16.5 11.25ZM14.25 12C14.25 10.7574 15.2574 9.75 16.5 9.75C17.7426 9.75 18.75 10.7574 18.75 12C18.75 13.2426 17.7426 14.25 16.5 14.25C15.2574 14.25 14.25 13.2426 14.25 12ZM12 15.75C11.5858 15.75 11.25 16.0858 11.25 16.5C11.25 16.9142 11.5858 17.25 12 17.25C12.4142 17.25 12.75 16.9142 12.75 16.5C12.75 16.0858 12.4142 15.75 12 15.75ZM9.75 16.5C9.75 15.2574 10.7574 14.25 12 14.25C13.2426 14.25 14.25 15.2574 14.25 16.5C14.25 17.7426 13.2426 18.75 12 18.75C10.7574 18.75 9.75 17.7426 9.75 16.5Z", "fill": "white"}]]};

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

const SolarReel = React.forwardRef((props, ref) => {
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

SolarReel.nodes = nodes;
SolarReel.iconName = iconName;
SolarReel.category = category;

const ReelOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarReel, Object.assign({ ref, variant: 'outline' }, props));
});

const ReelBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarReel, Object.assign({ ref, variant: 'bold' }, props));
});

const ReelBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarReel, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const Reel = SolarReel;

module.exports = {
  iconName,
  category,
  nodes,
  SolarReel,
  Reel,
  ReelOutline,
  ReelBold,
  ReelBoldDuotone,
  default: SolarReel
};
