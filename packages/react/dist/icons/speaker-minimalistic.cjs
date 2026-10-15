const React = require('react');

const iconName = 'speaker-minimalistic';
const category = 'Home, Furniture';
const nodes = {"bold": [["path", {"d": "M12 10.75C10.2051 10.75 8.75 12.2051 8.75 14C8.75 15.7949 10.2051 17.25 12 17.25C13.7949 17.25 15.25 15.7949 15.25 14C15.25 12.2051 13.7949 10.75 12 10.75Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M4 10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10V14C20 17.7712 20 19.6569 18.8284 20.8284C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V10ZM7.25 14C7.25 11.3766 9.37665 9.25 12 9.25C14.6234 9.25 16.75 11.3766 16.75 14C16.75 16.6234 14.6234 18.75 12 18.75C9.37665 18.75 7.25 16.6234 7.25 14ZM10 5.25C9.58579 5.25 9.25 5.58579 9.25 6C9.25 6.41421 9.58579 6.75 10 6.75H14C14.4142 6.75 14.75 6.41421 14.75 6C14.75 5.58579 14.4142 5.25 14 5.25H10Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M4 10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10V14C20 17.7712 20 19.6569 18.8284 20.8284C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V10Z", "fill": "#1C274C"}], ["path", {"d": "M10 5.25C9.58579 5.25 9.25 5.58579 9.25 6C9.25 6.41421 9.58579 6.75 10 6.75H14C14.4142 6.75 14.75 6.41421 14.75 6C14.75 5.58579 14.4142 5.25 14 5.25H10Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 9.25C9.37665 9.25 7.25 11.3766 7.25 14C7.25 16.6234 9.37665 18.75 12 18.75C14.6234 18.75 16.75 16.6234 16.75 14C16.75 11.3766 14.6234 9.25 12 9.25Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M11.9436 1.25H12.0564C13.8942 1.24998 15.3498 1.24997 16.489 1.40314C17.6614 1.56076 18.6104 1.89288 19.3588 2.64124C20.1071 3.38961 20.4392 4.33856 20.5969 5.51098C20.75 6.65019 20.75 8.10583 20.75 9.94359V14.0564C20.75 15.8942 20.75 17.3498 20.5969 18.489C20.4392 19.6614 20.1071 20.6104 19.3588 21.3588C18.6104 22.1071 17.6614 22.4392 16.489 22.5969C15.3498 22.75 13.8942 22.75 12.0564 22.75H11.9436C10.1058 22.75 8.65019 22.75 7.51098 22.5969C6.33856 22.4392 5.38961 22.1071 4.64124 21.3588C3.89288 20.6104 3.56076 19.6614 3.40314 18.489C3.24997 17.3498 3.24998 15.8942 3.25 14.0564V9.94358C3.24998 8.10582 3.24997 6.65019 3.40314 5.51098C3.56076 4.33856 3.89288 3.38961 4.64124 2.64124C5.38961 1.89288 6.33856 1.56076 7.51098 1.40314C8.65019 1.24997 10.1058 1.24998 11.9436 1.25ZM7.71085 2.88976C6.70476 3.02502 6.12511 3.27869 5.7019 3.7019C5.27869 4.12511 5.02502 4.70476 4.88976 5.71085C4.75159 6.73851 4.75 8.09318 4.75 10V14C4.75 15.9068 4.75159 17.2615 4.88976 18.2892C5.02502 19.2952 5.27869 19.8749 5.7019 20.2981C6.12511 20.7213 6.70476 20.975 7.71085 21.1102C8.73851 21.2484 10.0932 21.25 12 21.25C13.9068 21.25 15.2615 21.2484 16.2892 21.1102C17.2952 20.975 17.8749 20.7213 18.2981 20.2981C18.7213 19.8749 18.975 19.2952 19.1102 18.2892C19.2484 17.2615 19.25 15.9068 19.25 14V10C19.25 8.09318 19.2484 6.73851 19.1102 5.71085C18.975 4.70476 18.7213 4.12511 18.2981 3.7019C17.8749 3.27869 17.2952 3.02502 16.2892 2.88976C15.2615 2.75159 13.9068 2.75 12 2.75C10.0932 2.75 8.73851 2.75159 7.71085 2.88976ZM9.25 6C9.25 5.58579 9.58579 5.25 10 5.25H14C14.4142 5.25 14.75 5.58579 14.75 6C14.75 6.41421 14.4142 6.75 14 6.75H10C9.58579 6.75 9.25 6.41421 9.25 6ZM12 10.75C10.2051 10.75 8.75 12.2051 8.75 14C8.75 15.7949 10.2051 17.25 12 17.25C13.7949 17.25 15.25 15.7949 15.25 14C15.25 12.2051 13.7949 10.75 12 10.75ZM7.25 14C7.25 11.3766 9.37665 9.25 12 9.25C14.6234 9.25 16.75 11.3766 16.75 14C16.75 16.6234 14.6234 18.75 12 18.75C9.37665 18.75 7.25 16.6234 7.25 14Z", "fill": "white"}]]};

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

const SolarSpeakerMinimalistic = React.forwardRef((props, ref) => {
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

SolarSpeakerMinimalistic.nodes = nodes;
SolarSpeakerMinimalistic.iconName = iconName;
SolarSpeakerMinimalistic.category = category;

const SpeakerMinimalisticOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarSpeakerMinimalistic, Object.assign({ ref, variant: 'outline' }, props));
});

const SpeakerMinimalisticBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarSpeakerMinimalistic, Object.assign({ ref, variant: 'bold' }, props));
});

const SpeakerMinimalisticBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarSpeakerMinimalistic, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const SpeakerMinimalistic = SolarSpeakerMinimalistic;

module.exports = {
  iconName,
  category,
  nodes,
  SolarSpeakerMinimalistic,
  SpeakerMinimalistic,
  SpeakerMinimalisticOutline,
  SpeakerMinimalisticBold,
  SpeakerMinimalisticBoldDuotone,
  default: SolarSpeakerMinimalistic
};
