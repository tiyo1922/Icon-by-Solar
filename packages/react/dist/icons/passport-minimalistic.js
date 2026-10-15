import React from 'react';

export const iconName = 'passport-minimalistic';
export const category = 'School';
export const nodes = {"bold": [["path", {"d": "M5 4.99902C5 4.59237 4.75727 4.24241 4.40879 4.08612C4.55271 3.97276 4.72712 3.89517 4.91959 3.86767L15.7172 2.32516C16.922 2.15304 18 3.08796 18 4.30506V5.12504C17.6804 5.04278 17.3453 4.99902 17 4.99902H5Z", "fill": "#1C274C"}], ["path", {"d": "M9.75 13.999C9.75 12.7564 10.7574 11.749 12 11.749C13.2426 11.749 14.25 12.7564 14.25 13.999C14.25 15.2417 13.2426 16.249 12 16.249C10.7574 16.249 9.75 15.2417 9.75 13.999Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M18 6.16973C19.1652 6.58157 20 7.6928 20 8.99902V18.999C20 20.6559 18.6569 21.999 17 21.999H7C5.34315 21.999 4 20.6559 4 18.999V4.99902C4 5.18117 4.0487 5.35194 4.13378 5.49902C4.30669 5.79792 4.62986 5.99902 5 5.99902H17C17.3506 5.99902 17.6872 6.05918 18 6.16973ZM12 10.249C9.92893 10.249 8.25 11.928 8.25 13.999C8.25 16.0701 9.92893 17.749 12 17.749C14.0711 17.749 15.75 16.0701 15.75 13.999C15.75 11.928 14.0711 10.249 12 10.249Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"d": "M12 10.751C10.7574 10.751 9.75 11.7583 9.75 13.001C9.75 14.2436 10.7574 15.251 12 15.251C13.2426 15.251 14.25 14.2436 14.25 13.001C14.25 11.7583 13.2426 10.751 12 10.751Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M4 4.69531V18.6953C4 20.3522 5.34315 21.6953 7 21.6953H17C18.6569 21.6953 20 20.3522 20 18.6953V8.69531C20 7.03846 18.6569 5.69531 17 5.69531H5C4.44772 5.69531 4 5.2476 4 4.69531ZM12 9.25098C9.92893 9.25098 8.25 10.9299 8.25 13.001C8.25 15.072 9.92893 16.751 12 16.751C14.0711 16.751 15.75 15.072 15.75 13.001C15.75 10.9299 14.0711 9.25098 12 9.25098Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M18 4.00038V5.86504C17.6872 5.75449 17.3506 5.69434 17 5.69434H5C4.44772 5.69434 4 5.24662 4 4.69434V4.62329C4 4.09027 4.39193 3.63837 4.91959 3.56299L15.7172 2.02048C16.922 1.84835 18 2.78328 18 4.00038Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M8.25 13.9992C8.25 11.9281 9.92893 10.2492 12 10.2492C14.0711 10.2492 15.75 11.9281 15.75 13.9992C15.75 16.0702 14.0711 17.7492 12 17.7492C9.92893 17.7492 8.25 16.0702 8.25 13.9992ZM12 11.7492C10.7574 11.7492 9.75 12.7565 9.75 13.9992C9.75 15.2418 10.7574 16.2492 12 16.2492C13.2426 16.2492 14.25 15.2418 14.25 13.9992C14.25 12.7565 13.2426 11.7492 12 11.7492Z", "fill": "white"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M18.75 4.3052C18.75 2.63169 17.2678 1.34617 15.6111 1.58284L4.81353 3.12535C3.91638 3.25352 3.25 4.02186 3.25 4.92812C3.25 4.95191 3.25046 4.97559 3.25136 4.99916H3.25V18.9992C3.25 21.0702 4.92893 22.7492 7 22.7492H17C19.0711 22.7492 20.75 21.0702 20.75 18.9992V8.99916C20.75 7.56014 19.9395 6.31043 18.75 5.68169V4.3052ZM5.06244 6.74916C5.06531 6.74918 5.06819 6.74918 5.07107 6.74918H17.0096C18.2478 6.75435 19.25 7.75972 19.25 8.99916V18.9992C19.25 20.2418 18.2426 21.2492 17 21.2492H7C5.75736 21.2492 4.75 20.2418 4.75 18.9992V6.74916H5.06244ZM17.0125 5.24918H17.25V4.3052C17.25 3.54452 16.5763 2.96019 15.8232 3.06777L5.02566 4.61028C4.86749 4.63287 4.75 4.76834 4.75 4.92812C4.75 5.10421 4.89177 5.2472 5.0674 5.24916H17C17.0042 5.24916 17.0084 5.24917 17.0125 5.24918Z", "fill": "white"}]]};

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

export const SolarPassportMinimalistic = /* @__PURE__ */ React.forwardRef((props, ref) => {
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

SolarPassportMinimalistic.nodes = nodes;
SolarPassportMinimalistic.iconName = iconName;
SolarPassportMinimalistic.category = category;

export const PassportMinimalisticOutline = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarPassportMinimalistic, Object.assign({ ref, variant: 'outline' }, props));
});

export const PassportMinimalisticBold = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarPassportMinimalistic, Object.assign({ ref, variant: 'bold' }, props));
});

export const PassportMinimalisticBoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarPassportMinimalistic, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

export const PassportMinimalistic = SolarPassportMinimalistic;
export default SolarPassportMinimalistic;
