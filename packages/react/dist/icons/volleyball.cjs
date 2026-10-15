const React = require('react');

const iconName = 'volleyball';
const category = 'Sports';
const nodes = {"bold": [["path", {"d": "M12.0171 12.9934C13.94 13.039 15.7856 13.5932 17.38 14.5629C14.4913 17.5983 10.3915 19.703 6.21502 20.1577C5.33561 19.533 4.56158 18.7696 3.92479 17.8994C7.00231 17.4192 9.81188 15.7992 11.756 13.3257L12.0171 12.9934Z", "fill": "#1C274C"}], ["path", {"d": "M20.4402 17.3653C18.6653 20.1517 15.5485 21.9999 12 21.9999C10.7178 21.9999 9.49188 21.7586 8.36531 21.3188C12.2683 20.4477 15.9424 18.3132 18.6152 15.439C19.2956 15.9979 19.91 16.6432 20.4402 17.3653Z", "fill": "#1C274C"}], ["path", {"d": "M21.6241 11.3581L21.6261 11.3601L21.9965 11.7327C21.9988 11.8215 22 11.9106 22 11.9999C22 13.3876 21.7173 14.7093 21.2065 15.9105C18.9642 13.2085 15.6375 11.5871 12.0812 11.4946C11.2524 10.0502 10.8302 8.43473 10.828 6.81111C14.8825 6.8899 18.7527 8.51769 21.6241 11.3581Z", "fill": "#1C274C"}], ["path", {"d": "M10.9458 5.31334C11.0638 4.5752 11.2705 3.84586 11.5673 3.14096L12.0477 2C16.6314 2.02142 20.4864 5.12669 21.6445 9.34767C18.6556 6.83888 14.881 5.4099 10.9458 5.31334Z", "fill": "#1C274C"}], ["path", {"d": "M10.5766 12.3988C9.64853 13.5796 8.49484 14.5397 7.19986 15.2379C5.62198 11.4338 5.51513 7.26247 6.87932 3.40866C7.93127 2.7803 9.1083 2.33968 10.3642 2.13303L10.1849 2.55887C8.86607 5.69099 9.08193 9.23954 10.7467 12.1824L10.5766 12.3988Z", "fill": "#1C274C"}], ["path", {"d": "M4.8586 4.99986C3.09033 6.80361 2 9.27442 2 11.9999C2 13.6173 2.38398 15.145 3.06576 16.4969C4.01958 16.4039 4.94937 16.1873 5.83307 15.8577C4.37799 12.3757 4.05507 8.60441 4.86431 4.99403L4.8586 4.99986Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"d": "M10.5766 12.3986C9.64853 13.5794 8.49484 14.5395 7.19986 15.2377C5.62198 11.4336 5.51513 7.26225 6.87932 3.40844C7.93127 2.78009 9.1083 2.33946 10.3642 2.13281L10.1849 2.55865C8.86607 5.69077 9.08193 9.23933 10.7467 12.1822L10.5766 12.3986Z", "fill": "#1C274C"}], ["path", {"d": "M4.8586 4.99964C3.09033 6.8034 2 9.2742 2 11.9997C2 13.6171 2.38398 15.1448 3.06576 16.4966C4.01958 16.4037 4.94937 16.1871 5.83307 15.8574C4.37799 12.3754 4.05507 8.6042 4.86431 4.99382L4.8586 4.99964Z", "fill": "#1C274C"}], ["g", {"opacity": "0.7"}], ["path", {"d": "M12.0171 12.9922C13.94 13.0378 15.7856 13.592 17.38 14.5616C14.4914 17.597 10.3916 19.7017 6.21503 20.1565C5.33563 19.5317 4.56159 18.7683 3.9248 17.8982C7.00233 17.418 9.8119 15.7979 11.756 13.3245L12.0171 12.9922Z", "fill": "#1C274C"}], ["path", {"d": "M20.4402 17.3641C18.6653 20.1504 15.5485 21.9986 12 21.9986C10.7178 21.9986 9.49189 21.7573 8.36533 21.3176C12.2684 20.4465 15.9424 18.312 18.6152 15.4377C19.2956 15.9966 19.91 16.642 20.4402 17.3641Z", "fill": "#1C274C"}], ["g", {"opacity": "0.4"}], ["path", {"d": "M21.6242 11.3581L21.6263 11.3601L21.9966 11.7327C21.999 11.8215 22.0001 11.9106 22.0001 11.9999C22.0001 13.3876 21.7175 14.7093 21.2066 15.9105C18.9643 13.2085 15.6377 11.5871 12.0813 11.4946C11.2525 10.0502 10.8303 8.43473 10.8281 6.81111C14.8827 6.8899 18.7528 8.51769 21.6242 11.3581Z", "fill": "#1C274C"}], ["path", {"d": "M10.946 5.31334C11.0639 4.5752 11.2707 3.84586 11.5675 3.14096L12.0479 2C16.6315 2.02142 20.4865 5.12669 21.6446 9.34767C18.6557 6.83888 14.8812 5.4099 10.946 5.31334Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C9.44948 22.75 7.10642 21.8618 5.26327 20.3778C5.26237 20.377 5.26147 20.3763 5.26057 20.3756C2.81481 18.4051 1.25 15.3853 1.25 12ZM8.04197 20.3628C9.2419 20.9317 10.5838 21.25 12 21.25C15.315 21.25 18.2226 19.5062 19.8558 16.8859C19.3678 16.16 18.7873 15.5156 18.1356 14.9642C15.5297 17.766 11.8666 19.7717 8.04197 20.3628ZM16.9049 14.0831C14.0996 17.0241 10.0216 18.9577 5.99973 19.0401C5.37613 18.5081 4.82408 17.8947 4.36003 17.2163C7.42232 16.9758 10.2597 15.4591 12.1617 13.0137L12.3637 12.7539C13.9877 12.8011 15.5476 13.2689 16.9049 14.0831ZM12.4304 11.2553C15.6411 11.3552 18.6342 12.8723 20.613 15.3801C21.0242 14.3331 21.25 13.1929 21.25 12C21.25 11.9391 21.2494 11.8784 21.2482 11.8178L20.7123 11.273C20.7116 11.2722 20.7108 11.2715 20.7101 11.2708C18.2199 8.78174 14.8726 7.34726 11.3621 7.25477C11.3781 8.6414 11.7377 10.0185 12.4304 11.2553ZM11.4794 5.75754C14.9385 5.86634 18.2504 7.14958 20.8747 9.38333C19.7905 5.70046 16.4763 2.97277 12.4946 2.763L12.0065 3.93432C11.7598 4.52647 11.5844 5.13819 11.4794 5.75754ZM10.8453 2.82138C9.87052 2.94276 8.94286 3.21581 8.08664 3.61615C6.69211 7.14679 6.70456 11.0203 8.12401 14.5448C9.21599 13.9342 10.1898 13.1058 10.9777 12.0928L11.0955 11.9413C9.64098 9.3109 9.45848 6.14964 10.6219 3.35739L10.8453 2.82138ZM6.75952 15.1716C5.41261 11.8684 5.19063 8.27859 6.09358 4.88093C4.05077 6.57765 2.75 9.13692 2.75 12C2.75 13.3349 3.03276 14.6037 3.54166 15.7499C4.65324 15.745 5.74056 15.5451 6.75952 15.1716Z", "fill": "white"}]]};

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

const SolarVolleyball = React.forwardRef((props, ref) => {
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

SolarVolleyball.nodes = nodes;
SolarVolleyball.iconName = iconName;
SolarVolleyball.category = category;

const VolleyballOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarVolleyball, Object.assign({ ref, variant: 'outline' }, props));
});

const VolleyballBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarVolleyball, Object.assign({ ref, variant: 'bold' }, props));
});

const VolleyballBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarVolleyball, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const Volleyball = SolarVolleyball;

module.exports = {
  iconName,
  category,
  nodes,
  SolarVolleyball,
  Volleyball,
  VolleyballOutline,
  VolleyballBold,
  VolleyballBoldDuotone,
  default: SolarVolleyball
};
