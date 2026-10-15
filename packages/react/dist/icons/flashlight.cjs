const React = require('react');

const iconName = 'flashlight';
const category = 'Essentional, UI';
const nodes = {"bold": [["path", {"d": "M20 4.25H4.00002L4 4C4 3.05719 4 2.58579 4.29289 2.29289C4.58579 2 5.05719 2 6 2H18C18.9428 2 19.4142 2 19.7071 2.29289C20 2.58579 20 3.05719 20 4L20 4.25Z", "fill": "#1C274C"}], ["path", {"d": "M16.1716 8.82843C16.0094 8.99057 15.87 9.12998 15.75 9.25475V9.25H8.25V9.25475C8.12999 9.12999 7.99061 8.99061 7.8285 8.8285L4.75 5.75H19.25L16.1716 8.82843Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M9 11.6569V19C9 19.9319 9 20.3978 9.15224 20.7654C9.35523 21.2554 9.74458 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8478 20.7654C15 20.3978 15 19.9319 15 19V11.6569C15 11.2795 15 10.9893 15.015 10.75H8.98503C9 10.9893 9 11.2795 9 11.6569ZM12.75 13C12.75 12.5858 12.4142 12.25 12 12.25C11.5858 12.25 11.25 12.5858 11.25 13V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15V13Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M9.00037 11.6569V19C9.00037 19.9319 9.00037 20.3978 9.15261 20.7654C9.3556 21.2554 9.74495 21.6448 10.235 21.8478C10.6025 22 11.0685 22 12.0004 22C12.9323 22 13.3982 22 13.7657 21.8478C14.2558 21.6448 14.6451 21.2554 14.8481 20.7654C15.0004 20.3978 15.0004 19.9319 15.0004 19V11.6569C15.0004 10.8394 15.0004 10.4306 15.1526 10.0631C15.1614 10.0418 15.1707 10.0208 15.1804 10H8.82031C8.83006 10.0208 8.83933 10.0418 8.84813 10.0631C9.00037 10.4306 9.00037 10.8394 9.00037 11.6569Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 12.25C12.4142 12.25 12.75 12.5858 12.75 13V15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V13C11.25 12.5858 11.5858 12.25 12 12.25Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M20 4.17157V4C20 3.05719 20 2.58579 19.7071 2.29289C19.4142 2 18.9428 2 18 2H6C5.05719 2 4.58579 2 4.29289 2.29289C4 2.58579 4 3.05719 4 4V4.17157C4 4.58032 4 4.7847 4.07612 4.96847C4.08052 4.9791 4.08516 4.9896 4.09003 5H19.91C19.9148 4.9896 19.9195 4.9791 19.9239 4.96847C20 4.7847 20 4.58032 20 4.17157Z", "fill": "#1C274C"}], ["path", {"d": "M16.1714 8.82843L19.414 5.58579C19.6863 5.31347 19.8304 5.16944 19.9098 5H4.08984C4.16926 5.16944 4.31329 5.31347 4.5856 5.58579L7.82824 8.82843C8.37287 9.37305 8.66093 9.66112 8.81975 10H15.1799C15.3387 9.66112 15.6268 9.37305 16.1714 8.82843Z", "fill": "#1C274C"}]], "outline": [["path", {"d": "M12.0001 12.25C12.4143 12.25 12.7501 12.5858 12.7501 13V15C12.7501 15.4142 12.4143 15.75 12.0001 15.75C11.5858 15.75 11.2501 15.4142 11.2501 15V13C11.2501 12.5858 11.5858 12.25 12.0001 12.25Z", "fill": "white"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M5.95532 1.25C5.5225 1.24995 5.12567 1.24991 4.80286 1.29331C4.44738 1.3411 4.07165 1.45355 3.76263 1.76257C3.45361 2.07159 3.34116 2.44732 3.29337 2.8028C3.24997 3.12561 3.25001 3.52244 3.25006 3.95526L3.25007 4.17158L3.24991 4.25163C3.24897 4.5773 3.24796 4.92879 3.38328 5.25549C3.5186 5.58218 3.76786 5.83001 3.99881 6.05963L4.05552 6.11612L7.29817 9.35877C7.9195 9.9801 8.07304 10.1524 8.15492 10.3501C8.23679 10.5477 8.25007 10.7782 8.25007 11.6569V19.0253C8.25006 19.4697 8.25005 19.8408 8.27084 20.1454C8.29247 20.4625 8.33912 20.762 8.4594 21.0524C8.73851 21.7262 9.27386 22.2616 9.94769 22.5407C10.2381 22.661 10.5376 22.7076 10.8547 22.7292C11.1593 22.75 11.5304 22.75 11.9748 22.75H12.0253C12.4698 22.75 12.8408 22.75 13.1454 22.7292C13.4625 22.7076 13.7621 22.661 14.0524 22.5407C14.7263 22.2616 15.2616 21.7262 15.5407 21.0524C15.661 20.762 15.7077 20.4625 15.7293 20.1454C15.7501 19.8408 15.7501 19.4697 15.7501 19.0253V11.6569C15.7501 10.7782 15.7633 10.5477 15.8452 10.3501C15.9271 10.1524 16.0806 9.9801 16.702 9.35876L19.9446 6.11612L20.0013 6.05963C20.2323 5.83001 20.4815 5.58218 20.6169 5.25549C20.7522 4.92879 20.7512 4.5773 20.7502 4.25163L20.7501 4.17158L20.7501 3.95526C20.7501 3.52244 20.7502 3.12561 20.7068 2.8028C20.659 2.44732 20.5465 2.07159 20.2375 1.76257C19.9285 1.45355 19.5528 1.3411 19.1973 1.29331C18.8745 1.24991 18.4776 1.24995 18.0448 1.25H5.95532ZM4.82574 2.82187L4.82331 2.82324L4.82193 2.82568C4.82092 2.82761 4.8193 2.83093 4.81723 2.83597C4.80827 2.85775 4.79297 2.90611 4.77999 3.00267C4.75166 3.21339 4.75007 3.5074 4.75007 4.00001V4.17158C4.75007 4.19924 4.75008 4.22534 4.75011 4.25H19.25C19.2501 4.22534 19.2501 4.19924 19.2501 4.17158V4.00001C19.2501 3.5074 19.2485 3.21339 19.2201 3.00267C19.2072 2.90611 19.1919 2.85775 19.1829 2.83597C19.1808 2.83093 19.1792 2.82761 19.1782 2.82568L19.1768 2.82324L19.1744 2.82187C19.1725 2.82086 19.1691 2.81924 19.1641 2.81717C19.1423 2.80821 19.094 2.79291 18.9974 2.77993C18.7867 2.7516 18.4927 2.75001 18.0001 2.75001H6.00007C5.50746 2.75001 5.21346 2.7516 5.00273 2.77993C4.90617 2.79291 4.85781 2.80821 4.83603 2.81717C4.83099 2.81924 4.82767 2.82086 4.82574 2.82187ZM18.1894 5.75H5.81072L8.44434 8.38351C8.75625 8.69482 9.02713 8.96518 9.23748 9.25H14.7627C14.973 8.96519 15.2439 8.69485 15.5558 8.38355L18.1894 5.75ZM14.2634 10.75H9.73675C9.75067 10.9925 9.75042 11.2522 9.75014 11.536L9.75007 19C9.75007 19.4762 9.75047 19.7958 9.76736 20.0433C9.78378 20.284 9.81326 20.4012 9.84522 20.4784C9.97209 20.7846 10.2154 21.028 10.5217 21.1549C10.5989 21.1868 10.7161 21.2163 10.9568 21.2327C11.2043 21.2496 11.5239 21.25 12.0001 21.25C12.4763 21.25 12.7959 21.2496 13.0433 21.2327C13.2841 21.2163 13.4013 21.1868 13.4784 21.1549C13.7847 21.028 14.0281 20.7846 14.1549 20.4784C14.1869 20.4012 14.2164 20.284 14.2328 20.0433C14.2497 19.7958 14.2501 19.4762 14.2501 19L14.25 11.536C14.2497 11.2522 14.2495 10.9925 14.2634 10.75Z", "fill": "white"}]]};

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

const SolarFlashlight = React.forwardRef((props, ref) => {
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

SolarFlashlight.nodes = nodes;
SolarFlashlight.iconName = iconName;
SolarFlashlight.category = category;

const FlashlightOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarFlashlight, Object.assign({ ref, variant: 'outline' }, props));
});

const FlashlightBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarFlashlight, Object.assign({ ref, variant: 'bold' }, props));
});

const FlashlightBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarFlashlight, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const Flashlight = SolarFlashlight;

module.exports = {
  iconName,
  category,
  nodes,
  SolarFlashlight,
  Flashlight,
  FlashlightOutline,
  FlashlightBold,
  FlashlightBoldDuotone,
  default: SolarFlashlight
};
