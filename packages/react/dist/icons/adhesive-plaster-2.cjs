const React = require('react');

const iconName = 'adhesive-plaster-2';
const category = 'Medicine';
const nodes = {"bold": [["path", {"d": "M20.9094 13.3319L13.3319 20.9094C15.4517 22.5128 18.4829 22.3482 20.4155 20.4155C22.3482 18.4829 22.5128 15.4517 20.9094 13.3319Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12.2347 19.8852L19.8852 12.2347L11.7653 4.1148L4.1148 11.7653L12.2347 19.8852ZM9.87864 11.2929C10.2692 11.6834 10.2692 12.3166 9.87864 12.7071C9.48812 13.0976 8.85496 13.0976 8.46443 12.7071C8.07391 12.3166 8.07391 11.6834 8.46443 11.2929C8.85496 10.9024 9.48812 10.9024 9.87864 11.2929ZM12.7073 15.5355C13.0978 15.145 13.0978 14.5118 12.7073 14.1213C12.3167 13.7307 11.6836 13.7307 11.293 14.1213C10.9025 14.5118 10.9025 15.145 11.293 15.5355C11.6836 15.926 12.3167 15.926 12.7073 15.5355ZM12.7073 8.46452C13.0978 8.85505 13.0978 9.48821 12.7073 9.87874C12.3167 10.2693 11.6836 10.2693 11.293 9.87874C10.9025 9.48821 10.9025 8.85505 11.293 8.46452C11.6836 8.074 12.3167 8.074 12.7073 8.46452ZM15.5354 12.7071C15.9259 12.3166 15.9259 11.6834 15.5354 11.2929C15.1449 10.9024 14.5117 10.9024 14.1212 11.2929C13.7306 11.6834 13.7306 12.3166 14.1212 12.7071C14.5117 13.0976 15.1449 13.0976 15.5354 12.7071Z", "fill": "#1C274C"}], ["path", {"d": "M3.09061 10.6682L10.6682 3.09061C8.54835 1.48717 5.51714 1.65179 3.58447 3.58447C1.65179 5.51714 1.48717 8.54835 3.09061 10.6682Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M20.4155 12.765L11.235 3.58447C9.12233 1.47184 5.69709 1.47184 3.58447 3.58447C1.47184 5.69709 1.47184 9.12233 3.58447 11.235L12.765 20.4155C14.8777 22.5282 18.3029 22.5282 20.4155 20.4155C22.5282 18.3029 22.5282 14.8777 20.4155 12.765Z", "fill": "#1C274C"}], ["path", {"d": "M19.8849 12.2339L20.4155 12.7645C20.5953 12.9444 20.7599 13.1337 20.9091 13.331L13.3315 20.9086C13.1342 20.7594 12.9448 20.5948 12.765 20.415L12.2344 19.8844L19.8849 12.2339C19.8848 12.234 19.885 12.2338 19.8849 12.2339Z", "fill": "#1C274C"}], ["path", {"d": "M10.6678 3.08984C10.8653 3.23919 11.0549 3.40388 11.2349 3.58391L11.765 4.11401C11.7651 4.11392 11.7649 4.11409 11.765 4.11401L4.11449 11.7645L3.5844 11.2344C3.40437 11.0544 3.23968 10.8648 3.09033 10.6673L10.6678 3.08984Z", "fill": "#1C274C"}], ["circle", {"cx": "9.17154", "cy": "12", "r": "1", "transform": "rotate(-45 9.17154 12)", "fill": "#1C274C"}], ["circle", {"cx": "12.0002", "cy": "14.8281", "r": "1", "transform": "rotate(-45 12.0002 14.8281)", "fill": "#1C274C"}], ["circle", {"cx": "12.0002", "cy": "9.17188", "r": "1", "transform": "rotate(-45 12.0002 9.17188)", "fill": "#1C274C"}], ["circle", {"cx": "14.8283", "cy": "12", "r": "1", "transform": "rotate(-45 14.8283 12)", "fill": "#1C274C"}]], "outline": [["path", {"d": "M9.87864 11.2929C10.2692 11.6834 10.2692 12.3166 9.87864 12.7071C9.48812 13.0976 8.85496 13.0976 8.46443 12.7071C8.07391 12.3166 8.07391 11.6834 8.46443 11.2929C8.85496 10.9024 9.48812 10.9024 9.87864 11.2929Z", "fill": "white"}], ["path", {"d": "M12.7073 15.5355C13.0978 15.145 13.0978 14.5118 12.7073 14.1213C12.3167 13.7307 11.6836 13.7307 11.293 14.1213C10.9025 14.5118 10.9025 15.145 11.293 15.5355C11.6836 15.926 12.3167 15.926 12.7073 15.5355Z", "fill": "white"}], ["path", {"d": "M12.7073 8.46452C13.0978 8.85505 13.0978 9.48821 12.7073 9.87874C12.3167 10.2693 11.6836 10.2693 11.293 9.87874C10.9025 9.48821 10.9025 8.85505 11.293 8.46452C11.6836 8.074 12.3167 8.074 12.7073 8.46452Z", "fill": "white"}], ["path", {"d": "M15.5354 12.7071C15.9259 12.3166 15.9259 11.6834 15.5354 11.2929C15.1449 10.9024 14.5117 10.9024 14.1212 11.2929C13.7306 11.6834 13.7306 12.3166 14.1212 12.7071C14.5117 13.0976 15.1449 13.0976 15.5354 12.7071Z", "fill": "white"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M3.05414 3.05414C5.45965 0.648621 9.35977 0.648621 11.7653 3.05414L20.9459 12.2347C23.3514 14.6402 23.3514 18.5403 20.9459 20.9459C18.5403 23.3514 14.6402 23.3514 12.2347 20.9459L3.05414 11.7653C0.648621 9.35977 0.648621 5.45965 3.05414 3.05414ZM10.1318 3.62692C8.31061 2.31298 5.75399 2.4756 4.1148 4.1148C2.4756 5.75399 2.31298 8.31061 3.62692 10.1318L10.1318 3.62692ZM11.235 4.64513L4.64513 11.235L12.765 19.3549L19.3549 12.765L11.235 4.64513ZM20.3731 13.8682L13.8682 20.3731C15.6894 21.687 18.246 21.5244 19.8852 19.8852C21.5244 18.246 21.687 15.6894 20.3731 13.8682Z", "fill": "white"}]]};

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

const SolarAdhesivePlaster2 = React.forwardRef((props, ref) => {
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

SolarAdhesivePlaster2.nodes = nodes;
SolarAdhesivePlaster2.iconName = iconName;
SolarAdhesivePlaster2.category = category;

const AdhesivePlaster2Outline = React.forwardRef((props, ref) => {
  return React.createElement(SolarAdhesivePlaster2, Object.assign({ ref, variant: 'outline' }, props));
});

const AdhesivePlaster2Bold = React.forwardRef((props, ref) => {
  return React.createElement(SolarAdhesivePlaster2, Object.assign({ ref, variant: 'bold' }, props));
});

const AdhesivePlaster2BoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarAdhesivePlaster2, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const AdhesivePlaster2 = SolarAdhesivePlaster2;

module.exports = {
  iconName,
  category,
  nodes,
  SolarAdhesivePlaster2,
  AdhesivePlaster2,
  AdhesivePlaster2Outline,
  AdhesivePlaster2Bold,
  AdhesivePlaster2BoldDuotone,
  default: SolarAdhesivePlaster2
};
