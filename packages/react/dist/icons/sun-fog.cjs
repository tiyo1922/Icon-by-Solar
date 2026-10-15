const React = require('react');

const iconName = 'sun-fog';
const category = 'Weather';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M4.25 19C4.25 18.5858 4.58579 18.25 5 18.25H19C19.4142 18.25 19.75 18.5858 19.75 19C19.75 19.4142 19.4142 19.75 19 19.75H5C4.58579 19.75 4.25 19.4142 4.25 19ZM7.25 22C7.25 21.5858 7.58579 21.25 8 21.25H16C16.4142 21.25 16.75 21.5858 16.75 22C16.75 22.4142 16.4142 22.75 16 22.75H8C7.58579 22.75 7.25 22.4142 7.25 22Z", "fill": "#1C274C"}], ["path", {"d": "M6.08267 15.25C5.5521 14.2858 5.25 13.1778 5.25 12C5.25 8.27208 8.27208 5.25 12 5.25C15.7279 5.25 18.75 8.27208 18.75 12C18.75 13.1778 18.4479 14.2858 17.9173 15.25H22C22.4142 15.25 22.75 15.5858 22.75 16C22.75 16.4142 22.4142 16.75 22 16.75H2C1.58579 16.75 1.25 16.4142 1.25 16C1.25 15.5858 1.58579 15.25 2 15.25H6.08267Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3C12.75 3.41421 12.4142 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3V2C11.25 1.58579 11.5858 1.25 12 1.25ZM4.39861 4.39861C4.6915 4.10572 5.16638 4.10572 5.45927 4.39861L5.85211 4.79145C6.145 5.08434 6.145 5.55921 5.85211 5.85211C5.55921 6.145 5.08434 6.145 4.79145 5.85211L4.39861 5.45927C4.10572 5.16638 4.10572 4.6915 4.39861 4.39861ZM19.6011 4.39887C19.894 4.69176 19.894 5.16664 19.6011 5.45953L19.2083 5.85237C18.9154 6.14526 18.4405 6.14526 18.1476 5.85237C17.8547 5.55947 17.8547 5.0846 18.1476 4.79171L18.5405 4.39887C18.8334 4.10598 19.3082 4.10598 19.6011 4.39887ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H3C3.41421 11.25 3.75 11.5858 3.75 12C3.75 12.4142 3.41421 12.75 3 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM20.25 12C20.25 11.5858 20.5858 11.25 21 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H21C20.5858 12.75 20.25 12.4142 20.25 12Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M7.25 22C7.25 21.5858 7.58579 21.25 8 21.25H16C16.4142 21.25 16.75 21.5858 16.75 22C16.75 22.4142 16.4142 22.75 16 22.75H8C7.58579 22.75 7.25 22.4142 7.25 22Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3C12.75 3.41421 12.4142 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3V2C11.25 1.58579 11.5858 1.25 12 1.25ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H3C3.41421 11.25 3.75 11.5858 3.75 12C3.75 12.4142 3.41421 12.75 3 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM20.25 12C20.25 11.5858 20.5858 11.25 21 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H21C20.5858 12.75 20.25 12.4142 20.25 12Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M6.08267 15.25H2C1.58579 15.25 1.25 15.5858 1.25 16C1.25 16.4142 1.58579 16.75 2 16.75H22C22.4142 16.75 22.75 16.4142 22.75 16C22.75 15.5858 22.4142 15.25 22 15.25H17.9173H6.08267Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M4.25 19C4.25 18.5858 4.58579 18.25 5 18.25H19C19.4142 18.25 19.75 18.5858 19.75 19C19.75 19.4142 19.4142 19.75 19 19.75H5C4.58579 19.75 4.25 19.4142 4.25 19Z", "fill": "#1C274C"}], ["g", {"opacity": "0.5"}], ["path", {"d": "M4.39838 4.39936C4.69127 4.10646 5.16615 4.10646 5.45904 4.39936L5.85188 4.79219C6.14477 5.08509 6.14477 5.55996 5.85188 5.85285C5.55898 6.14575 5.08411 6.14575 4.79122 5.85285L4.39838 5.46002C4.10549 5.16712 4.10549 4.69225 4.39838 4.39936Z", "fill": "#1C274C"}], ["path", {"d": "M19.6009 4.39962C19.8938 4.69251 19.8938 5.16738 19.6009 5.46028L19.2081 5.85311C18.9152 6.14601 18.4403 6.14601 18.1474 5.85311C17.8545 5.56022 17.8545 5.08535 18.1474 4.79245L18.5402 4.39962C18.8331 4.10672 19.308 4.10672 19.6009 4.39962Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M5.25 12C5.25 13.1778 5.5521 14.2858 6.08267 15.25H17.9173C18.4479 14.2858 18.75 13.1778 18.75 12C18.75 8.27208 15.7279 5.25 12 5.25C8.27208 5.25 5.25 8.27208 5.25 12Z", "fill": "#1C274C"}]], "outline": [["path", {"d": "M8 22H16", "stroke": "white", "strokeWidth": "1.5", "strokeLinecap": "round", "strokeLinejoin": "round"}], ["path", {"d": "M5 19H19", "stroke": "white", "strokeWidth": "1.5", "strokeLinecap": "round", "strokeLinejoin": "round"}], ["path", {"d": "M2 16H22", "stroke": "white", "strokeWidth": "1.5", "strokeLinecap": "round", "strokeLinejoin": "round"}], ["path", {"d": "M12 6C8.68629 6 6 8.68629 6 12C6 13.5217 6.56645 14.911 7.5 15.9687H16.5C17.4335 14.911 18 13.5217 18 12C18 8.68629 15.3137 6 12 6Z", "stroke": "white", "strokeWidth": "1.5"}], ["path", {"d": "M12 2V3", "stroke": "white", "strokeWidth": "1.5", "strokeLinecap": "round"}], ["path", {"d": "M22 12L21 12", "stroke": "white", "strokeWidth": "1.5", "strokeLinecap": "round"}], ["path", {"d": "M3 12L2 12", "stroke": "white", "strokeWidth": "1.5", "strokeLinecap": "round"}], ["path", {"d": "M19.0708 4.92969L18.678 5.32252", "stroke": "white", "strokeWidth": "1.5", "strokeLinecap": "round"}], ["path", {"d": "M5.32178 5.32031L4.92894 4.92748", "stroke": "white", "strokeWidth": "1.5", "strokeLinecap": "round"}]]};

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

const SolarSunFog = React.forwardRef((props, ref) => {
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

SolarSunFog.nodes = nodes;
SolarSunFog.iconName = iconName;
SolarSunFog.category = category;

const SunFogOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarSunFog, Object.assign({ ref, variant: 'outline' }, props));
});

const SunFogBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarSunFog, Object.assign({ ref, variant: 'bold' }, props));
});

const SunFogBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarSunFog, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const SunFog = SolarSunFog;

module.exports = {
  iconName,
  category,
  nodes,
  SolarSunFog,
  SunFog,
  SunFogOutline,
  SunFogBold,
  SunFogBoldDuotone,
  default: SolarSunFog
};
