import React from 'react';

export const iconName = 'outgoing-call-rounded';
export const category = 'Call';
export const nodes = {"bold": [["path", {"d": "M15 9L19 5M16 5H19V8", "stroke": "#1C274C", "strokeWidth": "1.5", "strokeLinecap": "round", "strokeLinejoin": "round"}], ["path", {"d": "M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90533 10.1147 9.8278C10.1147 9.8278 8.99578 10.9467 11.0245 12.9755C13.0532 15.0042 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"d": "M15 9L19 5M16 5H19V8", "stroke": "#1C274C", "strokeWidth": "1.5", "strokeLinecap": "round", "strokeLinejoin": "round"}], ["path", {"opacity": "0.5", "d": "M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90533 10.1147 9.8278C10.1147 9.8278 8.99578 10.9467 11.0245 12.9755C13.0532 15.0042 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M10.6925 4.95112C9.52266 2.855 6.68752 2.72728 5.00745 4.40735C4.10879 5.30601 3.3103 6.50092 3.25706 7.90512C3.17818 9.98605 3.71556 13.4413 7.13735 16.8631C10.5591 20.2849 14.0144 20.8222 16.0953 20.7434C17.4995 20.6901 18.6944 19.8916 19.5931 18.993C21.2731 17.3129 21.1454 14.4778 19.0493 13.3079L17.8864 12.6589C16.5176 11.895 14.7905 12.2205 13.6585 13.3388C13.6381 13.3538 13.5231 13.4327 13.3221 13.4425C13.0656 13.455 12.4729 13.3637 11.5548 12.4456C10.6364 11.5272 10.5454 10.9344 10.5579 10.6781C10.5677 10.4773 10.6467 10.3623 10.6616 10.3419C11.7799 9.20995 12.1054 7.48287 11.3415 6.11405L10.6925 4.95112ZM6.06811 5.46801C7.17394 4.36218 8.78363 4.60877 9.38265 5.68211L10.0317 6.84504C10.4354 7.56846 10.2977 8.5846 9.58435 9.29792C9.51471 9.36757 9.09846 9.8132 9.0597 10.6047C9.02003 11.415 9.38395 12.3961 10.4942 13.5063C11.604 14.6161 12.5847 14.9802 13.395 14.9407C14.1864 14.9022 14.6322 14.4863 14.7023 14.4163C15.4156 13.703 16.432 13.565 17.1554 13.9688L18.3183 14.6178C19.3916 15.2168 19.6382 16.8265 18.5324 17.9323C17.7571 18.7077 16.9013 19.2117 16.0385 19.2444C14.3031 19.3102 11.2774 18.8818 8.19801 15.8024C5.11864 12.723 4.6902 9.69729 4.75599 7.96195C4.7887 7.09917 5.29276 6.24335 6.06811 5.46801Z", "fill": "white"}], ["path", {"d": "M16 4.25045C15.5858 4.25045 15.25 4.58623 15.25 5.00045C15.25 5.41466 15.5858 5.75045 16 5.75045H17.1893L14.4696 8.47012C14.1768 8.76301 14.1768 9.23788 14.4696 9.53078C14.7625 9.82367 15.2374 9.82367 15.5303 9.53078L18.25 6.81111V8.00045C18.25 8.41466 18.5858 8.75045 19 8.75045C19.4142 8.75045 19.75 8.41466 19.75 8.00045V5.00045C19.75 4.58623 19.4142 4.25045 19 4.25045H16Z", "fill": "white"}]]};

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

export const OutgoingCallRoundedOutline = React.forwardRef((props, ref) => {
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

export const OutgoingCallRoundedBold = React.forwardRef((props, ref) => {
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

export const OutgoingCallRoundedBoldDuotone = React.forwardRef((props, ref) => {
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

export const OutgoingCallRounded = OutgoingCallRoundedOutline;
export default OutgoingCallRounded;
