const React = require('react');

const iconName = 'alt-arrow-right';
const category = 'Arrows';
const nodes = {"bold": [["path", {"d": "M15.8351 11.6296L9.20467 5.1999C8.79094 4.79869 8 5.04189 8 5.5703L8 18.4297C8 18.9581 8.79094 19.2013 9.20467 18.8001L15.8351 12.3704C16.055 12.1573 16.0549 11.8427 15.8351 11.6296Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"d": "M12.4044 8.30469L15.8351 11.6316C16.0549 11.8447 16.0549 12.1592 15.8351 12.3724L9.20467 18.8021C8.79094 19.2033 8 18.9601 8 18.4317V12.7091L12.4044 8.30469Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M8 11.2929L8 5.5703C8 5.04189 8.79094 4.79869 9.20467 5.1999L11.6864 7.60648L8 11.2929Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M8.51192 4.43057C8.82641 4.161 9.29989 4.19743 9.56946 4.51192L15.5695 11.5119C15.8102 11.7928 15.8102 12.2072 15.5695 12.4881L9.56946 19.4881C9.29989 19.8026 8.82641 19.839 8.51192 19.5695C8.19743 19.2999 8.161 18.8264 8.43057 18.5119L14.0122 12L8.43057 5.48811C8.161 5.17361 8.19743 4.70014 8.51192 4.43057Z", "fill": "white"}]]};

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

const SolarAltArrowRight = React.forwardRef((props, ref) => {
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

SolarAltArrowRight.nodes = nodes;
SolarAltArrowRight.iconName = iconName;
SolarAltArrowRight.category = category;

const AltArrowRightOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarAltArrowRight, Object.assign({ ref, variant: 'outline' }, props));
});

const AltArrowRightBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarAltArrowRight, Object.assign({ ref, variant: 'bold' }, props));
});

const AltArrowRightBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarAltArrowRight, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const AltArrowRight = SolarAltArrowRight;

module.exports = {
  iconName,
  category,
  nodes,
  SolarAltArrowRight,
  AltArrowRight,
  AltArrowRightOutline,
  AltArrowRightBold,
  AltArrowRightBoldDuotone,
  default: SolarAltArrowRight
};
