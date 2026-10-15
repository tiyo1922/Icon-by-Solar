const React = require('react');

const iconName = 'flag';
const category = 'Essentional, UI';
const nodes = {"bold": [["path", {"d": "M5.75 1C6.16421 1 6.5 1.33579 6.5 1.75V3.6L8.22067 3.25587C9.8712 2.92576 11.5821 3.08284 13.1449 3.70797L13.3486 3.78943C14.9097 4.41389 16.628 4.53051 18.2592 4.1227C19.0165 3.93339 19.75 4.50613 19.75 5.28669V12.6537C19.75 13.298 19.3115 13.8596 18.6864 14.0159L18.472 14.0695C16.7024 14.5119 14.8385 14.3854 13.1449 13.708C11.5821 13.0828 9.8712 12.9258 8.22067 13.2559L6.5 13.6V21.75C6.5 22.1642 6.16421 22.5 5.75 22.5C5.33579 22.5 5 22.1642 5 21.75V1.75C5 1.33579 5.33579 1 5.75 1Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "fillRule": "evenodd", "clipRule": "evenodd", "d": "M6.5 1.75C6.5 1.33579 6.16421 1 5.75 1C5.33579 1 5 1.33579 5 1.75V21.75C5 22.1642 5.33579 22.5 5.75 22.5C6.16421 22.5 6.5 22.1642 6.5 21.75V13.6V3.6V1.75Z", "fill": "#1C274C"}], ["path", {"d": "M13.3486 3.788L13.1449 3.70655C11.5821 3.08142 9.8712 2.92434 8.22067 3.25444L6.5 3.59858V13.5986L8.22067 13.2544C9.8712 12.9243 11.5821 13.0814 13.1449 13.7065C14.8385 14.384 16.7024 14.5105 18.472 14.0681L18.6864 14.0145C19.3115 13.8582 19.75 13.2966 19.75 12.6523V5.28526C19.75 4.5047 19.0165 3.93196 18.2592 4.12128C16.628 4.52908 14.9097 4.41247 13.3486 3.788Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M5 1.25C5.41421 1.25 5.75 1.58579 5.75 2V3.08515L7.32358 2.77043C9.11678 2.41179 10.9756 2.58245 12.6735 3.26161L12.8771 3.34307C14.2919 3.90898 15.849 4.01466 17.3273 3.64509C18.5579 3.33744 19.75 4.2682 19.75 5.53669V12.9037C19.75 13.8922 19.0773 14.7538 18.1183 14.9935L17.9039 15.0471C15.9814 15.5277 13.9563 15.3903 12.1164 14.6543C10.6886 14.0832 9.12562 13.9397 7.61776 14.2413L5.75 14.6149V22C5.75 22.4142 5.41421 22.75 5 22.75C4.58579 22.75 4.25 22.4142 4.25 22V2C4.25 1.58579 4.58579 1.25 5 1.25ZM5.75 13.0851L7.32358 12.7704C9.11678 12.4118 10.9756 12.5825 12.6735 13.2616C14.2206 13.8805 15.9235 13.996 17.5401 13.5919L17.7545 13.5383C18.0457 13.4655 18.25 13.2039 18.25 12.9037V5.53669C18.25 5.24405 17.975 5.02933 17.6911 5.10031C15.9069 5.54635 14.0276 5.4188 12.32 4.73578L12.1164 4.65433C10.6886 4.08323 9.12562 3.93973 7.61776 4.2413L5.75 4.61485V13.0851Z", "fill": "white"}]]};

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

const SolarFlag = React.forwardRef((props, ref) => {
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

SolarFlag.nodes = nodes;
SolarFlag.iconName = iconName;
SolarFlag.category = category;

const FlagOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarFlag, Object.assign({ ref, variant: 'outline' }, props));
});

const FlagBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarFlag, Object.assign({ ref, variant: 'bold' }, props));
});

const FlagBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarFlag, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const Flag = SolarFlag;

module.exports = {
  iconName,
  category,
  nodes,
  SolarFlag,
  Flag,
  FlagOutline,
  FlagBold,
  FlagBoldDuotone,
  default: SolarFlag
};
