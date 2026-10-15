const React = require('react');

const iconName = 'lamp';
const category = 'Home, Furniture';
const nodes = {"bold": [["path", {"d": "M6.66749 3.15144C5.88138 3.9264 5.57692 5.0991 4.96802 7.44451L4.88378 7.76897C4.05598 10.9576 3.64207 12.5519 4.39389 13.6719C4.46887 13.7837 4.55129 13.8902 4.64058 13.9909C5.5358 15 7.18295 15 10.4772 15H11.2559V21.25H9.00586C8.59165 21.25 8.25586 21.5858 8.25586 22C8.25586 22.4142 8.59165 22.75 9.00586 22.75H15.0059C15.4201 22.75 15.7559 22.4142 15.7559 22C15.7559 21.5858 15.4201 21.25 15.0059 21.25H12.7559V15H13.5358C14.8551 15 15.9102 15 16.7586 14.9352C16.7568 14.9565 16.7559 14.9782 16.7559 15V17C16.7559 17.4142 17.0916 17.75 17.5059 17.75C17.9201 17.75 18.2559 17.4142 18.2559 17V15V14.6817C18.7241 14.5324 19.0866 14.3131 19.3724 13.9909C19.4617 13.8902 19.5441 13.7837 19.6191 13.6719C20.3709 12.5519 19.957 10.9576 19.1292 7.76898L19.045 7.44451C18.4361 5.0991 18.1316 3.9264 17.3455 3.15144C17.1176 2.92678 16.8636 2.73028 16.5889 2.56616C15.6412 2 14.4297 2 12.0065 2C9.58334 2 8.37176 2 7.42412 2.56616C7.14941 2.73028 6.89538 2.92678 6.66749 3.15144Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M4.96802 7.44451C5.57692 5.0991 5.88138 3.9264 6.66749 3.15144C6.89538 2.92678 7.14941 2.73028 7.42412 2.56616C8.37176 2 9.58334 2 12.0065 2C14.4297 2 15.6412 2 16.5889 2.56616C16.8636 2.73028 17.1176 2.92678 17.3455 3.15144C18.1316 3.9264 18.4361 5.0991 19.045 7.44451L19.1292 7.76898C19.957 10.9576 20.3709 12.5519 19.6191 13.6719C19.5441 13.7837 19.4617 13.8902 19.3724 13.9909C19.0866 14.3131 18.7241 14.5324 18.2559 14.6817C17.6605 14.827 17.0097 14.9112 16.7586 14.9352C15.9102 15 14.8551 15 13.5358 15H12.7559H11.2559H10.4772C7.18295 15 5.5358 15 4.64058 13.9909C4.55129 13.8902 4.46887 13.7837 4.39389 13.6719C3.64207 12.5519 4.05598 10.9576 4.88378 7.76897L4.96802 7.44451Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M16.7586 14.9351C16.7568 14.9565 16.7559 14.9781 16.7559 15V17C16.7559 17.4142 17.0916 17.75 17.5059 17.75C17.9201 17.75 18.2559 17.4142 18.2559 17V15V14.6816C17.6605 14.827 17.0097 14.9112 16.7586 14.9351Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "fillRule": "evenodd", "clipRule": "evenodd", "d": "M11.2559 21.25V15H12.7559V21.25H11.2559Z", "fill": "#1C274C"}], ["path", {"d": "M11.2559 21.25H9.00586C8.59165 21.25 8.25586 21.5858 8.25586 22C8.25586 22.4142 8.59165 22.75 9.00586 22.75H15.0059C15.4201 22.75 15.7559 22.4142 15.7559 22C15.7559 21.5858 15.4201 21.25 15.0059 21.25H12.7559H11.2559Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M11.9612 1.25H12.0388C13.2175 1.24999 14.1566 1.24998 14.9174 1.32433C15.701 1.40089 16.3623 1.56105 16.967 1.92231C17.2932 2.11721 17.5949 2.35055 17.8655 2.61733C18.3671 3.11184 18.6883 3.71167 18.9593 4.45089C19.2225 5.16858 19.4585 6.07761 19.7546 7.21848L19.863 7.63604C20.2647 9.18321 20.5856 10.419 20.7046 11.4064C20.8269 12.4212 20.7562 13.3138 20.2353 14.0899C20.1416 14.2296 20.0386 14.3628 19.9269 14.4886C19.4786 14.994 18.9121 15.2871 18.25 15.4623V17C18.25 17.4142 17.9142 17.75 17.5 17.75C17.0858 17.75 16.75 17.4142 16.75 17V15.6873C15.881 15.75 14.8313 15.75 13.5866 15.75H12.75V21.25H15C15.4142 21.25 15.75 21.5858 15.75 22C15.75 22.4142 15.4142 22.75 15 22.75H8.99997C8.58576 22.75 8.24997 22.4142 8.24997 22C8.24997 21.5858 8.58576 21.25 8.99997 21.25H11.25V15.75H10.4134C8.8149 15.75 7.53812 15.75 6.55251 15.6171C5.53954 15.4805 4.69329 15.1878 4.073 14.4886C3.96139 14.3628 3.85837 14.2296 3.76463 14.0899C3.24371 13.3138 3.17301 12.4212 3.29534 11.4064C3.41437 10.419 3.73522 9.18319 4.13692 7.636L4.2453 7.21852C4.54148 6.07763 4.77748 5.16859 5.04061 4.45089C5.31163 3.71167 5.63282 3.11184 6.13444 2.61733C6.40506 2.35055 6.70672 2.11721 7.03294 1.92231C7.63763 1.56105 8.29893 1.40089 9.08253 1.32433C9.84332 1.24998 10.7825 1.24999 11.9612 1.25ZM13.5292 14.25C15.1982 14.25 16.3734 14.2484 17.247 14.1306C18.105 14.0149 18.5299 13.8031 18.8048 13.4931C18.8718 13.4176 18.9336 13.3377 18.9899 13.254C19.2207 12.91 19.319 12.4454 19.2154 11.5859C19.1099 10.7108 18.8161 9.57286 18.3968 7.95744L18.3125 7.63298C18.0044 6.44607 17.786 5.60812 17.551 4.96723C17.321 4.34 17.0969 3.966 16.8125 3.68554C16.6273 3.50301 16.4209 3.34335 16.1977 3.21C15.8547 3.00511 15.4364 2.88218 14.7715 2.81721C14.0922 2.75083 13.2262 2.75 12 2.75C10.7737 2.75 9.90777 2.75083 9.2284 2.81721C8.56351 2.88218 8.1452 3.00511 7.80226 3.21C7.57905 3.34335 7.37266 3.50301 7.18749 3.68554C6.903 3.966 6.6789 4.34 6.44894 4.96723C6.21397 5.60812 5.99557 6.44607 5.68743 7.63297L5.60319 7.95744C5.1838 9.57286 4.89006 10.7108 4.78456 11.5859C4.68094 12.4454 4.7792 12.91 5.01009 13.254C5.06633 13.3377 5.12814 13.4176 5.19511 13.4931C5.47004 13.8031 5.89497 14.0149 6.75296 14.1306C7.62653 14.2484 8.80174 14.25 10.4707 14.25H13.5292Z", "fill": "white"}]]};

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

const SolarLamp = React.forwardRef((props, ref) => {
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

SolarLamp.nodes = nodes;
SolarLamp.iconName = iconName;
SolarLamp.category = category;

const LampOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarLamp, Object.assign({ ref, variant: 'outline' }, props));
});

const LampBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarLamp, Object.assign({ ref, variant: 'bold' }, props));
});

const LampBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarLamp, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const Lamp = SolarLamp;

module.exports = {
  iconName,
  category,
  nodes,
  SolarLamp,
  Lamp,
  LampOutline,
  LampBold,
  LampBoldDuotone,
  default: SolarLamp
};
