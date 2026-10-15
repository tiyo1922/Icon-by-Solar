import React from 'react';

export const iconName = 'cloud';
export const category = 'Weather';
export const nodes = {"bold": [["path", {"d": "M16.2857 20C19.4416 20 22 17.4717 22 14.3529C22 11.8811 20.393 9.78024 18.1551 9.01498C17.8371 6.19371 15.4159 4 12.4762 4C9.32028 4 6.7619 6.52827 6.7619 9.64706C6.7619 10.3369 6.88706 10.9978 7.11616 11.6089C6.8475 11.5567 6.56983 11.5294 6.28571 11.5294C3.91878 11.5294 2 13.4256 2 15.7647C2 18.1038 3.91878 20 6.28571 20H16.2857Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "fillRule": "evenodd", "clipRule": "evenodd", "d": "M22 14.3529C22 17.4717 19.4416 20 16.2857 20H10.4995C9.55792 18.7465 9 17.1884 9 15.5C9 11.3579 12.3579 8 16.5 8C17.009 8 17.5062 8.05071 17.9868 8.14736C18.0649 8.42841 18.1216 8.71822 18.1551 9.01498C20.393 9.78024 22 11.8811 22 14.3529Z", "fill": "#1C274C"}], ["path", {"d": "M12.4762 4C9.32028 4 6.7619 6.52827 6.7619 9.64706C6.7619 10.3369 6.88706 10.9978 7.11616 11.6089C6.8475 11.5567 6.56983 11.5294 6.28571 11.5294C3.91878 11.5294 2 13.4256 2 15.7647C2 18.1038 3.91878 20 6.28571 20H10.4995C9.55792 18.7465 9 17.1884 9 15.5C9 11.3579 12.3579 8 16.5 8C17.009 8 17.5062 8.05071 17.9868 8.14736C17.9721 8.09441 17.9566 8.04178 17.9403 7.98948C17.2237 5.67956 15.0484 4 12.4762 4Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12.4762 4.75C9.7261 4.75 7.5119 6.95083 7.5119 9.64706C7.5119 10.1092 7.5766 10.5555 7.69729 10.9781C8.19449 11.1216 8.65991 11.3389 9.08045 11.6171C9.42592 11.8456 9.52072 12.3109 9.29219 12.6564C9.06366 13.0019 8.59835 13.0967 8.25288 12.8681C7.87207 12.6162 7.43917 12.4355 6.97329 12.3451C6.75148 12.3021 6.52165 12.2794 6.28571 12.2794C4.3246 12.2794 2.75 13.8482 2.75 15.7647C2.75 17.6812 4.3246 19.25 6.28571 19.25H16.2857C19.0358 19.25 21.25 17.0492 21.25 14.3529C21.25 12.2162 19.8607 10.3909 17.9124 9.72463C17.4038 9.55072 16.8568 9.45588 16.2857 9.45588C15.7031 9.45588 15.1455 9.55458 14.6283 9.73526C14.2372 9.87185 13.8095 9.66557 13.6729 9.27453C13.5363 8.88348 13.7426 8.45575 14.1336 8.31916C14.8079 8.08364 15.5326 7.95588 16.2857 7.95588C16.5812 7.95588 16.8723 7.97555 17.1577 8.01367C16.477 6.11631 14.6422 4.75 12.4762 4.75ZM18.8314 8.47127C18.2724 5.49369 15.6343 3.25 12.4762 3.25C8.91446 3.25 6.0119 6.10572 6.0119 9.64706C6.0119 10.0341 6.04673 10.4136 6.11351 10.7823C3.41987 10.8721 1.25 13.0605 1.25 15.7647C1.25 18.5264 3.51296 20.75 6.28571 20.75H16.2857C19.8474 20.75 22.75 17.8943 22.75 14.3529C22.75 11.7093 21.1313 9.44751 18.8314 8.47127Z", "fill": "white"}]]};

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

export const SolarCloud = /* @__PURE__ */ React.forwardRef((props, ref) => {
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

SolarCloud.nodes = nodes;
SolarCloud.iconName = iconName;
SolarCloud.category = category;

export const CloudOutline = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarCloud, Object.assign({ ref, variant: 'outline' }, props));
});

export const CloudBold = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarCloud, Object.assign({ ref, variant: 'bold' }, props));
});

export const CloudBoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarCloud, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

export const Cloud = SolarCloud;
export default SolarCloud;
