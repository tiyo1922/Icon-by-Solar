import React from 'react';

export const iconName = 'arrow-to-down-left';
export const category = 'Arrows Action';
export const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M17.5303 13.9697C17.8232 14.2626 17.8232 14.7374 17.5303 15.0303L12.5303 20.0303C12.2374 20.3232 11.7626 20.3232 11.4697 20.0303L6.46967 15.0303C6.17678 14.7374 6.17678 14.2626 6.46967 13.9697C6.76256 13.6768 7.23744 13.6768 7.53033 13.9697L11.25 17.6893L11.25 9.5C11.25 8.78668 11.0298 7.70001 10.3913 6.81323C9.7804 5.96468 8.75556 5.25 7 5.25C6.58579 5.25 6.25 4.91421 6.25 4.5C6.25 4.08579 6.58579 3.75 7 3.75C9.24444 3.75 10.7196 4.70198 11.6087 5.93677C12.4702 7.13332 12.75 8.54665 12.75 9.5L12.75 17.6893L16.4697 13.9697C16.7626 13.6768 17.2374 13.6768 17.5303 13.9697Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M17.5303 13.9697C17.8232 14.2626 17.8232 14.7374 17.5303 15.0303L12.5303 20.0303C12.2374 20.3232 11.7626 20.3232 11.4697 20.0303L6.46967 15.0303C6.17678 14.7374 6.17678 14.2626 6.46967 13.9697C6.76256 13.6768 7.23744 13.6768 7.53033 13.9697L12 18.4393L16.4697 13.9697C16.7626 13.6768 17.2374 13.6768 17.5303 13.9697Z", "fill": "#1C274C"}], ["g", {"opacity": "0.5"}], ["path", {"d": "M12.75 9.5C12.75 8.54665 12.4702 7.13332 11.6087 5.93677C10.7196 4.70198 9.24444 3.75 7 3.75C6.58579 3.75 6.25 4.08579 6.25 4.5C6.25 4.91421 6.58579 5.25 7 5.25C8.75556 5.25 9.7804 5.96468 10.3913 6.81323C11.0298 7.70002 11.25 8.78668 11.25 9.5L11.25 17.6893L12 18.4393L12.75 17.6893V9.5Z", "fill": "#1C274C"}], ["path", {"d": "M12.1977 20.2236C12.0432 20.2656 11.878 20.2575 11.7278 20.199C11.8121 20.2319 11.904 20.25 12 20.25C12.0684 20.25 12.1347 20.2408 12.1977 20.2236Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M17.5303 13.9697C17.8232 14.2626 17.8232 14.7374 17.5303 15.0303L12.5303 20.0303C12.2374 20.3232 11.7626 20.3232 11.4697 20.0303L6.46967 15.0303C6.17678 14.7374 6.17678 14.2626 6.46967 13.9697C6.76256 13.6768 7.23744 13.6768 7.53033 13.9697L11.25 17.6893L11.25 9.5C11.25 8.78668 11.0298 7.70001 10.3913 6.81323C9.7804 5.96468 8.75556 5.25 7 5.25C6.58579 5.25 6.25 4.91421 6.25 4.5C6.25 4.08579 6.58579 3.75 7 3.75C9.24444 3.75 10.7196 4.70198 11.6087 5.93677C12.4702 7.13332 12.75 8.54665 12.75 9.5L12.75 17.6893L16.4697 13.9697C16.7626 13.6768 17.2374 13.6768 17.5303 13.9697Z", "fill": "white"}]]};

function renderNodes(variantNodes, variant, color = 'currentColor', secondaryColor, secondaryOpacity) {
  return variantNodes.map(([tag, attrs], index) => {
    const computed = { ...attrs };
    if (color !== 'original' && color !== 'source') {
      if ('opacity' in attrs) {
        computed.opacity = secondaryOpacity ?? attrs.opacity;
        computed.fill = secondaryColor || color;
      } else if (attrs.fill && attrs.fill !== 'none' && attrs.fill !== 'transparent') {
        const isWhite = attrs.fill === 'white' || attrs.fill === '#FEFEFF' || attrs.fill === '#FBFCFF';
        if (!(variant === 'bold' && isWhite && variantNodes.length > 1)) computed.fill = color;
      }
      if (attrs.stroke && attrs.stroke !== 'none') computed.stroke = color;
    }
    return React.createElement(tag, { key: index, ...computed });
  });
}

export const SolarArrowToDownLeft = /* @__PURE__ */ React.forwardRef((props, ref) => {
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
  }, title && React.createElement('title', null, title), ...renderNodes(variantNodes, normVariant, color, secondaryColor, secondaryOpacity));
});

SolarArrowToDownLeft.nodes = nodes;
SolarArrowToDownLeft.iconName = iconName;
SolarArrowToDownLeft.category = category;

export const ArrowToDownLeftOutline = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarArrowToDownLeft, Object.assign({ ref, variant: 'outline' }, props));
});

export const ArrowToDownLeftBold = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarArrowToDownLeft, Object.assign({ ref, variant: 'bold' }, props));
});

export const ArrowToDownLeftBoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarArrowToDownLeft, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

export const ArrowToDownLeft = SolarArrowToDownLeft;
export default SolarArrowToDownLeft;
