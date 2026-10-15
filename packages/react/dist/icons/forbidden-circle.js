import React from 'react';

export const iconName = 'forbidden-circle';
export const category = 'Essentional, UI';
export const nodes = {"bold": [["path", {"d": "M12 22C17.5228 22 22 17.5228 22 12C22 9.50853 21.0889 7.22987 19.5816 5.47906L5.47905 19.5816C7.22987 21.0889 9.50853 22 12 22Z", "fill": "#1C274C"}], ["path", {"d": "M12 2C6.47715 2 2 6.47715 2 12C2 14.4915 2.91114 16.7701 4.41839 18.5209L18.5209 4.41839C16.7701 2.91114 14.4915 2 12 2Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M4.92893 4.92893C1.02369 8.83418 1.02369 15.1658 4.92893 19.0711C8.83418 22.9763 15.1656 22.9761 19.0708 19.0708C22.9761 15.1656 22.9763 8.83418 19.0711 4.92893C15.1658 1.02369 8.83418 1.02369 4.92893 4.92893Z", "fill": "#1C274C"}], ["path", {"d": "M18.5211 4.41797L4.41797 18.5208C4.58006 18.7089 4.75031 18.8923 4.9287 19.0707C5.1071 19.2491 5.29057 19.4194 5.47863 19.5815L19.5817 5.47865C19.4196 5.29054 19.2493 5.10703 19.0708 4.92859C18.8925 4.75024 18.7091 4.58003 18.5211 4.41797Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C14.2845 2.75 16.3756 3.57817 17.9894 4.95066C17.9827 4.95685 17.9762 4.96319 17.9697 4.96967L4.96969 17.9694C4.96317 17.976 4.95679 17.9826 4.95056 17.9893C3.57813 16.3755 2.75 14.2845 2.75 12ZM6.0105 19.0492C7.62432 20.4218 9.71544 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 9.7155 20.4218 7.62442 19.0493 6.01062C19.0431 6.01728 19.0368 6.02386 19.0303 6.03034L6.03034 19.0301C6.02382 19.0366 6.0172 19.043 6.0105 19.0492Z", "fill": "white"}]]};

function renderNodes(variantNodes, color = 'currentColor', secondaryColor, secondaryOpacity) {
  return variantNodes.map(([tag, attrs], index) => {
    const computed = { ...attrs };
    if (color !== 'original' && color !== 'source') {
      if ('opacity' in attrs) {
        computed.opacity = secondaryOpacity ?? attrs.opacity;
        computed.fill = secondaryColor || color;
      } else if (attrs.fill && attrs.fill !== 'none' && attrs.fill !== 'transparent') {
        const isWhite = attrs.fill === 'white' || attrs.fill === '#FEFEFF' || attrs.fill === '#FBFCFF';
        if (!isWhite || variantNodes.length === 1) computed.fill = color;
      }
      if (attrs.stroke && attrs.stroke !== 'none') computed.stroke = color;
    }
    return React.createElement(tag, { key: index, ...computed });
  });
}

export const SolarForbiddenCircle = /* @__PURE__ */ React.forwardRef((props, ref) => {
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
  return React.createElement('svg', {
    ref,
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className,
    style: { display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, ...style },
    'aria-hidden': title ? undefined : 'true',
    role: title ? 'img' : 'presentation',
    ...rest
  }, title && React.createElement('title', null, title), ...renderNodes(variantNodes, color, secondaryColor, secondaryOpacity));
});

SolarForbiddenCircle.nodes = nodes;
SolarForbiddenCircle.iconName = iconName;
SolarForbiddenCircle.category = category;

export const ForbiddenCircleOutline = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarForbiddenCircle, Object.assign({ ref, variant: 'outline' }, props));
});

export const ForbiddenCircleBold = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarForbiddenCircle, Object.assign({ ref, variant: 'bold' }, props));
});

export const ForbiddenCircleBoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarForbiddenCircle, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

export const ForbiddenCircle = SolarForbiddenCircle;
export default SolarForbiddenCircle;
