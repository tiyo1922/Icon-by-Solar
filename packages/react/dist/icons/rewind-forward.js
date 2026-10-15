import React from 'react';

export const iconName = 'rewind-forward';
export const category = 'Video, Audio, Sound';
export const nodes = {"bold": [["path", {"d": "M2 17.5737L2 6.42632C2 4.57895 3.60064 3.41122 4.90312 4.30838L10.9998 8.76844L10.9998 7.12303C10.9998 5.50658 12.467 4.48482 13.661 5.26983L21.0784 10.1468C22.3069 10.9545 22.3069 13.0455 21.0784 13.8532L13.661 18.7302C12.467 19.5152 10.9998 18.4934 10.9998 16.877V15.2316L4.90313 19.6916C3.60065 20.5888 2 19.4211 2 17.5737Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "fillRule": "evenodd", "clipRule": "evenodd", "d": "M2 6.42632L2 17.5737C2 19.4211 3.60065 20.5888 4.90313 19.6916L10.9998 15.2316V8.76844L4.90312 4.30838C3.60064 3.41122 2 4.57895 2 6.42632Z", "fill": "#1C274C"}], ["path", {"d": "M11 7.12303L11 8.76844V15.2316V16.877C11 18.4934 12.4673 19.5152 13.6612 18.7302L21.0786 13.8532C22.3071 13.0455 22.3071 10.9545 21.0786 10.1468L13.6612 5.26983C12.4673 4.48482 11 5.50658 11 7.12303Z", "fill": "#1C274C"}]], "outline": [["path", {"d": "M11 8.76844L4.90337 4.30838C3.60089 3.41122 2.00025 4.57895 2.00025 6.42632L2.00024 17.5737C2.00024 19.4211 3.60089 20.5888 4.90337 19.6916L11 15.2316M11 7.12303L11 16.877C11 18.4934 12.4673 19.5152 13.6612 18.7302L21.0787 13.8532C22.3071 13.0455 22.3071 10.9545 21.0787 10.1468L13.6612 5.26983C12.4673 4.48482 11 5.50658 11 7.12303Z", "stroke": "white", "strokeWidth": "1.5"}]]};

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

export const SolarRewindForward = /* @__PURE__ */ React.forwardRef((props, ref) => {
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

SolarRewindForward.nodes = nodes;
SolarRewindForward.iconName = iconName;
SolarRewindForward.category = category;

export const RewindForwardOutline = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarRewindForward, Object.assign({ ref, variant: 'outline' }, props));
});

export const RewindForwardBold = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarRewindForward, Object.assign({ ref, variant: 'bold' }, props));
});

export const RewindForwardBoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarRewindForward, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

export const RewindForward = SolarRewindForward;
export default SolarRewindForward;
