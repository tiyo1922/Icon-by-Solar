import React from 'react';

export const iconName = 'slash-circle';
export const category = 'Network, IT, Programming';
export const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM14.0184 7.3645C14.1257 6.9644 13.8882 6.55315 13.4881 6.44595C13.088 6.33874 12.6768 6.57618 12.5696 6.97628L9.98137 16.6355C9.87416 17.0356 10.1116 17.4469 10.5117 17.5541C10.9118 17.6613 11.323 17.4239 11.4303 17.0238L14.0184 7.3645Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z", "fill": "#1C274C"}], ["path", {"d": "M14.0189 7.36422C14.1261 6.96412 13.8886 6.55287 13.4885 6.44566C13.0884 6.33846 12.6772 6.57589 12.57 6.97599L9.9818 16.6353C9.87459 17.0354 10.112 17.4466 10.5121 17.5538C10.9122 17.661 11.3235 17.4236 11.4307 17.0235L14.0189 7.36422Z", "fill": "#1C274C"}]], "outline": [["path", {"d": "M14.0184 7.36452C14.1256 6.96443 13.8882 6.55317 13.4881 6.44597C13.088 6.33876 12.6767 6.5762 12.5695 6.9763L9.98131 16.6356C9.8741 17.0357 10.1115 17.4469 10.5116 17.5541C10.9117 17.6613 11.323 17.4239 11.4302 17.0238L14.0184 7.36452Z", "fill": "#FEFEFF"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z", "fill": "#FEFEFF"}]]};

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

export const SolarSlashCircle = /* @__PURE__ */ React.forwardRef((props, ref) => {
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

SolarSlashCircle.nodes = nodes;
SolarSlashCircle.iconName = iconName;
SolarSlashCircle.category = category;

export const SlashCircleOutline = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarSlashCircle, Object.assign({ ref, variant: 'outline' }, props));
});

export const SlashCircleBold = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarSlashCircle, Object.assign({ ref, variant: 'bold' }, props));
});

export const SlashCircleBoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarSlashCircle, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

export const SlashCircle = SolarSlashCircle;
export default SolarSlashCircle;
