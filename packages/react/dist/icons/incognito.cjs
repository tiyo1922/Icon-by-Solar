const React = require('react');

const iconName = 'incognito';
const category = 'Security';
const nodes = {"bold": [["path", {"d": "M17.5 14C19.433 14 21 15.567 21 17.5C21 19.433 19.433 21 17.5 21C15.8769 21 14.5122 19.8951 14.1162 18.3965L13.0059 17.8418C12.3725 17.5252 11.6275 17.5252 10.9941 17.8418L9.88379 18.3965C9.4878 19.8951 8.12308 21 6.5 21C4.567 21 3 19.433 3 17.5C3 15.567 4.567 14 6.5 14C8.15996 14 9.55058 15.1555 9.91016 16.7061L10.3232 16.5C11.3789 15.9723 12.6211 15.9723 13.6768 16.5L14.0898 16.7061C14.4494 15.1555 15.84 14 17.5 14ZM13.5654 4C15.8152 4 16.9401 4.00037 17.7539 4.63574C18.5676 5.27115 18.8401 6.3624 19.3857 8.54492L19.8125 10.25H22C22.4142 10.25 22.75 10.5858 22.75 11C22.75 11.4142 22.4142 11.75 22 11.75H2C1.58579 11.75 1.25 11.4142 1.25 11C1.25 10.5858 1.58579 10.25 2 10.25H4.1875L4.61426 8.54492C5.15989 6.3624 5.43244 5.27115 6.24609 4.63574C7.05987 4.00037 8.18477 4 10.4346 4H13.5654Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"d": "M21 16.5C21 18.433 19.433 20 17.5 20C15.567 20 14 18.433 14 16.5C14 14.567 15.567 13 17.5 13C19.433 13 21 14.567 21 16.5Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M1.25 10C1.25 9.58579 1.58579 9.25 2 9.25H22C22.4142 9.25 22.75 9.58579 22.75 10C22.75 10.4142 22.4142 10.75 22 10.75H2C1.58579 10.75 1.25 10.4142 1.25 10Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M4.1875 9.25L4.6138 7.54479C5.15947 5.36211 5.43231 4.27077 6.24609 3.63538C7.05988 3 8.1848 3 10.4347 3H13.5653C15.8152 3 16.9401 3 17.7539 3.63538C18.5677 4.27077 18.8405 5.36211 19.3862 7.54479L19.8125 9.25H4.1875Z", "fill": "#1C274C"}], ["path", {"d": "M10 16.5C10 18.433 8.433 20 6.5 20C4.567 20 3 18.433 3 16.5C3 14.567 4.567 13 6.5 13C8.433 13 10 14.567 10 16.5Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M9.88428 17.3961C9.95989 17.1099 10.0002 16.8094 10.0002 16.4995C10.0002 16.2267 9.96894 15.9611 9.90988 15.7062L10.3235 15.4994C11.3792 14.9715 12.6219 14.9715 13.6776 15.4994L14.0905 15.7059C14.0314 15.9609 14.0002 16.2265 14.0002 16.4995C14.0002 16.8093 14.0404 17.1096 14.1159 17.3956L13.0068 16.8411C12.3733 16.5243 11.6277 16.5243 10.9943 16.8411L9.88428 17.3961Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M10.3879 3.25H13.6121C14.6973 3.24998 15.5784 3.24997 16.2872 3.33473C17.0262 3.4231 17.6608 3.6112 18.2155 4.04423C18.7701 4.47727 19.1065 5.04733 19.3715 5.74284C19.6256 6.40994 19.8393 7.26472 20.1025 8.31749L20.5856 10.25H22C22.4142 10.25 22.75 10.5858 22.75 11C22.75 11.4142 22.4142 11.75 22 11.75H20.0157C20.0048 11.7502 19.994 11.7502 19.9832 11.75H4.01681C4.00601 11.7502 3.99518 11.7502 3.98432 11.75H2C1.58579 11.75 1.25 11.4142 1.25 11C1.25 10.5858 1.58579 10.25 2 10.25H3.41442L3.89754 8.31749C4.16072 7.26472 4.3744 6.40994 4.62854 5.74284C4.89351 5.04733 5.22991 4.47727 5.78453 4.04423C6.33915 3.6112 6.97379 3.4231 7.7128 3.33473C8.42162 3.24997 9.3027 3.24998 10.3879 3.25ZM4.96058 10.25H19.0394L18.6586 8.72669C18.3813 7.61763 18.1882 6.85038 17.9697 6.27686C17.7584 5.72218 17.5515 5.42889 17.2923 5.22654C17.0332 5.02419 16.6985 4.89459 16.1091 4.82412C15.4997 4.75125 14.7085 4.75 13.5653 4.75H10.4347C9.29147 4.75 8.50029 4.75125 7.8909 4.82412C7.30154 4.89459 6.96681 5.02419 6.70765 5.22654C6.44849 5.42889 6.24158 5.72218 6.03027 6.27686C5.81177 6.85038 5.61867 7.61763 5.34141 8.72669L4.96058 10.25ZM6.5 14.75C4.98122 14.75 3.75 15.9812 3.75 17.5C3.75 19.0188 4.98122 20.25 6.5 20.25C8.01878 20.25 9.25 19.0188 9.25 17.5C9.25 15.9812 8.01878 14.75 6.5 14.75ZM2.25 17.5C2.25 15.1528 4.15279 13.25 6.5 13.25C8.45789 13.25 10.1066 14.5739 10.5996 16.3754C11.4979 16.0137 12.5021 16.0137 13.4004 16.3754C13.8934 14.5739 15.5421 13.25 17.5 13.25C19.8472 13.25 21.75 15.1528 21.75 17.5C21.75 19.8472 19.8472 21.75 17.5 21.75C15.314 21.75 13.5134 20.0995 13.2764 17.9767L13.0062 17.8416C12.3728 17.5249 11.6272 17.5249 10.9938 17.8416L10.7236 17.9767C10.4866 20.0995 8.68604 21.75 6.5 21.75C4.15279 21.75 2.25 19.8472 2.25 17.5ZM17.5 14.75C15.9812 14.75 14.75 15.9812 14.75 17.5C14.75 19.0188 15.9812 20.25 17.5 20.25C19.0188 20.25 20.25 19.0188 20.25 17.5C20.25 15.9812 19.0188 14.75 17.5 14.75Z", "fill": "white"}]]};

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

const IncognitoOutline = React.forwardRef((props, ref) => {
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

const IncognitoBold = React.forwardRef((props, ref) => {
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

const IncognitoBoldDuotone = React.forwardRef((props, ref) => {
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

const Incognito = IncognitoOutline;

module.exports = {
  iconName,
  category,
  nodes,
  Incognito,
  IncognitoOutline,
  IncognitoBold,
  IncognitoBoldDuotone,
  default: Incognito
};
