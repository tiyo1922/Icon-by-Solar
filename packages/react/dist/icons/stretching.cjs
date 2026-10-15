const React = require('react');

const iconName = 'stretching';
const category = 'Sports';
const nodes = {"bold": [["path", {"d": "M17.0002 4.5C17.0002 5.88071 15.8809 7 14.5002 7C13.1195 7 12.0002 5.88071 12.0002 4.5C12.0002 3.11929 13.1195 2 14.5002 2C15.8809 2 17.0002 3.11929 17.0002 4.5Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M10.5028 9.20673C11.9875 8.57043 13.6391 9.6595 13.6391 11.2748V13.8953C13.6391 14.3654 13.5186 14.8276 13.2891 15.2379L10.5768 20.0861C10.2519 20.6668 9.72748 21.11 9.10074 21.3336L5.25218 22.7064C4.86205 22.8456 4.43296 22.6421 4.2938 22.252C4.15464 21.8618 4.35809 21.4328 4.74823 21.2936L8.59678 19.9208C8.88166 19.8192 9.12004 19.6177 9.26771 19.3537L11.98 14.5055C12.0843 14.3191 12.1391 14.1089 12.1391 13.8953V11.2748C12.1391 10.7364 11.5886 10.3733 11.0937 10.5854L8.63786 11.6379C8.14643 11.8485 8.0269 12.491 8.40972 12.8643L9.02378 13.463C9.32036 13.7522 9.32637 14.227 9.0372 14.5236C8.74804 14.8202 8.27321 14.8262 7.97663 14.537L7.36257 13.9383C6.21412 12.8186 6.57269 10.8911 8.04698 10.2592L10.5028 9.20673ZM16.5591 14.0535C18.232 13.7817 19.7502 15.0731 19.7502 16.7679V22C19.7502 22.4142 19.4144 22.75 19.0002 22.75C18.586 22.75 18.2502 22.4142 18.2502 22V16.7679C18.2502 15.9975 17.5601 15.4105 16.7997 15.5341L15.7872 15.6986C15.3783 15.7651 14.993 15.4875 14.9266 15.0786C14.8601 14.6698 15.1377 14.2845 15.5466 14.218L16.5591 14.0535Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"d": "M17 4.5C17 5.88071 15.8807 7 14.5 7C13.1193 7 12 5.88071 12 4.5C12 3.11929 13.1193 2 14.5 2C15.8807 2 17 3.11929 17 4.5Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M16.5589 14.0535C18.2318 13.7817 19.75 15.0731 19.75 16.7679V22C19.75 22.4142 19.4142 22.75 19 22.75C18.5858 22.75 18.25 22.4142 18.25 22V16.7679C18.25 15.9975 17.5599 15.4105 16.7995 15.5341L15.787 15.6986C15.3781 15.7651 14.9928 15.4875 14.9264 15.0786C14.8599 14.6698 15.1375 14.2845 15.5464 14.218L16.5589 14.0535Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M10.5028 9.20778C11.9875 8.57148 13.6391 9.66055 13.6391 11.2759V13.8963C13.6391 14.3664 13.5186 14.8287 13.2891 15.2389L10.5768 20.0871C10.2519 20.6679 9.72748 21.1111 9.10074 21.3346L5.25218 22.7075C4.86205 22.8466 4.43296 22.6432 4.2938 22.253C4.15464 21.8629 4.35809 21.4338 4.74823 21.2946L8.59678 19.9218C8.88166 19.8202 9.12004 19.6188 9.26771 19.3548L11.98 14.5066C12.0843 14.3201 12.1391 14.11 12.1391 13.8963V11.2759C12.1391 10.7374 11.5886 10.3744 11.0937 10.5865L8.63786 11.639C8.14643 11.8496 8.0269 12.4921 8.40972 12.8653L9.02378 13.4641C9.32036 13.7532 9.32637 14.2281 9.0372 14.5246C8.74804 14.8212 8.27321 14.8272 7.97663 14.5381L7.36257 13.9393C6.21412 12.8196 6.57269 10.8921 8.04698 10.2603L10.5028 9.20778Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M14.5 2.75C13.5335 2.75 12.75 3.5335 12.75 4.5C12.75 5.4665 13.5335 6.25 14.5 6.25C15.4665 6.25 16.25 5.4665 16.25 4.5C16.25 3.5335 15.4665 2.75 14.5 2.75ZM11.25 4.5C11.25 2.70507 12.705 1.25 14.5 1.25C16.2949 1.25 17.75 2.70507 17.75 4.5C17.75 6.29493 16.2949 7.75 14.5 7.75C12.705 7.75 11.25 6.29493 11.25 4.5ZM10.5025 9.20673C11.9872 8.57043 13.6388 9.6595 13.6388 11.2748V13.8953C13.6388 14.3654 13.5183 14.8276 13.2888 15.2379L10.5765 20.0861C10.2517 20.6668 9.72724 21.11 9.10049 21.3336L5.25194 22.7064C4.8618 22.8456 4.43272 22.6421 4.29356 22.252C4.15439 21.8618 4.35784 21.4328 4.74798 21.2936L8.59654 19.9208C8.88142 19.8192 9.11979 19.6177 9.26746 19.3537L11.9797 14.5055C12.0841 14.3191 12.1388 14.1089 12.1388 13.8953V11.2748C12.1388 10.7364 11.5883 10.3733 11.0934 10.5854L8.63761 11.6379C8.14618 11.8485 8.02666 12.491 8.40948 12.8643L9.02354 13.463C9.32011 13.7522 9.32612 14.227 9.03696 14.5236C8.7478 14.8202 8.27296 14.8262 7.97638 14.537L7.36233 13.9383C6.21388 12.8186 6.57244 10.8911 8.04673 10.2592L10.5025 9.20673ZM16.5589 14.0535C18.2317 13.7817 19.75 15.0731 19.75 16.7679V22C19.75 22.4142 19.4142 22.75 19 22.75C18.5857 22.75 18.25 22.4142 18.25 22V16.7679C18.25 15.9975 17.5599 15.4105 16.7995 15.5341L15.7869 15.6986C15.3781 15.7651 14.9928 15.4875 14.9263 15.0786C14.8599 14.6698 15.1375 14.2845 15.5463 14.218L16.5589 14.0535Z", "fill": "white"}]]};

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

const SolarStretching = React.forwardRef((props, ref) => {
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

SolarStretching.nodes = nodes;
SolarStretching.iconName = iconName;
SolarStretching.category = category;

const StretchingOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarStretching, Object.assign({ ref, variant: 'outline' }, props));
});

const StretchingBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarStretching, Object.assign({ ref, variant: 'bold' }, props));
});

const StretchingBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarStretching, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const Stretching = SolarStretching;

module.exports = {
  iconName,
  category,
  nodes,
  SolarStretching,
  Stretching,
  StretchingOutline,
  StretchingBold,
  StretchingBoldDuotone,
  default: SolarStretching
};
