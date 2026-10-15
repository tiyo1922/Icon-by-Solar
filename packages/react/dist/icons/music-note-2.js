import React from 'react';

export const iconName = 'music-note-2';
export const category = 'Video, Audio, Sound';
export const nodes = {"bold": [["path", {"d": "M13.75 2C13.75 1.58579 13.4142 1.25 13 1.25C12.5858 1.25 12.25 1.58579 12.25 2V14.5359C11.4003 13.7384 10.2572 13.25 9 13.25C6.37665 13.25 4.25 15.3766 4.25 18C4.25 20.6234 6.37665 22.75 9 22.75C11.6234 22.75 13.75 20.6234 13.75 18V6.243C14.9875 7.77225 16.8795 8.75 19 8.75C19.4142 8.75 19.75 8.41421 19.75 8C19.75 7.58579 19.4142 7.25 19 7.25C16.1005 7.25 13.75 4.8995 13.75 2Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"d": "M9 13.25C6.37665 13.25 4.25 15.3766 4.25 18C4.25 20.6234 6.37665 22.75 9 22.75C11.6234 22.75 13.75 20.6234 13.75 18C13.75 15.3766 11.6234 13.25 9 13.25Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M13 1.25C13.4142 1.25 13.75 1.58579 13.75 2C13.75 4.8995 16.1005 7.25 19 7.25C19.4142 7.25 19.75 7.58579 19.75 8C19.75 8.41421 19.4142 8.75 19 8.75C15.2721 8.75 12.25 5.72792 12.25 2C12.25 1.58579 12.5858 1.25 13 1.25Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M12.25 14.5359V2C12.25 3.60747 12.8119 5.08371 13.75 6.243V18C13.75 16.6339 13.1733 15.4024 12.25 14.5359Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M13.75 2C13.75 4.8995 16.1005 7.25 19 7.25C19.4142 7.25 19.75 7.58579 19.75 8C19.75 8.41421 19.4142 8.75 19 8.75C16.8795 8.75 14.9875 7.77225 13.75 6.243V18C13.75 20.6234 11.6234 22.75 9 22.75C6.37665 22.75 4.25 20.6234 4.25 18C4.25 15.3766 6.37665 13.25 9 13.25C10.2572 13.25 11.4003 13.7384 12.25 14.5359V2H13.75ZM12.25 18C12.25 16.2051 10.7949 14.75 9 14.75C7.20507 14.75 5.75 16.2051 5.75 18C5.75 19.7949 7.20507 21.25 9 21.25C10.7949 21.25 12.25 19.7949 12.25 18Z", "fill": "white"}]]};

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

export const SolarMusicNote2 = /* @__PURE__ */ React.forwardRef((props, ref) => {
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

SolarMusicNote2.nodes = nodes;
SolarMusicNote2.iconName = iconName;
SolarMusicNote2.category = category;

export const MusicNote2Outline = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarMusicNote2, Object.assign({ ref, variant: 'outline' }, props));
});

export const MusicNote2Bold = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarMusicNote2, Object.assign({ ref, variant: 'bold' }, props));
});

export const MusicNote2BoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarMusicNote2, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

export const MusicNote2 = SolarMusicNote2;
export default SolarMusicNote2;
