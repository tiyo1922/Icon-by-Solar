const React = require('react');

const iconName = 'pen-2';
const category = 'Messages, Conversation';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M3.25 22C3.25 21.5858 3.58579 21.25 4 21.25H20C20.4142 21.25 20.75 21.5858 20.75 22C20.75 22.4142 20.4142 22.75 20 22.75H4C3.58579 22.75 3.25 22.4142 3.25 22Z", "fill": "#1C274C"}], ["path", {"d": "M11.5201 14.929L11.5201 14.9289L17.4368 9.01225C16.6315 8.6771 15.6777 8.12656 14.7757 7.22455C13.8736 6.32238 13.323 5.36846 12.9879 4.56312L7.07106 10.4799L7.07101 10.48C6.60932 10.9417 6.37846 11.1725 6.17992 11.4271C5.94571 11.7273 5.74491 12.0522 5.58107 12.396C5.44219 12.6874 5.33894 12.9972 5.13245 13.6167L4.04356 16.8833C3.94194 17.1882 4.02128 17.5243 4.2485 17.7515C4.47573 17.9787 4.81182 18.0581 5.11667 17.9564L8.38334 16.8676C9.00281 16.6611 9.31256 16.5578 9.60398 16.4189C9.94775 16.2551 10.2727 16.0543 10.5729 15.8201C10.8275 15.6215 11.0584 15.3907 11.5201 14.929Z", "fill": "#1C274C"}], ["path", {"d": "M19.0786 7.37044C20.3071 6.14188 20.3071 4.14999 19.0786 2.92142C17.85 1.69286 15.8581 1.69286 14.6296 2.92142L13.9199 3.63105C13.9296 3.6604 13.9397 3.69015 13.9502 3.72028C14.2103 4.47 14.701 5.45281 15.6243 6.37602C16.5475 7.29923 17.5303 7.78999 18.28 8.05009C18.31 8.0605 18.3396 8.07054 18.3688 8.08021L19.0786 7.37044Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "fillRule": "evenodd", "clipRule": "evenodd", "d": "M3.25 22C3.25 21.5858 3.58579 21.25 4 21.25H20C20.4142 21.25 20.75 21.5858 20.75 22C20.75 22.4142 20.4142 22.75 20 22.75H4C3.58579 22.75 3.25 22.4142 3.25 22Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M19.0807 7.37162C20.3095 6.14279 20.3095 4.15046 19.0807 2.92162C17.8519 1.69279 15.8595 1.69279 14.6307 2.92162L13.9209 3.63141C13.9306 3.66076 13.9407 3.69052 13.9512 3.72066C14.2113 4.47054 14.7022 5.45356 15.6256 6.37698C16.549 7.30039 17.532 7.79126 18.2819 8.05142C18.3119 8.06183 18.3415 8.07187 18.3708 8.08155L19.0807 7.37162Z", "fill": "#1C274C"}], ["path", {"d": "M13.9511 3.60156L13.9205 3.63212C13.9303 3.66147 13.9403 3.69123 13.9508 3.72137C14.211 4.47125 14.7018 5.45428 15.6252 6.37769C16.5487 7.3011 17.5317 7.79197 18.2816 8.05213C18.3113 8.06245 18.3407 8.07241 18.3696 8.08201L11.5198 14.9319C11.058 15.3937 10.827 15.6246 10.5724 15.8232C10.2721 16.0575 9.94711 16.2583 9.60326 16.4222C9.31177 16.5611 9.00196 16.6644 8.38235 16.8709L5.11497 17.96C4.81005 18.0617 4.47388 17.9823 4.24661 17.755C4.01934 17.5278 3.93998 17.1916 4.04162 16.8867L5.13074 13.6193C5.33728 12.9997 5.44055 12.6899 5.57947 12.3984C5.74334 12.0545 5.94418 11.7296 6.17844 11.4292C6.37702 11.1746 6.60794 10.9437 7.06971 10.4819L13.9511 3.60156Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M14.0992 2.39109C15.6207 0.869636 18.0875 0.869636 19.6089 2.39109C21.1304 3.91255 21.1304 6.37932 19.6089 7.90077L12.0149 15.4948C11.5869 15.9228 11.3255 16.1842 11.0342 16.4115C10.691 16.6792 10.3196 16.9087 9.92667 17.096C9.59315 17.2549 9.24244 17.3718 8.66818 17.5632L5.99553 18.4541L5.35386 18.668C4.77951 18.8594 4.14629 18.7099 3.7182 18.2818C3.2901 17.8537 3.14062 17.2205 3.33207 16.6462L4.43683 13.3318C4.62822 12.7576 4.7451 12.4069 4.90405 12.0734C5.09132 11.6804 5.32084 11.309 5.58856 10.9658C5.81578 10.6745 6.07719 10.4131 6.50525 9.98509L14.0992 2.39109ZM5.96092 16.8845L5.11556 16.0391L5.84398 13.8538C6.05606 13.2176 6.14366 12.9589 6.25814 12.7187C6.39854 12.4241 6.57061 12.1457 6.77132 11.8883C6.93497 11.6785 7.12718 11.4845 7.60141 11.0102L13.4924 5.11927C13.7355 5.72927 14.147 6.46549 14.8408 7.15927C15.5345 7.85306 16.2708 8.26447 16.8807 8.50764L10.9898 14.3986C10.5155 14.8728 10.3215 15.065 10.1117 15.2287C9.85436 15.4294 9.57594 15.6015 9.28134 15.7419C9.04113 15.8564 8.78244 15.944 8.14619 16.156L5.96092 16.8845ZM18.076 7.31241C17.9521 7.28522 17.7973 7.24432 17.6213 7.18325C17.1373 7.01532 16.5006 6.69778 15.9014 6.09861C15.3022 5.49944 14.9847 4.86276 14.8168 4.37873C14.7557 4.2027 14.7148 4.04787 14.6876 3.92404L15.1599 3.45175C16.0956 2.51608 17.6126 2.51608 18.5483 3.45175C19.4839 4.38742 19.4839 5.90444 18.5483 6.84011L18.076 7.31241ZM3.25002 22C3.25002 21.5858 3.58581 21.25 4.00002 21.25H20V22.75H4.00002C3.58581 22.75 3.25002 22.4142 3.25002 22Z", "fill": "white"}]]};

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

const Pen2Outline = React.forwardRef((props, ref) => {
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

const Pen2Bold = React.forwardRef((props, ref) => {
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

const Pen2BoldDuotone = React.forwardRef((props, ref) => {
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

const Pen2 = Pen2Outline;

module.exports = {
  iconName,
  category,
  nodes,
  Pen2,
  Pen2Outline,
  Pen2Bold,
  Pen2BoldDuotone,
  default: Pen2
};
