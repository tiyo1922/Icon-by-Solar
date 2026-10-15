const React = require('react');

const iconName = 'socket';
const category = 'Electronic, Devices';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M6.75 12C6.75 9.35515 8.70578 7.16709 11.25 6.80317V7.5C11.25 7.91421 11.5858 8.25 12 8.25C12.4142 8.25 12.75 7.91421 12.75 7.5V6.80317C15.2942 7.16709 17.25 9.35515 17.25 12C17.25 14.6449 15.2942 16.8329 12.75 17.1968V16.4999C12.75 16.0857 12.4142 15.7499 12 15.7499C11.5858 15.7499 11.25 16.0857 11.25 16.4999V17.1968C8.70578 16.8329 6.75 14.6449 6.75 12ZM15 12C15 12.5523 14.5523 13 14 13C13.4477 13 13 12.5523 13 12C13 11.4477 13.4477 11 14 11C14.5523 11 15 11.4477 15 12ZM10 13C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11C9.44772 11 9 11.4477 9 12C9 12.5523 9.44772 13 10 13Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM12 5.25C8.27208 5.25 5.25 8.27208 5.25 12C5.25 15.7279 8.27208 18.75 12 18.75C15.7279 18.75 18.75 15.7279 18.75 12C18.75 8.27208 15.7279 5.25 12 5.25Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M11.25 7.50177V6.80494V5.29297C7.87504 5.66605 5.25 8.52736 5.25 12.0018C5.25 15.4762 7.87504 18.3375 11.25 18.7106V17.1986V16.5017C11.25 16.0875 11.5858 15.7517 12 15.7517C12.4142 15.7517 12.75 16.0875 12.75 16.5017V17.1986V18.7106C16.125 18.3375 18.75 15.4762 18.75 12.0018C18.75 8.52736 16.125 5.66605 12.75 5.29297V6.80494V7.50177C12.75 7.91599 12.4142 8.25177 12 8.25177C11.5858 8.25177 11.25 7.91599 11.25 7.50177ZM15 12.0018C15 12.5541 14.5523 13.0018 14 13.0018C13.4477 13.0018 13 12.5541 13 12.0018C13 11.4495 13.4477 11.0018 14 11.0018C14.5523 11.0018 15 11.4495 15 12.0018ZM10 13.0018C10.5523 13.0018 11 12.5541 11 12.0018C11 11.4495 10.5523 11.0018 10 11.0018C9.44772 11.0018 9 11.4495 9 12.0018C9 12.5541 9.44772 13.0018 10 13.0018Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M11.9426 1.25H12.0574C14.3658 1.24999 16.1748 1.24998 17.5863 1.43975C19.031 1.63399 20.1711 2.03933 21.0659 2.93414C21.9607 3.82895 22.366 4.96897 22.5603 6.41371C22.75 7.82519 22.75 9.63423 22.75 11.9426V12.0574C22.75 14.3658 22.75 16.1748 22.5603 17.5863C22.366 19.031 21.9607 20.1711 21.0659 21.0659C20.1711 21.9607 19.031 22.366 17.5863 22.5603C16.1748 22.75 14.3658 22.75 12.0574 22.75H11.9426C9.63423 22.75 7.82519 22.75 6.41371 22.5603C4.96897 22.366 3.82895 21.9607 2.93414 21.0659C2.03933 20.1711 1.63399 19.031 1.43975 17.5863C1.24998 16.1748 1.24999 14.3658 1.25 12.0574V11.9426C1.24999 9.63423 1.24998 7.82519 1.43975 6.41371C1.63399 4.96897 2.03933 3.82895 2.93414 2.93414C3.82895 2.03933 4.96897 1.63399 6.41371 1.43975C7.82519 1.24998 9.63423 1.24999 11.9426 1.25ZM6.61358 2.92637C5.33517 3.09825 4.56445 3.42514 3.9948 3.9948C3.42514 4.56445 3.09825 5.33517 2.92637 6.61358C2.75159 7.91356 2.75 9.62178 2.75 12C2.75 14.3782 2.75159 16.0864 2.92637 17.3864C3.09825 18.6648 3.42514 19.4355 3.9948 20.0052C4.56445 20.5749 5.33517 20.9018 6.61358 21.0736C7.91356 21.2484 9.62178 21.25 12 21.25C14.3782 21.25 16.0864 21.2484 17.3864 21.0736C18.6648 20.9018 19.4355 20.5749 20.0052 20.0052C20.5749 19.4355 20.9018 18.6648 21.0736 17.3864C21.2484 16.0864 21.25 14.3782 21.25 12C21.25 9.62178 21.2484 7.91356 21.0736 6.61358C20.9018 5.33517 20.5749 4.56445 20.0052 3.9948C19.4355 3.42514 18.6648 3.09825 17.3864 2.92637C16.0864 2.75159 14.3782 2.75 12 2.75C9.62178 2.75 7.91356 2.75159 6.61358 2.92637ZM11.25 6.80317C8.70578 7.16709 6.75 9.35515 6.75 12C6.75 14.6449 8.70578 16.8329 11.25 17.1968V16.4999C11.25 16.0857 11.5858 15.7499 12 15.7499C12.4142 15.7499 12.75 16.0857 12.75 16.4999V17.1968C15.2942 16.8329 17.25 14.6449 17.25 12C17.25 9.35515 15.2942 7.16709 12.75 6.80317V7.5C12.75 7.91421 12.4142 8.25 12 8.25C11.5858 8.25 11.25 7.91421 11.25 7.5V6.80317ZM5.25 12C5.25 8.27208 8.27208 5.25 12 5.25C15.7279 5.25 18.75 8.27208 18.75 12C18.75 15.7279 15.7279 18.75 12 18.75C8.27208 18.75 5.25 15.7279 5.25 12Z", "fill": "white"}], ["path", {"d": "M15 12C15 12.5523 14.5523 13 14 13C13.4477 13 13 12.5523 13 12C13 11.4477 13.4477 11 14 11C14.5523 11 15 11.4477 15 12Z", "fill": "white"}], ["path", {"d": "M11 12C11 12.5523 10.5523 13 10 13C9.44772 13 9 12.5523 9 12C9 11.4477 9.44772 11 10 11C10.5523 11 11 11.4477 11 12Z", "fill": "white"}]]};

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

const SolarSocket = React.forwardRef((props, ref) => {
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

SolarSocket.nodes = nodes;
SolarSocket.iconName = iconName;
SolarSocket.category = category;

const SocketOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarSocket, Object.assign({ ref, variant: 'outline' }, props));
});

const SocketBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarSocket, Object.assign({ ref, variant: 'bold' }, props));
});

const SocketBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarSocket, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const Socket = SolarSocket;

module.exports = {
  iconName,
  category,
  nodes,
  SolarSocket,
  Socket,
  SocketOutline,
  SocketBold,
  SocketBoldDuotone,
  default: SolarSocket
};
