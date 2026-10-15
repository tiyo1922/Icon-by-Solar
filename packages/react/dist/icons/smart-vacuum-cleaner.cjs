const React = require('react');

const iconName = 'smart-vacuum-cleaner';
const category = 'Home, Furniture';
const nodes = {"bold": [["path", {"d": "M9.75 9C9.75 7.75736 10.7574 6.75 12 6.75C13.2426 6.75 14.25 7.75736 14.25 9C14.25 10.2426 13.2426 11.25 12 11.25C10.7574 11.25 9.75 10.2426 9.75 9Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M21.2093 15.904C21.7184 14.7045 22 13.3852 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.385 2.28157 14.7043 2.79059 15.9036L2.70455 15.9998C2.1112 16.6627 1.74951 17.54 1.74951 18.5C1.74951 20.571 3.42844 22.25 5.49951 22.25C6.45947 22.25 7.33675 21.8883 7.9997 21.2949L8.09559 21.2091C9.29517 21.7183 10.6147 22 12 22C13.3852 22 14.7046 21.7184 15.9041 21.2092L15.9998 21.2949C16.6628 21.8883 17.54 22.25 18.5 22.25C20.5711 22.25 22.25 20.571 22.25 18.5C22.25 17.54 21.8883 16.6627 21.295 15.9998L21.2093 15.904ZM20.442 17.3627C19.6539 18.6008 18.6008 19.6538 17.3627 20.442C17.6964 20.6379 18.0846 20.75 18.5 20.75C19.7426 20.75 20.75 19.7426 20.75 18.5C20.75 18.0846 20.638 17.6963 20.442 17.3627ZM6.63705 20.4418C5.39891 19.6536 4.34587 18.6005 3.55776 17.3623C3.36165 17.696 3.24951 18.0844 3.24951 18.5C3.24951 19.7426 4.25687 20.75 5.49951 20.75C5.91499 20.75 6.30335 20.6379 6.63705 20.4418ZM12 5.25C9.92893 5.25 8.25 6.92893 8.25 9C8.25 11.0711 9.92893 12.75 12 12.75C14.0711 12.75 15.75 11.0711 15.75 9C15.75 6.92893 14.0711 5.25 12 5.25ZM12 15.25C12.4142 15.25 12.75 15.5858 12.75 16V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V16C11.25 15.5858 11.5858 15.25 12 15.25Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M16.4413 19.4275L15.441 20.5452L15.9998 21.0454C16.6628 21.6388 17.54 22.0004 18.5 22.0004C20.5711 22.0004 22.25 20.3215 22.25 18.2504C22.25 17.2905 21.8883 16.4132 21.295 15.7503L20.7948 15.1914L19.6771 16.1918L16.4413 19.4275Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M7.55818 19.4275L8.55855 20.5452L7.9997 21.0454C7.33675 21.6388 6.45947 22.0004 5.49951 22.0004C3.42844 22.0004 1.74951 20.3215 1.74951 18.2504C1.74951 17.2905 2.1112 16.4132 2.70455 15.7503L3.20474 15.1914L4.32244 16.1918L7.55818 19.4275Z", "fill": "#1C274C"}], ["path", {"d": "M12 1.75C17.5228 1.75 22 6.22715 22 11.75C22 17.2728 17.5228 21.75 12 21.75C6.47715 21.75 2 17.2728 2 11.75C2 6.22715 6.47715 1.75 12 1.75ZM12 15C11.5858 15 11.25 15.3358 11.25 15.75V17.75C11.25 18.1642 11.5858 18.5 12 18.5C12.4142 18.5 12.75 18.1642 12.75 17.75V15.75C12.75 15.3358 12.4142 15 12 15ZM12 5C9.92893 5 8.25 6.67893 8.25 8.75C8.25 10.8211 9.92893 12.5 12 12.5C14.0711 12.5 15.75 10.8211 15.75 8.75C15.75 6.67893 14.0711 5 12 5ZM12 6.5C13.2426 6.5 14.25 7.50736 14.25 8.75C14.25 9.99264 13.2426 11 12 11C10.7574 11 9.75 9.99264 9.75 8.75C9.75 7.50736 10.7574 6.5 12 6.5Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 13.6405 22.3825 15.1952 21.7254 16.5862C22.0584 17.1465 22.25 17.8014 22.25 18.5C22.25 20.5711 20.5711 22.25 18.5 22.25C17.8014 22.25 17.1465 22.0584 16.5862 21.7254C15.1952 22.3825 13.6405 22.75 12 22.75C10.3594 22.75 8.80463 22.3825 7.41353 21.7253C6.85319 22.0584 6.19828 22.25 5.49956 22.25C3.42849 22.25 1.74956 20.5711 1.74956 18.5C1.74956 17.8012 1.94122 17.1462 2.2744 16.5858C1.6174 15.1949 1.25 13.6403 1.25 12ZM3.26185 18.263C3.25372 18.3408 3.24956 18.4199 3.24956 18.5C3.24956 19.7426 4.25692 20.75 5.49956 20.75C5.57959 20.75 5.65861 20.7458 5.73643 20.7377C4.7831 20.0531 3.94639 19.2164 3.26185 18.263ZM18.2635 20.7378C18.3412 20.7459 18.4201 20.75 18.5 20.75C19.7426 20.75 20.75 19.7426 20.75 18.5C20.75 18.4201 20.7459 18.3412 20.7378 18.2635C20.0533 19.2167 19.2167 20.0533 18.2635 20.7378ZM12 6.75C10.7574 6.75 9.75 7.75736 9.75 9C9.75 10.2426 10.7574 11.25 12 11.25C13.2426 11.25 14.25 10.2426 14.25 9C14.25 7.75736 13.2426 6.75 12 6.75ZM8.25 9C8.25 6.92893 9.92893 5.25 12 5.25C14.0711 5.25 15.75 6.92893 15.75 9C15.75 11.0711 14.0711 12.75 12 12.75C9.92893 12.75 8.25 11.0711 8.25 9ZM12 15.25C12.4142 15.25 12.75 15.5858 12.75 16V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V16C11.25 15.5858 11.5858 15.25 12 15.25Z", "fill": "white"}]]};

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

const SolarSmartVacuumCleaner = React.forwardRef((props, ref) => {
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

SolarSmartVacuumCleaner.nodes = nodes;
SolarSmartVacuumCleaner.iconName = iconName;
SolarSmartVacuumCleaner.category = category;

const SmartVacuumCleanerOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarSmartVacuumCleaner, Object.assign({ ref, variant: 'outline' }, props));
});

const SmartVacuumCleanerBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarSmartVacuumCleaner, Object.assign({ ref, variant: 'bold' }, props));
});

const SmartVacuumCleanerBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarSmartVacuumCleaner, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const SmartVacuumCleaner = SolarSmartVacuumCleaner;

module.exports = {
  iconName,
  category,
  nodes,
  SolarSmartVacuumCleaner,
  SmartVacuumCleaner,
  SmartVacuumCleanerOutline,
  SmartVacuumCleanerBold,
  SmartVacuumCleanerBoldDuotone,
  default: SolarSmartVacuumCleaner
};
