const React = require('react');

const iconName = 'hashtag-circle';
const category = 'Network, IT, Programming';
const nodes = {"bold": [["path", {"d": "M14.092 10.75L13.342 13.25H9.90802L10.658 10.75H14.092Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM11.2155 6.28164C11.6123 6.40067 11.8374 6.81878 11.7184 7.21553L11.108 9.25001H14.542L15.2816 6.7845C15.4007 6.38776 15.8188 6.16262 16.2155 6.28164C16.6123 6.40067 16.8374 6.81878 16.7184 7.21553L16.108 9.25001H18C18.4142 9.25001 18.75 9.5858 18.75 10C18.75 10.4142 18.4142 10.75 18 10.75H15.658L14.908 13.25H17C17.4142 13.25 17.75 13.5858 17.75 14C17.75 14.4142 17.4142 14.75 17 14.75H14.458L13.7184 17.2155C13.5993 17.6123 13.1812 17.8374 12.7845 17.7184C12.3877 17.5994 12.1626 17.1812 12.2816 16.7845L12.892 14.75H9.45802L8.71837 17.2155C8.59935 17.6123 8.18123 17.8374 7.78449 17.7184C7.38774 17.5994 7.16261 17.1812 7.28163 16.7845L7.89198 14.75H6C5.58579 14.75 5.25 14.4142 5.25 14C5.25 13.5858 5.58579 13.25 6 13.25H8.34198L9.09198 10.75H7C6.58579 10.75 6.25 10.4142 6.25 10C6.25 9.5858 6.58579 9.25001 7 9.25001H9.54198L10.2816 6.7845C10.4007 6.38776 10.8188 6.16262 11.2155 6.28164Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M11.7184 7.21571C11.8374 6.81896 11.6123 6.40085 11.2155 6.28183C10.8188 6.1628 10.4007 6.38794 10.2816 6.78469L9.54198 9.2502H7C6.58579 9.2502 6.25 9.58598 6.25 10.0002C6.25 10.4144 6.58579 10.7502 7 10.7502H9.09198L8.34198 13.2502H6C5.58579 13.2502 5.25 13.586 5.25 14.0002C5.25 14.4144 5.58579 14.7502 6 14.7502H7.89198L7.28163 16.7847C7.16261 17.1814 7.38774 17.5995 7.78449 17.7186C8.18123 17.8376 8.59935 17.6125 8.71837 17.2157L9.45802 14.7502H12.892L12.2816 16.7847C12.1626 17.1814 12.3877 17.5995 12.7845 17.7186C13.1812 17.8376 13.5993 17.6125 13.7184 17.2157L14.458 14.7502H17C17.4142 14.7502 17.75 14.4144 17.75 14.0002C17.75 13.586 17.4142 13.2502 17 13.2502H14.908L15.658 10.7502H18C18.4142 10.7502 18.75 10.4144 18.75 10.0002C18.75 9.58598 18.4142 9.2502 18 9.2502H16.108L16.7184 7.21571C16.8374 6.81896 16.6123 6.40085 16.2155 6.28183C15.8188 6.1628 15.4007 6.38794 15.2816 6.78469L14.542 9.2502H11.108L11.7184 7.21571ZM14.092 10.7502L13.342 13.2502H9.90802L10.658 10.7502H14.092Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M11.2155 6.28163C11.6123 6.40065 11.8374 6.81877 11.7184 7.21551L11.108 9.25H14.542L15.2816 6.78449C15.4007 6.38774 15.8188 6.16261 16.2155 6.28163C16.6123 6.40065 16.8374 6.81877 16.7184 7.21551L16.108 9.25H18C18.4142 9.25 18.75 9.58579 18.75 10C18.75 10.4142 18.4142 10.75 18 10.75H15.658L14.908 13.25H17C17.4142 13.25 17.75 13.5858 17.75 14C17.75 14.4142 17.4142 14.75 17 14.75H14.458L13.7184 17.2155C13.5993 17.6123 13.1812 17.8374 12.7845 17.7184C12.3877 17.5993 12.1626 17.1812 12.2816 16.7845L12.892 14.75H9.45802L8.71837 17.2155C8.59935 17.6123 8.18123 17.8374 7.78449 17.7184C7.38774 17.5993 7.16261 17.1812 7.28163 16.7845L7.89198 14.75H6C5.58579 14.75 5.25 14.4142 5.25 14C5.25 13.5858 5.58579 13.25 6 13.25H8.34198L9.09198 10.75H7C6.58579 10.75 6.25 10.4142 6.25 10C6.25 9.58579 6.58579 9.25 7 9.25H9.54198L10.2816 6.78449C10.4007 6.38774 10.8188 6.16261 11.2155 6.28163ZM10.658 10.75H14.092L13.342 13.25H9.90802L10.658 10.75Z", "fill": "#FEFEFF"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z", "fill": "#FEFEFF"}]]};

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

const HashtagCircleOutline = React.forwardRef((props, ref) => {
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

const HashtagCircleBold = React.forwardRef((props, ref) => {
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

const HashtagCircleBoldDuotone = React.forwardRef((props, ref) => {
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

const HashtagCircle = HashtagCircleOutline;

module.exports = {
  iconName,
  category,
  nodes,
  HashtagCircle,
  HashtagCircleOutline,
  HashtagCircleBold,
  HashtagCircleBoldDuotone,
  default: HashtagCircle
};
