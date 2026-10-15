import React from 'react';

export const iconName = 'double-alt-arrow-right';
export const category = 'Arrows';
export const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M10.5119 4.43057C10.1974 4.70014 10.161 5.17361 10.4306 5.48811L16.0122 12L10.4306 18.5119C10.161 18.8264 10.1974 19.2999 10.5119 19.5695C10.8264 19.839 11.2999 19.8026 11.5694 19.4881L17.5694 12.4881C17.8102 12.2072 17.8102 11.7928 17.5694 11.5119L11.5694 4.51192C11.2999 4.19743 10.8264 4.161 10.5119 4.43057Z", "fill": "#1C274C"}], ["path", {"d": "M6.25 5.00005C6.25 4.68619 6.44543 4.40553 6.73979 4.29664C7.03415 4.18774 7.36519 4.27366 7.56944 4.51196L13.5694 11.512C13.8102 11.7928 13.8102 12.2073 13.5694 12.4881L7.56944 19.4881C7.36519 19.7264 7.03415 19.8124 6.73979 19.7035C6.44543 19.5946 6.25 19.3139 6.25 19L6.25 5.00005Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M6.25 19C6.25 19.3139 6.44543 19.5946 6.73979 19.7035C7.03415 19.8123 7.36519 19.7264 7.56944 19.4881L13.5694 12.4881C13.8102 12.2073 13.8102 11.7928 13.5694 11.5119L7.56944 4.51194C7.36519 4.27364 7.03415 4.18773 6.73979 4.29662C6.44543 4.40551 6.25 4.68618 6.25 5.00004L6.25 19Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M10.5119 19.5695C10.1974 19.2999 10.161 18.8264 10.4306 18.5119L16.0122 12L10.4306 5.48811C10.161 5.17361 10.1974 4.70014 10.5119 4.43057C10.8264 4.161 11.2999 4.19743 11.5695 4.51192L17.5695 11.5119C17.8102 11.7928 17.8102 12.2072 17.5695 12.4881L11.5695 19.4881C11.2999 19.8026 10.8264 19.839 10.5119 19.5695Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M6.51168 4.43057C6.82617 4.161 7.29965 4.19743 7.56921 4.51192L13.5692 11.5119C13.81 11.7928 13.81 12.2072 13.5692 12.4881L7.56921 19.4881C7.29965 19.8026 6.82617 19.839 6.51168 19.5695C6.19718 19.2999 6.16076 18.8264 6.43033 18.5119L12.012 12L6.43033 5.48811C6.16076 5.17361 6.19718 4.70014 6.51168 4.43057ZM10.5119 4.43068C10.8264 4.16111 11.2998 4.19753 11.5694 4.51202L17.5694 11.512C17.8102 11.7929 17.8102 12.2073 17.5694 12.4882L11.5694 19.4882C11.2998 19.8027 10.8264 19.8391 10.5119 19.5696C10.1974 19.3 10.161 18.8265 10.4305 18.512L16.0122 12.0001L10.4305 5.48821C10.161 5.17372 10.1974 4.70024 10.5119 4.43068Z", "fill": "white"}]]};

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

export const SolarDoubleAltArrowRight = /* @__PURE__ */ React.forwardRef((props, ref) => {
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

SolarDoubleAltArrowRight.nodes = nodes;
SolarDoubleAltArrowRight.iconName = iconName;
SolarDoubleAltArrowRight.category = category;

export const DoubleAltArrowRightOutline = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarDoubleAltArrowRight, Object.assign({ ref, variant: 'outline' }, props));
});

export const DoubleAltArrowRightBold = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarDoubleAltArrowRight, Object.assign({ ref, variant: 'bold' }, props));
});

export const DoubleAltArrowRightBoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarDoubleAltArrowRight, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

export const DoubleAltArrowRight = SolarDoubleAltArrowRight;
export default SolarDoubleAltArrowRight;
