const React = require('react');

const iconName = 'magnifer-zoom-in';
const category = 'Search';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M21.7883 21.7883C22.0706 21.506 22.0706 21.0483 21.7883 20.7659L18.1224 17.1001C19.4885 15.5006 20.3133 13.4249 20.3133 11.1566C20.3133 6.09956 16.2137 2 11.1566 2C6.09956 2 2 6.09956 2 11.1566C2 16.2137 6.09956 20.3133 11.1566 20.3133C13.4249 20.3133 15.5006 19.4885 17.1001 18.1224L20.7659 21.7883C21.0483 22.0706 21.506 22.0706 21.7883 21.7883ZM11.1566 8.0241C11.5559 8.0241 11.8795 8.34775 11.8795 8.74699V10.4337H13.5663C13.9655 10.4337 14.2892 10.7574 14.2892 11.1566C14.2892 11.5559 13.9655 11.8795 13.5663 11.8795H11.8795V13.5663C11.8795 13.9655 11.5559 14.2892 11.1566 14.2892C10.7574 14.2892 10.4337 13.9655 10.4337 13.5663V11.8795H8.74699C8.34775 11.8795 8.0241 11.5559 8.0241 11.1566C8.0241 10.7574 8.34775 10.4337 8.74699 10.4337H10.4337V8.74699C10.4337 8.34775 10.7574 8.0241 11.1566 8.0241Z", "fill": "#1C274C"}]], "bold-duotone": [["g", {"opacity": "0.5"}], ["path", {"d": "M11.1566 20.3133C16.2137 20.3133 20.3133 16.2137 20.3133 11.1566C20.3133 6.09956 16.2137 2 11.1566 2C6.09956 2 2 6.09956 2 11.1566C2 16.2137 6.09956 20.3133 11.1566 20.3133Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M11.1565 8.02344C11.5557 8.02344 11.8793 8.34709 11.8793 8.74633V10.4331H13.5661C13.9653 10.4331 14.289 10.7567 14.289 11.156C14.289 11.5552 13.9653 11.8789 13.5661 11.8789H11.8793V13.5656C11.8793 13.9648 11.5557 14.2885 11.1565 14.2885C10.7572 14.2885 10.4336 13.9648 10.4336 13.5656V11.8789H8.74682C8.34758 11.8789 8.02393 11.5552 8.02393 11.156C8.02393 10.7567 8.34758 10.4331 8.74682 10.4331H10.4336V8.74633C10.4336 8.34709 10.7572 8.02344 11.1565 8.02344Z", "fill": "#1C274C"}], ["path", {"d": "M17.1001 18.1239L20.7664 21.7902C21.0487 22.0725 21.5064 22.0725 21.7887 21.7902C22.071 21.5079 22.071 21.0502 21.7887 20.7679L18.1224 17.1016C17.809 17.4685 17.4671 17.8105 17.1001 18.1239Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M11.5 2.75C6.66751 2.75 2.75 6.66751 2.75 11.5C2.75 16.3325 6.66751 20.25 11.5 20.25C16.3325 20.25 20.25 16.3325 20.25 11.5C20.25 6.66751 16.3325 2.75 11.5 2.75ZM1.25 11.5C1.25 5.83908 5.83908 1.25 11.5 1.25C17.1609 1.25 21.75 5.83908 21.75 11.5C21.75 14.0605 20.8111 16.4017 19.2589 18.1982L22.5303 21.4697C22.8232 21.7626 22.8232 22.2374 22.5303 22.5303C22.2374 22.8232 21.7626 22.8232 21.4697 22.5303L18.1982 19.2589C16.4017 20.8111 14.0605 21.75 11.5 21.75C5.83908 21.75 1.25 17.1609 1.25 11.5ZM11.5 8.25C11.9142 8.25 12.25 8.58579 12.25 9V10.75H14C14.4142 10.75 14.75 11.0858 14.75 11.5C14.75 11.9142 14.4142 12.25 14 12.25H12.25V14C12.25 14.4142 11.9142 14.75 11.5 14.75C11.0858 14.75 10.75 14.4142 10.75 14V12.25H9C8.58579 12.25 8.25 11.9142 8.25 11.5C8.25 11.0858 8.58579 10.75 9 10.75H10.75V9C10.75 8.58579 11.0858 8.25 11.5 8.25Z", "fill": "white"}]]};

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

const SolarMagniferZoomIn = React.forwardRef((props, ref) => {
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

SolarMagniferZoomIn.nodes = nodes;
SolarMagniferZoomIn.iconName = iconName;
SolarMagniferZoomIn.category = category;

const MagniferZoomInOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarMagniferZoomIn, Object.assign({ ref, variant: 'outline' }, props));
});

const MagniferZoomInBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarMagniferZoomIn, Object.assign({ ref, variant: 'bold' }, props));
});

const MagniferZoomInBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarMagniferZoomIn, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const MagniferZoomIn = SolarMagniferZoomIn;

module.exports = {
  iconName,
  category,
  nodes,
  SolarMagniferZoomIn,
  MagniferZoomIn,
  MagniferZoomInOutline,
  MagniferZoomInBold,
  MagniferZoomInBoldDuotone,
  default: SolarMagniferZoomIn
};
