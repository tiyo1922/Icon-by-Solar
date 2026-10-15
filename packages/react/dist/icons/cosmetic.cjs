const React = require('react');

const iconName = 'cosmetic';
const category = 'Essentional, UI';
const nodes = {"bold": [["path", {"d": "M2 12.5C2 12.2239 2.22386 12 2.5 12H7.5C7.77614 12 8 12.2239 8 12.5V18C8 19.6569 6.65685 21 5 21C3.34315 21 2 19.6569 2 18V12.5Z", "fill": "#1C274C"}], ["path", {"d": "M3 10.5015H7V6.00129C7 5.25791 6.21769 4.77441 5.55279 5.10686L3.55279 6.10686C3.214 6.27626 3 6.62252 3 7.00129V10.5015Z", "fill": "#1C274C"}], ["path", {"d": "M11 10.5C11 7.46243 13.4624 5 16.5 5C19.5376 5 22 7.46243 22 10.5C22 13.5376 19.5376 16 16.5 16C13.4624 16 11 13.5376 11 10.5Z", "fill": "#1C274C"}], ["path", {"d": "M15.75 17.7108C15.9964 17.737 16.2466 17.7505 16.5 17.7505C16.7534 17.7505 17.0036 17.737 17.25 17.7108V19.5005H19.5C19.9142 19.5005 20.25 19.8363 20.25 20.2505C20.25 20.6647 19.9142 21.0005 19.5 21.0005H13.5C13.0858 21.0005 12.75 20.6647 12.75 20.2505C12.75 19.8363 13.0858 19.5005 13.5 19.5005H15.75V17.7108Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M2 11.5C2 11.2239 2.22386 11 2.5 11H7.5C7.77614 11 8 11.2239 8 11.5V18C8 19.6569 6.65685 21 5 21C3.34315 21 2 19.6569 2 18V11.5Z", "fill": "#1C274C"}], ["path", {"d": "M3 11.0015H7V6.00129C7 5.25791 6.21769 4.77441 5.55279 5.10686L3.55279 6.10686C3.214 6.27626 3 6.62252 3 7.00129V11.0015Z", "fill": "#1C274C"}], ["path", {"d": "M11 10.5C11 7.46243 13.4624 5 16.5 5C19.5376 5 22 7.46243 22 10.5C22 13.5376 19.5376 16 16.5 16C13.4624 16 11 13.5376 11 10.5Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M15.75 15.9492V19.5001H13.5C13.0858 19.5001 12.75 19.8359 12.75 20.2501C12.75 20.6643 13.0858 21.0001 13.5 21.0001H19.5C19.9142 21.0001 20.25 20.6643 20.25 20.2501C20.25 19.8359 19.9142 19.5001 19.5 19.5001H17.25V15.9492C17.0048 15.9827 16.7544 15.9999 16.5 15.9999C16.2456 15.9999 15.9952 15.9827 15.75 15.9492Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M7.75 5.61749C7.75 4.31657 6.38095 3.47046 5.21738 4.05224L3.21738 5.05224C2.6245 5.34868 2.25 5.95464 2.25 6.61749V10.2495H2C1.58579 10.2495 1.25 10.5852 1.25 10.9995V16.9995C1.25 19.0705 2.92893 20.7495 5 20.7495C7.07107 20.7495 8.75 19.0705 8.75 16.9995V10.9995C8.75 10.5852 8.41421 10.2495 8 10.2495H7.75V5.61749ZM2.75 11.7495H7.25V16.9995C7.25 18.2421 6.24264 19.2495 5 19.2495C3.75736 19.2495 2.75 18.2421 2.75 16.9995V11.7495ZM6.25 10.2495V5.61749C6.25 5.43165 6.05442 5.31077 5.8882 5.39389L3.8882 6.39389C3.8035 6.43623 3.75 6.5228 3.75 6.61749V10.2495H6.25Z", "fill": "white"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M16.5 4.24945C13.0482 4.24945 10.25 7.04767 10.25 10.4995C10.25 13.6974 12.6518 16.3344 15.75 16.7049V19.2495H13.5C13.0858 19.2495 12.75 19.5852 12.75 19.9995C12.75 20.4137 13.0858 20.7495 13.5 20.7495H19.5C19.9142 20.7495 20.25 20.4137 20.25 19.9995C20.25 19.5852 19.9142 19.2495 19.5 19.2495H17.25V16.7049C20.3482 16.3344 22.75 13.6974 22.75 10.4995C22.75 7.04767 19.9518 4.24945 16.5 4.24945ZM16.5 15.2495C19.1234 15.2495 21.25 13.1228 21.25 10.4995C21.25 7.8761 19.1234 5.74945 16.5 5.74945C13.8766 5.74945 11.75 7.8761 11.75 10.4995C11.75 13.1228 13.8766 15.2495 16.5 15.2495Z", "fill": "white"}]]};

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

const SolarCosmetic = React.forwardRef((props, ref) => {
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

SolarCosmetic.nodes = nodes;
SolarCosmetic.iconName = iconName;
SolarCosmetic.category = category;

const CosmeticOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarCosmetic, Object.assign({ ref, variant: 'outline' }, props));
});

const CosmeticBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarCosmetic, Object.assign({ ref, variant: 'bold' }, props));
});

const CosmeticBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarCosmetic, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const Cosmetic = SolarCosmetic;

module.exports = {
  iconName,
  category,
  nodes,
  SolarCosmetic,
  Cosmetic,
  CosmeticOutline,
  CosmeticBold,
  CosmeticBoldDuotone,
  default: SolarCosmetic
};
