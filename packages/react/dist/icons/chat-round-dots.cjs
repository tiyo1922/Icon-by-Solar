const React = require('react');

const iconName = 'chat-round-dots';
const category = 'Messages, Conversation';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M22 12C22 17.5228 17.5228 22 12 22C10.4003 22 8.88837 21.6244 7.54753 20.9565C7.19121 20.7791 6.78393 20.72 6.39939 20.8229L4.17335 21.4185C3.20701 21.677 2.32295 20.793 2.58151 19.8267L3.17712 17.6006C3.28001 17.2161 3.22094 16.8088 3.04346 16.4525C2.37562 15.1116 2 13.5997 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13ZM12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13ZM8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12C9 12.5523 8.55228 13 8 13Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 13.7596 1.41318 15.4228 2.14781 16.8977C2.34303 17.2897 2.40801 17.7377 2.29483 18.1607L1.63966 20.6093C1.35525 21.6723 2.32772 22.6447 3.39068 22.3603L5.83932 21.7052C6.26233 21.592 6.71033 21.657 7.10228 21.8522C8.5772 22.5868 10.2404 23 12 23Z", "fill": "#1C274C"}], ["path", {"d": "M10.9 11.9984C10.9 12.606 11.3925 13.0984 12 13.0984C12.6075 13.0984 13.1 12.606 13.1 11.9984C13.1 11.3909 12.6075 10.8984 12 10.8984C11.3925 10.8984 10.9 11.3909 10.9 11.9984Z", "fill": "#1C274C"}], ["path", {"d": "M6.5 11.9984C6.5 12.606 6.99249 13.0984 7.6 13.0984C8.20751 13.0984 8.7 12.606 8.7 11.9984C8.7 11.3909 8.20751 10.8984 7.6 10.8984C6.99249 10.8984 6.5 11.3909 6.5 11.9984Z", "fill": "#1C274C"}], ["path", {"d": "M15.3 11.9984C15.3 12.606 15.7925 13.0984 16.4 13.0984C17.0075 13.0984 17.5 12.606 17.5 11.9984C17.5 11.3909 17.0075 10.8984 16.4 10.8984C15.7925 10.8984 15.3 11.3909 15.3 11.9984Z", "fill": "#1C274C"}]], "outline": [["path", {"d": "M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z", "fill": "white"}], ["path", {"d": "M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z", "fill": "white"}], ["path", {"d": "M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z", "fill": "white"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 13.7183 1.65371 15.3445 2.37213 16.7869C2.47933 17.0021 2.50208 17.2219 2.4526 17.4068L1.857 19.6328C1.44927 21.1566 2.84337 22.5507 4.3672 22.143L6.59324 21.5474C6.77814 21.4979 6.99791 21.5207 7.21315 21.6279C8.65553 22.3463 10.2817 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12ZM12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C10.5189 21.25 9.12121 20.9025 7.88191 20.2852C7.38451 20.0375 6.78973 19.9421 6.20553 20.0984L3.97949 20.694C3.57066 20.8034 3.19663 20.4293 3.30602 20.0205L3.90163 17.7945C4.05794 17.2103 3.96254 16.6155 3.7148 16.1181C3.09752 14.8788 2.75 13.4811 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75Z", "fill": "white"}]]};

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

const SolarChatRoundDots = React.forwardRef((props, ref) => {
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

SolarChatRoundDots.nodes = nodes;
SolarChatRoundDots.iconName = iconName;
SolarChatRoundDots.category = category;

const ChatRoundDotsOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarChatRoundDots, Object.assign({ ref, variant: 'outline' }, props));
});

const ChatRoundDotsBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarChatRoundDots, Object.assign({ ref, variant: 'bold' }, props));
});

const ChatRoundDotsBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarChatRoundDots, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const ChatRoundDots = SolarChatRoundDots;

module.exports = {
  iconName,
  category,
  nodes,
  SolarChatRoundDots,
  ChatRoundDots,
  ChatRoundDotsOutline,
  ChatRoundDotsBold,
  ChatRoundDotsBoldDuotone,
  default: SolarChatRoundDots
};
