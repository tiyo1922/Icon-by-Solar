const React = require('react');

const iconName = 'alt-arrow-left';
const category = 'Arrows';
const nodes = {"bold": [["path", {"d": "M8.16485 11.6296L14.7953 5.1999C15.2091 4.79869 16 5.04189 16 5.5703L16 18.4297C16 18.9581 15.2091 19.2013 14.7953 18.8001L8.16485 12.3704C7.94505 12.1573 7.94505 11.8427 8.16485 11.6296Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"d": "M11.5956 8.30469L8.16485 11.6316C7.94505 11.8447 7.94505 12.1592 8.16485 12.3724L14.7953 18.8021C15.2091 19.2033 16 18.9601 16 18.4317V12.7091L11.5956 8.30469Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M15.9999 11.2929L15.9999 5.5703C15.9999 5.04189 15.2089 4.79869 14.7952 5.1999L12.3135 7.60648L15.9999 11.2929Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M15.4881 4.43057C15.8026 4.70014 15.839 5.17361 15.5694 5.48811L9.98781 12L15.5694 18.5119C15.839 18.8264 15.8026 19.2999 15.4881 19.5695C15.1736 19.839 14.7001 19.8026 14.4306 19.4881L8.43056 12.4881C8.18981 12.2072 8.18981 11.7928 8.43056 11.5119L14.4306 4.51192C14.7001 4.19743 15.1736 4.161 15.4881 4.43057Z", "fill": "white"}]]};

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

const SolarAltArrowLeft = React.forwardRef((props, ref) => {
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

SolarAltArrowLeft.nodes = nodes;
SolarAltArrowLeft.iconName = iconName;
SolarAltArrowLeft.category = category;

const AltArrowLeftOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarAltArrowLeft, Object.assign({ ref, variant: 'outline' }, props));
});

const AltArrowLeftBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarAltArrowLeft, Object.assign({ ref, variant: 'bold' }, props));
});

const AltArrowLeftBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarAltArrowLeft, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const AltArrowLeft = SolarAltArrowLeft;

module.exports = {
  iconName,
  category,
  nodes,
  SolarAltArrowLeft,
  AltArrowLeft,
  AltArrowLeftOutline,
  AltArrowLeftBold,
  AltArrowLeftBoldDuotone,
  default: SolarAltArrowLeft
};
