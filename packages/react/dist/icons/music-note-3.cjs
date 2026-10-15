const React = require('react');

const iconName = 'music-note-3';
const category = 'Video, Audio, Sound';
const nodes = {"bold": [["path", {"d": "M14.3187 2.50302C13.0514 2.3552 11.8489 3.09838 11.4144 4.29793C11.3165 4.56827 11.2821 4.86056 11.266 5.16693C11.2539 5.39805 11.2509 5.67357 11.2503 5.99805L11.25 6.45304C11.25 6.45785 11.25 6.46264 11.25 6.46742V14.5339C10.4003 13.7365 9.25721 13.248 8 13.248C5.37665 13.248 3.25 15.3747 3.25 17.998C3.25 20.6214 5.37665 22.748 8 22.748C10.6234 22.748 12.75 20.6214 12.75 17.998V9.20863C12.8548 9.26451 12.9683 9.32121 13.0927 9.38332L15.8002 10.737C16.2185 10.9462 16.5589 11.1164 16.8378 11.238C17.119 11.3606 17.3958 11.4605 17.6814 11.4938C18.9486 11.6417 20.1511 10.8985 20.5856 9.69894C20.6836 9.4286 20.7179 9.13631 20.7341 8.82994C20.75 8.52611 20.75 8.14556 20.75 7.67793L20.7501 7.5951C20.7502 7.24735 20.7503 6.9753 20.701 6.71751C20.574 6.0539 20.2071 5.46028 19.6704 5.04989C19.4618 4.89046 19.2185 4.76893 18.9074 4.61355L16.1999 3.25984C15.7816 3.05069 15.4412 2.88049 15.1623 2.7589C14.8811 2.63631 14.6043 2.53634 14.3187 2.50302Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"d": "M14.3187 2.50302C13.0514 2.3552 11.8489 3.09838 11.4144 4.29793C11.3165 4.56827 11.2821 4.86056 11.266 5.16693C11.2539 5.39805 11.2509 5.67357 11.2503 5.99805L11.25 6.45304C11.25 6.45785 11.25 6.46264 11.25 6.46742V14.5339C10.4003 13.7365 9.25721 13.248 8 13.248C5.37665 13.248 3.25 15.3747 3.25 17.998C3.25 20.6214 5.37665 22.748 8 22.748C10.6234 22.748 12.75 20.6214 12.75 17.998V9.20863C12.8548 9.26451 12.9683 9.32121 13.0927 9.38332L15.8002 10.737C16.2185 10.9462 16.5589 11.1164 16.8378 11.238C17.119 11.3606 17.3958 11.4605 17.6814 11.4938C18.9486 11.6417 20.1511 10.8985 20.5856 9.69894C20.6836 9.4286 20.7179 9.13631 20.7341 8.82994C20.75 8.52611 20.75 8.14556 20.75 7.67793L20.7501 7.5951C20.7502 7.24735 20.7503 6.9753 20.701 6.71751C20.574 6.0539 20.2071 5.46028 19.6704 5.04989C19.4618 4.89046 19.2185 4.76893 18.9074 4.61355L16.1999 3.25984C15.7816 3.05069 15.4412 2.88049 15.1623 2.7589C14.8811 2.63631 14.6043 2.53634 14.3187 2.50302Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M14.1448 3.99292C13.5688 3.92573 13.0222 4.26354 12.8247 4.80879C12.8031 4.86852 12.7777 4.98405 12.7639 5.24575C12.7502 5.50542 12.75 5.8463 12.75 6.34008C12.75 6.7784 12.7532 6.8976 12.7723 6.99736C12.83 7.299 12.9968 7.56883 13.2408 7.75537C13.3215 7.81707 13.4266 7.87323 13.8187 8.06926L16.4521 9.38597C16.8938 9.6068 17.1988 9.75903 17.4371 9.86293C17.6774 9.96765 17.7921 9.99659 17.8552 10.0039C18.4312 10.0711 18.9778 9.73333 19.1753 9.18808C19.1969 9.12835 19.2223 9.01282 19.2361 8.75112C19.2498 8.49145 19.25 8.15057 19.25 7.65679C19.25 7.21847 19.2468 7.09927 19.2277 6.99951C19.17 6.69787 19.0032 6.42804 18.7592 6.2415C18.6785 6.17981 18.5734 6.12364 18.1813 5.92761L15.5479 4.6109C15.1062 4.39007 14.8012 4.23785 14.5629 4.13394C14.3226 4.02922 14.2079 4.00028 14.1448 3.99292ZM12.75 9.20865C12.8548 9.26452 12.9683 9.32122 13.0927 9.38332C13.1108 9.39239 13.1292 9.40158 13.1479 9.4109L15.8001 10.737C16.2184 10.9462 16.5588 11.1164 16.8378 11.238C17.119 11.3606 17.3958 11.4605 17.6814 11.4938C18.9486 11.6417 20.1511 10.8985 20.5856 9.69894C20.6835 9.4286 20.7179 9.13631 20.734 8.82994C20.75 8.5261 20.75 8.14553 20.75 7.67787V7.65679C20.75 7.63596 20.75 7.6154 20.75 7.5951C20.7502 7.24733 20.7503 6.97531 20.701 6.71751C20.5739 6.0539 20.2071 5.46028 19.6703 5.04989C19.4618 4.89046 19.2184 4.76893 18.9073 4.61355C18.8892 4.60448 18.8708 4.59529 18.8521 4.58597L16.1999 3.25984C15.7816 3.05069 15.4412 2.88049 15.1622 2.7589C14.881 2.63631 14.6042 2.53634 14.3186 2.50302C13.0514 2.3552 11.8489 3.09838 11.4144 4.29793C11.3165 4.56827 11.2821 4.86056 11.266 5.16693C11.2538 5.39815 11.2509 5.67379 11.2502 5.99844L11.25 6.28178C11.25 6.29413 11.25 6.30653 11.25 6.319V6.34008C11.25 6.3609 11.25 6.38146 11.25 6.40176C11.25 6.44157 11.2499 6.48038 11.25 6.5183V14.5343C10.4003 13.7369 9.25721 13.2484 8 13.2484C5.37665 13.2484 3.25 15.3751 3.25 17.9984C3.25 20.6218 5.37665 22.7484 8 22.7484C10.6234 22.7484 12.75 20.6218 12.75 17.9984V9.20865ZM11.25 17.9984C11.25 16.2035 9.79493 14.7484 8 14.7484C6.20507 14.7484 4.75 16.2035 4.75 17.9984C4.75 19.7934 6.20507 21.2484 8 21.2484C9.79493 21.2484 11.25 19.7934 11.25 17.9984Z", "fill": "white"}]]};

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

const MusicNote3Outline = React.forwardRef((props, ref) => {
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

const MusicNote3Bold = React.forwardRef((props, ref) => {
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

const MusicNote3BoldDuotone = React.forwardRef((props, ref) => {
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

const MusicNote3 = MusicNote3Outline;

module.exports = {
  iconName,
  category,
  nodes,
  MusicNote3,
  MusicNote3Outline,
  MusicNote3Bold,
  MusicNote3BoldDuotone,
  default: MusicNote3
};
