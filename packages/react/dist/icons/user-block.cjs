const React = require('react');

const iconName = 'user-block';
const category = 'Users';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M16.5 15.75C14.9812 15.75 13.75 16.9812 13.75 18.5C13.75 19.0004 13.8832 19.4691 14.1167 19.8732L17.8732 16.1167C17.4691 15.8832 17.0004 15.75 16.5 15.75ZM18.9196 17.1916L15.1916 20.9196C15.5806 21.1305 16.0261 21.25 16.5 21.25C18.0188 21.25 19.25 20.0188 19.25 18.5C19.25 18.0261 19.1305 17.5806 18.9196 17.1916ZM12.25 18.5C12.25 16.1528 14.1528 14.25 16.5 14.25C17.689 14.25 18.7652 14.7393 19.5357 15.5256C20.2861 16.2914 20.75 17.3423 20.75 18.5C20.75 20.8472 18.8472 22.75 16.5 22.75C15.3423 22.75 14.2914 22.2861 13.5256 21.5357C12.7393 20.7652 12.25 19.689 12.25 18.5Z", "fill": "#1C274C"}], ["path", {"d": "M16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6Z", "fill": "#1C274C"}], ["path", {"d": "M14.2951 13.1879C12.2137 14.0529 10.75 16.1055 10.75 18.5C10.75 19.8163 11.1943 21.0315 11.9378 22C4 21.9895 4 19.9788 4 17.5C4 15.0147 7.58172 13 12 13C12.7977 13 13.5681 13.0657 14.2951 13.1879Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"d": "M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M16.5 15.75C14.9812 15.75 13.75 16.9812 13.75 18.5C13.75 19.0004 13.8832 19.4691 14.1167 19.8732L17.8732 16.1167C17.4691 15.8832 17.0004 15.75 16.5 15.75ZM18.9196 17.1916L15.1916 20.9196C15.5806 21.1305 16.0261 21.25 16.5 21.25C18.0188 21.25 19.25 20.0188 19.25 18.5C19.25 18.0261 19.1305 17.5806 18.9196 17.1916ZM12.25 18.5C12.25 16.1528 14.1528 14.25 16.5 14.25C17.689 14.25 18.7652 14.7393 19.5357 15.5256C20.2861 16.2914 20.75 17.3423 20.75 18.5C20.75 20.8472 18.8472 22.75 16.5 22.75C15.3423 22.75 14.2914 22.2861 13.5256 21.5357C12.7393 20.7652 12.25 19.689 12.25 18.5Z", "fill": "#1C274C"}], ["path", {"opacity": "0.4", "d": "M17.9963 14.5211C17.5308 14.3459 17.0265 14.25 16.5 14.25C14.1528 14.25 12.25 16.1528 12.25 18.5C12.25 19.689 12.7393 20.7652 13.5256 21.5357C13.6786 21.6856 13.8429 21.8241 14.0173 21.9497C13.4088 21.9828 12.7385 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C14.3874 13 16.5305 13.5882 17.9963 14.5211Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M7.25001 6C7.25001 3.37665 9.37666 1.25 12 1.25C14.6234 1.25 16.75 3.37665 16.75 6C16.75 8.62335 14.6234 10.75 12 10.75C9.37666 10.75 7.25001 8.62335 7.25001 6ZM12 2.75C10.2051 2.75 8.75001 4.20507 8.75001 6C8.75001 7.79493 10.2051 9.25 12 9.25C13.7949 9.25 15.25 7.79493 15.25 6C15.25 4.20507 13.7949 2.75 12 2.75Z", "fill": "white"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M14.7747 12.5129C13.9019 12.3421 12.9685 12.25 12 12.25C9.68646 12.25 7.55494 12.7759 5.97546 13.6643C4.41949 14.5396 3.25001 15.8661 3.25001 17.5L3.24995 17.602C3.24882 18.7638 3.2474 20.222 4.52642 21.2635C5.15589 21.7761 6.03649 22.1406 7.22622 22.3815C8.41927 22.6229 9.97424 22.75 12 22.75C14.8681 22.75 16.8099 22.4961 18.1196 22.0085C19.2985 21.5697 19.9973 20.9266 20.3704 20.1172C21.7927 19.2966 22.75 17.7601 22.75 16C22.75 14.6885 22.2175 13.5 21.3587 12.6412C20.5 11.7825 19.3115 11.25 18 11.25C16.7549 11.25 15.6217 11.7291 14.7747 12.5129ZM6.71085 14.9717C5.37139 15.7251 4.75001 16.6487 4.75001 17.5C4.75001 18.8078 4.79033 19.544 5.4736 20.1004C5.84413 20.4022 6.46354 20.6967 7.5238 20.9113C8.58075 21.1252 10.0258 21.25 12 21.25C14.5781 21.25 16.2403 21.0366 17.311 20.7003C16.2749 20.5496 15.3468 20.0643 14.6412 19.3587C13.7825 18.5 13.25 17.3114 13.25 16C13.25 15.2322 13.4322 14.5069 13.7557 13.865C13.194 13.79 12.6061 13.75 12 13.75C9.89529 13.75 8.02681 14.2315 6.71085 14.9717ZM14.75 16C14.75 14.2051 16.2051 12.75 18 12.75C18.6261 12.75 19.2102 12.9265 19.7061 13.2331L15.2332 17.7061C14.9265 17.2102 14.75 16.626 14.75 16ZM16.2938 18.7668L20.7668 14.2938C21.0735 14.7898 21.25 15.3739 21.25 16C21.25 17.7949 19.7949 19.25 18 19.25C17.3739 19.25 16.7898 19.0734 16.2938 18.7668Z", "fill": "white"}]]};

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

const UserBlockOutline = React.forwardRef((props, ref) => {
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

const UserBlockBold = React.forwardRef((props, ref) => {
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

const UserBlockBoldDuotone = React.forwardRef((props, ref) => {
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

const UserBlock = UserBlockOutline;

module.exports = {
  iconName,
  category,
  nodes,
  UserBlock,
  UserBlockOutline,
  UserBlockBold,
  UserBlockBoldDuotone,
  default: UserBlock
};
