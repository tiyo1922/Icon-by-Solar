import React from 'react';

export const iconName = 'radar';
export const category = 'Map & Location';
export const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM13.3584 6.93033C12.604 6.72817 11.8458 6.70116 11.1255 6.82338C10.7171 6.89267 10.3299 6.61779 10.2606 6.20941C10.1913 5.80103 10.4662 5.41381 10.8745 5.34452C11.8033 5.18693 12.7796 5.22232 13.7466 5.48144C17.3467 6.44608 19.4832 10.1465 18.5186 13.7466C17.5539 17.3467 13.8535 19.4832 10.2534 18.5186C6.65325 17.5539 4.51679 13.8535 5.48144 10.2534C5.67232 9.54098 5.97096 8.8846 6.35561 8.29795C6.80849 7.60723 7.71251 7.56491 8.27405 8.01941L12.4718 11.417C12.7938 11.6776 12.8436 12.1499 12.583 12.4718C12.3224 12.7938 11.8501 12.8436 11.5282 12.583L7.48915 9.31389C7.2486 9.7184 7.0586 10.1629 6.93033 10.6416C6.1801 13.4415 7.84168 16.3194 10.6416 17.0697C13.4415 17.8199 16.3194 16.1583 17.0697 13.3584C17.8199 10.5585 16.1583 7.68056 13.3584 6.93033Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", "fill": "#1C274C"}], ["path", {"d": "M11.1256 6.82338C11.846 6.70116 12.6041 6.72817 13.3586 6.93033C16.1585 7.68056 17.8201 10.5585 17.0699 13.3584C16.3196 16.1583 13.4417 17.8199 10.6418 17.0697C7.84187 16.3194 6.18028 13.4415 6.93051 10.6416C7.05879 10.1629 7.24878 9.7184 7.48934 9.31389L11.5283 12.583C11.8503 12.8436 12.3226 12.7938 12.5832 12.4718C12.8438 12.1499 12.794 11.6776 12.472 11.417L8.27423 8.01941C7.7127 7.56491 6.80868 7.60723 6.3558 8.29795C5.97114 8.8846 5.67251 9.54098 5.48162 10.2534C4.51698 13.8535 6.65344 17.5539 10.2535 18.5186C13.8536 19.4832 17.5541 17.3467 18.5187 13.7466C19.4834 10.1465 17.3469 6.44608 13.7468 5.48144C12.7798 5.22232 11.8035 5.18693 10.8747 5.34452C10.4664 5.41381 10.1915 5.80103 10.2608 6.20941C10.33 6.61779 10.7173 6.89267 11.1256 6.82338Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M14.3941 3.0638C11.9587 2.41124 9.49125 2.7934 7.45537 3.942C7.09461 4.14553 6.63716 4.01807 6.43363 3.65731C6.2301 3.29655 6.35755 2.8391 6.71831 2.63557C9.08232 1.30186 11.9525 0.856671 14.7823 1.61491C20.517 3.15153 23.9203 9.04616 22.3837 14.7809C20.8471 20.5157 14.9524 23.9189 9.21768 22.3823C3.48292 20.8457 0.0796552 14.9511 1.61628 9.21631C1.92054 8.08078 2.39631 7.03536 3.00873 6.10132C3.58273 5.22587 4.74051 5.15806 5.47376 5.75154L12.4718 11.4156C12.7938 11.6762 12.8436 12.1485 12.583 12.4705C12.3224 12.7924 11.8501 12.8422 11.5281 12.5816L4.53007 6.91749C4.47423 6.87229 4.41139 6.85872 4.3615 6.86474C4.31608 6.87023 4.28531 6.88996 4.26313 6.9238C3.73714 7.72602 3.32761 8.6251 3.06517 9.60454C1.74296 14.5391 4.67134 19.6112 9.60591 20.9334C14.5405 22.2556 19.6126 19.3272 20.9348 14.3927C22.257 9.45813 19.3286 4.38601 14.3941 3.0638Z", "fill": "white"}]]};

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

export const SolarRadar = /* @__PURE__ */ React.forwardRef((props, ref) => {
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

SolarRadar.nodes = nodes;
SolarRadar.iconName = iconName;
SolarRadar.category = category;

export const RadarOutline = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarRadar, Object.assign({ ref, variant: 'outline' }, props));
});

export const RadarBold = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarRadar, Object.assign({ ref, variant: 'bold' }, props));
});

export const RadarBoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarRadar, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

export const Radar = SolarRadar;
export default SolarRadar;
