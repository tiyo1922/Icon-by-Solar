const React = require('react');

const iconName = 'bar-chair';
const category = 'Home, Furniture';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M8.75467 2.30839C6.65212 2.66883 5.20239 4.6158 5.45974 6.73344L5.47666 6.87265C5.53766 7.37459 5.96373 7.75201 6.46936 7.75201H8.2331L5.2668 21.5947C5.18001 21.9997 5.43799 22.3984 5.84301 22.4852C6.24803 22.572 6.64672 22.314 6.73351 21.909L7.6779 17.5019H16.3224L17.2668 21.909C17.3536 22.314 17.7523 22.572 18.1573 22.4852C18.5623 22.3984 18.8203 21.9997 18.7335 21.5947L15.7672 7.75201H17.531C18.0367 7.75201 18.4627 7.37459 18.5237 6.87265L18.5406 6.73344C18.798 4.6158 17.3483 2.66883 15.2457 2.30839L14.8726 2.24442C12.9715 1.91853 11.0289 1.91853 9.12781 2.24442L8.75467 2.30839ZM14.25 7.75201H9.75031C9.75025 7.80379 9.74479 7.85635 9.73351 7.90901L7.99932 16.0019H16.001L14.2668 7.90901C14.2555 7.85635 14.2501 7.80379 14.25 7.75201Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M5.45974 6.73344C5.20239 4.6158 6.65212 2.66883 8.75467 2.30839L9.12781 2.24442C11.0289 1.91853 12.9715 1.91853 14.8726 2.24442L15.2457 2.30839C17.3483 2.66883 18.798 4.6158 18.5406 6.73344L18.5237 6.87265C18.4627 7.37459 18.0367 7.75201 17.531 7.75201H15.7672H14.25H9.75031H8.2331H6.46936C5.96373 7.75201 5.53766 7.37459 5.47666 6.87265L5.45974 6.73344Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M8.2331 7.75195L5.2668 21.5947C5.18001 21.9997 5.43799 22.3984 5.84301 22.4852C6.24803 22.5719 6.64672 22.314 6.73351 21.909L7.6779 17.5018H16.3224L17.2668 21.909C17.3536 22.314 17.7523 22.5719 18.1573 22.4852C18.5623 22.3984 18.8203 21.9997 18.7335 21.5947L15.7672 7.75195H14.25C14.2501 7.80373 14.2555 7.85629 14.2668 7.90895L16.001 16.0018H7.99932L9.73351 7.90895C9.74479 7.85629 9.75025 7.80373 9.75031 7.75195H8.2331Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M14.9362 2.99461C12.9929 2.66846 11.007 2.66846 9.0637 2.99461L8.66614 3.06134C6.80885 3.37306 5.55266 5.04814 5.77572 6.84512L5.79374 6.99034C5.8106 7.12617 5.93452 7.25 6.10712 7.25H8.98398C8.99409 7.24979 9.00423 7.24979 9.0144 7.25H14.9855C14.9956 7.24979 15.0058 7.24979 15.0159 7.25H17.8927C18.0653 7.25 18.1893 7.12616 18.2061 6.99034L18.2241 6.84512L18.9684 6.93751L18.2241 6.84512C18.4472 5.04814 17.191 3.37306 15.3337 3.06134L14.9362 2.99461ZM15.9277 8.75H17.8927C18.7976 8.75 19.5816 8.08644 19.6947 7.17512L18.9504 7.08273L19.6947 7.17511L19.7127 7.0299C20.038 4.409 18.205 2.02226 15.582 1.58203L15.1844 1.5153C13.0768 1.16157 10.9231 1.16157 8.81542 1.5153L8.41786 1.58203C5.79484 2.02226 3.96181 4.40901 4.28714 7.0299L4.30517 7.17512C4.41829 8.08644 5.20228 8.75 6.10712 8.75H8.07219L6.40111 16.5484C6.30621 16.674 6.24993 16.8304 6.24993 17C6.24993 17.0574 6.25637 17.1132 6.26857 17.1669L5.26658 21.8429C5.17979 22.2479 5.43776 22.6466 5.84278 22.7334C6.2478 22.8201 6.64649 22.5622 6.73328 22.1571L7.67767 17.75H16.3222L17.2666 22.1571C17.3534 22.5622 17.7521 22.8201 18.1571 22.7334C18.5621 22.6466 18.8201 22.2479 18.7333 21.8429L17.7313 17.1669C17.7435 17.1132 17.7499 17.0574 17.7499 17C17.7499 16.8304 17.6936 16.674 17.5987 16.5484L15.9277 8.75ZM14.3936 8.75H9.60624L7.9991 16.25H16.0008L14.3936 8.75Z", "fill": "white"}]]};

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

const SolarBarChair = React.forwardRef((props, ref) => {
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

SolarBarChair.nodes = nodes;
SolarBarChair.iconName = iconName;
SolarBarChair.category = category;

const BarChairOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarBarChair, Object.assign({ ref, variant: 'outline' }, props));
});

const BarChairBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarBarChair, Object.assign({ ref, variant: 'bold' }, props));
});

const BarChairBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarBarChair, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const BarChair = SolarBarChair;

module.exports = {
  iconName,
  category,
  nodes,
  SolarBarChair,
  BarChair,
  BarChairOutline,
  BarChairBold,
  BarChairBoldDuotone,
  default: SolarBarChair
};
