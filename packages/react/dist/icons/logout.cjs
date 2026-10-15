const React = require('react');

const iconName = 'logout';
const category = 'Arrows Action';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M16.4697 8.46967C16.1768 8.76256 16.1768 9.23744 16.4697 9.53033L18.1893 11.25H10C9.58579 11.25 9.25 11.5858 9.25 12C9.25 12.4142 9.58579 12.75 10 12.75H18.1893L16.4697 14.4697C16.1768 14.7626 16.1768 15.2374 16.4697 15.5303C16.7626 15.8232 17.2374 15.8232 17.5303 15.5303L20.5303 12.5303C20.8232 12.2374 20.8232 11.7626 20.5303 11.4697L17.5303 8.46967C17.2374 8.17678 16.7626 8.17678 16.4697 8.46967Z", "fill": "#1C274C"}], ["path", {"d": "M4 12C4 16.4183 7.58172 20 12 20V16.25C12 15.3072 12 14.8358 11.7071 14.5429C11.4142 14.25 10.9428 14.25 10 14.25L-nan -nanL10 14.25C8.75736 14.25 7.75 13.2426 7.75 12C7.75 10.7574 8.75736 9.75 10 9.75L-nan -nanL10 9.75C10.9428 9.75 11.4142 9.75 11.7071 9.45711C12 9.16421 12 8.69281 12 7.75V4C7.58172 4 4 7.58172 4 12Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4V20Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M16.4697 8.46967C16.1768 8.76256 16.1768 9.23744 16.4697 9.53033L18.1893 11.25H10C9.58579 11.25 9.25 11.5858 9.25 12C9.25 12.4142 9.58579 12.75 10 12.75H18.1893L16.4697 14.4697C16.1768 14.7626 16.1768 15.2374 16.4697 15.5303C16.7626 15.8232 17.2374 15.8232 17.5303 15.5303L20.5303 12.5303C20.8232 12.2374 20.8232 11.7626 20.5303 11.4697L17.5303 8.46967C17.2374 8.17678 16.7626 8.17678 16.4697 8.46967Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.4142 1.25 12.75 1.58579 12.75 2C12.75 2.41421 12.4142 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25V22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM15.4697 5.46967C15.7626 5.17678 16.2374 5.17678 16.5303 5.46967L22.5303 11.4697C22.8232 11.7626 22.8232 12.2374 22.5303 12.5303L16.5303 18.5303C16.2374 18.8232 15.7626 18.8232 15.4697 18.5303C15.1768 18.2374 15.1768 17.7626 15.4697 17.4697L20.1893 12.75H10C9.58579 12.75 9.25 12.4142 9.25 12C9.25 11.5858 9.58579 11.25 10 11.25H20.1893L15.4697 6.53033C15.1768 6.23744 15.1768 5.76256 15.4697 5.46967Z", "fill": "white"}]]};

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

const SolarLogout = React.forwardRef((props, ref) => {
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

SolarLogout.nodes = nodes;
SolarLogout.iconName = iconName;
SolarLogout.category = category;

const LogoutOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarLogout, Object.assign({ ref, variant: 'outline' }, props));
});

const LogoutBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarLogout, Object.assign({ ref, variant: 'bold' }, props));
});

const LogoutBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarLogout, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const Logout = SolarLogout;

module.exports = {
  iconName,
  category,
  nodes,
  SolarLogout,
  Logout,
  LogoutOutline,
  LogoutBold,
  LogoutBoldDuotone,
  default: SolarLogout
};
