const React = require('react');

const iconName = 'chat-round-unread';
const category = 'Messages, Conversation';
const nodes = {"bold": [["path", {"d": "M12 22C17.5228 22 22 17.5228 22 12C22 11.094 21.8795 10.2162 21.6537 9.38161C21.5684 9.06633 21.1987 8.94083 20.9028 9.0791C20.3248 9.34916 19.68 9.5 19 9.5C16.5147 9.5 14.5 7.48528 14.5 5C14.5 4.31996 14.6508 3.67516 14.9209 3.09722C15.0592 2.80131 14.9337 2.4316 14.6184 2.3463C13.7838 2.12048 12.906 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z", "fill": "#1C274C"}], ["circle", {"cx": "19", "cy": "5", "r": "3", "fill": "#1C274C"}]], "bold-duotone": [["path", {"d": "M22 5C22 6.65685 20.6569 8 19 8C17.3431 8 16 6.65685 16 5C16 3.34315 17.3431 2 19 2C20.6569 2 22 3.34315 22 5Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M15.2347 2.53476C14.2201 2.1881 13.132 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39938 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88836 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.868 21.8119 9.77987 21.4652 8.76526C20.7572 9.22981 19.9101 9.5 19 9.5C16.5147 9.5 14.5 7.48528 14.5 5C14.5 4.08987 14.7702 3.24284 15.2347 2.53476Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 13.4811 3.09753 14.8788 3.7148 16.1181C3.96254 16.6155 4.05794 17.2103 3.90163 17.7945L3.30602 20.0205C3.19663 20.4293 3.57066 20.8034 3.97949 20.694L6.20553 20.0984C6.78973 19.9421 7.38451 20.0375 7.88191 20.2852C9.12121 20.9025 10.5189 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 11.3655 21.1862 10.7466 21.065 10.1492C20.9826 9.74326 21.2448 9.34739 21.6508 9.26499C22.0567 9.18259 22.4526 9.44487 22.535 9.8508C22.6761 10.5458 22.75 11.2647 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C10.2817 22.75 8.65552 22.3463 7.21315 21.6279C6.99791 21.5207 6.77813 21.4979 6.59324 21.5474L4.3672 22.143C2.84337 22.5507 1.44927 21.1566 1.857 19.6328L2.4526 17.4068C2.50208 17.2219 2.47933 17.0021 2.37213 16.7869C1.65371 15.3445 1.25 13.7183 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.7353 1.25 13.4541 1.32394 14.1492 1.46503C14.5551 1.54743 14.8174 1.9433 14.735 2.34924C14.6526 2.75517 14.2567 3.01745 13.8508 2.93505C13.2534 2.81378 12.6345 2.75 12 2.75ZM15.25 5C15.25 2.92893 16.9289 1.25 19 1.25C21.0711 1.25 22.75 2.92893 22.75 5C22.75 7.07107 21.0711 8.75 19 8.75C16.9289 8.75 15.25 7.07107 15.25 5ZM19 2.75C17.7574 2.75 16.75 3.75736 16.75 5C16.75 6.24264 17.7574 7.25 19 7.25C20.2426 7.25 21.25 6.24264 21.25 5C21.25 3.75736 20.2426 2.75 19 2.75Z", "fill": "white"}]]};

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

const SolarChatRoundUnread = React.forwardRef((props, ref) => {
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
  }, rest), title && React.createElement('title', null, title), ...renderNodes(variantNodes, color, secondaryColor, secondaryOpacity));
});

SolarChatRoundUnread.nodes = nodes;
SolarChatRoundUnread.iconName = iconName;
SolarChatRoundUnread.category = category;

const ChatRoundUnreadOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarChatRoundUnread, Object.assign({ ref, variant: 'outline' }, props));
});

const ChatRoundUnreadBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarChatRoundUnread, Object.assign({ ref, variant: 'bold' }, props));
});

const ChatRoundUnreadBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarChatRoundUnread, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const ChatRoundUnread = SolarChatRoundUnread;

module.exports = {
  iconName,
  category,
  nodes,
  SolarChatRoundUnread,
  ChatRoundUnread,
  ChatRoundUnreadOutline,
  ChatRoundUnreadBold,
  ChatRoundUnreadBoldDuotone,
  default: SolarChatRoundUnread
};
