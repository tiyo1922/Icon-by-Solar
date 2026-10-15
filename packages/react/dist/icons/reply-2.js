import React from 'react';

export const iconName = 'reply-2';
export const category = 'Arrows Action';
export const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M19.5 6.25C19.9142 6.25 20.25 6.58579 20.25 7C20.25 9.24444 19.298 10.7196 18.0632 11.6087C16.8667 12.4702 15.4534 12.75 14.5 12.75L6.31066 12.75L10.0303 16.4697C10.3232 16.7626 10.3232 17.2374 10.0303 17.5303C9.73744 17.8232 9.26256 17.8232 8.96967 17.5303L3.96967 12.5303C3.67678 12.2374 3.67678 11.7626 3.96967 11.4697L8.96967 6.46967C9.26256 6.17678 9.73744 6.17678 10.0303 6.46967C10.3232 6.76256 10.3232 7.23744 10.0303 7.53033L6.31066 11.25L14.5 11.25C15.2133 11.25 16.3 11.0298 17.1868 10.3913C18.0353 9.7804 18.75 8.75556 18.75 7C18.75 6.58579 19.0858 6.25 19.5 6.25Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M10.0303 17.5303C9.73744 17.8232 9.26256 17.8232 8.96967 17.5303L3.96967 12.5303C3.67678 12.2374 3.67678 11.7626 3.96967 11.4697L8.96967 6.46967C9.26256 6.17678 9.73744 6.17678 10.0303 6.46967C10.3232 6.76256 10.3232 7.23744 10.0303 7.53033L5.56066 12L10.0303 16.4697C10.3232 16.7626 10.3232 17.2374 10.0303 17.5303Z", "fill": "#1C274C"}], ["g", {"opacity": "0.5"}], ["path", {"d": "M6.31066 12.75H14.5C15.4534 12.75 16.8667 12.4702 18.0632 11.6086C19.298 10.7196 20.25 9.24444 20.25 7C20.25 6.58578 19.9142 6.25 19.5 6.25C19.0858 6.25 18.75 6.58578 18.75 7C18.75 8.75556 18.0353 9.7804 17.1868 10.3913C16.3 11.0298 15.2133 11.25 14.5 11.25L6.31066 11.25L5.56066 12L6.31066 12.75Z", "fill": "#1C274C"}], ["path", {"d": "M3.80691 12.2871C3.77024 12.1987 3.75 12.1017 3.75 12C3.75 12.0977 3.76897 12.1954 3.80691 12.2871Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M19.5 6.25C19.9142 6.25 20.25 6.58579 20.25 7C20.25 9.24444 19.298 10.7196 18.0632 11.6087C16.8667 12.4702 15.4534 12.75 14.5 12.75L6.31066 12.75L10.0303 16.4697C10.3232 16.7626 10.3232 17.2374 10.0303 17.5303C9.73744 17.8232 9.26256 17.8232 8.96967 17.5303L3.96967 12.5303C3.67678 12.2374 3.67678 11.7626 3.96967 11.4697L8.96967 6.46967C9.26256 6.17678 9.73744 6.17678 10.0303 6.46967C10.3232 6.76256 10.3232 7.23744 10.0303 7.53033L6.31066 11.25L14.5 11.25C15.2133 11.25 16.3 11.0298 17.1868 10.3913C18.0353 9.7804 18.75 8.75556 18.75 7C18.75 6.58579 19.0858 6.25 19.5 6.25Z", "fill": "white"}]]};

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

export const SolarReply2 = /* @__PURE__ */ React.forwardRef((props, ref) => {
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

SolarReply2.nodes = nodes;
SolarReply2.iconName = iconName;
SolarReply2.category = category;

export const Reply2Outline = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarReply2, Object.assign({ ref, variant: 'outline' }, props));
});

export const Reply2Bold = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarReply2, Object.assign({ ref, variant: 'bold' }, props));
});

export const Reply2BoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarReply2, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

export const Reply2 = SolarReply2;
export default SolarReply2;
