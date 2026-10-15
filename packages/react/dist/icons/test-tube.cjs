const React = require('react');

const iconName = 'test-tube';
const category = 'Medicine';
const nodes = {"bold": [["path", {"d": "M8.26697 1.61845C8.47776 1.26188 8.9377 1.14371 9.29427 1.35449L10.126 1.84619L19.3731 7.15338C19.7324 7.35957 19.8564 7.81794 19.6503 8.17719C19.4441 8.53644 18.9857 8.66053 18.6264 8.45434L17.7828 7.97013L16.278 10.5675L16.2762 10.5665L13.7181 9.09467C13.3591 8.8881 12.9006 9.01169 12.694 9.37072C12.4875 9.72975 12.611 10.1883 12.9701 10.3948L15.526 11.8654L14.5646 13.525L14.5628 13.5239L10.3598 11.1057C10.0008 10.8991 9.54227 11.0227 9.3357 11.3818C9.12913 11.7408 9.25272 12.1993 9.61175 12.4059L13.8126 14.8229L12.927 16.3515L12.9252 16.3505L10.3125 14.8472C9.95348 14.6407 9.49497 14.7643 9.2884 15.1233C9.08183 15.4823 9.20542 15.9408 9.56445 16.1474L12.1751 17.6494L11.0558 19.5814C9.7158 21.8943 6.74803 22.6868 4.42709 21.3514C2.10615 20.0161 1.31093 17.0585 2.65093 14.7456L9.37268 3.14332L9.36682 3.13989L8.53093 2.64574C8.17436 2.43495 8.05618 1.97502 8.26697 1.61845Z", "fill": "#1C274C"}], ["path", {"d": "M20 16.9999C21.1046 16.9999 22 16.0672 22 14.9166C22 14.1967 21.217 13.2358 20.6309 12.6174C20.2839 12.2512 19.7161 12.2512 19.3691 12.6174C18.783 13.2358 18 14.1967 18 14.9166C18 16.0672 18.8954 16.9999 20 16.9999Z", "fill": "#1C274C"}]], "bold-duotone": [["g", {"opacity": "0.5"}], ["path", {"d": "M20 16.9992C21.1046 16.9992 22 16.0664 22 14.9158C22 14.1959 21.217 13.2351 20.6309 12.6166C20.2839 12.2505 19.7161 12.2505 19.3691 12.6166C18.783 13.2351 18 14.1959 18 14.9158C18 16.0664 18.8954 16.9992 20 16.9992Z", "fill": "#1C274C"}], ["path", {"d": "M16.278 10.5668L17.7828 7.96939L9.37268 3.14258L2.65093 14.7448C1.31093 17.0578 2.10615 20.0153 4.42709 21.3507C6.74803 22.6861 9.7158 21.8936 11.0558 19.5807L12.1751 17.6487L16.278 10.5668Z", "fill": "#1C274C"}], ["path", {"d": "M9.2939 1.35449C8.93733 1.14371 8.47739 1.26188 8.2666 1.61845C8.05581 1.97502 8.17399 2.43495 8.53056 2.64574L9.36645 3.13989L9.37231 3.14332L17.7824 7.97013L18.6261 8.45434C18.9853 8.66053 19.4437 8.53644 19.6499 8.17719C19.8561 7.81794 19.732 7.35957 19.3727 7.15338L10.1256 1.84619L9.2939 1.35449Z", "fill": "#1C274C"}], ["path", {"d": "M12.9271 16.351L12.9253 16.35L10.3126 14.8468C9.9536 14.6402 9.49509 14.7638 9.28852 15.1228C9.08195 15.4818 9.20555 15.9403 9.56457 16.1469L12.1752 17.649L12.9271 16.351Z", "fill": "#1C274C"}], ["path", {"d": "M14.5647 13.5245L14.5629 13.5234L10.3599 11.1052C10.0009 10.8987 9.54239 11.0223 9.33582 11.3813C9.12925 11.7403 9.25284 12.1988 9.61187 12.4054L13.8128 14.8224L14.5647 13.5245Z", "fill": "#1C274C"}], ["path", {"d": "M16.2763 10.566L13.7183 9.09419C13.3592 8.88762 12.9007 9.01121 12.6941 9.37024C12.4876 9.72927 12.6112 10.1878 12.9702 10.3943L15.5262 11.8649L16.2763 10.566Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M9.29442 1.35449C8.93785 1.14371 8.47791 1.26188 8.26713 1.61845C8.05634 1.97502 8.17451 2.43495 8.53108 2.64574L8.72701 2.76156L2.0019 14.3696C0.453202 17.0428 1.37332 20.4597 4.05298 22.0015C6.73113 23.5424 10.1569 22.629 11.7047 19.9574L18.4334 8.34312L18.6258 8.45386C18.9847 8.66051 19.4433 8.53701 19.6499 8.17803C19.8566 7.81904 19.7331 7.36051 19.3741 7.15386L18.5335 6.66999L10.1261 1.84616L9.29442 1.35449ZM3.29981 15.1216L10.0232 3.51648L17.1328 7.59571L15.6279 10.1934L13.718 9.09455C13.3589 8.88798 12.9004 9.01157 12.6938 9.3706C12.4873 9.72963 12.6109 10.1881 12.9699 10.3947L14.8759 11.4913L13.9144 13.1509L10.3596 11.1056C10.0006 10.899 9.54209 11.0226 9.33552 11.3817C9.12895 11.7407 9.25254 12.1992 9.61157 12.4058L13.1625 14.4488L12.2769 15.9774L10.3123 14.8471C9.9533 14.6406 9.49479 14.7641 9.28823 15.1232C9.08165 15.4822 9.20525 15.9407 9.56428 16.1473L11.5249 17.2754L10.4068 19.2054C9.27458 21.1597 6.76476 21.8312 4.80104 20.7014C2.83882 19.5724 2.16851 17.0743 3.29981 15.1216Z", "fill": "white"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M21.1752 12.1016C20.5324 11.4233 19.4675 11.4233 18.8247 12.1016C18.5171 12.4261 18.1418 12.8568 17.8388 13.3159C17.5543 13.7467 17.2499 14.3243 17.2499 14.9167C17.2499 16.4524 18.4526 17.75 19.9999 17.75C21.5473 17.75 22.7499 16.4524 22.7499 14.9167C22.7499 14.3243 22.4455 13.7467 22.1611 13.3159C21.858 12.8568 21.4827 12.4261 21.1752 12.1016ZM19.9134 13.1334C19.9427 13.1025 19.9734 13.0929 19.9999 13.0929C20.0265 13.0929 20.0572 13.1025 20.0865 13.1334C20.365 13.4273 20.6743 13.7863 20.9093 14.1422C21.1628 14.5264 21.2499 14.7892 21.2499 14.9167C21.2499 15.6822 20.6617 16.25 19.9999 16.25C19.3381 16.25 18.7499 15.6822 18.7499 14.9167C18.7499 14.7892 18.837 14.5264 19.0906 14.1422C19.3255 13.7863 19.6348 13.4273 19.9134 13.1334Z", "fill": "white"}]]};

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

const SolarTestTube = React.forwardRef((props, ref) => {
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

SolarTestTube.nodes = nodes;
SolarTestTube.iconName = iconName;
SolarTestTube.category = category;

const TestTubeOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarTestTube, Object.assign({ ref, variant: 'outline' }, props));
});

const TestTubeBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarTestTube, Object.assign({ ref, variant: 'bold' }, props));
});

const TestTubeBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarTestTube, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const TestTube = SolarTestTube;

module.exports = {
  iconName,
  category,
  nodes,
  SolarTestTube,
  TestTube,
  TestTubeOutline,
  TestTubeBold,
  TestTubeBoldDuotone,
  default: SolarTestTube
};
