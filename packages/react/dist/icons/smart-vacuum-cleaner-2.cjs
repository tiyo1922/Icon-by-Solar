const React = require('react');

const iconName = 'smart-vacuum-cleaner-2';
const category = 'Home, Furniture';
const nodes = {"bold": [["path", {"d": "M12 6.5C10.7574 6.5 9.75 7.50736 9.75 8.75C9.75 9.99264 10.7574 11 12 11C13.2426 11 14.25 9.99264 14.25 8.75C14.25 7.50736 13.2426 6.5 12 6.5Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M18.5209 19.3316C16.7701 20.8389 14.4915 21.75 12 21.75C9.50853 21.75 7.22987 20.8389 5.47906 19.3316L2.53033 22.2803C2.23744 22.5732 1.76256 22.5732 1.46967 22.2803C1.17678 21.9874 1.17678 21.5126 1.46967 21.2197L4.4184 18.2709C2.91114 16.5201 2 14.2415 2 11.75C2 6.22715 6.47715 1.75 12 1.75C17.5228 1.75 22 6.22715 22 11.75C22 14.2415 21.0889 16.5201 19.5816 18.2709L22.5303 21.2197C22.8232 21.5126 22.8232 21.9874 22.5303 22.2803C22.2374 22.5732 21.7626 22.5732 21.4697 22.2803L18.5209 19.3316ZM8.25 8.75C8.25 6.67893 9.92893 5 12 5C14.0711 5 15.75 6.67893 15.75 8.75C15.75 10.8211 14.0711 12.5 12 12.5C9.92893 12.5 8.25 10.8211 8.25 8.75ZM12.75 15.75C12.75 15.3358 12.4142 15 12 15C11.5858 15 11.25 15.3358 11.25 15.75V17.75C11.25 18.1642 11.5858 18.5 12 18.5C12.4142 18.5 12.75 18.1642 12.75 17.75V15.75Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "fillRule": "evenodd", "clipRule": "evenodd", "d": "M6.06066 19.0001L2.53033 22.5304C2.23744 22.8233 1.76256 22.8233 1.46967 22.5304C1.17678 22.2375 1.17678 21.7627 1.46967 21.4698L5 17.9395L6.06066 19.0001Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "fillRule": "evenodd", "clipRule": "evenodd", "d": "M17.9393 19.0001L21.4697 22.5304C21.7626 22.8233 22.2374 22.8233 22.5303 22.5304C22.8232 22.2375 22.8232 21.7627 22.5303 21.4698L19 17.9395L17.9393 19.0001Z", "fill": "#1C274C"}], ["path", {"d": "M9.75 8.75C9.75 7.50736 10.7574 6.5 12 6.5C13.2426 6.5 14.25 7.50736 14.25 8.75C14.25 9.99264 13.2426 11 12 11C10.7574 11 9.75 9.99264 9.75 8.75Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 21.5C17.5228 21.5 22 17.0228 22 11.5C22 5.97715 17.5228 1.5 12 1.5C6.47715 1.5 2 5.97715 2 11.5C2 17.0228 6.47715 21.5 12 21.5ZM8.25 8.75C8.25 6.67893 9.92893 5 12 5C14.0711 5 15.75 6.67893 15.75 8.75C15.75 10.8211 14.0711 12.5 12 12.5C9.92893 12.5 8.25 10.8211 8.25 8.75ZM12.75 15.75C12.75 15.3358 12.4142 15 12 15C11.5858 15 11.25 15.3358 11.25 15.75V17.75C11.25 18.1642 11.5858 18.5 12 18.5C12.4142 18.5 12.75 18.1642 12.75 17.75V15.75Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 14.6986 21.7556 17.165 20.1133 19.0527L22.5303 21.4697C22.8232 21.7626 22.8232 22.2374 22.5303 22.5303C22.2374 22.8232 21.7626 22.8232 21.4697 22.5303L19.0527 20.1133C17.165 21.7556 14.6986 22.75 12 22.75C9.3014 22.75 6.83504 21.7556 4.94734 20.1133L2.53033 22.5303C2.23744 22.8232 1.76256 22.8232 1.46967 22.5303C1.17678 22.2374 1.17678 21.7626 1.46967 21.4697L3.88668 19.0527C2.24436 17.165 1.25 14.6986 1.25 12ZM12 6.75C10.7574 6.75 9.75 7.75736 9.75 9C9.75 10.2426 10.7574 11.25 12 11.25C13.2426 11.25 14.25 10.2426 14.25 9C14.25 7.75736 13.2426 6.75 12 6.75ZM8.25 9C8.25 6.92893 9.92893 5.25 12 5.25C14.0711 5.25 15.75 6.92893 15.75 9C15.75 11.0711 14.0711 12.75 12 12.75C9.92893 12.75 8.25 11.0711 8.25 9ZM12 15.25C12.4142 15.25 12.75 15.5858 12.75 16V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V16C11.25 15.5858 11.5858 15.25 12 15.25Z", "fill": "white"}]]};

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

const SolarSmartVacuumCleaner2 = React.forwardRef((props, ref) => {
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

SolarSmartVacuumCleaner2.nodes = nodes;
SolarSmartVacuumCleaner2.iconName = iconName;
SolarSmartVacuumCleaner2.category = category;

const SmartVacuumCleaner2Outline = React.forwardRef((props, ref) => {
  return React.createElement(SolarSmartVacuumCleaner2, Object.assign({ ref, variant: 'outline' }, props));
});

const SmartVacuumCleaner2Bold = React.forwardRef((props, ref) => {
  return React.createElement(SolarSmartVacuumCleaner2, Object.assign({ ref, variant: 'bold' }, props));
});

const SmartVacuumCleaner2BoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarSmartVacuumCleaner2, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const SmartVacuumCleaner2 = SolarSmartVacuumCleaner2;

module.exports = {
  iconName,
  category,
  nodes,
  SolarSmartVacuumCleaner2,
  SmartVacuumCleaner2,
  SmartVacuumCleaner2Outline,
  SmartVacuumCleaner2Bold,
  SmartVacuumCleaner2BoldDuotone,
  default: SolarSmartVacuumCleaner2
};
