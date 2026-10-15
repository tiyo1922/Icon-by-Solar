const React = require('react');

const iconName = 'command';
const category = 'Network, IT, Programming';
const nodes = {"bold": [["path", {"d": "M16 7.99953L19 8C20.6569 8.00026 22.0002 6.65733 22.0005 5.00047C22.0007 3.34362 20.6578 2.00026 19.0009 2C17.3441 1.99974 16.0007 3.34267 16.0005 4.99953L16 7.99953L8.00047 7.99951L8 4.99953C7.99974 3.34267 6.65638 1.99974 4.99953 2C3.34267 2.00026 1.99974 3.34362 2 5.00047C2.00026 6.65733 3.34362 8.00026 5.00047 8L8.00047 7.99951L8 15.9995H16V7.99953Z", "fill": "#1C274C"}], ["path", {"d": "M16 15.9995L19 16C20.6569 15.9997 22.0002 17.3427 22.0005 18.9995C22.0007 20.6564 20.6578 21.9997 19.0009 22C17.3441 22.0003 16.0007 20.6573 16.0005 19.0005L16 15.9995Z", "fill": "#1C274C"}], ["path", {"d": "M5.00047 16L8.00047 16.0005L8 19.0005C7.99974 20.6573 6.65638 22.0003 4.99953 22C3.34267 21.9997 1.99974 20.6564 2 18.9995C2.00026 17.3427 3.34362 15.9997 5.00047 16Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"d": "M16 15.9995L19 16C20.6569 15.9997 22.0002 17.3427 22.0005 18.9995C22.0007 20.6564 20.6578 21.9997 19.0009 22C17.3441 22.0003 16.0007 20.6573 16.0005 19.0005L16 15.9995Z", "fill": "#1C274C"}], ["path", {"d": "M5.00047 16L8.00047 16.0005L8 19.0005C7.99974 20.6573 6.65638 22.0003 4.99953 22C3.34267 21.9997 1.99974 20.6564 2 18.9995C2.00026 17.3427 3.34362 15.9997 5.00047 16Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M19 8L16 7.99953L16.0005 4.99953C16.0007 3.34267 17.3441 1.99974 19.0009 2C20.6578 2.00026 22.0007 3.34362 22.0005 5.00047C22.0002 6.65733 20.6569 8.00026 19 8ZM8.00047 7.99951L8 4.99953C7.99974 3.34267 6.65638 1.99974 4.99953 2C3.34267 2.00026 1.99974 3.34362 2 5.00047C2.00026 6.65733 3.34362 8.00026 5.00047 8L8.00047 7.99951Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M16 8.00002L8.00047 8L8 16H16V8.00002Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M15.2505 4.99941C15.2508 2.92834 16.93 1.24967 19.0011 1.25C21.0721 1.25033 22.7508 2.92952 22.7505 5.00059C22.7501 7.07166 21.0709 8.75033 18.9999 8.75L16.75 8.74965V15.2504L18.9999 15.25C21.0709 15.2497 22.7501 16.9283 22.7505 18.9994C22.7508 21.0705 21.0721 22.7497 19.0011 22.75C16.93 22.7503 15.2508 21.0717 15.2505 19.0006L15.2501 16.7495H8.75084L8.75049 19.0006C8.75016 21.0717 7.07097 22.7503 4.9999 22.75C2.92883 22.7497 1.25016 21.0705 1.25049 18.9994C1.25081 16.9283 2.93001 15.2497 5.00108 15.25L7.25 15.2504V8.74965L5.00108 8.75C2.93001 8.75033 1.25081 7.07166 1.25049 5.00059C1.25016 2.92952 2.92883 1.25033 4.9999 1.25C7.07097 1.24967 8.75016 2.92834 8.75049 4.99941L8.75084 7.24951H15.2501L15.2505 4.99941ZM7.25084 7.24951L7.25049 4.99965C7.25029 3.757 6.24277 2.7498 5.00013 2.75C3.75749 2.7502 2.75029 3.75771 2.75049 5.00035C2.75068 6.243 3.7582 7.2502 5.00084 7.25L7.25084 7.24951ZM19.0008 2.75C17.7582 2.7498 16.7507 3.757 16.7505 4.99965L16.7501 7.24965L19.0001 7.25C20.2428 7.2502 21.2503 6.24299 21.2505 5.00035C21.2507 3.75771 20.2435 2.7502 19.0008 2.75ZM8.75 8.74951V15.2495H15.25V8.74951H8.75ZM21.2505 18.9996C21.2503 17.757 20.2428 16.7498 19.0001 16.75L16.7501 16.7504L16.7505 19.0004C16.7507 20.243 17.7582 21.2502 19.0008 21.25C20.2435 21.2498 21.2507 20.2423 21.2505 18.9996ZM2.75049 18.9996C2.75068 17.757 3.7582 16.7498 5.00084 16.75L7.25084 16.7504L7.25049 19.0004C7.25029 20.243 6.24277 21.2502 5.00013 21.25C3.75749 21.2498 2.75029 20.2423 2.75049 18.9996Z", "fill": "#FEFEFF"}]]};

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

const SolarCommand = React.forwardRef((props, ref) => {
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

SolarCommand.nodes = nodes;
SolarCommand.iconName = iconName;
SolarCommand.category = category;

const CommandOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarCommand, Object.assign({ ref, variant: 'outline' }, props));
});

const CommandBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarCommand, Object.assign({ ref, variant: 'bold' }, props));
});

const CommandBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarCommand, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const Command = SolarCommand;

module.exports = {
  iconName,
  category,
  nodes,
  SolarCommand,
  Command,
  CommandOutline,
  CommandBold,
  CommandBoldDuotone,
  default: SolarCommand
};
