const React = require('react');

const iconName = 'map-arrow-square';
const category = 'Map & Location';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355ZM16.9348 8.19598L13.4227 17.3618C13.1045 18.1922 11.94 18.2192 11.6917 17.4019L10.6352 13.9249C10.553 13.6545 10.3455 13.447 10.0751 13.3648L6.5981 12.3083C5.78079 12.06 5.80779 10.8955 6.63824 10.5773L15.804 7.06521C16.5389 6.78361 17.2164 7.46107 16.9348 8.19598Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "fillRule": "evenodd", "clipRule": "evenodd", "d": "M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355Z", "fill": "#1C274C"}], ["path", {"d": "M13.4227 17.3618L16.9348 8.19598C17.2164 7.46107 16.5389 6.78361 15.804 7.06521L6.63824 10.5773C5.80779 10.8955 5.78079 12.06 6.5981 12.3083L10.0751 13.3648C10.3455 13.447 10.553 13.6545 10.6352 13.9249L11.6917 17.4019C11.94 18.2192 13.1045 18.1922 13.4227 17.3618Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M17.3864 2.92637C16.0864 2.75159 14.3782 2.75 12 2.75C9.62178 2.75 7.91356 2.75159 6.61358 2.92637C5.33517 3.09825 4.56445 3.42514 3.9948 3.9948C3.42514 4.56445 3.09825 5.33517 2.92637 6.61358C2.75159 7.91356 2.75 9.62178 2.75 12C2.75 14.3782 2.75159 16.0864 2.92637 17.3864C3.09825 18.6648 3.42514 19.4355 3.9948 20.0052C4.56445 20.5749 5.33517 20.9018 6.61358 21.0736C7.91356 21.2484 9.62178 21.25 12 21.25C14.3782 21.25 16.0864 21.2484 17.3864 21.0736C18.6648 20.9018 19.4355 20.5749 20.0052 20.0052C20.5749 19.4355 20.9018 18.6648 21.0736 17.3864C21.2484 16.0864 21.25 14.3782 21.25 12C21.25 9.62178 21.2484 7.91356 21.0736 6.61358C20.9018 5.33517 20.5749 4.56445 20.0052 3.9948C19.4355 3.42514 18.6648 3.09825 17.3864 2.92637ZM17.5863 1.43975C19.031 1.63399 20.1711 2.03933 21.0659 2.93414C21.9607 3.82895 22.366 4.96897 22.5603 6.41371C22.75 7.82519 22.75 9.63423 22.75 11.9426V12.0574C22.75 14.3658 22.75 16.1748 22.5603 17.5863C22.366 19.031 21.9607 20.1711 21.0659 21.0659C20.1711 21.9607 19.031 22.366 17.5863 22.5603C16.1748 22.75 14.3658 22.75 12.0574 22.75H11.9426C9.63423 22.75 7.82519 22.75 6.41371 22.5603C4.96897 22.366 3.82895 21.9607 2.93414 21.0659C2.03933 20.1711 1.63399 19.031 1.43975 17.5863C1.24998 16.1748 1.24999 14.3658 1.25 12.0574V11.9426C1.24999 9.63423 1.24998 7.82519 1.43975 6.41371C1.63399 4.96897 2.03933 3.82895 2.93414 2.93414C3.82895 2.03933 4.96897 1.63399 6.41371 1.43975C7.82519 1.24998 9.63423 1.24999 11.9426 1.25H12.0574C14.3658 1.24999 16.1748 1.24998 17.5863 1.43975Z", "fill": "white"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M15.804 7.06693L15.5357 6.36658C16.8766 5.85277 18.1489 7.12512 17.6351 8.46605L14.123 17.6318C13.8465 18.3536 13.1899 18.7364 12.5484 18.7513C11.8988 18.7663 11.2097 18.397 10.9741 17.6217L9.91755 14.1447L10.5834 13.9424L9.91755 14.1447C9.91226 14.1273 9.90413 14.1151 9.89537 14.1063C9.88661 14.0976 9.87441 14.0894 9.857 14.0841L6.38003 13.0276C5.60468 12.792 5.23538 12.1029 5.25044 11.4533C5.26532 10.8118 5.64815 10.1552 6.36987 9.87867L15.5357 6.36658L15.804 7.06693ZM16.1707 7.75427C16.1543 7.75071 16.1229 7.74793 16.0724 7.76727L6.90658 11.2794C6.79785 11.321 6.75195 11.4058 6.75004 11.4881C6.74909 11.5292 6.76027 11.5537 6.76671 11.5634C6.76679 11.5635 6.76688 11.5636 6.76697 11.5638C6.7698 11.5681 6.77826 11.5809 6.81613 11.5924L10.2931 12.6489L10.0751 13.3665L10.2931 12.6489C10.803 12.8039 11.1978 13.1987 11.3528 13.7086L12.4093 17.1856C12.4208 17.2234 12.4336 17.2319 12.4379 17.2347L12.4383 17.235C12.448 17.2414 12.4725 17.2526 12.5136 17.2517C12.5959 17.2498 12.6807 17.2039 12.7223 17.0951L16.2344 7.92934C16.2538 7.87885 16.251 7.84736 16.2474 7.83103C16.2433 7.81209 16.2339 7.79513 16.2203 7.78145C16.2066 7.76777 16.1896 7.7584 16.1707 7.75427Z", "fill": "white"}]]};

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

const SolarMapArrowSquare = React.forwardRef((props, ref) => {
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

SolarMapArrowSquare.nodes = nodes;
SolarMapArrowSquare.iconName = iconName;
SolarMapArrowSquare.category = category;

const MapArrowSquareOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarMapArrowSquare, Object.assign({ ref, variant: 'outline' }, props));
});

const MapArrowSquareBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarMapArrowSquare, Object.assign({ ref, variant: 'bold' }, props));
});

const MapArrowSquareBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarMapArrowSquare, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const MapArrowSquare = SolarMapArrowSquare;

module.exports = {
  iconName,
  category,
  nodes,
  SolarMapArrowSquare,
  MapArrowSquare,
  MapArrowSquareOutline,
  MapArrowSquareBold,
  MapArrowSquareBoldDuotone,
  default: SolarMapArrowSquare
};
