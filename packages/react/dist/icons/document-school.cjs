const React = require('react');

const iconName = 'document-school';
const category = 'School';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M4 4.99902V18.999C4 20.6559 5.34315 21.999 7 21.999H17C18.6569 21.999 20 20.6559 20 18.999V8.99902C20 7.34217 18.6569 5.99902 17 5.99902H5C4.44772 5.99902 4 5.55131 4 4.99902ZM7.25 11.999C7.25 11.5848 7.58579 11.249 8 11.249H16C16.4142 11.249 16.75 11.5848 16.75 11.999C16.75 12.4132 16.4142 12.749 16 12.749H8C7.58579 12.749 7.25 12.4132 7.25 11.999ZM7.25 15.499C7.25 15.0848 7.58579 14.749 8 14.749H13.5C13.9142 14.749 14.25 15.0848 14.25 15.499C14.25 15.9132 13.9142 16.249 13.5 16.249H8C7.58579 16.249 7.25 15.9132 7.25 15.499Z", "fill": "#1C274C"}], ["path", {"d": "M4.40879 4.08612C4.75727 4.24241 5 4.59237 5 4.99902H17C17.3453 4.99902 17.6804 5.04278 18 5.12504V4.30506C18 3.08796 16.922 2.15304 15.7172 2.32516L4.91959 3.86767C4.72712 3.89517 4.55271 3.97276 4.40879 4.08612Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M4 4.69531V18.6953C4 20.3522 5.34315 21.6953 7 21.6953H17C18.6569 21.6953 20 20.3522 20 18.6953V8.69531C20 7.03846 18.6569 5.69531 17 5.69531H5C4.44772 5.69531 4 5.2476 4 4.69531ZM7.25 11.6953C7.25 11.2811 7.58579 10.9453 8 10.9453H16C16.4142 10.9453 16.75 11.2811 16.75 11.6953C16.75 12.1095 16.4142 12.4453 16 12.4453H8C7.58579 12.4453 7.25 12.1095 7.25 11.6953ZM7.25 15.1953C7.25 14.7811 7.58579 14.4453 8 14.4453H13.5C13.9142 14.4453 14.25 14.7811 14.25 15.1953C14.25 15.6095 13.9142 15.9453 13.5 15.9453H8C7.58579 15.9453 7.25 15.6095 7.25 15.1953Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M18 4.00038V5.86504C17.6872 5.75449 17.3506 5.69434 17 5.69434H5C4.44772 5.69434 4 5.24662 4 4.69434V4.62329C4 4.09027 4.39193 3.63837 4.91959 3.56299L15.7172 2.02048C16.922 1.84835 18 2.78328 18 4.00038Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M15.6111 1.58284C17.2678 1.34617 18.75 2.63169 18.75 4.3052V5.68171C19.9395 6.31045 20.75 7.56016 20.75 8.99918V18.9992C20.75 21.0703 19.0711 22.7492 17 22.7492H7C4.92893 22.7492 3.25 21.0703 3.25 18.9992V4.99918C3.25 4.98989 3.25017 4.98063 3.2505 4.97141C3.25017 4.95702 3.25 4.94259 3.25 4.92812C3.25 4.02186 3.91638 3.25352 4.81353 3.12535L15.6111 1.58284ZM4.75 6.74918V18.9992C4.75 20.2418 5.75736 21.2492 7 21.2492H17C18.2426 21.2492 19.25 20.2418 19.25 18.9992V8.99918C19.25 7.75654 18.2426 6.74918 17 6.74918H4.75ZM5.07107 5.24918H17.25V4.3052C17.25 3.54452 16.5763 2.96019 15.8232 3.06777L5.02566 4.61028C4.86749 4.63287 4.75 4.76834 4.75 4.92812C4.75 5.10544 4.89375 5.24918 5.07107 5.24918ZM7.25 11.9992C7.25 11.585 7.58579 11.2492 8 11.2492H16C16.4142 11.2492 16.75 11.585 16.75 11.9992C16.75 12.4134 16.4142 12.7492 16 12.7492H8C7.58579 12.7492 7.25 12.4134 7.25 11.9992ZM7.25 15.4992C7.25 15.085 7.58579 14.7492 8 14.7492H13.5C13.9142 14.7492 14.25 15.085 14.25 15.4992C14.25 15.9134 13.9142 16.2492 13.5 16.2492H8C7.58579 16.2492 7.25 15.9134 7.25 15.4992Z", "fill": "white"}]]};

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

const SolarDocument = React.forwardRef((props, ref) => {
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

SolarDocument.nodes = nodes;
SolarDocument.iconName = iconName;
SolarDocument.category = category;

const DocumentOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarDocument, Object.assign({ ref, variant: 'outline' }, props));
});

const DocumentBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarDocument, Object.assign({ ref, variant: 'bold' }, props));
});

const DocumentBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarDocument, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const Document = SolarDocument;

module.exports = {
  iconName,
  category,
  nodes,
  SolarDocument,
  Document,
  DocumentOutline,
  DocumentBold,
  DocumentBoldDuotone,
  default: SolarDocument
};
