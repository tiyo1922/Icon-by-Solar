const React = require('react');

const iconName = 'list';
const category = 'List';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M17 3.25C17.2361 3.25 17.4584 3.36115 17.6 3.55L20.6 7.55C20.8485 7.88137 20.7814 8.35147 20.45 8.6C20.1186 8.84853 19.6485 8.78137 19.4 8.45L17.75 6.25V17.75L19.4 15.55C19.6485 15.2186 20.1186 15.1515 20.45 15.4C20.7814 15.6485 20.8485 16.1186 20.6 16.45L17.6 20.45C17.4584 20.6389 17.2361 20.75 17 20.75C16.7639 20.75 16.5416 20.6389 16.4 20.45L13.4 16.45C13.1515 16.1186 13.2186 15.6485 13.55 15.4C13.8814 15.1515 14.3515 15.2186 14.6 15.55L16.25 17.75V6.25L14.6 8.45C14.3515 8.78137 13.8814 8.84853 13.55 8.6C13.2186 8.35147 13.1515 7.88137 13.4 7.55L16.4 3.55C16.5416 3.36115 16.7639 3.25 17 3.25ZM3.25 7C3.25 6.58579 3.58579 6.25 4 6.25H11C11.4142 6.25 11.75 6.58579 11.75 7C11.75 7.41421 11.4142 7.75 11 7.75H4C3.58579 7.75 3.25 7.41421 3.25 7ZM3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H11C11.4142 11.25 11.75 11.5858 11.75 12C11.75 12.4142 11.4142 12.75 11 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12ZM3.25 17C3.25 16.5858 3.58579 16.25 4 16.25H11C11.4142 16.25 11.75 16.5858 11.75 17C11.75 17.4142 11.4142 17.75 11 17.75H4C3.58579 17.75 3.25 17.4142 3.25 17Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M17 3.25C17.2361 3.25 17.4584 3.36115 17.6 3.55L20.6 7.55C20.8486 7.88137 20.7814 8.35147 20.45 8.6C20.1187 8.84853 19.6486 8.78137 19.4 8.45L17.75 6.25V17.75L19.4 15.55C19.6486 15.2186 20.1187 15.1515 20.45 15.4C20.7814 15.6485 20.8486 16.1186 20.6 16.45L17.6 20.45C17.4584 20.6389 17.2361 20.75 17 20.75C16.764 20.75 16.5417 20.6389 16.4 20.45L13.4 16.45C13.1515 16.1186 13.2187 15.6485 13.55 15.4C13.8814 15.1515 14.3515 15.2186 14.6 15.55L16.25 17.75V6.25L14.6 8.45C14.3515 8.78137 13.8814 8.84853 13.55 8.6C13.2187 8.35147 13.1515 7.88137 13.4 7.55L16.4 3.55C16.5417 3.36115 16.764 3.25 17 3.25Z", "fill": "#1C274C"}], ["g", {"opacity": "0.5"}], ["path", {"d": "M3.25 7C3.25 6.58579 3.58579 6.25 4 6.25H11C11.4142 6.25 11.75 6.58579 11.75 7C11.75 7.41421 11.4142 7.75 11 7.75H4C3.58579 7.75 3.25 7.41421 3.25 7Z", "fill": "#1C274C"}], ["path", {"d": "M3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H11C11.4142 11.25 11.75 11.5858 11.75 12C11.75 12.4142 11.4142 12.75 11 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12Z", "fill": "#1C274C"}], ["path", {"d": "M3.25 17C3.25 16.5858 3.58579 16.25 4 16.25H11C11.4142 16.25 11.75 16.5858 11.75 17C11.75 17.4142 11.4142 17.75 11 17.75H4C3.58579 17.75 3.25 17.4142 3.25 17Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M17 3.25C17.2361 3.25 17.4584 3.36115 17.6 3.55L20.6 7.55C20.8485 7.88137 20.7814 8.35147 20.45 8.6C20.1186 8.84853 19.6485 8.78137 19.4 8.45L17.75 6.25V17.75L19.4 15.55C19.6485 15.2186 20.1186 15.1515 20.45 15.4C20.7814 15.6485 20.8485 16.1186 20.6 16.45L17.6 20.45C17.4584 20.6389 17.2361 20.75 17 20.75C16.7639 20.75 16.5416 20.6389 16.4 20.45L13.4 16.45C13.1515 16.1186 13.2186 15.6485 13.55 15.4C13.8814 15.1515 14.3515 15.2186 14.6 15.55L16.25 17.75V6.25L14.6 8.45C14.3515 8.78137 13.8814 8.84853 13.55 8.6C13.2186 8.35147 13.1515 7.88137 13.4 7.55L16.4 3.55C16.5416 3.36115 16.7639 3.25 17 3.25ZM3.25 7C3.25 6.58579 3.58579 6.25 4 6.25H11C11.4142 6.25 11.75 6.58579 11.75 7C11.75 7.41421 11.4142 7.75 11 7.75H4C3.58579 7.75 3.25 7.41421 3.25 7ZM3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H11C11.4142 11.25 11.75 11.5858 11.75 12C11.75 12.4142 11.4142 12.75 11 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12ZM3.25 17C3.25 16.5858 3.58579 16.25 4 16.25H11C11.4142 16.25 11.75 16.5858 11.75 17C11.75 17.4142 11.4142 17.75 11 17.75H4C3.58579 17.75 3.25 17.4142 3.25 17Z", "fill": "white"}]]};

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

const SolarList = React.forwardRef((props, ref) => {
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

SolarList.nodes = nodes;
SolarList.iconName = iconName;
SolarList.category = category;

const ListOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarList, Object.assign({ ref, variant: 'outline' }, props));
});

const ListBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarList, Object.assign({ ref, variant: 'bold' }, props));
});

const ListBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarList, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const List = SolarList;

module.exports = {
  iconName,
  category,
  nodes,
  SolarList,
  List,
  ListOutline,
  ListBold,
  ListBoldDuotone,
  default: SolarList
};
