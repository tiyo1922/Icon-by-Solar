const React = require('react');

const iconName = 'bag-check';
const category = 'Shopping, Ecommerce';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M8.25014 6.01489C8.25005 6.00994 8.25 6.00498 8.25 6V5C8.25 2.92893 9.92893 1.25 12 1.25C14.0711 1.25 15.75 2.92893 15.75 5V6C15.75 6.00498 15.75 6.00994 15.7499 6.0149C17.0371 6.05353 17.8248 6.1924 18.4261 6.69147C19.2593 7.38295 19.4787 8.55339 19.9177 10.8943L20.6677 14.8943C21.2849 18.186 21.5934 19.8318 20.6937 20.9159C19.794 22 18.1195 22 14.7704 22H9.22954C5.88048 22 4.20595 22 3.30624 20.9159C2.40652 19.8318 2.71512 18.186 3.33231 14.8943L4.08231 10.8943C4.52122 8.55339 4.74068 7.38295 5.57386 6.69147C6.17521 6.19239 6.96288 6.05353 8.25014 6.01489ZM9.75 5C9.75 3.75736 10.7574 2.75 12 2.75C13.2426 2.75 14.25 3.75736 14.25 5V6C14.25 6.00001 14.25 5.99999 14.25 6C14.1747 5.99998 14.0982 6 14.0204 6H9.97954C9.90177 6 9.82526 6 9.75 6.00002C9.75 6.00002 9.75 6.00003 9.75 6.00002V5ZM15.4685 10.9144C15.792 11.1731 15.8444 11.6451 15.5856 11.9685L11.5856 16.9685C11.4524 17.1351 11.2545 17.2371 11.0415 17.2489C10.8285 17.2607 10.6205 17.1812 10.4697 17.0304L8.46965 15.0304C8.17676 14.7375 8.17676 14.2626 8.46965 13.9697C8.76255 13.6768 9.23742 13.6768 9.53031 13.9697L10.9375 15.3769L14.4143 11.0315C14.6731 10.7081 15.1451 10.6556 15.4685 10.9144Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M4.0828 10.8943C4.52171 8.55339 4.74117 7.38295 5.57434 6.69147C6.40752 6 7.59835 6 9.98003 6H14.0209C16.4026 6 17.5934 6 18.4266 6.69147C19.2598 7.38295 19.4792 8.55339 19.9181 10.8943L20.6681 14.8943C21.2853 18.186 21.5939 19.8318 20.6942 20.9159C19.7945 22 18.12 22 14.7709 22H9.23003C5.88097 22 4.20644 22 3.30672 20.9159C2.40701 19.8318 2.7156 18.186 3.3328 14.8943L4.0828 10.8943Z", "fill": "#1C274C"}], ["path", {"d": "M9.75 5C9.75 3.75736 10.7574 2.75 12 2.75C13.2426 2.75 14.25 3.75736 14.25 5V6C14.25 6.00001 14.25 5.99999 14.25 6C14.816 6.00018 15.3119 6.00174 15.7499 6.01488C15.75 6.00993 15.75 6.00497 15.75 6V5C15.75 2.92893 14.0711 1.25 12 1.25C9.92893 1.25 8.25 2.92893 8.25 5V6C8.25 6.00498 8.25005 6.00995 8.25015 6.01491C8.68814 6.00175 9.18397 6.00021 9.75 6.00002C9.75 6.00002 9.75 6.00003 9.75 6.00002V5Z", "fill": "#1C274C"}], ["path", {"d": "M15.5857 11.9685C15.8444 11.6451 15.792 11.1731 15.4685 10.9144C15.1451 10.6556 14.6731 10.7081 14.4143 11.0315L10.9375 15.3769L9.53033 13.9697C9.23744 13.6768 8.76256 13.6768 8.46967 13.9697C8.17678 14.2626 8.17678 14.7375 8.46967 15.0304L10.4697 17.0304C10.6205 17.1812 10.8285 17.2607 11.0415 17.2489C11.2545 17.2371 11.4524 17.1351 11.5857 16.9685L15.5857 11.9685Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 2.75C10.7574 2.75 9.74999 3.75736 9.74999 5V5.25988C10.3071 5.24999 10.9183 5.24999 11.5891 5.25H12.4109C13.0817 5.24999 13.6929 5.24999 14.25 5.25988V5C14.25 3.75736 13.2426 2.75 12 2.75ZM15.75 5.32793V5C15.75 2.92893 14.0711 1.25 12 1.25C9.92893 1.25 8.24999 2.92893 8.24999 5V5.32793C8.10726 5.34021 7.96934 5.35444 7.83606 5.3709C6.8261 5.49569 5.99347 5.75783 5.28618 6.34483C4.57889 6.93183 4.1678 7.70189 3.85902 8.67156C3.55978 9.61128 3.33327 10.8194 3.04854 12.3381L3.02785 12.4484C2.62606 14.5912 2.30941 16.2799 2.25131 17.6112C2.19174 18.9758 2.39476 20.106 3.16453 21.0335C3.93431 21.961 5.00773 22.3689 6.35992 22.5618C7.67914 22.75 9.39725 22.75 11.5774 22.75H12.4226C14.6027 22.75 16.3208 22.75 17.6401 22.5618C18.9923 22.3689 20.0657 21.961 20.8355 21.0335C21.6052 20.106 21.8082 18.9758 21.7487 17.6112C21.6906 16.2799 21.3739 14.5912 20.9721 12.4484L20.9515 12.3381C20.6667 10.8194 20.4402 9.61129 20.141 8.67156C19.8322 7.70189 19.4211 6.93183 18.7138 6.34483C18.0065 5.75783 17.1739 5.49569 16.1639 5.3709C16.0306 5.35444 15.8927 5.34021 15.75 5.32793ZM8.02 6.85959C7.16446 6.96529 6.64774 7.16413 6.24413 7.49909C5.84053 7.83406 5.54987 8.30528 5.28831 9.12669C5.02045 9.96788 4.8097 11.0846 4.51358 12.6639C4.09786 14.8811 3.80278 16.4647 3.74988 17.6766C3.69788 18.8679 3.88895 19.5576 4.3188 20.0756C4.74864 20.5935 5.39139 20.9084 6.5718 21.0768C7.77271 21.2482 9.38359 21.25 11.6394 21.25H12.3606C14.6164 21.25 16.2273 21.2482 17.4282 21.0768C18.6086 20.9084 19.2513 20.5935 19.6812 20.0756C20.111 19.5576 20.3021 18.8679 20.2501 17.6766C20.1972 16.4647 19.9021 14.8811 19.4864 12.6639C19.1903 11.0846 18.9795 9.96788 18.7117 9.12669C18.4501 8.30528 18.1595 7.83406 17.7559 7.49909C17.3523 7.16413 16.8355 6.96529 15.98 6.85959C15.1038 6.75133 13.9674 6.75 12.3606 6.75H11.6394C10.0326 6.75 8.89614 6.75133 8.02 6.85959ZM14.4983 11.9394C14.8079 12.2146 14.8357 12.6887 14.5606 12.9983L11.8939 15.9983C11.7612 16.1475 11.5745 16.2377 11.3751 16.2488C11.1757 16.26 10.9801 16.1911 10.8316 16.0575L9.49827 14.8575C9.19039 14.5804 9.16543 14.1062 9.44252 13.7983C9.71962 13.4904 10.1938 13.4654 10.5017 13.7425L11.2741 14.4377L13.4394 12.0017C13.7146 11.6921 14.1887 11.6643 14.4983 11.9394Z", "fill": "white"}]]};

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

const BagCheckOutline = React.forwardRef((props, ref) => {
  const { size = 24, color = 'currentColor', secondaryColor, secondaryOpacity, className, style, title, ...rest } = props;
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
  }, rest), title && React.createElement('title', null, title), ...renderNodes(nodes['outline'] || [], color, secondaryColor, secondaryOpacity));
});

const BagCheckBold = React.forwardRef((props, ref) => {
  const { size = 24, color = 'currentColor', secondaryColor, secondaryOpacity, className, style, title, ...rest } = props;
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
  }, rest), title && React.createElement('title', null, title), ...renderNodes(nodes['bold'] || [], color, secondaryColor, secondaryOpacity));
});

const BagCheckBoldDuotone = React.forwardRef((props, ref) => {
  const { size = 24, color = 'currentColor', secondaryColor, secondaryOpacity, className, style, title, ...rest } = props;
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
  }, rest), title && React.createElement('title', null, title), ...renderNodes(nodes['bold-duotone'] || [], color, secondaryColor, secondaryOpacity));
});

const BagCheck = BagCheckOutline;

module.exports = {
  iconName,
  category,
  nodes,
  BagCheck,
  BagCheckOutline,
  BagCheckBold,
  BagCheckBoldDuotone,
  default: BagCheck
};
