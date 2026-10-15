const React = require('react');

const iconName = 'pill';
const category = 'Medicine';
const nodes = {"bold": [["path", {"d": "M3.99057 3.99057C1.33648 6.64466 1.33648 10.9478 3.99057 13.6019L6.55391 16.1652L7.0495 16.0698C7.04919 16.0698 7.04956 16.0698 7.05049 16.0696L7.06435 16.0666C7.07872 16.0634 7.10332 16.0577 7.13754 16.0491C7.20599 16.0318 7.31287 16.0027 7.45346 15.9578C7.73465 15.868 8.1504 15.7153 8.66292 15.4683C9.68709 14.9747 11.1005 14.1037 12.6019 12.6023C14.1032 11.101 14.9744 9.68744 15.468 8.66312C15.7151 8.15053 15.8679 7.73472 15.9578 7.45347C16.0027 7.31286 16.0318 7.20594 16.0491 7.13748C16.0577 7.10325 16.0634 7.07865 16.0666 7.06426L16.0696 7.05043C16.0698 7.04952 16.0699 7.04909 16.0698 7.0494L16.1653 6.55397L13.6019 3.99057C10.9478 1.33648 6.64466 1.33648 3.99057 3.99057Z", "fill": "#1C274C"}], ["path", {"d": "M17.4187 7.80734C17.4087 7.83998 17.398 7.87417 17.3866 7.90986C17.2772 8.25257 17.099 8.73396 16.8193 9.31437C16.2594 10.4761 15.2939 12.0316 13.6625 13.663C12.0312 15.2943 10.4757 16.2598 9.31411 16.8195C8.73375 17.0992 8.2524 17.2773 7.90973 17.3867C7.8741 17.3981 7.83996 17.4088 7.80737 17.4187L10.3981 20.0094C13.0522 22.6635 17.3553 22.6635 20.0094 20.0094C22.6635 17.3553 22.6635 13.0522 20.0094 10.3981L17.4187 7.80734Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M3.99057 13.6019C1.33648 10.9478 1.33648 6.64466 3.99057 3.99057C6.64466 1.33648 10.9478 1.33648 13.6019 3.99057L20.0094 10.3981C22.6635 13.0522 22.6635 17.3553 20.0094 20.0094C17.3553 22.6635 13.0522 22.6635 10.3981 20.0094L3.99057 13.6019Z", "fill": "#1C274C"}], ["path", {"d": "M7.80716 17.4195L6.55371 16.166L7.04923 16.0706C7.04892 16.0706 7.0493 16.0706 7.05022 16.0704L7.06408 16.0674C7.07846 16.0642 7.10306 16.0585 7.13728 16.0499C7.20572 16.0326 7.31261 16.0035 7.45319 15.9586C7.73439 15.8688 8.15013 15.716 8.66265 15.4691C9.68683 14.9755 11.1003 14.1044 12.6016 12.6031C14.1029 11.1018 14.9741 9.68822 15.4678 8.66391C15.7148 8.15132 15.8677 7.73551 15.9575 7.45426C16.0024 7.31364 16.0316 7.20673 16.0488 7.13827C16.0575 7.10404 16.0631 7.07943 16.0663 7.06505L16.0693 7.05122C16.0695 7.0503 16.0696 7.04988 16.0695 7.05019L16.165 6.55469L17.4184 7.80806C17.4085 7.84073 17.3978 7.87494 17.3864 7.91065C17.2769 8.25336 17.0988 8.73475 16.819 9.31516C16.2591 10.4768 15.2936 12.0324 13.6623 13.6638C12.0309 15.2951 10.4754 16.2606 9.31384 16.8203C8.73348 17.1 8.25214 17.2781 7.90946 17.3875C7.87385 17.3989 7.83974 17.4095 7.80716 17.4195Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M14.1322 3.46024C11.1852 0.513254 6.40722 0.513254 3.46024 3.46024C0.513254 6.40722 0.513254 11.1852 3.46024 14.1322L9.86778 20.5398C12.8148 23.4867 17.5928 23.4867 20.5398 20.5398C23.4867 17.5928 23.4867 12.8148 20.5398 9.86778L14.1322 3.46024ZM4.5209 4.5209C6.8821 2.1597 10.7104 2.1597 13.0716 4.5209L15.9689 7.41825C15.9653 7.42974 15.9616 7.44148 15.9578 7.45347C15.8679 7.73472 15.7151 8.15053 15.468 8.66312C14.9744 9.68744 14.1032 11.101 12.6019 12.6023C11.1005 14.1037 9.68709 14.9747 8.66292 15.4683C8.1504 15.7153 7.73465 15.868 7.45346 15.9578C7.44149 15.9616 7.42977 15.9654 7.41829 15.9689L4.5209 13.0716C2.1597 10.7104 2.1597 6.8821 4.5209 4.5209ZM8.58965 17.1403L10.9284 19.4791C13.2896 21.8403 17.1179 21.8403 19.4791 19.4791C21.8403 17.1179 21.8403 13.2896 19.4791 10.9284L17.1402 8.58958C17.0521 8.80835 16.9461 9.05118 16.8193 9.31437C16.2594 10.4761 15.2939 12.0316 13.6625 13.663C12.0312 15.2943 10.4757 16.2598 9.31411 16.8195C9.05105 16.9463 8.80833 17.0522 8.58965 17.1403Z", "fill": "white"}]]};

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

const SolarPill = React.forwardRef((props, ref) => {
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

SolarPill.nodes = nodes;
SolarPill.iconName = iconName;
SolarPill.category = category;

const PillOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarPill, Object.assign({ ref, variant: 'outline' }, props));
});

const PillBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarPill, Object.assign({ ref, variant: 'bold' }, props));
});

const PillBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarPill, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const Pill = SolarPill;

module.exports = {
  iconName,
  category,
  nodes,
  SolarPill,
  Pill,
  PillOutline,
  PillBold,
  PillBoldDuotone,
  default: SolarPill
};
