import React from 'react';

export const iconName = 'health';
export const category = 'Medicine';
export const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M8.96173 18.4687C6.01943 16.2137 2 12.4886 2 8.96653C2 3.08262 7.50016 0.885859 12 5.43111C16.4998 0.885859 22 3.08262 22 8.9665C22 12.4887 17.9806 16.2137 15.0383 18.4687C13.7063 19.4896 13.0403 20 12 20C10.9597 20 10.2937 19.4896 8.96173 18.4687ZM16.5 6.25C16.9142 6.25 17.25 6.58579 17.25 7V8.25002H18.5C18.9142 8.25002 19.25 8.5858 19.25 9.00002C19.25 9.41423 18.9142 9.75002 18.5 9.75002H17.25V11C17.25 11.4142 16.9142 11.75 16.5 11.75C16.0858 11.75 15.75 11.4142 15.75 11V9.75002L14.5 9.75002C14.0858 9.75002 13.75 9.41423 13.75 9.00002C13.75 8.5858 14.0858 8.25002 14.5 8.25002H15.75V7C15.75 6.58579 16.0858 6.25 16.5 6.25Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M2 9.3175C2 13.0468 6.01943 16.991 8.96173 19.3786C10.2937 20.4595 10.9597 21 12 21C13.0403 21 13.7063 20.4596 15.0383 19.3787C17.9806 16.991 22 13.0468 22 9.31747C22 3.08748 16.4998 0.761498 12 5.57412C7.50016 0.761498 2 3.08748 2 9.3175Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M16.5 6.25C16.9142 6.25 17.25 6.58579 17.25 7L17.25 8.25002H18.5C18.9142 8.25002 19.25 8.5858 19.25 9.00002C19.25 9.41423 18.9142 9.75002 18.5 9.75002H17.25V11C17.25 11.4142 16.9142 11.75 16.5 11.75C16.0858 11.75 15.75 11.4142 15.75 11L15.75 9.75002L14.5 9.75002C14.0858 9.75002 13.75 9.41423 13.75 9.00002C13.75 8.5858 14.0858 8.25002 14.5 8.25002H15.75L15.75 7C15.75 6.58579 16.0858 6.25 16.5 6.25Z", "fill": "#1C274C"}]], "outline": [["path", {"d": "M17.25 6.99968C17.25 6.58546 16.9142 6.24968 16.5 6.24968C16.0858 6.24968 15.75 6.58546 15.75 6.99968V8.2497H14.5C14.0858 8.2497 13.75 8.58548 13.75 8.9997C13.75 9.41391 14.0858 9.7497 14.5 9.7497L15.75 9.74969V10.9997C15.75 11.4139 16.0858 11.7497 16.5 11.7497C16.9142 11.7497 17.25 11.4139 17.25 10.9997V9.74969H18.5C18.9142 9.74969 19.25 9.41391 19.25 8.99969C19.25 8.58548 18.9142 8.24969 18.5 8.24969H17.25V6.99968Z", "fill": "white"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M22.75 9.31715C22.75 5.99175 21.2676 3.50934 18.9609 2.60612C16.8252 1.76986 14.2618 2.39555 12 4.51285C9.73815 2.39555 7.17479 1.76986 5.0391 2.60613C2.73242 3.50935 1.25 5.99177 1.25 9.31718C1.25 11.4351 2.38041 13.5193 3.78729 15.3136C5.20863 17.1264 6.99671 18.7496 8.48914 19.9607L8.62327 20.0696C9.82386 21.0453 10.6906 21.7497 12 21.7497C13.3094 21.7497 14.1762 21.0453 15.3767 20.0697L15.5109 19.9607C17.0033 18.7496 18.7914 17.1264 20.2127 15.3136C21.6196 13.5193 22.75 11.4351 22.75 9.31715ZM12.5478 6.08603C14.6596 3.82746 16.8491 3.3901 18.414 4.00286C19.9823 4.61698 21.25 6.41255 21.25 9.31715C21.25 10.9286 20.3707 12.6811 19.0323 14.3881C17.7084 16.0767 16.0156 17.6194 14.5657 18.796C13.1731 19.926 12.7229 20.2497 12 20.2497C11.2771 20.2497 10.8269 19.926 9.43432 18.7959C7.98445 17.6194 6.29166 16.0766 4.96771 14.3881C3.62931 12.6811 2.75 10.9286 2.75 9.31718C2.75 6.41257 4.01766 4.61699 5.58602 4.00287C7.15092 3.3901 9.34039 3.82746 11.4522 6.08603C11.594 6.23771 11.7923 6.3238 12 6.3238C12.2077 6.3238 12.406 6.23771 12.5478 6.08603Z", "fill": "white"}]]};

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

export const SolarHealth = /* @__PURE__ */ React.forwardRef((props, ref) => {
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

SolarHealth.nodes = nodes;
SolarHealth.iconName = iconName;
SolarHealth.category = category;

export const HealthOutline = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarHealth, Object.assign({ ref, variant: 'outline' }, props));
});

export const HealthBold = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarHealth, Object.assign({ ref, variant: 'bold' }, props));
});

export const HealthBoldDuotone = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return React.createElement(SolarHealth, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

export const Health = SolarHealth;
export default SolarHealth;
