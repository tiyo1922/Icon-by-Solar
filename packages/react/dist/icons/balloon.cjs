const React = require('react');

const iconName = 'balloon';
const category = 'Essentional, UI';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M19.4998 9.56052C19.5332 13.7025 16.0815 17.5334 11.9395 17.5C7.79748 17.4666 4.53367 13.5815 4.50025 9.43948C4.46683 5.29748 7.79748 1.96683 11.9395 2.00025C16.0815 2.03367 19.4663 5.41852 19.4998 9.56052ZM12.5061 5.25002C12.0919 5.24668 11.7534 5.57975 11.75 5.99395C11.7467 6.40815 12.0797 6.74663 12.4939 6.74998C13.7281 6.75993 14.7401 7.77194 14.75 9.00605C14.7534 9.42025 15.0919 9.75332 15.5061 9.74998C15.9203 9.74663 16.2533 9.40815 16.25 8.99395C16.2334 6.94088 14.5591 5.26659 12.5061 5.25002Z", "fill": "#1C274C"}], ["path", {"d": "M14.167 18.2149C14.4992 19.2772 13.8108 20.3466 12.7501 20.5621V22.0003C12.7501 22.4145 12.4143 22.7503 12.0001 22.7503C11.5859 22.7503 11.2501 22.4145 11.2501 22.0003V20.5621C10.1894 20.3466 9.50094 19.2772 9.83316 18.2149L9.84005 18.1935C10.5044 18.3872 11.2043 18.4944 11.9315 18.5003C12.7025 18.5065 13.4493 18.3977 14.1595 18.1914C14.1622 18.1993 14.1646 18.2071 14.167 18.2149Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M12 17.9998C16.142 18.0343 19.5937 14.0798 19.5603 9.8043C19.5268 5.52875 16.142 2.03476 12 2.00026C7.858 1.96576 4.52734 5.4038 4.56077 9.67936C4.59419 13.9549 7.858 17.9653 12 17.9998Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M11.75 5.99395C11.7534 5.57975 12.0919 5.24668 12.5061 5.25002C14.5591 5.26659 16.2334 6.94088 16.25 8.99395C16.2533 9.40815 15.9203 9.74663 15.5061 9.74998C15.0919 9.75332 14.7534 9.42025 14.75 9.00605C14.7401 7.77194 13.7281 6.75993 12.4939 6.74998C12.0797 6.74663 11.7467 6.40815 11.75 5.99395Z", "fill": "#1C274C"}], ["path", {"d": "M13.1801 17.9017C12.7949 17.9697 12.4007 18.0037 12 18.0004C11.6006 17.997 11.2094 17.9567 10.8284 17.8828L10.8104 17.923C10.6581 18.1965 10.5819 18.3333 10.5489 18.4387C10.3559 19.056 10.7534 19.7001 11.4067 19.8285C11.5182 19.8505 11.6788 19.8505 12 19.8505C12.3211 19.8505 12.4818 19.8505 12.5933 19.8285C13.2466 19.7001 13.6441 19.056 13.4511 18.4387C13.4181 18.3333 13.342 18.1965 13.1896 17.923L13.1801 17.9017Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M11.25 19.7852C11.3004 19.8025 11.3526 19.8167 11.4067 19.8273C11.5182 19.8492 11.6788 19.8492 12 19.8492C12.3211 19.8492 12.4818 19.8492 12.5933 19.8273C12.6474 19.8167 12.6996 19.8025 12.75 19.7852V21.2493C12.75 21.6635 12.4142 21.9993 12 21.9993C11.5858 21.9993 11.25 21.6635 11.25 21.2493V19.7852Z", "fill": "#1C274C"}]], "outline": [["path", {"d": "M12.5062 5.25006C12.092 5.24671 11.7535 5.57978 11.7501 5.99398C11.7468 6.40818 12.0799 6.74666 12.4941 6.75001C13.7282 6.75997 14.7402 7.77197 14.7501 9.00608C14.7535 9.42028 15.092 9.75335 15.5062 9.75001C15.9204 9.74666 16.2534 9.40818 16.2501 8.99398C16.2335 6.94091 14.5592 5.26662 12.5062 5.25006Z", "fill": "white"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M3.81082 9.68522C3.7743 5.0139 7.42254 1.2121 12.0063 1.25029C16.5795 1.28838 20.2738 5.13548 20.3103 9.79844C20.3408 13.7063 17.6847 17.4318 14.0654 18.4671C14.1071 18.5528 14.1424 18.6357 14.167 18.7146C14.4992 19.7769 13.8108 20.8463 12.7501 21.0618V22.5C12.7501 22.9142 12.4143 23.25 12.0001 23.25C11.5859 23.25 11.2501 22.9142 11.2501 22.5V21.0618C10.1894 20.8463 9.50097 19.7769 9.83319 18.7146C9.86066 18.6267 9.90127 18.534 9.94922 18.4378C6.35693 17.3478 3.84116 13.5668 3.81082 9.68522ZM11.9938 2.75023C8.29352 2.71941 5.28044 5.79372 5.31077 9.67349C5.34179 13.6416 8.36877 17.2195 12.0063 17.2498C15.6607 17.2802 18.841 13.7388 18.8103 9.81016C18.7799 5.92202 15.7046 2.78114 11.9938 2.75023ZM11.9938 18.7498C12.1666 18.7512 12.3381 18.7465 12.5082 18.7359C12.5162 18.7533 12.525 18.7706 12.5345 18.7877L12.6992 19.0883L12.7363 19.1652C12.7867 19.3328 12.6867 19.545 12.4498 19.5922C12.4498 19.5922 12.4269 19.5957 12.3536 19.5978L12.0001 19.6002C11.835 19.6002 11.7274 19.6001 11.6466 19.5978C11.5733 19.5957 11.5504 19.5922 11.5504 19.5922C11.3135 19.545 11.2137 19.3323 11.2641 19.1647C11.2659 19.1604 11.275 19.1387 11.3011 19.0883C11.3367 19.0194 11.3872 18.9286 11.4657 18.7877C11.4766 18.7682 11.4864 18.7485 11.4954 18.7286C11.6599 18.7412 11.8261 18.7484 11.9938 18.7498Z", "fill": "white"}]]};

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

const SolarBalloon = React.forwardRef((props, ref) => {
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

SolarBalloon.nodes = nodes;
SolarBalloon.iconName = iconName;
SolarBalloon.category = category;

const BalloonOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarBalloon, Object.assign({ ref, variant: 'outline' }, props));
});

const BalloonBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarBalloon, Object.assign({ ref, variant: 'bold' }, props));
});

const BalloonBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarBalloon, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const Balloon = SolarBalloon;

module.exports = {
  iconName,
  category,
  nodes,
  SolarBalloon,
  Balloon,
  BalloonOutline,
  BalloonBold,
  BalloonBoldDuotone,
  default: SolarBalloon
};
