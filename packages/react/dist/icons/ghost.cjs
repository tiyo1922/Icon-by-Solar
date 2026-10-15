const React = require('react');

const iconName = 'ghost';
const category = 'Essentional, UI';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M22 19.2058V12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12V19.2058C2 20.4896 3.35098 21.3245 4.4992 20.7504C5.42726 20.2864 6.5328 20.3552 7.39614 20.9308C8.36736 21.5782 9.63264 21.5782 10.6039 20.9308L10.9565 20.6957C11.5884 20.2744 12.4116 20.2744 13.0435 20.6957L13.3961 20.9308C14.3674 21.5782 15.6326 21.5782 16.6039 20.9308C17.4672 20.3552 18.5727 20.2864 19.5008 20.7504C20.649 21.3245 22 20.4896 22 19.2058ZM16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5ZM9 12C9.55228 12 10 11.3284 10 10.5C10 9.67157 9.55228 9 9 9C8.44772 9 8 9.67157 8 10.5C8 11.3284 8.44772 12 9 12Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M22 19.2058V12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12V19.2058C2 20.4896 3.35098 21.3245 4.4992 20.7504C5.42726 20.2864 6.5328 20.3552 7.39614 20.9308C8.36736 21.5782 9.63264 21.5782 10.6039 20.9308L10.9565 20.6957C11.5884 20.2744 12.4116 20.2744 13.0435 20.6957L13.3961 20.9308C14.3674 21.5782 15.6326 21.5782 16.6039 20.9308C17.4672 20.3552 18.5727 20.2864 19.5008 20.7504C20.649 21.3245 22 20.4896 22 19.2058Z", "fill": "#1C274C"}], ["path", {"d": "M15 12C15.5523 12 16 11.3284 16 10.5C16 9.67157 15.5523 9 15 9C14.4477 9 14 9.67157 14 10.5C14 11.3284 14.4477 12 15 12Z", "fill": "#1C274C"}], ["path", {"d": "M10 10.5C10 11.3284 9.55228 12 9 12C8.44772 12 8 11.3284 8 10.5C8 9.67157 8.44772 9 9 9C9.55228 9 10 9.67157 10 10.5Z", "fill": "#1C274C"}]], "outline": [["path", {"d": "M10 10.5C10 11.3284 9.55228 12 9 12C8.44772 12 8 11.3284 8 10.5C8 9.67157 8.44772 9 9 9C9.55228 9 10 9.67157 10 10.5Z", "fill": "white"}], ["path", {"d": "M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z", "fill": "white"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 1.25C6.04216 1.25 1.25 6.21861 1.25 12.3006V19.723C1.25 21.5695 3.16246 22.8461 4.8426 21.9808C5.52425 21.6297 6.33486 21.6808 6.97157 22.1181C8.19859 22.9606 9.80141 22.9606 11.0284 22.1181L11.3811 21.8759C11.7572 21.6176 12.2428 21.6176 12.6189 21.8759L12.9716 22.1181C14.1986 22.9606 15.8014 22.9606 17.0284 22.1181C17.6651 21.6808 18.4757 21.6297 19.1574 21.9808C20.8375 22.8461 22.75 21.5695 22.75 19.723V12.3006C22.75 6.21861 17.9578 1.25 12 1.25ZM2.75 12.3006C2.75 7.00485 6.91215 2.75 12 2.75C17.0879 2.75 21.25 7.00485 21.25 12.3006V19.723C21.25 20.5212 20.4605 20.9647 19.8442 20.6472C18.6697 20.0424 17.2693 20.133 16.1793 20.8815C15.4639 21.3728 14.5361 21.3728 13.8207 20.8815L13.468 20.6394C12.5804 20.0298 11.4196 20.0298 10.532 20.6394L10.1793 20.8815C9.46387 21.3728 8.53613 21.3728 7.8207 20.8815C6.73074 20.133 5.33026 20.0424 4.1558 20.6472C3.53949 20.9647 2.75 20.5212 2.75 19.723V12.3006Z", "fill": "white"}]]};

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

const SolarGhost = React.forwardRef((props, ref) => {
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

SolarGhost.nodes = nodes;
SolarGhost.iconName = iconName;
SolarGhost.category = category;

const GhostOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarGhost, Object.assign({ ref, variant: 'outline' }, props));
});

const GhostBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarGhost, Object.assign({ ref, variant: 'bold' }, props));
});

const GhostBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarGhost, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const Ghost = SolarGhost;

module.exports = {
  iconName,
  category,
  nodes,
  SolarGhost,
  Ghost,
  GhostOutline,
  GhostBold,
  GhostBoldDuotone,
  default: SolarGhost
};
