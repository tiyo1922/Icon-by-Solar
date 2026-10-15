import React from 'react';

export const iconName = 'vinyl';
export const category = 'Video, Audio, Sound';
export const nodes = {"bold": [["path", {"d": "M11.6311 10.4879C12.67 10.4879 13.5122 11.3301 13.5122 12.3689C13.5122 13.4078 12.67 14.25 11.6311 14.25C10.5922 14.25 9.75 13.4078 9.75 12.3689C9.75 11.3301 10.5922 10.4879 11.6311 10.4879Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM14.487 3.28447C14.2592 3.21292 14.0109 3.25412 13.8184 3.39542C13.6259 3.53672 13.5122 3.76123 13.5122 4.00001V9.55906C12.9744 9.19832 12.3274 8.98789 11.6311 8.98789C9.76379 8.98789 8.25 10.5016 8.25 12.3689C8.25 14.2363 9.76379 15.75 11.6311 15.75C13.4984 15.75 15.0122 14.2363 15.0122 12.3689V5.0937C17.0389 6.03733 18.6064 7.80369 19.2845 9.96238C19.4086 10.3576 19.8296 10.5773 20.2247 10.4532C20.6199 10.3291 20.8397 9.90808 20.7155 9.5129C19.7853 6.55129 17.4486 4.21465 14.487 3.28447Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M13.8184 3.39542C14.0109 3.25412 14.2592 3.21292 14.487 3.28447C17.4486 4.21465 19.7853 6.55129 20.7155 9.5129C20.8397 9.90808 20.6199 10.3291 20.2247 10.4532C19.8296 10.5773 19.4086 10.3576 19.2845 9.96238C18.6064 7.80369 17.0389 6.03733 15.0122 5.0937V12.3689C15.0122 14.2363 13.4984 15.75 11.6311 15.75C9.76379 15.75 8.25 14.2363 8.25 12.3689C8.25 10.5016 9.76379 8.98789 11.6311 8.98789C12.3274 8.98789 12.9744 9.19832 13.5122 9.55906V4.00001C13.5122 3.76123 13.6259 3.53672 13.8184 3.39542Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M11.7463 1.97674C11.7873 2.38892 11.4863 2.75624 11.0741 2.79717C6.40058 3.26118 2.75 7.20547 2.75 12.0015C2.75 17.1101 6.89137 21.2515 12 21.2515C16.796 21.2515 20.7403 17.6009 21.2043 12.9274C21.2452 12.5152 21.6125 12.2142 22.0247 12.2551C22.4369 12.2961 22.7379 12.6634 22.697 13.0756C22.1575 18.5087 17.5747 22.7515 12 22.7515C6.06294 22.7515 1.25 17.9385 1.25 12.0015C1.25 6.42676 5.49278 1.84394 10.9259 1.30451C11.3381 1.26358 11.7054 1.56455 11.7463 1.97674ZM14.5562 1.85439C14.7487 1.71309 14.9969 1.67189 15.2247 1.74344C18.5688 2.79376 21.2074 5.43236 22.2577 8.77644C22.3819 9.17162 22.1621 9.5926 21.7669 9.71672C21.3718 9.84084 20.9508 9.6211 20.8267 9.22592C20.0281 6.68329 18.1597 4.61276 15.75 3.54269V12.0015C15.75 14.0725 14.0711 15.7515 12 15.7515C9.92893 15.7515 8.25 14.0725 8.25 12.0015C8.25 9.93039 9.92893 8.25146 12 8.25146C12.8442 8.25146 13.6233 8.53042 14.25 9.00119V2.45898C14.25 2.2202 14.3637 1.99569 14.5562 1.85439ZM14.25 12.0015C14.25 10.7588 13.2426 9.75146 12 9.75146C10.7574 9.75146 9.75 10.7588 9.75 12.0015C9.75 13.2441 10.7574 14.2515 12 14.2515C13.2426 14.2515 14.25 13.2441 14.25 12.0015Z", "fill": "white"}]]};

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

export const SolarVinyl = /* @__PURE__ */ React.forwardRef((props, ref) => {
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

SolarVinyl.nodes = nodes;
SolarVinyl.iconName = iconName;
SolarVinyl.category = category;

export const VinylOutline = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarVinyl, Object.assign({ ref, variant: 'outline' }, props));
});

export const VinylBold = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarVinyl, Object.assign({ ref, variant: 'bold' }, props));
});

export const VinylBoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarVinyl, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

export const Vinyl = SolarVinyl;
export default SolarVinyl;
