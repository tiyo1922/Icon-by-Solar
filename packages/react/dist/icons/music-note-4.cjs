const React = require('react');

const iconName = 'music-note-4';
const category = 'Video, Audio, Sound';
const nodes = {"bold": [["path", {"d": "M19.8497 4.70046C19.4524 3.57572 18.353 2.87888 17.1944 3.01749C16.9333 3.04872 16.6802 3.14246 16.4231 3.25741C16.1681 3.37141 15.8568 3.531 15.4744 3.7271L12.999 4.9964C12.7146 5.14208 12.4921 5.25604 12.3014 5.40553C11.8107 5.79032 11.4753 6.34693 11.3591 6.96915C11.314 7.21087 11.3141 7.46594 11.3143 7.79201L11.3143 7.8696C11.3143 7.97429 11.3143 8.07432 11.3145 8.16983L11.3143 14.2981C10.5374 13.5504 9.49228 13.0924 8.34284 13.0924C5.94435 13.0924 4 15.0865 4 17.5462C4 20.006 5.94435 22 8.34284 22C10.7413 22 12.6857 20.006 12.6857 17.5462V11.1832C13.1164 11.4088 13.6124 11.5083 14.1199 11.4476C14.381 11.4164 14.6341 11.3227 14.8912 11.2077C15.1462 11.0937 15.4574 10.9341 15.8399 10.738L18.3152 9.46872C18.5997 9.32303 18.8222 9.20907 19.0128 9.05959C19.5036 8.67479 19.839 8.11819 19.9551 7.49596C20.0002 7.25425 20.0001 6.99919 20 6.67313L20 6.5955C20 6.15702 20 5.80015 19.9854 5.51527C19.9706 5.228 19.9392 4.95394 19.8497 4.70046Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"d": "M19.8497 4.70055C19.4524 3.57581 18.353 2.87898 17.1944 3.01758C16.9333 3.04881 16.6802 3.14255 16.4231 3.2575C16.1681 3.3715 15.8568 3.53109 15.4744 3.7272L12.999 4.99649C12.7146 5.14218 12.4921 5.25614 12.3014 5.40562C11.8107 5.79042 11.4753 6.34702 11.3591 6.96924C11.314 7.21097 11.3141 7.46603 11.3143 7.79211L11.3143 7.86969C11.3143 7.97438 11.3143 8.07441 11.3145 8.16992L11.3143 14.2982C10.5374 13.5505 9.49228 13.0925 8.34284 13.0925C5.94436 13.0925 4 15.0866 4 17.5463C4 20.0061 5.94436 22.0001 8.34284 22.0001C10.7413 22.0001 12.6857 20.0061 12.6857 17.5463V11.1833C13.1164 11.4089 13.6124 11.5084 14.1199 11.4477C14.381 11.4165 14.6341 11.3227 14.8912 11.2078C15.1462 11.0938 15.4574 10.9342 15.8399 10.7381L18.3152 9.46882C18.5997 9.32312 18.8222 9.20917 19.0128 9.05968C19.5036 8.67488 19.839 8.11828 19.9551 7.49606C20.0002 7.25434 20.0001 6.99929 20 6.67322L20 6.59559C20 6.15712 20 5.80024 19.9854 5.51536C19.9706 5.2281 19.9392 4.95404 19.8497 4.70055Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M19.1753 4.80879C18.9778 4.26354 18.4312 3.92573 17.8552 3.99292C17.7921 4.00028 17.6774 4.02922 17.4371 4.13394C17.1988 4.23785 16.8938 4.39007 16.4521 4.6109L13.8187 5.92762C13.4266 6.12364 13.3215 6.17981 13.2408 6.2415C12.9968 6.42804 12.83 6.69787 12.7723 6.99951C12.7532 7.09927 12.75 7.21847 12.75 7.65679C12.75 8.15057 12.7502 8.49145 12.7639 8.75112C12.7777 9.01282 12.8031 9.12835 12.8247 9.18808C13.0222 9.73333 13.5688 10.0711 14.1448 10.0039C14.2079 9.99659 14.3226 9.96765 14.5629 9.86293C14.8012 9.75903 15.1062 9.6068 15.5479 9.38597L18.1813 8.06926C18.5734 7.87323 18.6785 7.81707 18.7592 7.75537C19.0032 7.56883 19.17 7.29901 19.2277 6.99736C19.2468 6.8976 19.25 6.7784 19.25 6.34008C19.25 5.8463 19.2498 5.50542 19.2361 5.24575C19.2223 4.98405 19.1969 4.86852 19.1753 4.80879ZM17.6814 2.50302C18.9486 2.3552 20.1511 3.09838 20.5856 4.29793C20.6835 4.56827 20.7179 4.86056 20.734 5.16693C20.75 5.47077 20.75 5.85134 20.75 6.319V6.34008C20.75 6.36091 20.75 6.38147 20.75 6.40177C20.7502 6.74954 20.7503 7.02156 20.701 7.27936C20.5739 7.94297 20.2071 8.53659 19.6703 8.94698C19.4618 9.10641 19.2184 9.22794 18.9073 9.38332C18.8892 9.39239 18.8708 9.40158 18.8521 9.4109L16.1999 10.737C15.7816 10.9462 15.4412 11.1164 15.1622 11.238C14.881 11.3606 14.6042 11.4605 14.3186 11.4938C13.7636 11.5586 13.2211 11.4524 12.75 11.2119V17.9984C12.75 20.6218 10.6234 22.7484 8 22.7484C5.37665 22.7484 3.25 20.6218 3.25 17.9984C3.25 15.3751 5.37665 13.2484 8 13.2484C9.25721 13.2484 10.4003 13.7369 11.25 14.5343V7.99844C11.2498 7.89646 11.25 7.78965 11.25 7.67787V7.65679C11.25 7.63597 11.25 7.61541 11.25 7.59511C11.2498 7.24734 11.2497 6.97531 11.299 6.71751C11.4261 6.0539 11.7929 5.46028 12.3297 5.04989C12.5382 4.89047 12.7816 4.76893 13.0927 4.61356C13.1108 4.60448 13.1292 4.59529 13.1479 4.58597L15.8001 3.25985C16.2184 3.05069 16.5588 2.88049 16.8378 2.7589C17.119 2.63631 17.3958 2.53634 17.6814 2.50302ZM11.25 17.9984C11.25 16.2035 9.79493 14.7484 8 14.7484C6.20507 14.7484 4.75 16.2035 4.75 17.9984C4.75 19.7934 6.20507 21.2484 8 21.2484C9.79493 21.2484 11.25 19.7934 11.25 17.9984Z", "fill": "white"}]]};

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

const MusicNote4Outline = React.forwardRef((props, ref) => {
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

const MusicNote4Bold = React.forwardRef((props, ref) => {
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

const MusicNote4BoldDuotone = React.forwardRef((props, ref) => {
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

const MusicNote4 = MusicNote4Outline;

module.exports = {
  iconName,
  category,
  nodes,
  MusicNote4,
  MusicNote4Outline,
  MusicNote4Bold,
  MusicNote4BoldDuotone,
  default: MusicNote4
};
