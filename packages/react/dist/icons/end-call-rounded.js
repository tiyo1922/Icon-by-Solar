import React from 'react';

export const iconName = 'end-call-rounded';
export const category = 'Call';
export const nodes = {"bold": [["path", {"d": "M5.6072 16.8973L6.9469 16.5173C8.15591 16.1744 9 14.9826 9 13.6185C9 13.6185 9 11.9639 12 11.9639C15 11.9639 15 13.6185 15 13.6185C15 14.9826 15.8441 16.1744 17.0531 16.5173L18.3928 16.8973C20.2184 17.4151 22 15.9102 22 13.8504C22 12.6127 21.7234 11.373 20.9171 10.5032C19.5598 9.03889 16.8068 7 12 7C7.19322 7 4.44023 9.03888 3.08289 10.5032C2.27659 11.373 2 12.6127 2 13.8504C2 15.9102 3.78158 17.4151 5.6072 16.8973Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M6.9469 16.5182L5.6072 16.8982C3.78158 17.416 2 15.9112 2 13.8514C2 12.6136 2.27659 11.374 3.08289 10.5041C4.1279 9.37677 6.00015 7.90884 9 7.29297V13.6194C9 14.9835 8.15591 16.1753 6.9469 16.5182ZM15 13.6194C15 14.9835 15.8441 16.1753 17.0531 16.5182L18.3928 16.8982C20.2184 17.416 22 15.9112 22 13.8514C22 12.6136 21.7234 11.374 20.9171 10.5041C19.8721 9.37677 17.9998 7.90884 15 7.29297V13.6194Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M9 13.6185C9 13.6185 9 11.9639 12 11.9639C15 11.9639 15 13.6185 15 13.6185V7.29203C14.1034 7.10796 13.1061 7 12 7C10.8939 7 9.8966 7.10796 9 7.29203V13.6185Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 7.75C7.43534 7.75 4.87272 9.67556 3.63293 11.0131C3.01079 11.6842 2.75 12.6999 2.75 13.8504C2.75 15.5042 4.14034 16.5337 5.40255 16.1757L6.74225 15.7957C7.59203 15.5547 8.25 14.6868 8.25 13.6185C8.25 13.5201 8.27072 12.8926 8.81935 12.2875C9.38063 11.6683 10.3644 11.2139 12 11.2139C13.6356 11.2139 14.6193 11.6683 15.1806 12.2874C15.7293 12.8926 15.75 13.52 15.75 13.6185V13.6185C15.75 14.6868 16.408 15.5547 17.2577 15.7958L18.5974 16.1757C19.8597 16.5337 21.25 15.5042 21.25 13.8504C21.25 12.6999 20.9892 11.6842 20.3671 11.0131C19.1273 9.67556 16.5647 7.75 12 7.75ZM2.53285 9.99333C4.00774 8.40221 6.95109 6.25 12 6.25C17.0489 6.25 19.9923 8.40221 21.4672 9.99334C22.4576 11.0619 22.75 12.5255 22.75 13.8504C22.75 16.3163 20.5772 18.2964 18.1882 17.6188L16.8484 17.2388C15.2871 16.796 14.2591 15.2918 14.2501 13.6405C14.2463 13.6147 14.22 13.461 14.0693 13.2949C13.8806 13.0867 13.3644 12.7139 12 12.7139C10.6356 12.7139 10.1194 13.0867 9.93066 13.2949C9.78005 13.4611 9.75367 13.6147 9.74994 13.6405C9.74089 15.2918 8.71288 16.796 7.15155 17.2388L5.81185 17.6188C3.42281 18.2964 1.25 16.3163 1.25 13.8504C1.25 12.5255 1.54238 11.0619 2.53285 9.99333Z", "fill": "white"}]]};

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

export const EndCallRoundedOutline = React.forwardRef((props, ref) => {
  const { size = 24, color = 'currentColor', secondaryColor, secondaryOpacity, className, style, title, ...rest } = props;
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
  }, title && React.createElement('title', null, title), ...renderNodes(nodes['outline'] || [], color, secondaryColor, secondaryOpacity));
});

export const EndCallRoundedBold = React.forwardRef((props, ref) => {
  const { size = 24, color = 'currentColor', secondaryColor, secondaryOpacity, className, style, title, ...rest } = props;
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
  }, title && React.createElement('title', null, title), ...renderNodes(nodes['bold'] || [], color, secondaryColor, secondaryOpacity));
});

export const EndCallRoundedBoldDuotone = React.forwardRef((props, ref) => {
  const { size = 24, color = 'currentColor', secondaryColor, secondaryOpacity, className, style, title, ...rest } = props;
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
  }, title && React.createElement('title', null, title), ...renderNodes(nodes['bold-duotone'] || [], color, secondaryColor, secondaryOpacity));
});

export const EndCallRounded = EndCallRoundedOutline;
export default EndCallRounded;
