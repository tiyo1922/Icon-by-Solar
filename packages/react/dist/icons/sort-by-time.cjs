const React = require('react');

const iconName = 'sort-by-time';
const category = 'List';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M1.25 7C1.25 6.58579 1.58579 6.25 2 6.25H10C10.4142 6.25 10.75 6.58579 10.75 7C10.75 7.41421 10.4142 7.75 10 7.75H2C1.58579 7.75 1.25 7.41421 1.25 7ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H8C8.41421 11.25 8.75 11.5858 8.75 12C8.75 12.4142 8.41421 12.75 8 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM1.25 17C1.25 16.5858 1.58579 16.25 2 16.25H10C10.4142 16.25 10.75 16.5858 10.75 17C10.75 17.4142 10.4142 17.75 10 17.75H2C1.58579 17.75 1.25 17.4142 1.25 17Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M17 17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7C14.2386 7 12 9.23858 12 12C12 14.7614 14.2386 17 17 17ZM17.75 10C17.75 9.58579 17.4142 9.25 17 9.25C16.5858 9.25 16.25 9.58579 16.25 10V11.8462C16.25 12.0266 16.3151 12.201 16.4332 12.3374L17.4332 13.4912C17.7045 13.8042 18.1782 13.838 18.4912 13.5668C18.8042 13.2955 18.838 12.8218 18.5668 12.5088L17.75 11.5664V10Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M17 17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7C14.2386 7 12 9.23858 12 12C12 14.7614 14.2386 17 17 17ZM17.75 10C17.75 9.58579 17.4142 9.25 17 9.25C16.5858 9.25 16.25 9.58579 16.25 10V11.8462C16.25 12.0266 16.3151 12.201 16.4332 12.3374L17.4332 13.4912C17.7045 13.8042 18.1782 13.838 18.4912 13.5668C18.8042 13.2955 18.838 12.8218 18.5668 12.5088L17.75 11.5664V10Z", "fill": "#1C274C"}], ["g", {"opacity": "0.5"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M1.25 7C1.25 6.58579 1.58579 6.25 2 6.25H10C10.4142 6.25 10.75 6.58579 10.75 7C10.75 7.41421 10.4142 7.75 10 7.75H2C1.58579 7.75 1.25 7.41421 1.25 7ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H8C8.41421 11.25 8.75 11.5858 8.75 12C8.75 12.4142 8.41421 12.75 8 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM1.25 17C1.25 16.5858 1.58579 16.25 2 16.25H10C10.4142 16.25 10.75 16.5858 10.75 17C10.75 17.4142 10.4142 17.75 10 17.75H2C1.58579 17.75 1.25 17.4142 1.25 17Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M1.25 7C1.25 6.58579 1.58579 6.25 2 6.25H10C10.4142 6.25 10.75 6.58579 10.75 7C10.75 7.41421 10.4142 7.75 10 7.75H2C1.58579 7.75 1.25 7.41421 1.25 7ZM17 7.75C14.6528 7.75 12.75 9.65279 12.75 12C12.75 14.3472 14.6528 16.25 17 16.25C19.3472 16.25 21.25 14.3472 21.25 12C21.25 9.65279 19.3472 7.75 17 7.75ZM11.25 12C11.25 8.82436 13.8244 6.25 17 6.25C20.1756 6.25 22.75 8.82436 22.75 12C22.75 15.1756 20.1756 17.75 17 17.75C13.8244 17.75 11.25 15.1756 11.25 12ZM17 9.25C17.4142 9.25 17.75 9.58579 17.75 10V11.5664L18.5668 12.5088C18.838 12.8218 18.8042 13.2955 18.4912 13.5668C18.1782 13.838 17.7045 13.8042 17.4332 13.4912L16.4332 12.3374C16.3151 12.201 16.25 12.0266 16.25 11.8462V10C16.25 9.58579 16.5858 9.25 17 9.25ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H8C8.41421 11.25 8.75 11.5858 8.75 12C8.75 12.4142 8.41421 12.75 8 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM1.25 17C1.25 16.5858 1.58579 16.25 2 16.25H10C10.4142 16.25 10.75 16.5858 10.75 17C10.75 17.4142 10.4142 17.75 10 17.75H2C1.58579 17.75 1.25 17.4142 1.25 17Z", "fill": "white"}]]};

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

const SolarSortByTime = React.forwardRef((props, ref) => {
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

SolarSortByTime.nodes = nodes;
SolarSortByTime.iconName = iconName;
SolarSortByTime.category = category;

const SortByTimeOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarSortByTime, Object.assign({ ref, variant: 'outline' }, props));
});

const SortByTimeBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarSortByTime, Object.assign({ ref, variant: 'bold' }, props));
});

const SortByTimeBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarSortByTime, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const SortByTime = SolarSortByTime;

module.exports = {
  iconName,
  category,
  nodes,
  SolarSortByTime,
  SortByTime,
  SortByTimeOutline,
  SortByTimeBold,
  SortByTimeBoldDuotone,
  default: SolarSortByTime
};
