const React = require('react');

const iconName = 'hashtag';
const category = 'Network, IT, Programming';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M10.7226 3.20092C10.8335 2.80182 10.5998 2.38841 10.2007 2.27755C9.80163 2.16669 9.38822 2.40036 9.27736 2.79946L7.76327 8.25019H4C3.58579 8.25019 3.25 8.58598 3.25 9.00019C3.25 9.4144 3.58579 9.75019 4 9.75019H7.3466L5.81882 15.2502H2C1.58579 15.2502 1.25 15.586 1.25 16.0002C1.25 16.4144 1.58579 16.7502 2 16.7502H5.40216L4.27736 20.7995C4.1665 21.1986 4.40016 21.612 4.79927 21.7228C5.19837 21.8337 5.61178 21.6 5.72264 21.2009L6.95895 16.7502H14.4022L13.2774 20.7995C13.1665 21.1986 13.4002 21.612 13.7993 21.7228C14.1984 21.8337 14.6118 21.6 14.7226 21.2009L15.959 16.7502H20C20.4142 16.7502 20.75 16.4144 20.75 16.0002C20.75 15.586 20.4142 15.2502 20 15.2502H16.3756L17.9034 9.75019H22C22.4142 9.75019 22.75 9.4144 22.75 9.00019C22.75 8.58598 22.4142 8.25019 22 8.25019H18.3201L19.7226 3.20092C19.8335 2.80182 19.5998 2.38841 19.2007 2.27755C18.8016 2.16669 18.3882 2.40036 18.2774 2.79946L16.7633 8.25019H9.32006L10.7226 3.20092ZM14.8188 15.2502L16.3466 9.75019H8.9034L7.37562 15.2502H14.8188Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M10.2009 2.27755C10.6 2.38841 10.8337 2.80182 10.7228 3.20092L5.72283 21.2009C5.61197 21.6 5.19856 21.8337 4.79946 21.7228C4.40036 21.612 4.16669 21.1986 4.27755 20.7995L9.27755 2.79946C9.38841 2.40036 9.80182 2.16669 10.2009 2.27755Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M19.2009 2.27755C19.6 2.38841 19.8337 2.80182 19.7228 3.20092L14.7228 21.2009C14.612 21.6 14.1986 21.8337 13.7995 21.7228C13.4004 21.612 13.1667 21.1986 13.2776 20.7995L18.2776 2.79946C18.3884 2.40036 18.8018 2.16669 19.2009 2.27755Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "fillRule": "evenodd", "clipRule": "evenodd", "d": "M3.25 9C3.25 8.58579 3.58579 8.25 4 8.25H22C22.4142 8.25 22.75 8.58579 22.75 9C22.75 9.41421 22.4142 9.75 22 9.75H4C3.58579 9.75 3.25 9.41421 3.25 9Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "fillRule": "evenodd", "clipRule": "evenodd", "d": "M1.25 16C1.25 15.5858 1.58579 15.25 2 15.25H20C20.4142 15.25 20.75 15.5858 20.75 16C20.75 16.4142 20.4142 16.75 20 16.75H2C1.58579 16.75 1.25 16.4142 1.25 16Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M10.7226 3.20092C10.8335 2.80182 10.5998 2.38841 10.2007 2.27755C9.80163 2.16669 9.38822 2.40036 9.27736 2.79946L7.76327 8.25019H4C3.58579 8.25019 3.25 8.58598 3.25 9.00019C3.25 9.4144 3.58579 9.75019 4 9.75019H7.3466L5.81882 15.2502H2C1.58579 15.2502 1.25 15.586 1.25 16.0002C1.25 16.4144 1.58579 16.7502 2 16.7502H5.40216L4.27736 20.7995C4.1665 21.1986 4.40016 21.612 4.79927 21.7228C5.19837 21.8337 5.61178 21.6 5.72264 21.2009L6.95895 16.7502H14.4022L13.2774 20.7995C13.1665 21.1986 13.4002 21.612 13.7993 21.7228C14.1984 21.8337 14.6118 21.6 14.7226 21.2009L15.959 16.7502H20C20.4142 16.7502 20.75 16.4144 20.75 16.0002C20.75 15.586 20.4142 15.2502 20 15.2502H16.3756L17.9034 9.75019H22C22.4142 9.75019 22.75 9.4144 22.75 9.00019C22.75 8.58598 22.4142 8.25019 22 8.25019H18.3201L19.7226 3.20092C19.8335 2.80182 19.5998 2.38841 19.2007 2.27755C18.8016 2.16669 18.3882 2.40036 18.2774 2.79946L16.7633 8.25019H9.32006L10.7226 3.20092ZM14.8188 15.2502L16.3466 9.75019H8.9034L7.37562 15.2502H14.8188Z", "fill": "#FEFEFF"}]]};

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

const HashtagOutline = React.forwardRef((props, ref) => {
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

const HashtagBold = React.forwardRef((props, ref) => {
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

const HashtagBoldDuotone = React.forwardRef((props, ref) => {
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

const Hashtag = HashtagOutline;

module.exports = {
  iconName,
  category,
  nodes,
  Hashtag,
  HashtagOutline,
  HashtagBold,
  HashtagBoldDuotone,
  default: Hashtag
};
