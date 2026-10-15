const React = require('react');

const iconName = 'waterdrops';
const category = 'Weather';
const nodes = {"bold": [["path", {"d": "M10 17.8351C10 20.1363 8.20914 22.0018 6 22.0018C3.79086 22.0018 2 20.1363 2 17.8351C2 16.3953 3.56593 14.4736 4.73823 13.2367C5.43222 12.5044 6.56778 12.5044 7.26177 13.2367C8.43407 14.4736 10 16.3953 10 17.8351Z", "fill": "#1C274C"}], ["path", {"d": "M22 17.8351C22 20.1363 20.2091 22.0018 18 22.0018C15.7909 22.0018 14 20.1363 14 17.8351C14 16.3953 15.5659 14.4736 16.7382 13.2367C17.4322 12.5044 18.5678 12.5044 19.2618 13.2367C20.4341 14.4736 22 16.3953 22 17.8351Z", "fill": "#1C274C"}], ["path", {"d": "M16 7.83514C16 10.1363 14.2091 12.0018 12 12.0018C9.79086 12.0018 8 10.1363 8 7.83514C8 6.39532 9.56593 4.4736 10.7382 3.23668C11.4322 2.50444 12.5678 2.50444 13.2618 3.23668C14.4341 4.4736 16 6.39532 16 7.83514Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"d": "M10 17.8351C10 20.1363 8.20914 22.0018 6 22.0018C3.79086 22.0018 2 20.1363 2 17.8351C2 16.3953 3.56593 14.4736 4.73823 13.2367C5.43222 12.5044 6.56778 12.5044 7.26177 13.2367C8.43407 14.4736 10 16.3953 10 17.8351Z", "fill": "#1C274C"}], ["path", {"opacity": "0.7", "d": "M22 17.8351C22 20.1363 20.2091 22.0018 18 22.0018C15.7909 22.0018 14 20.1363 14 17.8351C14 16.3953 15.5659 14.4736 16.7382 13.2367C17.4322 12.5044 18.5678 12.5044 19.2618 13.2367C20.4341 14.4736 22 16.3953 22 17.8351Z", "fill": "#1C274C"}], ["path", {"opacity": "0.4", "d": "M16 7.83514C16 10.1363 14.2091 12.0018 12 12.0018C9.79086 12.0018 8 10.1363 8 7.83514C8 6.39532 9.56593 4.4736 10.7382 3.23668C11.4322 2.50444 12.5678 2.50444 13.2618 3.23668C14.4341 4.4736 16 6.39532 16 7.83514Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12.7174 3.7526C12.3192 3.33247 11.6808 3.33247 11.2826 3.7526C10.7109 4.35577 10.0594 5.10959 9.55542 5.87301C9.03283 6.66466 8.75 7.34765 8.75 7.83514C8.75 9.75126 10.2336 11.2518 12 11.2518C13.7664 11.2518 15.25 9.75126 15.25 7.83514C15.25 7.34765 14.9672 6.66466 14.4446 5.87301C13.9406 5.10959 13.2891 4.35577 12.7174 3.7526ZM10.1939 2.72076C11.1837 1.67641 12.8163 1.67641 13.8061 2.72076C14.4068 3.35452 15.1243 4.18001 15.6964 5.04664C16.2499 5.88503 16.75 6.88281 16.75 7.83514C16.75 10.5214 14.6519 12.7518 12 12.7518C9.34809 12.7518 7.25 10.5214 7.25 7.83514C7.25 6.88281 7.75013 5.88503 8.30358 5.04664C8.87567 4.18001 9.59322 3.35452 10.1939 2.72076ZM6.71741 13.7526C6.31922 13.3325 5.68078 13.3325 5.28259 13.7526C4.71094 14.3558 4.05938 15.1096 3.55542 15.873C3.03283 16.6647 2.75 17.3476 2.75 17.8351C2.75 19.7513 4.23364 21.2518 6 21.2518C7.76636 21.2518 9.25 19.7513 9.25 17.8351C9.25 17.3476 8.96717 16.6647 8.44458 15.873C7.94062 15.1096 7.28906 14.3558 6.71741 13.7526ZM4.19387 12.7208C5.18366 11.6764 6.81634 11.6764 7.80613 12.7208C8.40678 13.3545 9.12433 14.18 9.69642 15.0466C10.2499 15.885 10.75 16.8828 10.75 17.8351C10.75 20.5214 8.65191 22.7518 6 22.7518C3.34809 22.7518 1.25 20.5214 1.25 17.8351C1.25 16.8828 1.75013 15.885 2.30358 15.0466C2.87567 14.18 3.59322 13.3545 4.19387 12.7208ZM18.7174 13.7526C18.3192 13.3325 17.6808 13.3325 17.2826 13.7526C16.7109 14.3558 16.0594 15.1096 15.5554 15.873C15.0328 16.6647 14.75 17.3476 14.75 17.8351C14.75 19.7513 16.2336 21.2518 18 21.2518C19.7664 21.2518 21.25 19.7513 21.25 17.8351C21.25 17.3476 20.9672 16.6647 20.4446 15.873C19.9406 15.1096 19.2891 14.3558 18.7174 13.7526ZM16.1939 12.7208C17.1837 11.6764 18.8163 11.6764 19.8061 12.7208C20.4068 13.3545 21.1243 14.18 21.6964 15.0466C22.2499 15.885 22.75 16.8828 22.75 17.8351C22.75 20.5214 20.6519 22.7518 18 22.7518C15.3481 22.7518 13.25 20.5214 13.25 17.8351C13.25 16.8828 13.7501 15.885 14.3036 15.0466C14.8757 14.18 15.5932 13.3545 16.1939 12.7208Z", "fill": "white"}]]};

function renderNodes(variantNodes, variant, color = 'currentColor', secondaryColor, secondaryOpacity) {
  return variantNodes.map(([tag, attrs], index) => {
    const computed = Object.assign({}, attrs);
    if (color !== 'original' && color !== 'source') {
      if ('opacity' in attrs) {
        computed.opacity = secondaryOpacity !== undefined ? secondaryOpacity : attrs.opacity;
        computed.fill = secondaryColor || color;
      } else if (attrs.fill && attrs.fill !== 'none' && attrs.fill !== 'transparent') {
        const isWhite = attrs.fill === 'white' || attrs.fill === '#FEFEFF' || attrs.fill === '#FBFCFF';
        if (!(variant === 'bold' && isWhite && variantNodes.length > 1)) computed.fill = color;
      }
      if (attrs.stroke && attrs.stroke !== 'none') computed.stroke = color;
    }
    return React.createElement(tag, Object.assign({ key: index }, computed));
  });
}

const SolarWaterdrops = React.forwardRef((props, ref) => {
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
  }, rest), title && React.createElement('title', null, title), ...renderNodes(variantNodes, normVariant, color, secondaryColor, secondaryOpacity));
});

SolarWaterdrops.nodes = nodes;
SolarWaterdrops.iconName = iconName;
SolarWaterdrops.category = category;

const WaterdropsOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarWaterdrops, Object.assign({ ref, variant: 'outline' }, props));
});

const WaterdropsBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarWaterdrops, Object.assign({ ref, variant: 'bold' }, props));
});

const WaterdropsBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarWaterdrops, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const Waterdrops = SolarWaterdrops;

module.exports = {
  iconName,
  category,
  nodes,
  SolarWaterdrops,
  Waterdrops,
  WaterdropsOutline,
  WaterdropsBold,
  WaterdropsBoldDuotone,
  default: SolarWaterdrops
};
