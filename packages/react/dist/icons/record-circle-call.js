import React from 'react';

export const iconName = 'record-circle-call';
export const category = 'Call';
export const nodes = {"bold": [["path", {"d": "M14.25 12C14.25 11.0335 15.0335 10.25 16 10.25C16.9665 10.25 17.75 11.0335 17.75 12C17.75 12.9665 16.9665 13.75 16 13.75C15.0335 13.75 14.25 12.9665 14.25 12Z", "fill": "#1C274C"}], ["path", {"d": "M8 13.75C8.9665 13.75 9.75 12.9665 9.75 12C9.75 11.0335 8.9665 10.25 8 10.25C7.0335 10.25 6.25 11.0335 6.25 12C6.25 12.9665 7.0335 13.75 8 13.75Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.2609 13.75C12.9375 13.2449 12.75 12.6443 12.75 12C12.75 10.2051 14.2051 8.75 16 8.75C17.7949 8.75 19.25 10.2051 19.25 12C19.25 13.7949 17.7949 15.25 16 15.25H8C6.20507 15.25 4.75 13.7949 4.75 12C4.75 10.2051 6.20507 8.75 8 8.75C9.79493 8.75 11.25 10.2051 11.25 12C11.25 12.6443 11.0625 13.2449 10.7391 13.75H13.2609Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12.75 12C12.75 12.6443 12.9375 13.2449 13.2609 13.75H10.7391C11.0625 13.2449 11.25 12.6443 11.25 12C11.25 10.2051 9.79493 8.75 8 8.75C6.20507 8.75 4.75 10.2051 4.75 12C4.75 13.7949 6.20507 15.25 8 15.25H16C17.7949 15.25 19.25 13.7949 19.25 12C19.25 10.2051 17.7949 8.75 16 8.75C14.2051 8.75 12.75 10.2051 12.75 12ZM14.25 12C14.25 11.0335 15.0335 10.25 16 10.25C16.9665 10.25 17.75 11.0335 17.75 12C17.75 12.9665 16.9665 13.75 16 13.75C15.0335 13.75 14.25 12.9665 14.25 12ZM9.75 12C9.75 12.9665 8.9665 13.75 8 13.75C7.0335 13.75 6.25 12.9665 6.25 12C6.25 11.0335 7.0335 10.25 8 10.25C8.9665 10.25 9.75 11.0335 9.75 12Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M13.2609 13.75C12.9375 13.2449 12.75 12.6443 12.75 12C12.75 10.2051 14.2051 8.75 16 8.75C17.7949 8.75 19.25 10.2051 19.25 12C19.25 13.7949 17.7949 15.25 16 15.25H8C6.20507 15.25 4.75 13.7949 4.75 12C4.75 10.2051 6.20507 8.75 8 8.75C9.79493 8.75 11.25 10.2051 11.25 12C11.25 12.6443 11.0625 13.2449 10.7391 13.75H13.2609ZM14.25 12C14.25 11.0335 15.0335 10.25 16 10.25C16.9665 10.25 17.75 11.0335 17.75 12C17.75 12.9665 16.9665 13.75 16 13.75C15.0335 13.75 14.25 12.9665 14.25 12ZM8 13.75C8.9665 13.75 9.75 12.9665 9.75 12C9.75 11.0335 8.9665 10.25 8 10.25C7.0335 10.25 6.25 11.0335 6.25 12C6.25 12.9665 7.0335 13.75 8 13.75Z", "fill": "white"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z", "fill": "white"}]]};

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

export const SolarRecordCircle = /* @__PURE__ */ React.forwardRef((props, ref) => {
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

SolarRecordCircle.nodes = nodes;
SolarRecordCircle.iconName = iconName;
SolarRecordCircle.category = category;

export const RecordCircleOutline = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarRecordCircle, Object.assign({ ref, variant: 'outline' }, props));
});

export const RecordCircleBold = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarRecordCircle, Object.assign({ ref, variant: 'bold' }, props));
});

export const RecordCircleBoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarRecordCircle, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

export const RecordCircle = SolarRecordCircle;
export default SolarRecordCircle;
