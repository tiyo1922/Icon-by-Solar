import React from 'react';

export const iconName = 'rewind-back-circle';
export const category = 'Video, Audio, Sound';
export const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM10.564 7.46105C10.9011 7.22029 11.3695 7.29836 11.6102 7.63542C11.851 7.97248 11.7729 8.44089 11.4359 8.68165L8.21432 10.9828C7.51639 11.4813 7.51639 12.5186 8.21432 13.0171L11.4359 15.3182C11.7729 15.5589 11.851 16.0274 11.6102 16.3644C11.3695 16.7015 10.9011 16.7795 10.564 16.5388L7.34247 14.2377C5.80701 13.1409 5.80701 10.8589 7.34247 9.76215L10.564 7.46105ZM16.5 15.1318V8.86887C16.5 8.07017 15.6099 7.59378 14.9453 8.03682L10.2481 11.1683C9.65434 11.5641 9.65434 12.4366 10.2481 12.8324L14.9453 15.9639C15.6099 16.4069 16.5 15.9305 16.5 15.1318Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z", "fill": "#1C274C"}], ["path", {"d": "M10.5636 7.46007C10.9006 7.21931 11.369 7.29738 11.6098 7.63444C11.8506 7.9715 11.7725 8.43991 11.4354 8.68067L8.21388 10.9818C7.51594 11.4803 7.51594 12.5176 8.21388 13.0161L11.4354 15.3172C11.7725 15.558 11.8506 16.0264 11.6098 16.3634C11.369 16.7005 10.9006 16.7786 10.5636 16.5378L7.34202 14.2367C5.80656 13.14 5.80656 10.8579 7.34202 9.76118L10.5636 7.46007Z", "fill": "#1C274C"}], ["path", {"d": "M16.4996 15.1309V8.86789C16.4996 8.0692 15.6094 7.59281 14.9449 8.03584L10.2476 11.1673C9.6539 11.5631 9.6539 12.4356 10.2476 12.8314L14.9449 15.9629C15.6094 16.4059 16.4996 15.9296 16.4996 15.1309Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM14.4828 7.51916C15.6411 6.69182 17.25 7.51979 17.25 8.94319V15.0568C17.25 16.4802 15.6411 17.3082 14.4828 16.4808L10.2033 13.424C9.22619 12.7261 9.22619 11.2739 10.2033 10.576L14.4828 7.51916ZM15.75 8.94319C15.75 8.73985 15.5202 8.62157 15.3547 8.73976L11.0752 11.7966C10.9356 11.8963 10.9356 12.1037 11.0752 12.2034L15.3547 15.2602C15.5202 15.3784 15.75 15.2602 15.75 15.0568V8.94319ZM11.6103 7.6355C11.8511 7.97256 11.773 8.44097 11.4359 8.68173L8.21438 10.9828C7.51645 11.4814 7.51645 12.5186 8.21438 13.0172L11.4359 15.3183C11.773 15.559 11.8511 16.0274 11.6103 16.3645C11.3695 16.7016 10.9011 16.7796 10.5641 16.5389L7.34253 14.2378C5.80707 13.141 5.80706 10.859 7.34252 9.76223L10.5641 7.46113C10.9011 7.22037 11.3695 7.29844 11.6103 7.6355Z", "fill": "white"}]]};

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

export const RewindBackCircleOutline = React.forwardRef((props, ref) => {
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

export const RewindBackCircleBold = React.forwardRef((props, ref) => {
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

export const RewindBackCircleBoldDuotone = React.forwardRef((props, ref) => {
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

export const RewindBackCircle = RewindBackCircleOutline;
export default RewindBackCircle;
