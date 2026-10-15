const React = require('react');

const iconName = 'siren-rounded';
const category = 'Security';
const nodes = {"bold": [["path", {"d": "M12.75 2C12.75 1.58579 12.4142 1.25 12 1.25C11.5858 1.25 11.25 1.58579 11.25 2V5C11.25 5.41421 11.5858 5.75 12 5.75C12.4142 5.75 12.75 5.41421 12.75 5V2Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M2 21.25H4V16C4 11.5817 7.58172 8 12 8C16.4183 8 20 11.5817 20 16V21.25H22C22.4142 21.25 22.75 21.5858 22.75 22C22.75 22.4142 22.4142 22.75 22 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22C1.25 21.5858 1.58579 21.25 2 21.25ZM12.75 18.7993C13.1984 18.54 13.5 18.0552 13.5 17.5C13.5 16.6716 12.8284 16 12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.0552 10.8016 18.54 11.25 18.7993V21.25H12.75V18.7993ZM13.5953 11.2186C13.7507 10.8346 14.188 10.6494 14.5719 10.8048C15.7629 11.2869 16.7129 12.2369 17.195 13.4278C17.3504 13.8118 17.1651 14.249 16.7812 14.4044C16.3972 14.5599 15.96 14.3746 15.8046 13.9907C15.4749 13.1762 14.8235 12.5249 14.0091 12.1952C13.6252 12.0398 13.4399 11.6025 13.5953 11.2186Z", "fill": "#1C274C"}], ["path", {"d": "M21.5303 5.46967C21.8232 5.76256 21.8232 6.23744 21.5303 6.53033L20.0303 8.03033C19.7374 8.32322 19.2626 8.32322 18.9697 8.03033C18.6768 7.73744 18.6768 7.26256 18.9697 6.96967L20.4697 5.46967C20.7626 5.17678 21.2374 5.17678 21.5303 5.46967Z", "fill": "#1C274C"}], ["path", {"d": "M3.53033 5.46967C3.23744 5.17678 2.76256 5.17678 2.46967 5.46967C2.17678 5.76256 2.17678 6.23744 2.46967 6.53033L3.96967 8.03033C4.26256 8.32322 4.73744 8.32322 5.03033 8.03033C5.32322 7.73744 5.32322 7.26256 5.03033 6.96967L3.53033 5.46967Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M4 16V21.25H20V16C20 11.5817 16.4183 8 12 8C7.58172 8 4 11.5817 4 16Z", "fill": "#1C274C"}], ["path", {"d": "M12.75 2C12.75 1.58579 12.4142 1.25 12 1.25C11.5858 1.25 11.25 1.58579 11.25 2V5C11.25 5.41421 11.5858 5.75 12 5.75C12.4142 5.75 12.75 5.41421 12.75 5V2Z", "fill": "#1C274C"}], ["path", {"d": "M21.5303 5.46967C21.8232 5.76256 21.8232 6.23744 21.5303 6.53033L20.0303 8.03033C19.7374 8.32322 19.2626 8.32322 18.9697 8.03033C18.6768 7.73744 18.6768 7.26256 18.9697 6.96967L20.4697 5.46967C20.7626 5.17678 21.2374 5.17678 21.5303 5.46967Z", "fill": "#1C274C"}], ["path", {"d": "M3.53033 5.46967C3.23744 5.17678 2.76256 5.17678 2.46967 5.46967C2.17678 5.76256 2.17678 6.23744 2.46967 6.53033L3.96967 8.03033C4.26256 8.32322 4.73744 8.32322 5.03033 8.03033C5.32322 7.73744 5.32322 7.26256 5.03033 6.96967L3.53033 5.46967Z", "fill": "#1C274C"}], ["path", {"d": "M14.5716 10.805C14.1877 10.6496 13.7505 10.8348 13.595 11.2188C13.4396 11.6027 13.6249 12.04 14.0088 12.1954C14.8233 12.5251 15.4746 13.1764 15.8043 13.9909C15.9597 14.3748 16.3969 14.5601 16.7809 14.4046C17.1648 14.2492 17.3501 13.812 17.1947 13.428C16.7126 12.2371 15.7626 11.2871 14.5716 10.805Z", "fill": "#1C274C"}], ["path", {"d": "M12.75 18.7993C13.1984 18.54 13.5 18.0552 13.5 17.5C13.5 16.6716 12.8284 16 12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.0552 10.8016 18.54 11.25 18.7993V21.25H12.75V18.7993Z", "fill": "#1C274C"}], ["path", {"d": "M4 21.25H2C1.58579 21.25 1.25 21.5858 1.25 22C1.25 22.4142 1.58579 22.75 2 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22C22.75 21.5858 22.4142 21.25 22 21.25H20H12.75H11.25H4Z", "fill": "#1C274C"}]], "outline": [["path", {"d": "M12.75 2C12.75 1.58579 12.4142 1.25 12 1.25C11.5858 1.25 11.25 1.58579 11.25 2V5C11.25 5.41421 11.5858 5.75 12 5.75C12.4142 5.75 12.75 5.41421 12.75 5V2Z", "fill": "white"}], ["path", {"d": "M14.5719 10.8048C14.188 10.6494 13.7507 10.8346 13.5953 11.2186C13.4399 11.6025 13.6252 12.0398 14.0091 12.1952C14.8235 12.5249 15.4749 13.1762 15.8046 13.9907C15.96 14.3746 16.3972 14.5599 16.7812 14.4044C17.1651 14.249 17.3504 13.8118 17.195 13.4278C16.7129 12.2369 15.7629 11.2869 14.5719 10.8048Z", "fill": "white"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 7.25C7.16751 7.25 3.25 11.1675 3.25 16V21.25H2C1.58579 21.25 1.25 21.5858 1.25 22C1.25 22.4142 1.58579 22.75 2 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22C22.75 21.5858 22.4142 21.25 22 21.25H20.75V16C20.75 11.1675 16.8325 7.25 12 7.25ZM12.75 21.25H19.25V16C19.25 11.9959 16.0041 8.75 12 8.75C7.99594 8.75 4.75 11.9959 4.75 16V21.25H11.25V19.622C10.3761 19.3131 9.75 18.4797 9.75 17.5C9.75 16.2574 10.7574 15.25 12 15.25C13.2426 15.25 14.25 16.2574 14.25 17.5C14.25 18.4797 13.6239 19.3131 12.75 19.622V21.25ZM12 18.25C12.4142 18.25 12.75 17.9142 12.75 17.5C12.75 17.0858 12.4142 16.75 12 16.75C11.5858 16.75 11.25 17.0858 11.25 17.5C11.25 17.9142 11.5858 18.25 12 18.25Z", "fill": "white"}], ["path", {"d": "M21.5303 5.46967C21.8232 5.76256 21.8232 6.23744 21.5303 6.53033L20.0303 8.03033C19.7374 8.32322 19.2626 8.32322 18.9697 8.03033C18.6768 7.73744 18.6768 7.26256 18.9697 6.96967L20.4697 5.46967C20.7626 5.17678 21.2374 5.17678 21.5303 5.46967Z", "fill": "white"}], ["path", {"d": "M3.53033 5.46967C3.23744 5.17678 2.76256 5.17678 2.46967 5.46967C2.17678 5.76256 2.17678 6.23744 2.46967 6.53033L3.96967 8.03033C4.26256 8.32322 4.73744 8.32322 5.03033 8.03033C5.32322 7.73744 5.32322 7.26256 5.03033 6.96967L3.53033 5.46967Z", "fill": "white"}]]};

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

const SolarSirenRounded = React.forwardRef((props, ref) => {
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
  }, rest), title && React.createElement('title', null, title), ...renderNodes(variantNodes, color, secondaryColor, secondaryOpacity));
});

SolarSirenRounded.nodes = nodes;
SolarSirenRounded.iconName = iconName;
SolarSirenRounded.category = category;

const SirenRoundedOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarSirenRounded, Object.assign({ ref, variant: 'outline' }, props));
});

const SirenRoundedBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarSirenRounded, Object.assign({ ref, variant: 'bold' }, props));
});

const SirenRoundedBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarSirenRounded, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const SirenRounded = SolarSirenRounded;

module.exports = {
  iconName,
  category,
  nodes,
  SolarSirenRounded,
  SirenRounded,
  SirenRoundedOutline,
  SirenRoundedBold,
  SirenRoundedBoldDuotone,
  default: SolarSirenRounded
};
