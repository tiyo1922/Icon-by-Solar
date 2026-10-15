const React = require('react');

const iconName = 'restart';
const category = 'Arrows';
const nodes = {"bold": [["path", {"d": "M18.2577 3.51024C18.538 3.62632 18.7207 3.8998 18.7207 4.20315V8.44579C18.7207 8.86 18.3849 9.19579 17.9707 9.19579H13.728C13.4247 9.19579 13.1512 9.01306 13.0351 8.7328C12.9191 8.45254 12.9832 8.12996 13.1977 7.91546L14.8007 6.31246C12.1674 5.21107 9.01606 5.73285 6.87348 7.87543C4.04217 10.7067 4.04217 15.2972 6.87348 18.1285C9.70478 20.9598 14.2952 20.9598 17.1265 18.1285C18.7727 16.4823 19.4622 14.2421 19.1935 12.0956C19.142 11.6846 19.4335 11.3097 19.8445 11.2583C20.2555 11.2068 20.6304 11.4983 20.6819 11.9093C21.0057 14.4953 20.1746 17.2017 18.1872 19.1891C14.7701 22.6062 9.2299 22.6062 5.81282 19.1891C2.39573 15.772 2.39573 10.2319 5.81282 6.81477C8.55119 4.07639 12.6515 3.53315 15.9309 5.18223L17.4404 3.67282C17.6549 3.45832 17.9774 3.39415 18.2577 3.51024Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "fillRule": "evenodd", "clipRule": "evenodd", "d": "M6.87348 7.87338C9.01606 5.7308 12.1674 5.20902 14.8007 6.31041L15.9309 5.18019C12.6515 3.53111 8.55119 4.07435 5.81282 6.81272C2.39573 10.2298 2.39573 15.77 5.81282 19.1871C9.2299 22.6042 14.7701 22.6042 18.1872 19.1871C20.1746 17.1997 21.0057 14.4933 20.6819 11.9072C20.6304 11.4962 20.2555 11.2048 19.8445 11.2562C19.4335 11.3077 19.142 11.6826 19.1935 12.0936C19.4622 14.24 18.7727 16.4802 17.1265 18.1264C14.2952 20.9577 9.70478 20.9577 6.87348 18.1264C4.04217 15.2951 4.04217 10.7047 6.87348 7.87338Z", "fill": "#1C274C"}], ["path", {"d": "M18.7212 4.20315C18.7212 3.8998 18.5384 3.62632 18.2582 3.51024C17.9779 3.39415 17.6553 3.45832 17.4408 3.67282L15.9314 5.18223L14.8012 6.31246L13.1982 7.91546C12.9837 8.12996 12.9195 8.45254 13.0356 8.7328C13.1517 9.01306 13.4252 9.19579 13.7285 9.19579H17.9712C18.3854 9.19579 18.7212 8.86 18.7212 8.44579V4.20315Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M18.364 3.05859C18.7782 3.05859 19.114 3.39438 19.114 3.80859V8.05123C19.114 8.46545 18.7782 8.80123 18.364 8.80123H14.1213C13.7071 8.80123 13.3713 8.46545 13.3713 8.05123C13.3713 7.63702 13.7071 7.30123 14.1213 7.30123H16.4817C13.6363 5.05816 9.4987 5.24923 6.87348 7.87446C4.04217 10.7058 4.04217 15.2962 6.87348 18.1275C9.70478 20.9588 14.2952 20.9588 17.1265 18.1275C19.0234 16.2306 19.6504 13.5438 19.0039 11.1228C18.897 10.7227 19.1348 10.3116 19.535 10.2047C19.9352 10.0979 20.3462 10.3356 20.4531 10.7358C21.2321 13.6528 20.478 16.8974 18.1872 19.1882C14.7701 22.6053 9.2299 22.6053 5.81282 19.1882C2.39573 15.7711 2.39573 10.2309 5.81282 6.8138C9.04483 3.58178 14.1762 3.40673 17.614 6.28865V3.80859C17.614 3.39438 17.9497 3.05859 18.364 3.05859Z", "fill": "white"}]]};

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

const SolarRestart = React.forwardRef((props, ref) => {
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

SolarRestart.nodes = nodes;
SolarRestart.iconName = iconName;
SolarRestart.category = category;

const RestartOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarRestart, Object.assign({ ref, variant: 'outline' }, props));
});

const RestartBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarRestart, Object.assign({ ref, variant: 'bold' }, props));
});

const RestartBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarRestart, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const Restart = SolarRestart;

module.exports = {
  iconName,
  category,
  nodes,
  SolarRestart,
  Restart,
  RestartOutline,
  RestartBold,
  RestartBoldDuotone,
  default: SolarRestart
};
