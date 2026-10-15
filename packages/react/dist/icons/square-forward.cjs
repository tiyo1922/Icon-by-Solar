const React = require('react');

const iconName = 'square-forward';
const category = 'Messages, Conversation';
const nodes = {"bold": [["path", {"d": "M20.5355 20.5355C22 19.0711 22 16.714 22 12C22 11.3985 22 10.8354 21.997 10.3076C21.5862 10.7103 21.0949 11.136 20.5683 11.5922L18.0794 13.7493C17.7752 14.0132 17.4343 14.309 17.1257 14.5071C16.8241 14.7006 16.0564 15.1293 15.1692 14.7242C14.2819 14.3191 14.1032 13.4581 14.0519 13.1035C14.0008 12.7497 13.9997 12.3119 13.9999 11.917C12.6707 12.1476 11.4038 12.6706 10.4734 13.3979L10.4235 13.4369C10.0553 13.7248 9.70248 14.0006 9.41851 14.1851C9.27461 14.2786 9.05476 14.4119 8.79732 14.4989C8.5621 14.5783 7.97989 14.7241 7.3799 14.3723C6.83887 14.055 6.65163 13.5503 6.58718 13.2661C6.52494 12.9916 6.53037 12.733 6.53913 12.5701C6.55605 12.2557 6.61832 11.8537 6.67926 11.4602L6.68911 11.3965C7.16402 8.32548 8.50112 6.23021 10.2382 4.9232C11.4376 4.02074 12.763 3.54214 13.9999 3.33772L13.9999 3.11325C13.9997 2.75005 13.9995 2.34729 14.0379 2.00554C13.4122 2 12.7347 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355Z", "fill": "#1C274C"}], ["path", {"d": "M17.1549 2.43415L19.5121 4.47712C21.1348 5.88345 21.9462 6.58662 21.9462 7.49988C21.9462 8.41314 21.1348 9.1163 19.5121 10.5226L17.1549 12.5656C16.4413 13.184 16.0846 13.4932 15.7922 13.3597C15.4999 13.2262 15.4999 12.7541 15.4999 11.8099V10.2856C13.3755 10.2856 11.1257 10.9841 9.54957 12.2161C8.72623 12.8597 8.31457 13.1815 8.13869 13.0784C7.96281 12.9752 8.03237 12.5254 8.17149 11.6257C9.0161 6.164 12.8002 4.71416 15.4999 4.71416V3.18984C15.4999 2.24562 15.4999 1.77351 15.7922 1.64003C16.0846 1.50656 16.4413 1.81575 17.1549 2.43415Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M1 13.5289C1 8.862 1 6.52855 2.44982 5.07873C3.89964 3.62891 6.2331 3.62891 10.9 3.62891C15.5669 3.62891 17.9004 3.62891 19.3502 5.07873C20.8 6.52855 20.8 8.862 20.8 13.5289C20.8 18.1958 20.8 20.5293 19.3502 21.9791C17.9004 23.4289 15.5669 23.4289 10.9 23.4289C6.2331 23.4289 3.89964 23.4289 2.44982 21.9791C1 20.5293 1 18.1958 1 13.5289Z", "fill": "#1C274C"}], ["path", {"d": "M17.6703 1.90726L20.2633 4.15452C22.0483 5.70149 22.9408 6.47497 22.9408 7.47955C22.9408 8.48414 22.0483 9.25762 20.2633 10.8046L17.6703 13.0519C16.8855 13.7321 16.493 14.0722 16.1715 13.9254C15.8499 13.7786 15.8499 13.2592 15.8499 12.2206V10.5438C13.1999 10.5438 10.3726 11.5318 8.64962 13.2434C8.12486 13.7646 7.86248 14.0252 7.72286 13.9591C7.58324 13.8929 7.61571 13.5563 7.68065 12.883C8.32892 6.1615 12.7424 4.41527 15.8499 4.41527V2.73851C15.8499 1.69987 15.8499 1.18055 16.1715 1.03373C16.493 0.886898 16.8855 1.22702 17.6703 1.90726Z", "fill": "#1C274C"}]], "outline": [["path", {"d": "M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2", "stroke": "white", "strokeWidth": "1.5", "strokeLinecap": "round"}], ["path", {"d": "M16.1549 3.43415L18.5122 5.47712C20.1349 6.88345 20.9462 7.58662 20.9462 8.49988C20.9462 9.41314 20.1349 10.1163 18.5122 11.5226L16.1549 13.5656C15.4414 14.184 15.0846 14.4932 14.7923 14.3597C14.5 14.2262 14.5 13.7541 14.5 12.8099V11.2856C11.5 11.2856 8.25 12.6785 7 14.9999C7 7.57131 11.4444 5.71416 14.5 5.71416V4.18984C14.5 3.24562 14.5 2.77351 14.7923 2.64003C15.0846 2.50656 15.4414 2.81575 16.1549 3.43415Z", "stroke": "white", "strokeWidth": "1.5", "strokeLinecap": "round", "strokeLinejoin": "round"}]]};

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

const SolarSquareForward = React.forwardRef((props, ref) => {
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

SolarSquareForward.nodes = nodes;
SolarSquareForward.iconName = iconName;
SolarSquareForward.category = category;

const SquareForwardOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarSquareForward, Object.assign({ ref, variant: 'outline' }, props));
});

const SquareForwardBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarSquareForward, Object.assign({ ref, variant: 'bold' }, props));
});

const SquareForwardBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarSquareForward, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const SquareForward = SolarSquareForward;

module.exports = {
  iconName,
  category,
  nodes,
  SolarSquareForward,
  SquareForward,
  SquareForwardOutline,
  SquareForwardBold,
  SquareForwardBoldDuotone,
  default: SolarSquareForward
};
