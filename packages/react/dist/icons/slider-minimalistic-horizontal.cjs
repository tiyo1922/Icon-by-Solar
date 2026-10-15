const React = require('react');

const iconName = 'slider-minimalistic-horizontal';
const category = 'Essentional, UI';
const nodes = {"bold": [["path", {"d": "M16 5.84615C18.8284 5.84615 20.2426 5.84615 21.1213 6.74736C22 7.64857 22 9.09905 22 12C22 14.901 22 16.3514 21.1213 17.2526C20.2426 18.1538 18.8284 18.1538 16 18.1538L8 18.1538C5.17157 18.1538 3.75736 18.1538 2.87868 17.2526C2 16.3514 2 14.901 2 12C2 9.09905 2 7.64857 2.87868 6.74736C3.75736 5.84615 5.17157 5.84615 8 5.84615L16 5.84615Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M20.25 2.76923C20.25 3.19407 19.9142 3.53846 19.5 3.53846L4.5 3.53846C4.08579 3.53846 3.75 3.19406 3.75 2.76923C3.75 2.3444 4.08579 2 4.5 2L19.5 2C19.9142 2 20.25 2.3444 20.25 2.76923ZM20.25 21.2308C20.25 21.6556 19.9142 22 19.5 22L4.5 22C4.08579 22 3.75 21.6556 3.75 21.2308C3.75 20.8059 4.08579 20.4615 4.5 20.4615L19.5 20.4615C19.9142 20.4615 20.25 20.8059 20.25 21.2308Z", "fill": "#1C274C"}]], "bold-duotone": [["g", {"opacity": "0.5"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M20.25 2.76923C20.25 3.19407 19.9142 3.53846 19.5 3.53846L4.5 3.53846C4.08579 3.53846 3.75 3.19406 3.75 2.76923C3.75 2.3444 4.08579 2 4.5 2L19.5 2C19.9142 2 20.25 2.3444 20.25 2.76923ZM20.25 21.2308C20.25 21.6556 19.9142 22 19.5 22L4.5 22C4.08579 22 3.75 21.6556 3.75 21.2308C3.75 20.8059 4.08579 20.4615 4.5 20.4615L19.5 20.4615C19.9142 20.4615 20.25 20.8059 20.25 21.2308Z", "fill": "#1C274C"}], ["path", {"d": "M16 5.84766C18.8284 5.84766 20.2426 5.84766 21.1213 6.74887C22 7.65008 22 9.10055 22 12.0015C22 14.9025 22 16.3529 21.1213 17.2541C20.2426 18.1553 18.8284 18.1553 16 18.1553L8 18.1553C5.17157 18.1553 3.75736 18.1553 2.87868 17.2541C2 16.3529 2 14.9025 2 12.0015C2 9.10055 2 7.65008 2.87868 6.74887C3.75736 5.84766 5.17157 5.84766 8 5.84766L16 5.84766Z", "fill": "#1C274C"}]], "outline": [["path", {"d": "M3.75 3C3.75 2.58579 4.08579 2.25 4.5 2.25H19.5C19.9142 2.25 20.25 2.58579 20.25 3C20.25 3.41421 19.9142 3.75 19.5 3.75L4.5 3.75C4.08579 3.75 3.75 3.41421 3.75 3Z", "fill": "white"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M19.3918 5.36652C20.2919 5.48754 21.0497 5.74643 21.6517 6.34835C22.2536 6.95027 22.5125 7.70814 22.6335 8.60825C22.75 9.47522 22.75 10.5775 22.75 11.9451V12.0549C22.75 13.4225 22.75 14.5248 22.6335 15.3918C22.5125 16.2919 22.2536 17.0497 21.6517 17.6516C21.0497 18.2536 20.2919 18.5125 19.3918 18.6335C18.5248 18.75 17.4225 18.75 16.0549 18.75H7.94513C6.57754 18.75 5.47522 18.75 4.60825 18.6335C3.70814 18.5125 2.95027 18.2536 2.34835 17.6516C1.74643 17.0497 1.48754 16.2919 1.36652 15.3918C1.24996 14.5248 1.24998 13.4225 1.25 12.0549V11.9451C1.24998 10.5775 1.24996 9.47521 1.36652 8.60825C1.48754 7.70814 1.74643 6.95027 2.34835 6.34835C2.95027 5.74643 3.70814 5.48754 4.60825 5.36652C5.47522 5.24996 6.57753 5.24998 7.94512 5.25L16.0549 5.25C17.4225 5.24998 18.5248 5.24996 19.3918 5.36652ZM19.1919 6.85315C18.4365 6.75159 17.4354 6.75 16 6.75H8C6.56459 6.75 5.56347 6.75159 4.80812 6.85315C4.07435 6.9518 3.68577 7.13225 3.40901 7.40901C3.13225 7.68577 2.9518 8.07435 2.85315 8.80812C2.75159 9.56347 2.75 10.5646 2.75 12C2.75 13.4354 2.75159 14.4365 2.85315 15.1919C2.9518 15.9257 3.13225 16.3142 3.40901 16.591C3.68577 16.8678 4.07435 17.0482 4.80812 17.1469C5.56347 17.2484 6.56459 17.25 8 17.25H16C17.4354 17.25 18.4365 17.2484 19.1919 17.1469C19.9257 17.0482 20.3142 16.8678 20.591 16.591C20.8678 16.3142 21.0482 15.9257 21.1469 15.1919C21.2484 14.4365 21.25 13.4354 21.25 12C21.25 10.5646 21.2484 9.56347 21.1469 8.80812C21.0482 8.07434 20.8678 7.68577 20.591 7.40901C20.3142 7.13225 19.9257 6.9518 19.1919 6.85315Z", "fill": "white"}], ["path", {"d": "M4.5 21.75C4.08579 21.75 3.75 21.4142 3.75 21C3.75 20.5858 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 20.5858 20.25 21C20.25 21.4142 19.9142 21.75 19.5 21.75H4.5Z", "fill": "white"}]]};

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

const SolarSliderMinimalisticHorizontal = React.forwardRef((props, ref) => {
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

SolarSliderMinimalisticHorizontal.nodes = nodes;
SolarSliderMinimalisticHorizontal.iconName = iconName;
SolarSliderMinimalisticHorizontal.category = category;

const SliderMinimalisticHorizontalOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarSliderMinimalisticHorizontal, Object.assign({ ref, variant: 'outline' }, props));
});

const SliderMinimalisticHorizontalBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarSliderMinimalisticHorizontal, Object.assign({ ref, variant: 'bold' }, props));
});

const SliderMinimalisticHorizontalBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarSliderMinimalisticHorizontal, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const SliderMinimalisticHorizontal = SolarSliderMinimalisticHorizontal;

module.exports = {
  iconName,
  category,
  nodes,
  SolarSliderMinimalisticHorizontal,
  SliderMinimalisticHorizontal,
  SliderMinimalisticHorizontalOutline,
  SliderMinimalisticHorizontalBold,
  SliderMinimalisticHorizontalBoldDuotone,
  default: SolarSliderMinimalisticHorizontal
};
