const React = require('react');

const iconName = 'heart';
const category = 'Like';
const nodes = {"bold": [["path", {"d": "M2 9.13734C2 14.0003 6.01943 16.5917 8.96173 18.9111C10 19.7296 11 20.5002 12 20.5002C13 20.5002 14 19.7296 15.0383 18.9111C17.9806 16.5917 22 14.0003 22 9.13734C22 4.27441 16.4998 0.825708 12 5.50088C7.50016 0.825708 2 4.27441 2 9.13734Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "fillRule": "evenodd", "clipRule": "evenodd", "d": "M8.10627 18.2471C5.29819 16.0836 2 13.5424 2 9.13734C2 4.27441 7.50016 0.825708 12 5.50088V20.5002C11 20.5002 10 19.7296 8.96173 18.9111C8.68471 18.6927 8.39814 18.4719 8.10627 18.2471Z", "fill": "#1C274C"}], ["path", {"d": "M15.0383 18.9111C17.9806 16.5917 22 14.0003 22 9.13734C22 4.27441 16.4998 0.825708 12 5.50088V20.5002C13 20.5002 14 19.7296 15.0383 18.9111Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M5.62436 4.42508C3.96537 5.18341 2.75 6.98712 2.75 9.13799C2.75 11.3354 3.64922 13.0291 4.93829 14.4807C6.00072 15.677 7.28684 16.6685 8.54113 17.6355C8.83904 17.8652 9.13515 18.0935 9.42605 18.3228C9.95208 18.7375 10.4213 19.1014 10.8736 19.3657C11.3261 19.6301 11.6904 19.7509 12 19.7509C12.3096 19.7509 12.6739 19.6301 13.1264 19.3657C13.5787 19.1014 14.0479 18.7375 14.574 18.3228C14.8649 18.0935 15.161 17.8652 15.4589 17.6355C16.7132 16.6685 17.9993 15.677 19.0617 14.4807C20.3508 13.0291 21.25 11.3354 21.25 9.13799C21.25 6.98712 20.0346 5.18341 18.3756 4.42508C16.7639 3.68836 14.5983 3.88346 12.5404 6.02162C12.399 6.16852 12.2039 6.25152 12 6.25152C11.7961 6.25152 11.601 6.16852 11.4596 6.02162C9.40166 3.88346 7.23607 3.68836 5.62436 4.42508ZM12 4.4597C9.68795 2.39113 7.09896 2.10176 5.00076 3.06085C2.78471 4.07381 1.25 6.42592 1.25 9.13799C1.25 11.8035 2.3605 13.8369 3.81672 15.4767C4.98287 16.7898 6.41022 17.8888 7.67083 18.8595C7.95659 19.0795 8.23378 19.2929 8.49742 19.5008C9.00965 19.9046 9.55954 20.3352 10.1168 20.6608C10.6739 20.9863 11.3096 21.2509 12 21.2509C12.6904 21.2509 13.3261 20.9863 13.8832 20.6608C14.4405 20.3352 14.9903 19.9046 15.5026 19.5008C15.7662 19.2929 16.0434 19.0795 16.3292 18.8595C17.5898 17.8888 19.0171 16.7898 20.1833 15.4767C21.6395 13.8369 22.75 11.8035 22.75 9.13799C22.75 6.42592 21.2153 4.07381 18.9992 3.06085C16.901 2.10176 14.3121 2.39113 12 4.4597Z", "fill": "white"}]]};

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

const SolarHeart = React.forwardRef((props, ref) => {
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

SolarHeart.nodes = nodes;
SolarHeart.iconName = iconName;
SolarHeart.category = category;

const HeartOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarHeart, Object.assign({ ref, variant: 'outline' }, props));
});

const HeartBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarHeart, Object.assign({ ref, variant: 'bold' }, props));
});

const HeartBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarHeart, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const Heart = SolarHeart;

module.exports = {
  iconName,
  category,
  nodes,
  SolarHeart,
  Heart,
  HeartOutline,
  HeartBold,
  HeartBoldDuotone,
  default: SolarHeart
};
