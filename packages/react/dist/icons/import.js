import React from 'react';

export const iconName = 'import';
export const category = 'Arrows Action';
export const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M15.5303 10.4697C15.2374 10.1768 14.7626 10.1768 14.4697 10.4697L12.75 12.1893V4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4L11.25 12.1893L9.53033 10.4697C9.23744 10.1768 8.76256 10.1768 8.46967 10.4697C8.17678 10.7626 8.17678 11.2374 8.46967 11.5303L11.4697 14.5303C11.7626 14.8232 12.2374 14.8232 12.5303 14.5303L15.5303 11.5303C15.8232 11.2374 15.8232 10.7626 15.5303 10.4697Z", "fill": "#1C274C"}], ["path", {"d": "M17.7476 12C17.2996 12 16.9077 12.2742 16.591 12.591L13.591 15.591C12.7123 16.4697 11.2877 16.4697 10.409 15.591L7.40901 12.591C7.09226 12.2742 6.70041 12 6.25245 12H4C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12H17.7476Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12L4 12Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M15.5303 10.4697C15.2374 10.1768 14.7626 10.1768 14.4697 10.4697L12.75 12.1893L12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4L11.25 12.1893L9.53033 10.4697C9.23744 10.1768 8.76256 10.1768 8.46967 10.4697C8.17678 10.7626 8.17678 11.2374 8.46967 11.5303L11.4697 14.5303C11.7626 14.8232 12.2374 14.8232 12.5303 14.5303L15.5303 11.5303C15.8232 11.2374 15.8232 10.7626 15.5303 10.4697Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 21.25C17.1086 21.25 21.25 17.1086 21.25 12L22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 11.5858 1.58579 11.25 2 11.25C2.41421 11.25 2.75 11.5858 2.75 12C2.75 17.1086 6.89136 21.25 12 21.25ZM18.5303 7.46967C18.8232 7.76256 18.8232 8.23744 18.5303 8.53033L12.5303 14.5303C12.2374 14.8232 11.7626 14.8232 11.4697 14.5303L5.46967 8.53033C5.17678 8.23744 5.17678 7.76256 5.46967 7.46967C5.76256 7.17678 6.23744 7.17678 6.53033 7.46967L11.25 12.1893L11.25 2C11.25 1.58579 11.5858 1.25 12 1.25C12.4142 1.25 12.75 1.58579 12.75 2L12.75 12.1893L17.4697 7.46967C17.7626 7.17678 18.2374 7.17678 18.5303 7.46967Z", "fill": "white"}]]};

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

export const SolarImport = /* @__PURE__ */ React.forwardRef((props, ref) => {
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

SolarImport.nodes = nodes;
SolarImport.iconName = iconName;
SolarImport.category = category;

export const ImportOutline = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarImport, Object.assign({ ref, variant: 'outline' }, props));
});

export const ImportBold = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarImport, Object.assign({ ref, variant: 'bold' }, props));
});

export const ImportBoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarImport, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

export const Import = SolarImport;
export default SolarImport;
