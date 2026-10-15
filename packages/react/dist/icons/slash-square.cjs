const React = require('react');

const iconName = 'slash-square';
const category = 'Network, IT, Programming';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM14.0184 7.3645C14.1257 6.9644 13.8882 6.55315 13.4881 6.44595C13.088 6.33874 12.6768 6.57618 12.5696 6.97628L9.98137 16.6355C9.87416 17.0356 10.1116 17.4469 10.5117 17.5541C10.9118 17.6613 11.323 17.4239 11.4303 17.0238L14.0184 7.3645Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z", "fill": "#1C274C"}], ["path", {"d": "M14.0184 7.36422C14.1256 6.96412 13.8882 6.55287 13.4881 6.44566C13.088 6.33846 12.6767 6.57589 12.5695 6.97599L9.98131 16.6353C9.8741 17.0354 10.1115 17.4466 10.5116 17.5538C10.9117 17.661 11.323 17.4236 11.4302 17.0235L14.0184 7.36422Z", "fill": "#1C274C"}]], "outline": [["path", {"d": "M14.0184 7.36452C14.1256 6.96443 13.8882 6.55317 13.4881 6.44597C13.088 6.33876 12.6767 6.5762 12.5695 6.9763L9.98131 16.6356C9.8741 17.0357 10.1115 17.4469 10.5116 17.5541C10.9117 17.6613 11.323 17.4239 11.4302 17.0238L14.0184 7.36452Z", "fill": "#FEFEFF"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M11.9426 1.25C9.63423 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63423 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25H11.9426ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62178 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62178 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62178 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62178 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z", "fill": "#FEFEFF"}]]};

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

const SolarSlashSquare = React.forwardRef((props, ref) => {
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

SolarSlashSquare.nodes = nodes;
SolarSlashSquare.iconName = iconName;
SolarSlashSquare.category = category;

const SlashSquareOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarSlashSquare, Object.assign({ ref, variant: 'outline' }, props));
});

const SlashSquareBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarSlashSquare, Object.assign({ ref, variant: 'bold' }, props));
});

const SlashSquareBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarSlashSquare, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const SlashSquare = SolarSlashSquare;

module.exports = {
  iconName,
  category,
  nodes,
  SolarSlashSquare,
  SlashSquare,
  SlashSquareOutline,
  SlashSquareBold,
  SlashSquareBoldDuotone,
  default: SolarSlashSquare
};
