const React = require('react');

const iconName = 'user-circle';
const category = 'Users';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10ZM12 20.5C13.784 20.5 15.4397 19.9504 16.8069 19.0112C17.4108 18.5964 17.6688 17.8062 17.3178 17.1632C16.59 15.8303 15.0902 15 11.9999 15C8.90969 15 7.40997 15.8302 6.68214 17.1632C6.33105 17.8062 6.5891 18.5963 7.19296 19.0111C8.56018 19.9503 10.2159 20.5 12 20.5Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z", "fill": "#1C274C"}], ["path", {"d": "M16.807 19.0112C15.4398 19.9504 13.7841 20.5 12 20.5C10.2159 20.5 8.56023 19.9503 7.193 19.0111C6.58915 18.5963 6.33109 17.8062 6.68219 17.1632C7.41001 15.8302 8.90973 15 12 15C15.0903 15 16.59 15.8303 17.3178 17.1632C17.6689 17.8062 17.4108 18.5964 16.807 19.0112Z", "fill": "#1C274C"}], ["path", {"d": "M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3432 7 9.00004 8.34315 9.00004 10C9.00004 11.6569 10.3432 13 12 13Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.6447 3.85938 17.0303 5.64027 18.717C5.89692 17.9002 6.32733 17.1508 7.0564 16.5568C8.1335 15.6793 9.73059 15.25 12 15.25C14.2693 15.25 15.8664 15.6793 16.9435 16.5569C17.6726 17.1509 18.103 17.9003 18.3596 18.717C20.1406 17.0304 21.25 14.6448 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM17.0715 19.7372C16.8988 18.8503 16.5751 18.1915 15.9961 17.7198C15.3062 17.1577 14.1187 16.75 12 16.75C9.88122 16.75 8.69375 17.1577 8.00383 17.7198C7.42482 18.1915 7.10108 18.8503 6.92845 19.7371C8.38458 20.6937 10.1264 21.25 12 21.25C13.8736 21.25 15.6154 20.6937 17.0715 19.7372ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 15.5718 21.0073 18.7367 18.3289 20.6903C16.5534 21.9855 14.3649 22.75 12 22.75C9.63509 22.75 7.44654 21.9855 5.67095 20.6903C2.99271 18.7366 1.25 15.5718 1.25 12ZM12 7.75C10.7574 7.75 9.75 8.75736 9.75 10C9.75 11.2426 10.7574 12.25 12 12.25C13.2426 12.25 14.25 11.2426 14.25 10C14.25 8.75736 13.2426 7.75 12 7.75ZM8.25 10C8.25 7.92893 9.92893 6.25 12 6.25C14.0711 6.25 15.75 7.92893 15.75 10C15.75 12.0711 14.0711 13.75 12 13.75C9.92893 13.75 8.25 12.0711 8.25 10Z", "fill": "white"}]]};

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

const SolarUserCircle = React.forwardRef((props, ref) => {
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

SolarUserCircle.nodes = nodes;
SolarUserCircle.iconName = iconName;
SolarUserCircle.category = category;

const UserCircleOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarUserCircle, Object.assign({ ref, variant: 'outline' }, props));
});

const UserCircleBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarUserCircle, Object.assign({ ref, variant: 'bold' }, props));
});

const UserCircleBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarUserCircle, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const UserCircle = SolarUserCircle;

module.exports = {
  iconName,
  category,
  nodes,
  SolarUserCircle,
  UserCircle,
  UserCircleOutline,
  UserCircleBold,
  UserCircleBoldDuotone,
  default: SolarUserCircle
};
