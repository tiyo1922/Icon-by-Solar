import React from 'react';

export const iconName = 'filters';
export const category = 'Design, Tools';
export const nodes = {"bold": [["path", {"d": "M18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8Z", "fill": "#1C274C"}], ["path", {"d": "M5.03349 10.7832C3.22163 11.8158 2 13.7651 2 15.9997C2 19.3134 4.68629 21.9997 8 21.9997C11.3137 21.9997 14 19.3134 14 15.9997C14 15.7434 13.9839 15.4909 13.9527 15.243C13.3301 15.4104 12.6755 15.4997 12 15.4997C8.84139 15.4997 6.13882 13.5472 5.03349 10.7832Z", "fill": "#1C274C"}], ["path", {"d": "M15.3866 14.6934C15.4611 15.1176 15.5 15.5541 15.5 15.9997C15.5 18.0904 14.6446 19.9812 13.2646 21.3414C14.0849 21.7622 15.0147 21.9997 16 21.9997C19.3137 21.9997 22 19.3134 22 15.9997C22 13.7651 20.7783 11.8158 18.9665 10.7832C18.2876 12.4808 17.0062 13.8724 15.3866 14.6934Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"d": "M18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8Z", "fill": "#1C274C"}], ["path", {"opacity": "0.7", "d": "M13.5798 13.7906C13.0765 13.9276 12.5468 14.0008 12 14.0008C9.46679 14.0008 7.30024 12.4309 6.42018 10.2109C3.87293 10.9044 2 13.2338 2 16.0008C2 19.3145 4.68629 22.0008 8 22.0008C11.3137 22.0008 14 19.3145 14 16.0008C14 15.2203 13.851 14.4746 13.5798 13.7906Z", "fill": "#1C274C"}], ["path", {"opacity": "0.4", "d": "M13.5798 13.7906C13.851 14.4746 14 15.2203 14 16.0008C14 17.7778 13.2275 19.3743 12 20.473C13.0615 21.4231 14.4633 22.0008 16 22.0008C19.3137 22.0008 22 19.3145 22 16.0008C22 13.2338 20.1271 10.9044 17.5798 10.2109C16.8897 11.9517 15.4085 13.2928 13.5798 13.7906Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 2.75C9.1005 2.75 6.75 5.10051 6.75 8C6.75 10.8995 9.1005 13.25 12 13.25C14.8995 13.25 17.25 10.8995 17.25 8C17.25 5.10051 14.8995 2.75 12 2.75ZM5.25 8C5.25 4.27208 8.27208 1.25 12 1.25C15.7279 1.25 18.75 4.27208 18.75 8C18.75 8.60091 18.6715 9.18349 18.5241 9.73802C21.0013 10.7375 22.75 13.1638 22.75 16C22.75 19.7279 19.7279 22.75 16 22.75C14.5034 22.75 13.1193 22.2622 12.0001 21.4377C10.8806 22.2625 9.49722 22.75 8 22.75C4.27208 22.75 1.25 19.7279 1.25 16C1.25 13.1638 2.99868 10.7375 5.47587 9.73802C5.32852 9.18349 5.25 8.60091 5.25 8ZM6.02094 11.1356C4.10208 11.917 2.75 13.8014 2.75 16C2.75 18.8995 5.10051 21.25 8 21.25C10.8995 21.25 13.25 18.8995 13.25 16C13.25 15.5377 13.1904 15.0902 13.0787 14.6643C12.7275 14.7207 12.3672 14.75 12 14.75C9.40395 14.75 7.15019 13.2845 6.02094 11.1356ZM14.524 14.2623C14.6715 14.8173 14.75 15.3999 14.75 16C14.75 17.6778 14.1378 19.2127 13.1246 20.3934C13.9506 20.9353 14.938 21.25 16 21.25C18.8995 21.25 21.25 18.8995 21.25 16C21.25 13.8014 19.8979 11.917 17.9791 11.1356C17.238 12.5458 16.0126 13.6617 14.524 14.2623Z", "fill": "#FBFCFF"}]]};

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

export const SolarFilters = /* @__PURE__ */ React.forwardRef((props, ref) => {
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

SolarFilters.nodes = nodes;
SolarFilters.iconName = iconName;
SolarFilters.category = category;

export const FiltersOutline = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarFilters, Object.assign({ ref, variant: 'outline' }, props));
});

export const FiltersBold = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarFilters, Object.assign({ ref, variant: 'bold' }, props));
});

export const FiltersBoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarFilters, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

export const Filters = SolarFilters;
export default SolarFilters;
