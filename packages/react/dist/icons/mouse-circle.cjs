const React = require('react');

const iconName = 'mouse-circle';
const category = 'Electronic, Devices';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 21.4534C6.77256 21.4534 2.53488 17.1834 2.53488 11.9161C2.53488 7.29856 5.79222 3.44593 10.1182 2.56704C10.6454 2.45995 11.2326 2.90228 11.2326 3.66754V5.72967H12.7674V3.66754C12.7674 2.15503 11.5037 0.707845 9.81487 1.05095C4.78661 2.07251 1 6.54784 1 11.9161C1 18.0375 5.92487 23 12 23C18.0751 23 23 18.0375 23 11.9161C23 7.52765 20.4689 3.73641 16.801 1.94091C16.4197 1.75429 15.9605 1.91442 15.7753 2.29856C15.5901 2.68271 15.749 3.14542 16.1303 3.33204C19.2898 4.87867 21.4651 8.14213 21.4651 11.9161C21.4651 17.1834 17.2274 21.4534 12 21.4534Z", "fill": "#1C274C"}], ["path", {"d": "M7.90698 13.9539C7.90698 16.2451 9.73949 18.1024 12 18.1024C14.2605 18.1024 16.093 16.2451 16.093 13.9539V10.5832H7.90698V13.9539Z", "fill": "#1C274C"}], ["path", {"d": "M12.7674 9.33839H16.0212C15.7091 7.67099 14.4125 6.04596 12.7674 5.72967V9.33839Z", "fill": "#1C274C"}], ["path", {"d": "M11.2326 9.33839V5.72967C9.58746 6.04596 8.29087 7.67099 7.97881 9.33839H11.2326Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M2.53488 11.9161C2.53488 17.1834 6.77256 21.4534 12 21.4534C17.2274 21.4534 21.4651 17.1834 21.4651 11.9161C21.4651 8.14213 19.2898 4.87867 16.1303 3.33204C15.749 3.14542 15.5901 2.68271 15.7753 2.29856C15.9605 1.91442 16.4197 1.75429 16.801 1.94091C20.4689 3.73641 23 7.52765 23 11.9161C23 18.0375 18.0751 23 12 23C5.92487 23 1 18.0375 1 11.9161C1 6.54784 4.78661 2.07251 9.81487 1.05095C11.5037 0.707845 12.7674 2.15503 12.7674 3.66754V5.80249C14.6612 6.16648 16.0933 7.85287 16.0933 9.87826V13.9999C16.0933 16.2911 14.2608 18.1484 12.0002 18.1484C9.73974 18.1484 7.90723 16.2911 7.90723 13.9999V9.87826C7.90723 7.85305 9.339 6.16678 11.2326 5.80259V3.66754C11.2326 2.90228 10.6454 2.45995 10.1182 2.56704C5.79222 3.44593 2.53488 7.29856 2.53488 11.9161Z", "fill": "#1C274C"}], ["path", {"d": "M7.90723 13.9547C7.90723 16.2459 9.73974 18.1032 12.0002 18.1032C14.2608 18.1032 16.0933 16.2459 16.0933 13.9547V10.584H7.90723V13.9547Z", "fill": "#1C274C"}], ["path", {"d": "M12.7677 9.33919H16.0214C15.7094 7.67179 14.4128 6.04676 12.7677 5.73047V9.33919Z", "fill": "#1C274C"}], ["path", {"d": "M11.2328 9.33919V5.73047C9.58771 6.04676 8.29112 7.67179 7.97906 9.33919H11.2328Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M11.25 3.84869C11.25 3.08944 10.6697 2.66293 10.1622 2.76611C5.93808 3.62489 2.75 7.39194 2.75 11.9153C2.75 17.0757 6.89721 21.2485 12 21.2485C17.1028 21.2485 21.25 17.0757 21.25 11.9153C21.25 8.21874 19.1208 5.02588 16.0342 3.5139C15.6622 3.33169 15.5084 2.88243 15.6906 2.51044C15.8728 2.13846 16.3221 1.98462 16.6941 2.16684C20.2798 3.92327 22.75 7.6295 22.75 11.9153C22.75 17.8924 17.9429 22.7485 12 22.7485C6.05709 22.7485 1.25 17.8924 1.25 11.9153C1.25 6.67314 4.94577 2.29594 9.86335 1.29618C11.5214 0.959101 12.75 2.38042 12.75 3.84869V5.30735C15.017 5.66693 16.75 7.63032 16.75 9.99847V13.9985C16.75 16.6218 14.6234 18.7485 12 18.7485C9.37665 18.7485 7.25 16.6218 7.25 13.9985V9.99847C7.25 7.63032 8.98301 5.66693 11.25 5.30735V3.84869ZM11.25 6.83544C10.0574 7.11715 9.11868 8.05588 8.83697 9.24847H11.25V6.83544ZM12.75 9.24847H15.163C14.8813 8.05588 13.9426 7.11715 12.75 6.83544V9.24847ZM15.25 10.7485H8.75V13.9985C8.75 15.7934 10.2051 17.2485 12 17.2485C13.7949 17.2485 15.25 15.7934 15.25 13.9985V10.7485Z", "fill": "white"}]]};

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

const SolarMouseCircle = React.forwardRef((props, ref) => {
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

SolarMouseCircle.nodes = nodes;
SolarMouseCircle.iconName = iconName;
SolarMouseCircle.category = category;

const MouseCircleOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarMouseCircle, Object.assign({ ref, variant: 'outline' }, props));
});

const MouseCircleBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarMouseCircle, Object.assign({ ref, variant: 'bold' }, props));
});

const MouseCircleBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarMouseCircle, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const MouseCircle = SolarMouseCircle;

module.exports = {
  iconName,
  category,
  nodes,
  SolarMouseCircle,
  MouseCircle,
  MouseCircleOutline,
  MouseCircleBold,
  MouseCircleBoldDuotone,
  default: SolarMouseCircle
};
