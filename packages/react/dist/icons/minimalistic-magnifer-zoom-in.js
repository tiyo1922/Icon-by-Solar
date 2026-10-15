import React from 'react';

export const iconName = 'minimalistic-magnifer-zoom-in';
export const category = 'Search';
export const nodes = {"bold": [["path", {"d": "M20.3133 11.1566C20.3133 16.2137 16.2137 20.3133 11.1566 20.3133C6.09956 20.3133 2 16.2137 2 11.1566C2 6.09956 6.09956 2 11.1566 2C16.2137 2 20.3133 6.09956 20.3133 11.1566Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M11.1566 8.0241C11.5559 8.0241 11.8795 8.34775 11.8795 8.74699V10.4337H13.5663C13.9655 10.4337 14.2892 10.7574 14.2892 11.1566C14.2892 11.5559 13.9655 11.8795 13.5663 11.8795H11.8795V13.5663C11.8795 13.9655 11.5559 14.2892 11.1566 14.2892C10.7574 14.2892 10.4337 13.9655 10.4337 13.5663V11.8795H8.74699C8.34775 11.8795 8.0241 11.5559 8.0241 11.1566C8.0241 10.7574 8.34775 10.4337 8.74699 10.4337H10.4337V8.74699C10.4337 8.34775 10.7574 8.0241 11.1566 8.0241Z", "fill": "white"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M18.8382 18.8382C19.1205 18.5559 19.5783 18.5559 19.8606 18.8382L21.7883 20.7659C22.0706 21.0483 22.0706 21.506 21.7883 21.7883C21.506 22.0706 21.0483 22.0706 20.7659 21.7883L18.8382 19.8606C18.5559 19.5783 18.5559 19.1205 18.8382 18.8382Z", "fill": "#1C274C"}]], "bold-duotone": [["g", {"opacity": "0.5"}], ["path", {"d": "M11.1566 20.3133C16.2137 20.3133 20.3133 16.2137 20.3133 11.1566C20.3133 6.09956 16.2137 2 11.1566 2C6.09956 2 2 6.09956 2 11.1566C2 16.2137 6.09956 20.3133 11.1566 20.3133Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M11.1565 8.02344C11.5557 8.02344 11.8793 8.34709 11.8793 8.74633V10.4331H13.5661C13.9653 10.4331 14.289 10.7567 14.289 11.156C14.289 11.5552 13.9653 11.8789 13.5661 11.8789H11.8793V13.5656C11.8793 13.9648 11.5557 14.2885 11.1565 14.2885C10.7572 14.2885 10.4336 13.9648 10.4336 13.5656V11.8789H8.74682C8.34758 11.8789 8.02393 11.5552 8.02393 11.156C8.02393 10.7567 8.34758 10.4331 8.74682 10.4331H10.4336V8.74633C10.4336 8.34709 10.7572 8.02344 11.1565 8.02344Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M18.8387 18.8367C19.121 18.5544 19.5787 18.5544 19.861 18.8367L21.7887 20.7644C22.071 21.0467 22.071 21.5045 21.7887 21.7868C21.5064 22.0691 21.0487 22.0691 20.7664 21.7868L18.8387 19.8591C18.5564 19.5767 18.5564 19.119 18.8387 18.8367Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M11.5 2.75C6.66751 2.75 2.75 6.66751 2.75 11.5C2.75 16.3325 6.66751 20.25 11.5 20.25C16.3325 20.25 20.25 16.3325 20.25 11.5C20.25 6.66751 16.3325 2.75 11.5 2.75ZM1.25 11.5C1.25 5.83908 5.83908 1.25 11.5 1.25C17.1609 1.25 21.75 5.83908 21.75 11.5C21.75 17.1609 17.1609 21.75 11.5 21.75C5.83908 21.75 1.25 17.1609 1.25 11.5ZM11.5 8.25C11.9142 8.25 12.25 8.58579 12.25 9V10.75H14C14.4142 10.75 14.75 11.0858 14.75 11.5C14.75 11.9142 14.4142 12.25 14 12.25H12.25V14C12.25 14.4142 11.9142 14.75 11.5 14.75C11.0858 14.75 10.75 14.4142 10.75 14V12.25H9C8.58579 12.25 8.25 11.9142 8.25 11.5C8.25 11.0858 8.58579 10.75 9 10.75H10.75V9C10.75 8.58579 11.0858 8.25 11.5 8.25ZM19.4697 19.4697C19.7626 19.1768 20.2374 19.1768 20.5303 19.4697L22.5303 21.4697C22.8232 21.7626 22.8232 22.2374 22.5303 22.5303C22.2374 22.8232 21.7626 22.8232 21.4697 22.5303L19.4697 20.5303C19.1768 20.2374 19.1768 19.7626 19.4697 19.4697Z", "fill": "white"}]]};

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

export const SolarMinimalisticMagniferZoomIn = /* @__PURE__ */ React.forwardRef((props, ref) => {
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

SolarMinimalisticMagniferZoomIn.nodes = nodes;
SolarMinimalisticMagniferZoomIn.iconName = iconName;
SolarMinimalisticMagniferZoomIn.category = category;

export const MinimalisticMagniferZoomInOutline = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarMinimalisticMagniferZoomIn, Object.assign({ ref, variant: 'outline' }, props));
});

export const MinimalisticMagniferZoomInBold = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarMinimalisticMagniferZoomIn, Object.assign({ ref, variant: 'bold' }, props));
});

export const MinimalisticMagniferZoomInBoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarMinimalisticMagniferZoomIn, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

export const MinimalisticMagniferZoomIn = SolarMinimalisticMagniferZoomIn;
export default SolarMinimalisticMagniferZoomIn;
