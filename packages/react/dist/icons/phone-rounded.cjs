const React = require('react');

const iconName = 'phone-rounded';
const category = 'Call';
const nodes = {"bold": [["path", {"d": "M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90533 10.1147 9.8278C10.1147 9.8278 8.99578 10.9467 11.0245 12.9755C13.0532 15.0042 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M10.6866 6.4791L10.0376 5.31617C9.15317 3.73144 6.93076 3.54428 5.53781 4.93723C4.7008 5.77423 4.04952 6.7996 4.00655 7.93309C3.95086 9.40215 4.22428 11.6609 5.83644 14.1061L10.1147 9.8278C11.0372 8.90533 11.2723 7.52858 10.6866 6.4791ZM14.1722 13.8853L9.89393 18.1636C12.3391 19.7757 14.5979 20.0491 16.0669 19.9934C17.2004 19.9505 18.2258 19.2992 19.0628 18.4622C20.4557 17.0692 20.2686 14.8468 18.6838 13.9624L17.5209 13.3134C16.4714 12.7277 15.0947 12.9628 14.1722 13.8853Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M11.0245 12.9758C8.99576 10.9471 10.1147 9.82812 10.1147 9.82812L5.83643 14.1064C6.31827 14.8372 6.91971 15.5846 7.66769 16.3326C8.41567 17.0806 9.16311 17.682 9.89392 18.1639L14.1722 13.8856C14.1722 13.8856 13.0532 15.0045 11.0245 12.9758Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M6.00745 3.40735C7.68752 1.72728 10.5227 1.855 11.6925 3.95112L12.3415 5.11405C13.1054 6.48287 12.7799 8.20995 11.6616 9.34192C11.6467 9.36232 11.5677 9.47726 11.5579 9.67807C11.5454 9.93439 11.6364 10.5272 12.5548 11.4456C13.4729 12.3637 14.0656 12.455 14.3221 12.4425C14.5231 12.4327 14.6381 12.3538 14.6585 12.3388C15.7905 11.2205 17.5176 10.895 18.8864 11.6589L20.0493 12.3079C22.1454 13.4778 22.2731 16.3129 20.5931 17.993C19.6944 18.8916 18.4995 19.6901 17.0953 19.7434C15.0144 19.8222 11.5591 19.2849 8.13735 15.8631C4.71556 12.4413 4.17818 8.98605 4.25706 6.90512C4.3103 5.50092 5.10879 4.30601 6.00745 3.40735ZM10.3827 4.68211C9.78363 3.60877 8.17394 3.36218 7.06811 4.46801C6.29276 5.24335 5.7887 6.09917 5.75599 6.96195C5.6902 8.69729 6.11864 11.723 9.19801 14.8024C12.2774 17.8818 15.3031 18.3102 17.0385 18.2444C17.9013 18.2117 18.7571 17.7077 19.5324 16.9323C20.6382 15.8265 20.3916 14.2168 19.3183 13.6178L18.1554 12.9688C17.432 12.565 16.4158 12.7027 15.7025 13.416L15.7023 13.4163C15.6322 13.4863 15.1864 13.9022 14.395 13.9407C13.5847 13.9802 12.604 13.6161 11.4942 12.5063C10.384 11.3961 10.02 10.415 10.0597 9.60472C10.0985 8.8132 10.5147 8.3676 10.5843 8.29795L10.5844 8.29792C11.2977 7.5846 11.4354 6.56846 11.0317 5.84504L10.3827 4.68211Z", "fill": "white"}]]};

function renderNodes(variantNodes, color = 'currentColor', secondaryColor, secondaryOpacity) {
  return variantNodes.map(([tag, attrs], index) => {
    const computed = Object.assign({}, attrs);
    if (color !== 'original' && color !== 'source') {
      if ('opacity' in attrs) {
        computed.opacity = secondaryOpacity !== undefined ? secondaryOpacity : attrs.opacity;
        computed.fill = secondaryColor || color;
      } else if (attrs.fill && attrs.fill !== 'none' && attrs.fill !== 'transparent') {
        const isWhite = attrs.fill === 'white' || attrs.fill === '#FEFEFF' || attrs.fill === '#FBFCFF';
        if (!isWhite || variantNodes.length === 1) computed.fill = color;
      }
      if (attrs.stroke && attrs.stroke !== 'none') computed.stroke = color;
    }
    return React.createElement(tag, Object.assign({ key: index }, computed));
  });
}

const PhoneRoundedOutline = React.forwardRef((props, ref) => {
  const { size = 24, color = 'currentColor', secondaryColor, secondaryOpacity, className, style, title, ...rest } = props;
  return React.createElement('svg', Object.assign({
    ref,
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className,
    style: Object.assign({ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }, style),
    'aria-hidden': title ? undefined : 'true',
    role: title ? 'img' : 'presentation'
  }, rest), title && React.createElement('title', null, title), ...renderNodes(nodes['outline'] || [], color, secondaryColor, secondaryOpacity));
});

const PhoneRoundedBold = React.forwardRef((props, ref) => {
  const { size = 24, color = 'currentColor', secondaryColor, secondaryOpacity, className, style, title, ...rest } = props;
  return React.createElement('svg', Object.assign({
    ref,
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className,
    style: Object.assign({ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }, style),
    'aria-hidden': title ? undefined : 'true',
    role: title ? 'img' : 'presentation'
  }, rest), title && React.createElement('title', null, title), ...renderNodes(nodes['bold'] || [], color, secondaryColor, secondaryOpacity));
});

const PhoneRoundedBoldDuotone = React.forwardRef((props, ref) => {
  const { size = 24, color = 'currentColor', secondaryColor, secondaryOpacity, className, style, title, ...rest } = props;
  return React.createElement('svg', Object.assign({
    ref,
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className,
    style: Object.assign({ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }, style),
    'aria-hidden': title ? undefined : 'true',
    role: title ? 'img' : 'presentation'
  }, rest), title && React.createElement('title', null, title), ...renderNodes(nodes['bold-duotone'] || [], color, secondaryColor, secondaryOpacity));
});

const PhoneRounded = PhoneRoundedOutline;

module.exports = {
  iconName,
  category,
  nodes,
  PhoneRounded,
  PhoneRoundedOutline,
  PhoneRoundedBold,
  PhoneRoundedBoldDuotone,
  default: PhoneRounded
};
