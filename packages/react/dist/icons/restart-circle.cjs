const React = require('react');

const iconName = 'restart-circle';
const category = 'Arrows';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM15.9346 5.59158C16.217 5.70662 16.4017 5.98121 16.4017 6.28616V9.00067C16.4017 9.41489 16.0659 9.75067 15.6517 9.75067H13C12.6983 9.75067 12.4259 9.56984 12.3088 9.29174C12.1917 9.01364 12.2527 8.69245 12.4635 8.47659L13.225 7.69705C11.7795 7.25143 10.1467 7.61303 9.00097 8.78596C7.33301 10.4935 7.33301 13.269 9.00097 14.9765C10.6593 16.6742 13.3407 16.6742 14.999 14.9765C15.6769 14.2826 16.0805 13.4112 16.2069 12.5045C16.2651 12.0865 16.5972 11.7349 17.0192 11.7349C17.4246 11.7349 17.7609 12.0595 17.7217 12.463C17.5957 13.7606 17.0471 15.0265 16.072 16.0247C13.8252 18.3248 10.1748 18.3248 7.92796 16.0247C5.69068 13.7344 5.69068 10.0281 7.92796 7.7378C9.66551 5.95905 12.244 5.55465 14.3647 6.53037L15.1152 5.76208C15.3283 5.54393 15.6522 5.47653 15.9346 5.59158Z", "fill": "#1C274C"}]], "bold-duotone": [["circle", {"opacity": "0.5", "cx": "12", "cy": "12", "r": "10", "fill": "#1C274C"}], ["path", {"d": "M16.4017 6.28518C16.4017 5.98023 16.217 5.70565 15.9346 5.5906C15.6522 5.47556 15.3283 5.54296 15.1152 5.7611L14.3647 6.5294C12.244 5.55368 9.66551 5.95808 7.92796 7.73682C5.69068 10.0271 5.69068 13.7334 7.92796 16.0237C10.1748 18.3238 13.8252 18.3238 16.072 16.0237C17.3754 14.6895 17.9168 12.877 17.7055 11.1497C17.6552 10.7386 17.2812 10.446 16.87 10.4963C16.4589 10.5466 16.1663 10.9207 16.2166 11.3318C16.3757 12.6325 15.9667 13.9849 14.999 14.9755C13.3407 16.6732 10.6593 16.6732 9.00097 14.9755C7.33301 13.268 7.33301 10.4925 9.00097 8.78499C10.1467 7.61206 11.7795 7.25045 13.225 7.69607L12.4635 8.47562C12.2527 8.69147 12.1917 9.01267 12.3088 9.29076C12.4259 9.56886 12.6983 9.7497 13 9.7497H15.6517C16.0659 9.7497 16.4017 9.41391 16.4017 8.9997V6.28518Z", "fill": "#1C274C"}]], "outline": [["path", {"d": "M16.7275 6C16.7275 5.58579 16.3917 5.25 15.9775 5.25C15.5633 5.25 15.2275 5.58579 15.2275 6V7.0232C12.9877 5.46956 9.91113 5.70783 7.92796 7.73802C5.69068 10.0283 5.69068 13.7346 7.92796 16.0249C10.1748 18.325 13.8252 18.325 16.072 16.0249C17.3754 14.6907 17.9168 12.8781 17.7055 11.1509C17.6552 10.7398 17.2812 10.4472 16.87 10.4975C16.4589 10.5478 16.1663 10.9219 16.2166 11.333C16.3757 12.6337 15.9667 13.9861 14.999 14.9767C13.3407 16.6744 10.6593 16.6744 9.00097 14.9767C7.33301 13.2692 7.33301 10.4937 9.00097 8.78618C10.324 7.4318 12.298 7.15792 13.8844 7.96452H13.3258C12.9116 7.96452 12.5758 8.3003 12.5758 8.71452C12.5758 9.12873 12.9116 9.46452 13.3258 9.46452H15.9775C16.3917 9.46452 16.7275 9.12873 16.7275 8.71452V6Z", "fill": "white"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z", "fill": "white"}]]};

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

const SolarRestartCircle = React.forwardRef((props, ref) => {
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

SolarRestartCircle.nodes = nodes;
SolarRestartCircle.iconName = iconName;
SolarRestartCircle.category = category;

const RestartCircleOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarRestartCircle, Object.assign({ ref, variant: 'outline' }, props));
});

const RestartCircleBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarRestartCircle, Object.assign({ ref, variant: 'bold' }, props));
});

const RestartCircleBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarRestartCircle, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const RestartCircle = SolarRestartCircle;

module.exports = {
  iconName,
  category,
  nodes,
  SolarRestartCircle,
  RestartCircle,
  RestartCircleOutline,
  RestartCircleBold,
  RestartCircleBoldDuotone,
  default: SolarRestartCircle
};
