const React = require('react');

const iconName = 'power';
const category = 'Essentional, UI';
const nodes = {"bold": [["path", {"d": "M12 2V6", "stroke": "#1C274C", "strokeWidth": "1.5", "strokeLinecap": "round"}], ["path", {"d": "M12.75 2.75C12.75 2.33579 12.4142 2 12 2C11.5858 2 11.25 2.33579 11.25 2.75V6.75C11.25 7.16421 11.5858 7.5 12 7.5C12.4142 7.5 12.75 7.16421 12.75 6.75V2.75Z", "fill": "#1C274C"}], ["path", {"d": "M8.7919 5.14692C9.17345 4.98571 9.35208 4.54571 9.19087 4.16416C9.02966 3.7826 8.58966 3.60398 8.2081 3.76519C4.70832 5.24386 2.25 8.70905 2.25 12.7501C2.25 18.1349 6.61522 22.5001 12 22.5001C17.3848 22.5001 21.75 18.1349 21.75 12.7501C21.75 8.70905 19.2917 5.24386 15.7919 3.76519C15.4103 3.60398 14.9703 3.7826 14.8091 4.16416C14.6479 4.54571 14.8265 4.98571 15.2081 5.14692C18.1722 6.39927 20.25 9.33293 20.25 12.7501C20.25 17.3065 16.5563 21.0001 12 21.0001C7.44365 21.0001 3.75 17.3065 3.75 12.7501C3.75 9.33293 5.82779 6.39927 8.7919 5.14692Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M8.7919 5.14809C9.17345 4.98688 9.35208 4.54689 9.19087 4.16533C9.02966 3.78377 8.58966 3.60515 8.2081 3.76636C4.70832 5.24504 2.25 8.71022 2.25 12.7513C2.25 18.1361 6.61522 22.5013 12 22.5013C17.3848 22.5013 21.75 18.1361 21.75 12.7513C21.75 8.71022 19.2917 5.24504 15.7919 3.76636C15.4103 3.60515 14.9703 3.78377 14.8091 4.16533C14.6479 4.54689 14.8265 4.98688 15.2081 5.14809C18.1722 6.40044 20.25 9.3341 20.25 12.7513C20.25 17.3077 16.5563 21.0013 12 21.0013C7.44365 21.0013 3.75 17.3077 3.75 12.7513C3.75 9.3341 5.82779 6.40044 8.7919 5.14809Z", "fill": "#1C274C"}], ["path", {"d": "M12.75 2.75C12.75 2.33579 12.4142 2 12 2C11.5858 2 11.25 2.33579 11.25 2.75V6.75C11.25 7.16421 11.5858 7.5 12 7.5C12.4142 7.5 12.75 7.16421 12.75 6.75V2.75Z", "fill": "#1C274C"}]], "outline": [["path", {"d": "M12.75 2C12.75 1.58579 12.4142 1.25 12 1.25C11.5858 1.25 11.25 1.58579 11.25 2V6C11.25 6.41421 11.5858 6.75 12 6.75C12.4142 6.75 12.75 6.41421 12.75 6V2Z", "fill": "white"}], ["path", {"d": "M8.7919 4.39678C9.17345 4.23557 9.35208 3.79557 9.19087 3.41402C9.02966 3.03246 8.58966 2.85384 8.2081 3.01505C4.70832 4.49372 2.25 7.95891 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 7.95891 19.2917 4.49372 15.7919 3.01505C15.4103 2.85384 14.9703 3.03246 14.8091 3.41402C14.6479 3.79557 14.8265 4.23557 15.2081 4.39678C18.1722 5.64913 20.25 8.58279 20.25 12C20.25 16.5564 16.5563 20.25 12 20.25C7.44365 20.25 3.75 16.5564 3.75 12C3.75 8.58279 5.82779 5.64913 8.7919 4.39678Z", "fill": "white"}]]};

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

const PowerOutline = React.forwardRef((props, ref) => {
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

const PowerBold = React.forwardRef((props, ref) => {
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

const PowerBoldDuotone = React.forwardRef((props, ref) => {
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

const Power = PowerOutline;

module.exports = {
  iconName,
  category,
  nodes,
  Power,
  PowerOutline,
  PowerBold,
  PowerBoldDuotone,
  default: Power
};
