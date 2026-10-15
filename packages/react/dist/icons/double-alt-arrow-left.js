import React from 'react';

export const iconName = 'double-alt-arrow-left';
export const category = 'Arrows';
export const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M13.4881 4.43057C13.8026 4.70014 13.839 5.17361 13.5694 5.48811L7.98781 12L13.5694 18.5119C13.839 18.8264 13.8026 19.2999 13.4881 19.5695C13.1736 19.839 12.7001 19.8026 12.4306 19.4881L6.43056 12.4881C6.18981 12.2072 6.18981 11.7928 6.43056 11.5119L12.4306 4.51192C12.7001 4.19743 13.1736 4.161 13.4881 4.43057Z", "fill": "#1C274C"}], ["path", {"d": "M17.75 5.00005C17.75 4.68619 17.5546 4.40553 17.2602 4.29664C16.9658 4.18774 16.6348 4.27366 16.4306 4.51196L10.4306 11.512C10.1898 11.7928 10.1898 12.2073 10.4306 12.4881L16.4306 19.4881C16.6348 19.7264 16.9658 19.8124 17.2602 19.7035C17.5546 19.5946 17.75 19.3139 17.75 19L17.75 5.00005Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M17.75 19C17.75 19.3139 17.5546 19.5946 17.2602 19.7035C16.9658 19.8123 16.6348 19.7264 16.4306 19.4881L10.4306 12.4881C10.1898 12.2073 10.1898 11.7928 10.4306 11.5119L16.4306 4.51194C16.6348 4.27364 16.9658 4.18773 17.2602 4.29662C17.5546 4.40551 17.75 4.68618 17.75 5.00004L17.75 19Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M13.4881 19.5695C13.8026 19.2999 13.839 18.8264 13.5694 18.5119L7.98781 12L13.5694 5.48811C13.839 5.17361 13.8026 4.70014 13.4881 4.43057C13.1736 4.161 12.7001 4.19743 12.4306 4.51192L6.43056 11.5119C6.18981 11.7928 6.18981 12.2072 6.43056 12.4881L12.4306 19.4881C12.7001 19.8026 13.1736 19.839 13.4881 19.5695Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M17.488 4.43057C17.8025 4.70014 17.8389 5.17361 17.5693 5.48811L11.9877 12L17.5693 18.5119C17.8389 18.8264 17.8025 19.2999 17.488 19.5695C17.1735 19.839 16.7 19.8026 16.4305 19.4881L10.4305 12.4881C10.1897 12.2072 10.1897 11.7928 10.4305 11.5119L16.4305 4.51192C16.7 4.19743 17.1735 4.161 17.488 4.43057ZM13.4881 4.43067C13.8026 4.70024 13.839 5.17372 13.5694 5.48821L7.98781 12.0001L13.5694 18.512C13.839 18.8265 13.8026 19.3 13.4881 19.5696C13.1736 19.8391 12.7001 19.8027 12.4306 19.4882L6.43056 12.4882C6.18981 12.2073 6.18981 11.7929 6.43056 11.512L12.4306 4.51202C12.7001 4.19753 13.1736 4.16111 13.4881 4.43067Z", "fill": "white"}]]};

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

export const SolarDoubleAltArrowLeft = /* @__PURE__ */ React.forwardRef((props, ref) => {
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

SolarDoubleAltArrowLeft.nodes = nodes;
SolarDoubleAltArrowLeft.iconName = iconName;
SolarDoubleAltArrowLeft.category = category;

export const DoubleAltArrowLeftOutline = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarDoubleAltArrowLeft, Object.assign({ ref, variant: 'outline' }, props));
});

export const DoubleAltArrowLeftBold = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarDoubleAltArrowLeft, Object.assign({ ref, variant: 'bold' }, props));
});

export const DoubleAltArrowLeftBoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarDoubleAltArrowLeft, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

export const DoubleAltArrowLeft = SolarDoubleAltArrowLeft;
export default SolarDoubleAltArrowLeft;
