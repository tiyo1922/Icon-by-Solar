const React = require('react');

const iconName = 'plug-circle';
const category = 'Electronic, Devices';
const nodes = {"bold": [["path", {"d": "M12 2C6.47715 2 2 6.48336 2 12.0139C2 17.2918 6.07759 21.6161 11.2503 22L11.2499 15.9387C9.67737 15.5949 8.5 14.1924 8.5 12.5146V12.0139C8.5 11.4608 8.94772 11.0125 9.5 11.0125H9.75V9.0097C9.75 8.59491 10.0858 8.25866 10.5 8.25866C10.9142 8.25866 11.25 8.59491 11.25 9.0097V11.0125H12.75V9.0097C12.75 8.59491 13.0858 8.25866 13.5 8.25866C13.9142 8.25866 14.25 8.59491 14.25 9.0097V11.0125H14.5C15.0523 11.0125 15.5 11.4608 15.5 12.0139V12.5146C15.5 14.1925 14.3226 15.595 12.7499 15.9388L12.7497 22C17.9224 21.6161 22 17.2918 22 12.0139C22 6.48336 17.5228 2 12 2Z", "fill": "#1C274C"}]], "bold-duotone": [["g", {"opacity": "0.5"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12.7497 22C17.9224 21.6161 22 17.2918 22 12.0139L22 12.0069L22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12L2 12.0069L2 12.0139C2 17.2918 6.07759 21.6161 11.2503 22L11.2503 21.9723C6.07986 21.5891 2.00357 17.2744 2 12.0069C2.00374 6.47961 6.47946 2 12 2C17.5205 2 21.9963 6.47961 22 12.0069C21.9964 17.2744 17.9201 21.5891 12.7497 21.9723L12.7497 22Z", "fill": "#1C274C"}], ["path", {"d": "M11.2503 21.9723C11.4978 21.9907 11.7478 22 12 22C12.2522 22 12.5022 21.9907 12.7497 21.9723C17.9201 21.5891 21.9964 17.2744 22 12.0069C21.9963 6.47961 17.5205 2 12 2C6.47946 2 2.00374 6.47961 2 12.0069C2.00357 17.2744 6.07986 21.5891 11.2503 21.9723Z", "fill": "#1C274C"}], ["path", {"d": "M8.5 12.5137C8.5 14.1916 9.67737 15.594 11.2499 15.9379L11.2503 21.9715C11.4978 21.9898 11.7478 21.9992 12 21.9992C12.2522 21.9992 12.5022 21.9898 12.7497 21.9715L12.7499 15.9379C14.3226 15.5941 15.5 14.1916 15.5 12.5137V12.013C15.5 11.46 15.0523 11.0116 14.5 11.0116H14.25V9.00885C14.25 8.59406 13.9142 8.25781 13.5 8.25781C13.0858 8.25781 12.75 8.59406 12.75 9.00885V11.0116H11.25V9.00885C11.25 8.59406 10.9142 8.25781 10.5 8.25781C10.0858 8.25781 9.75 8.59406 9.75 9.00885V11.0116H9.5C8.94772 11.0116 8.5 11.46 8.5 12.013V12.5137Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 2.75C6.89721 2.75 2.75 6.92275 2.75 12.0832C2.75 16.6065 5.93808 20.3736 10.1622 21.2324C10.6697 21.3355 11.25 20.909 11.25 20.1498V15.675C9.53832 15.3275 8.25 13.8142 8.25 12V11.8C8.25 10.9607 8.9171 10.2772 9.75 10.2508V9C9.75 8.58579 10.0858 8.25 10.5 8.25C10.9142 8.25 11.25 8.58579 11.25 9V10.25H12.75V9C12.75 8.58579 13.0858 8.25 13.5 8.25C13.9142 8.25 14.25 8.58579 14.25 9V10.2508C15.0829 10.2772 15.75 10.9607 15.75 11.8V12C15.75 13.8142 14.4617 15.3275 12.75 15.675V20.1498C12.75 21.618 11.5214 23.0394 9.86335 22.7023C4.94578 21.7025 1.25 17.3253 1.25 12.0832C1.25 6.10607 6.05709 1.25 12 1.25C17.9429 1.25 22.75 6.10607 22.75 12.0832C22.75 16.369 20.2798 20.0752 16.6941 21.8316C16.3221 22.0138 15.8728 21.86 15.6906 21.488C15.5084 21.116 15.6622 20.6668 16.0342 20.4846C19.1208 18.9726 21.25 15.7797 21.25 12.0832C21.25 6.92275 17.1028 2.75 12 2.75ZM9.8 11.75C9.77239 11.75 9.75 11.7724 9.75 11.8V12C9.75 13.2426 10.7574 14.25 12 14.25C13.2426 14.25 14.25 13.2426 14.25 12V11.8C14.25 11.7724 14.2276 11.75 14.2 11.75H9.8Z", "fill": "white"}]]};

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

const SolarPlugCircle = React.forwardRef((props, ref) => {
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

SolarPlugCircle.nodes = nodes;
SolarPlugCircle.iconName = iconName;
SolarPlugCircle.category = category;

const PlugCircleOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarPlugCircle, Object.assign({ ref, variant: 'outline' }, props));
});

const PlugCircleBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarPlugCircle, Object.assign({ ref, variant: 'bold' }, props));
});

const PlugCircleBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarPlugCircle, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const PlugCircle = SolarPlugCircle;

module.exports = {
  iconName,
  category,
  nodes,
  SolarPlugCircle,
  PlugCircle,
  PlugCircleOutline,
  PlugCircleBold,
  PlugCircleBoldDuotone,
  default: SolarPlugCircle
};
