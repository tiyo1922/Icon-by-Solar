const React = require('react');

const iconName = 'skirt';
const category = 'Essentional, UI';
const nodes = {"bold": [["path", {"d": "M16.1083 2H7.8917C6.92337 2 6.4392 2 6.13838 2.29289C5.83756 2.58579 5.83756 3.05719 5.83756 4V4.75H18.1624V4C18.1624 3.05719 18.1624 2.58579 17.8616 2.29289C17.5608 2 17.0766 2 16.1083 2Z", "fill": "#1C274C"}], ["path", {"d": "M2.08066 17.9529L5.61129 6.25H9.03434L7.14735 21.4073C7.14337 21.4393 7.14146 21.471 7.14153 21.5024C5.04603 21.0409 3.60091 20.3491 2.7345 19.8293C2.08222 19.4379 1.86473 18.6686 2.08066 17.9529Z", "fill": "#1C274C"}], ["path", {"d": "M8.59323 21.7655C9.60634 21.9115 10.7401 22 12 22C13.2598 22 14.3935 21.9115 15.4066 21.7655C15.386 21.7109 15.3715 21.6531 15.3639 21.5927L13.4539 6.25H10.5459L8.63586 21.5927C8.62833 21.6531 8.61382 21.7109 8.59323 21.7655Z", "fill": "#1C274C"}], ["path", {"d": "M14.9655 6.25L16.8524 21.4073C16.8564 21.4393 16.8583 21.4711 16.8583 21.5025C18.9539 21.041 20.3991 20.3491 21.2655 19.8293C21.9178 19.4379 22.1353 18.6686 21.9193 17.9529L18.3887 6.25H14.9655Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.6", "d": "M9.99986 5.5H13.9999L15.9605 21.6781C14.8118 21.8754 13.4947 22 12 22C10.505 22 9.18756 21.8754 8.03857 21.6779L9.99986 5.5Z", "fill": "#1C274C"}], ["path", {"opacity": "0.4", "d": "M5.83756 5.5L2.08066 17.9529C1.86473 18.6686 2.08222 19.4379 2.7345 19.8293C3.71948 20.4202 5.45239 21.2335 8.03856 21.6779L9.99985 5.5H5.83756Z", "fill": "#1C274C"}], ["path", {"opacity": "0.7", "d": "M21.2656 19.8293C21.9179 19.4379 22.1354 18.6686 21.9195 17.9529L18.1626 5.5H14L15.9607 21.6781C18.5473 21.2337 20.2806 20.4203 21.2656 19.8293Z", "fill": "#1C274C"}], ["path", {"d": "M16.1086 2H7.89204C6.9237 2 6.43954 2 6.13871 2.29289C5.83789 2.58579 5.83789 3.05719 5.83789 4V5.5H10.0002H14.0002H18.1628V4C18.1628 3.05719 18.1628 2.58579 17.862 2.29289C17.5611 2 17.077 2 16.1086 2Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M7.84749 1.25C7.8622 1.25 7.87695 1.25001 7.89175 1.25001L16.1526 1.25C16.5986 1.24996 17.0038 1.24991 17.3327 1.29296C17.6919 1.33999 18.0712 1.45011 18.3849 1.75553C18.7014 2.06368 18.8182 2.44094 18.8678 2.80014C18.9126 3.1243 18.9125 3.52236 18.9125 3.95444L18.9125 5.38934L22.6374 17.7362C22.9335 18.7175 22.6514 19.8725 21.6514 20.4724C20.1188 21.392 17.0035 22.75 12 22.75C6.99654 22.75 3.88132 21.392 2.34868 20.4724C1.34873 19.8725 1.06663 18.7175 1.36267 17.7362L5.0876 5.38934V4.00001C5.0876 3.98478 5.0876 3.96958 5.0876 3.95444C5.08754 3.52236 5.08749 3.1243 5.13225 2.80014C5.18185 2.44094 5.29873 2.06368 5.61522 1.75553C5.92892 1.45011 6.30816 1.33999 6.66742 1.29296C6.99628 1.24991 7.40143 1.24996 7.84749 1.25ZM6.39472 6.25001L2.79874 18.1695C2.66292 18.6197 2.81578 19.0034 3.12041 19.1862C3.90982 19.6598 5.25546 20.3103 7.22889 20.7535L9.03449 6.25001H6.39472ZM10.5461 6.25001L8.70679 21.0241C9.68328 21.1645 10.7791 21.25 12 21.25C13.221 21.25 14.3168 21.1645 15.2933 21.0241L13.454 6.25001H10.5461ZM14.9656 6.25001L16.7712 20.7535C18.7446 20.3103 20.0903 19.6598 20.8797 19.1862C21.1843 19.0034 21.3372 18.6197 21.2013 18.1695L17.6054 6.25001H14.9656ZM17.4125 4.75001V4.00001C17.4125 3.50684 17.4108 3.21443 17.3819 3.00533C17.3688 2.90991 17.3534 2.86299 17.3447 2.84254C17.3427 2.8378 17.3412 2.83473 17.3402 2.833L17.3389 2.83074C17.3388 2.83062 17.3391 2.83094 17.3389 2.83074C17.3379 2.82976 17.3371 2.82902 17.3362 2.82843C17.335 2.8277 17.3299 2.82451 17.3181 2.81979C17.2922 2.80944 17.2393 2.79354 17.138 2.78027C16.9183 2.75152 16.6132 2.75001 16.1083 2.75001H7.89175C7.38692 2.75001 7.08179 2.75152 6.86211 2.78027C6.76076 2.79354 6.70784 2.80944 6.682 2.81979C6.67022 2.82451 6.66506 2.8277 6.66391 2.82843C6.66299 2.82902 6.66263 2.82928 6.66162 2.83026C6.66142 2.83046 6.66174 2.83014 6.66162 2.83026L6.65984 2.833C6.65891 2.83473 6.65737 2.8378 6.65536 2.84254C6.64672 2.86299 6.63133 2.90991 6.61815 3.00533C6.58928 3.21443 6.5876 3.50684 6.5876 4.00001V4.75001H17.4125Z", "fill": "white"}]]};

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

const SolarSkirt = React.forwardRef((props, ref) => {
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

SolarSkirt.nodes = nodes;
SolarSkirt.iconName = iconName;
SolarSkirt.category = category;

const SkirtOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarSkirt, Object.assign({ ref, variant: 'outline' }, props));
});

const SkirtBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarSkirt, Object.assign({ ref, variant: 'bold' }, props));
});

const SkirtBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarSkirt, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const Skirt = SolarSkirt;

module.exports = {
  iconName,
  category,
  nodes,
  SolarSkirt,
  Skirt,
  SkirtOutline,
  SkirtBold,
  SkirtBoldDuotone,
  default: SolarSkirt
};
