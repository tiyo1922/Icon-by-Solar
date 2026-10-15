import React from 'react';

export const iconName = 'arrow-to-top-left';
export const category = 'Arrows Action';
export const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M17.5303 10.0303C17.8232 9.73744 17.8232 9.26256 17.5303 8.96967L12.5303 3.96967C12.2374 3.67678 11.7626 3.67678 11.4697 3.96967L6.46967 8.96967C6.17678 9.26256 6.17678 9.73744 6.46967 10.0303C6.76256 10.3232 7.23744 10.3232 7.53033 10.0303L11.25 6.31066L11.25 14.5C11.25 15.2133 11.0298 16.3 10.3913 17.1868C9.7804 18.0353 8.75556 18.75 7 18.75C6.58579 18.75 6.25 19.0858 6.25 19.5C6.25 19.9142 6.58579 20.25 7 20.25C9.24444 20.25 10.7196 19.298 11.6087 18.0632C12.4702 16.8667 12.75 15.4534 12.75 14.5L12.75 6.31066L16.4697 10.0303C16.7626 10.3232 17.2374 10.3232 17.5303 10.0303Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M17.5303 10.0303C17.8232 9.73744 17.8232 9.26256 17.5303 8.96967L12.5303 3.96967C12.2374 3.67678 11.7626 3.67678 11.4697 3.96967L6.46967 8.96967C6.17678 9.26256 6.17678 9.73744 6.46967 10.0303C6.76256 10.3232 7.23744 10.3232 7.53033 10.0303L12 5.56066L16.4697 10.0303C16.7626 10.3232 17.2374 10.3232 17.5303 10.0303Z", "fill": "#1C274C"}], ["g", {"opacity": "0.5"}], ["path", {"d": "M12.75 14.5C12.75 15.4534 12.4702 16.8667 11.6087 18.0632C10.7196 19.298 9.24444 20.25 7 20.25C6.58579 20.25 6.25 19.9142 6.25 19.5C6.25 19.0858 6.58579 18.75 7 18.75C8.75556 18.75 9.7804 18.0353 10.3913 17.1868C11.0298 16.3 11.25 15.2133 11.25 14.5L11.25 6.31066L12 5.56066L12.75 6.31066V14.5Z", "fill": "#1C274C"}], ["path", {"d": "M12.1977 3.77639C12.0432 3.73435 11.878 3.74254 11.7278 3.80095C11.8121 3.76805 11.904 3.75 12 3.75C12.0684 3.75 12.1347 3.75919 12.1977 3.77639Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M17.5303 10.0303C17.8232 9.73744 17.8232 9.26256 17.5303 8.96967L12.5303 3.96967C12.2374 3.67678 11.7626 3.67678 11.4697 3.96967L6.46967 8.96967C6.17678 9.26256 6.17678 9.73744 6.46967 10.0303C6.76256 10.3232 7.23744 10.3232 7.53033 10.0303L11.25 6.31066L11.25 14.5C11.25 15.2133 11.0298 16.3 10.3913 17.1868C9.7804 18.0353 8.75556 18.75 7 18.75C6.58579 18.75 6.25 19.0858 6.25 19.5C6.25 19.9142 6.58579 20.25 7 20.25C9.24444 20.25 10.7196 19.298 11.6087 18.0632C12.4702 16.8667 12.75 15.4534 12.75 14.5L12.75 6.31066L16.4697 10.0303C16.7626 10.3232 17.2374 10.3232 17.5303 10.0303Z", "fill": "white"}]]};

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

export const SolarArrowToTopLeft = /* @__PURE__ */ React.forwardRef((props, ref) => {
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

SolarArrowToTopLeft.nodes = nodes;
SolarArrowToTopLeft.iconName = iconName;
SolarArrowToTopLeft.category = category;

export const ArrowToTopLeftOutline = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarArrowToTopLeft, Object.assign({ ref, variant: 'outline' }, props));
});

export const ArrowToTopLeftBold = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarArrowToTopLeft, Object.assign({ ref, variant: 'bold' }, props));
});

export const ArrowToTopLeftBoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarArrowToTopLeft, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

export const ArrowToTopLeft = SolarArrowToTopLeft;
export default SolarArrowToTopLeft;
