const React = require('react');

const iconName = 'text-bold';
const category = 'Text Formatting';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M7.6087 1C5.61567 1 4 2.61567 4 4.6087V19.9412C4 21.6305 5.36948 23 7.05882 23H14C17.3137 23 20 20.3137 20 17C20 14.4259 18.3791 12.2304 16.1022 11.3786C17.2702 10.2839 18 8.72715 18 7C18 3.68629 15.3137 1 12 1H7.6087ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3H7.6087C6.72024 3 6 3.72024 6 4.6087V11H12ZM6 13V19.9412C6 20.5259 6.47405 21 7.05882 21H14C16.2091 21 18 19.2091 18 17C18 14.7909 16.2091 13 14 13H6Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M4 4.6087C4 2.61567 5.61567 1 7.6087 1H12C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13H4V4.6087ZM7.6087 3C6.72024 3 6 3.72024 6 4.6087V11H12C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3H7.6087Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M4 13.0003V19.9415C4 21.6308 5.36948 23.0003 7.05882 23.0003H14C17.3137 23.0003 20 20.314 20 17.0003C20 14.4262 18.3791 12.2307 16.1022 11.3789C15.0293 12.3845 13.5866 13.0003 12 13.0003H14C16.2091 13.0003 18 14.7912 18 17.0003C18 19.2095 16.2091 21.0003 14 21.0003H7.05882C6.47405 21.0003 6 20.5263 6 19.9415V13.0003H4Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M7.6087 1.25C5.75374 1.25 4.25 2.75374 4.25 4.6087V19.9412C4.25 21.4924 5.50755 22.75 7.05882 22.75H14C17.1756 22.75 19.75 20.1756 19.75 17C19.75 14.3824 18.0008 12.1732 15.6076 11.4777C16.9142 10.4237 17.75 8.80946 17.75 7C17.75 3.82436 15.1756 1.25 12 1.25H7.6087ZM12 11.25C14.3472 11.25 16.25 9.34721 16.25 7C16.25 4.65279 14.3472 2.75 12 2.75H7.6087C6.58217 2.75 5.75 3.58217 5.75 4.6087V11.25H12ZM5.75 12.75V19.9412C5.75 20.664 6.33598 21.25 7.05882 21.25H14C16.3472 21.25 18.25 19.3472 18.25 17C18.25 14.6528 16.3472 12.75 14 12.75H5.75Z", "fill": "white"}]]};

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

const SolarTextBold = React.forwardRef((props, ref) => {
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

SolarTextBold.nodes = nodes;
SolarTextBold.iconName = iconName;
SolarTextBold.category = category;

const TextBoldOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarTextBold, Object.assign({ ref, variant: 'outline' }, props));
});

const TextBoldBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarTextBold, Object.assign({ ref, variant: 'bold' }, props));
});

const TextBoldBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarTextBold, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const TextBold = SolarTextBold;

module.exports = {
  iconName,
  category,
  nodes,
  SolarTextBold,
  TextBold,
  TextBoldOutline,
  TextBoldBold,
  TextBoldBoldDuotone,
  default: SolarTextBold
};
