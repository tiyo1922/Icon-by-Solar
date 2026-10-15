const React = require('react');

const iconName = 'mention-circle';
const category = 'Essentional, UI';
const nodes = {"bold": [["path", {"d": "M12 10.35C12.9113 10.35 13.65 11.0887 13.65 12C13.65 12.9113 12.9113 13.65 12 13.65C11.0887 13.65 10.35 12.9113 10.35 12C10.35 11.0887 11.0887 10.35 12 10.35Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM6.75 12C6.75 9.1005 9.1005 6.75 12 6.75C14.8995 6.75 17.25 9.1005 17.25 12C17.25 12.6327 17.1384 13.2376 16.9345 13.7973C16.8991 13.8944 16.8295 13.9989 16.7183 14.1015L16.6377 14.1758C16.3369 14.4533 15.8853 14.4888 15.5448 14.2618C15.2981 14.0974 15.15 13.8206 15.15 13.5241V12C15.15 10.2603 13.7397 8.85 12 8.85C10.2603 8.85 8.85 10.2603 8.85 12C8.85 13.7397 10.2603 15.15 12 15.15C12.7017 15.15 13.3499 14.9205 13.8735 14.5325C14.0557 14.9233 14.3431 15.2635 14.7127 15.5099C15.6294 16.121 16.8451 16.0252 17.6548 15.2783L17.7354 15.204C17.9855 14.9732 18.211 14.6756 18.3439 14.3108C18.6069 13.5889 18.75 12.8103 18.75 12C18.75 8.27208 15.7279 5.25 12 5.25C8.27208 5.25 5.25 8.27208 5.25 12C5.25 15.7279 8.27208 18.75 12 18.75C12.4142 18.75 12.75 18.4142 12.75 18C12.75 17.5858 12.4142 17.25 12 17.25C9.1005 17.25 6.75 14.8995 6.75 12Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 6.75C9.1005 6.75 6.75 9.1005 6.75 12C6.75 14.8995 9.1005 17.25 12 17.25C12.4142 17.25 12.75 17.5858 12.75 18C12.75 18.4142 12.4142 18.75 12 18.75C8.27208 18.75 5.25 15.7279 5.25 12C5.25 8.27208 8.27208 5.25 12 5.25C15.7279 5.25 18.75 8.27208 18.75 12C18.75 12.8103 18.6069 13.5889 18.3439 14.3108C18.211 14.6756 17.9855 14.9732 17.7354 15.204L17.6548 15.2783C16.8451 16.0252 15.6294 16.121 14.7127 15.5099C14.3431 15.2635 14.0557 14.9233 13.8735 14.5325C13.3499 14.9205 12.7017 15.15 12 15.15C10.2603 15.15 8.85 13.7397 8.85 12C8.85 10.2603 10.2603 8.85 12 8.85C13.7397 8.85 15.15 10.2603 15.15 12V13.5241C15.15 13.8206 15.2981 14.0974 15.5448 14.2618C15.8853 14.4888 16.3369 14.4533 16.6377 14.1758L16.7183 14.1015C16.8295 13.9989 16.8991 13.8944 16.9345 13.7973C17.1384 13.2376 17.25 12.6327 17.25 12C17.25 9.1005 14.8995 6.75 12 6.75ZM12 10.35C12.9113 10.35 13.65 11.0887 13.65 12C13.65 12.9113 12.9113 13.65 12 13.65C11.0887 13.65 10.35 12.9113 10.35 12C10.35 11.0887 11.0887 10.35 12 10.35Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M6.75 12C6.75 9.1005 9.1005 6.75 12 6.75C14.8995 6.75 17.25 9.1005 17.25 12C17.25 12.6327 17.1384 13.2376 16.9345 13.7973C16.8991 13.8944 16.8295 13.9989 16.7183 14.1015L16.6377 14.1758C16.3369 14.4533 15.8853 14.4888 15.5448 14.2618C15.2981 14.0974 15.15 13.8206 15.15 13.5241V12C15.15 10.2603 13.7397 8.85 12 8.85C10.2603 8.85 8.85 10.2603 8.85 12C8.85 13.7397 10.2603 15.15 12 15.15C12.7017 15.15 13.3499 14.9205 13.8735 14.5325C14.0557 14.9233 14.3431 15.2635 14.7127 15.5099C15.6294 16.121 16.8451 16.0252 17.6548 15.2783L17.7354 15.204C17.9855 14.9732 18.211 14.6756 18.3439 14.3108C18.6069 13.5889 18.75 12.8103 18.75 12C18.75 8.27208 15.7279 5.25 12 5.25C8.27208 5.25 5.25 8.27208 5.25 12C5.25 15.7279 8.27208 18.75 12 18.75C12.4142 18.75 12.75 18.4142 12.75 18C12.75 17.5858 12.4142 17.25 12 17.25C9.1005 17.25 6.75 14.8995 6.75 12ZM12 10.35C12.9113 10.35 13.65 11.0887 13.65 12C13.65 12.9113 12.9113 13.65 12 13.65C11.0887 13.65 10.35 12.9113 10.35 12C10.35 11.0887 11.0887 10.35 12 10.35Z", "fill": "white"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z", "fill": "white"}]]};

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

const SolarMentionCircle = React.forwardRef((props, ref) => {
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

SolarMentionCircle.nodes = nodes;
SolarMentionCircle.iconName = iconName;
SolarMentionCircle.category = category;

const MentionCircleOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarMentionCircle, Object.assign({ ref, variant: 'outline' }, props));
});

const MentionCircleBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarMentionCircle, Object.assign({ ref, variant: 'bold' }, props));
});

const MentionCircleBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarMentionCircle, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const MentionCircle = SolarMentionCircle;

module.exports = {
  iconName,
  category,
  nodes,
  SolarMentionCircle,
  MentionCircle,
  MentionCircleOutline,
  MentionCircleBold,
  MentionCircleBoldDuotone,
  default: SolarMentionCircle
};
