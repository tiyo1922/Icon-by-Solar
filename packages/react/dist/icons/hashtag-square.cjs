const React = require('react');

const iconName = 'hashtag-square';
const category = 'Network, IT, Programming';
const nodes = {"bold": [["path", {"d": "M14.092 10.75L13.342 13.25H9.90802L10.658 10.75H14.092Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM11.2155 6.28164C11.6123 6.40067 11.8374 6.81878 11.7184 7.21553L11.108 9.25001H14.542L15.2816 6.7845C15.4007 6.38776 15.8188 6.16262 16.2155 6.28164C16.6123 6.40067 16.8374 6.81878 16.7184 7.21553L16.108 9.25001H18C18.4142 9.25001 18.75 9.5858 18.75 10C18.75 10.4142 18.4142 10.75 18 10.75H15.658L14.908 13.25H17C17.4142 13.25 17.75 13.5858 17.75 14C17.75 14.4142 17.4142 14.75 17 14.75H14.458L13.7184 17.2155C13.5993 17.6123 13.1812 17.8374 12.7845 17.7184C12.3877 17.5994 12.1626 17.1812 12.2816 16.7845L12.892 14.75H9.45802L8.71837 17.2155C8.59935 17.6123 8.18123 17.8374 7.78449 17.7184C7.38774 17.5994 7.16261 17.1812 7.28163 16.7845L7.89198 14.75H6C5.58579 14.75 5.25 14.4142 5.25 14C5.25 13.5858 5.58579 13.25 6 13.25H8.34198L9.09198 10.75H7C6.58579 10.75 6.25 10.4142 6.25 10C6.25 9.5858 6.58579 9.25001 7 9.25001H9.54198L10.2816 6.7845C10.4007 6.38776 10.8188 6.16262 11.2155 6.28164Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M11.7184 7.21571C11.8374 6.81896 11.6123 6.40085 11.2155 6.28183C10.8188 6.1628 10.4007 6.38794 10.2816 6.78469L9.54198 9.2502H7C6.58579 9.2502 6.25 9.58598 6.25 10.0002C6.25 10.4144 6.58579 10.7502 7 10.7502H9.09198L8.34198 13.2502H6C5.58579 13.2502 5.25 13.586 5.25 14.0002C5.25 14.4144 5.58579 14.7502 6 14.7502H7.89198L7.28163 16.7847C7.16261 17.1814 7.38774 17.5995 7.78449 17.7186C8.18123 17.8376 8.59935 17.6125 8.71837 17.2157L9.45802 14.7502H12.892L12.2816 16.7847C12.1626 17.1814 12.3877 17.5995 12.7845 17.7186C13.1812 17.8376 13.5993 17.6125 13.7184 17.2157L14.458 14.7502H17C17.4142 14.7502 17.75 14.4144 17.75 14.0002C17.75 13.586 17.4142 13.2502 17 13.2502H14.908L15.658 10.7502H18C18.4142 10.7502 18.75 10.4144 18.75 10.0002C18.75 9.58598 18.4142 9.2502 18 9.2502H16.108L16.7184 7.21571C16.8374 6.81896 16.6123 6.40085 16.2155 6.28183C15.8188 6.1628 15.4007 6.38794 15.2816 6.78469L14.542 9.2502H11.108L11.7184 7.21571ZM14.092 10.7502L13.342 13.2502H9.90802L10.658 10.7502H14.092Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M11.2155 6.28163C11.6123 6.40065 11.8374 6.81877 11.7184 7.21551L11.108 9.25H14.542L15.2816 6.78449C15.4007 6.38774 15.8188 6.16261 16.2155 6.28163C16.6123 6.40065 16.8374 6.81877 16.7184 7.21551L16.108 9.25H18C18.4142 9.25 18.75 9.58579 18.75 10C18.75 10.4142 18.4142 10.75 18 10.75H15.658L14.908 13.25H17C17.4142 13.25 17.75 13.5858 17.75 14C17.75 14.4142 17.4142 14.75 17 14.75H14.458L13.7184 17.2155C13.5993 17.6123 13.1812 17.8374 12.7845 17.7184C12.3877 17.5993 12.1626 17.1812 12.2816 16.7845L12.892 14.75H9.45802L8.71837 17.2155C8.59935 17.6123 8.18123 17.8374 7.78449 17.7184C7.38774 17.5993 7.16261 17.1812 7.28163 16.7845L7.89198 14.75H6C5.58579 14.75 5.25 14.4142 5.25 14C5.25 13.5858 5.58579 13.25 6 13.25H8.34198L9.09198 10.75H7C6.58579 10.75 6.25 10.4142 6.25 10C6.25 9.58579 6.58579 9.25 7 9.25H9.54198L10.2816 6.78449C10.4007 6.38774 10.8188 6.16261 11.2155 6.28163ZM10.658 10.75H14.092L13.342 13.25H9.90802L10.658 10.75Z", "fill": "#FEFEFF"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M11.9426 1.25C9.63423 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63423 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25H11.9426ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62178 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62178 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62178 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62178 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z", "fill": "#FEFEFF"}]]};

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

const SolarHashtagSquare = React.forwardRef((props, ref) => {
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

SolarHashtagSquare.nodes = nodes;
SolarHashtagSquare.iconName = iconName;
SolarHashtagSquare.category = category;

const HashtagSquareOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarHashtagSquare, Object.assign({ ref, variant: 'outline' }, props));
});

const HashtagSquareBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarHashtagSquare, Object.assign({ ref, variant: 'bold' }, props));
});

const HashtagSquareBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarHashtagSquare, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const HashtagSquare = SolarHashtagSquare;

module.exports = {
  iconName,
  category,
  nodes,
  SolarHashtagSquare,
  HashtagSquare,
  HashtagSquareOutline,
  HashtagSquareBold,
  HashtagSquareBoldDuotone,
  default: SolarHashtagSquare
};
