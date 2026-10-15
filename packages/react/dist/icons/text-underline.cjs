const React = require('react');

const iconName = 'text-underline';
const category = 'Text Formatting';
const nodes = {"bold": [["path", {"d": "M5 3C5 2.44772 4.55228 2 4 2C3.44772 2 3 2.44772 3 3V9C3 13.9706 7.02944 18 12 18C16.9706 18 21 13.9706 21 9V3C21 2.44772 20.5523 2 20 2C19.4477 2 19 2.44772 19 3V9C19 12.866 15.866 16 12 16C8.13401 16 5 12.866 5 9V3Z", "fill": "#1C274C"}], ["path", {"d": "M4 20C3.44772 20 3 20.4477 3 21C3 21.5523 3.44772 22 4 22H20C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20H4Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M5 3C5 2.44772 4.55228 2 4 2C3.44772 2 3 2.44772 3 3V9C3 13.9706 7.02944 18 12 18C16.9706 18 21 13.9706 21 9V3C21 2.44772 20.5523 2 20 2C19.4477 2 19 2.44772 19 3V9C19 12.866 15.866 16 12 16C8.13401 16 5 12.866 5 9V3Z", "fill": "#1C274C"}], ["path", {"d": "M4 20C3.44772 20 3 20.4477 3 21C3 21.5523 3.44772 22 4 22H20C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20H4Z", "fill": "#1C274C"}]], "outline": [["path", {"d": "M4.75 3C4.75 2.58579 4.41421 2.25 4 2.25C3.58579 2.25 3.25 2.58579 3.25 3V9C3.25 13.8325 7.16751 17.75 12 17.75C16.8325 17.75 20.75 13.8325 20.75 9V3C20.75 2.58579 20.4142 2.25 20 2.25C19.5858 2.25 19.25 2.58579 19.25 3V9C19.25 13.0041 16.0041 16.25 12 16.25C7.99594 16.25 4.75 13.0041 4.75 9V3Z", "fill": "white"}], ["path", {"d": "M4 20.25C3.58579 20.25 3.25 20.5858 3.25 21C3.25 21.4142 3.58579 21.75 4 21.75H20C20.4142 21.75 20.75 21.4142 20.75 21C20.75 20.5858 20.4142 20.25 20 20.25H4Z", "fill": "white"}]]};

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

const SolarTextUnderline = React.forwardRef((props, ref) => {
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

SolarTextUnderline.nodes = nodes;
SolarTextUnderline.iconName = iconName;
SolarTextUnderline.category = category;

const TextUnderlineOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarTextUnderline, Object.assign({ ref, variant: 'outline' }, props));
});

const TextUnderlineBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarTextUnderline, Object.assign({ ref, variant: 'bold' }, props));
});

const TextUnderlineBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarTextUnderline, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const TextUnderline = SolarTextUnderline;

module.exports = {
  iconName,
  category,
  nodes,
  SolarTextUnderline,
  TextUnderline,
  TextUnderlineOutline,
  TextUnderlineBold,
  TextUnderlineBoldDuotone,
  default: SolarTextUnderline
};
