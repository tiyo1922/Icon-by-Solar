const React = require('react');

const iconName = 'satellite';
const category = 'Astronomy';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M21.5646 10.4921L21.8315 10.559C23.5658 8.21072 23.3696 4.88427 21.2426 2.75736C19.113 0.627762 15.7809 0.433676 13.4321 2.1751L13.5079 2.43555L13.7924 3.28926L13.7949 3.29636C13.7979 3.30447 13.8034 3.31945 13.8118 3.341C13.8287 3.3841 13.8571 3.45351 13.8996 3.54687C13.9844 3.73354 14.1252 4.01611 14.3409 4.37566C14.772 5.09432 15.504 6.12294 16.6907 7.30957C17.8773 8.49619 18.9059 9.22816 19.6245 9.65926C19.984 9.87495 20.2666 10.0157 20.4533 10.1005C20.5466 10.1429 20.616 10.1714 20.6591 10.1882C20.6806 10.1967 20.6956 10.2022 20.7037 10.2051L20.709 10.207L20.7101 10.2074L21.5646 10.4921ZM13.6577 21.6358L18.5711 12.7917C19.4652 12.5501 20.3143 12.0982 21.0402 11.436L14.969 22.3642C14.7678 22.7263 14.3112 22.8568 13.9491 22.6556C13.587 22.4545 13.4566 21.9979 13.6577 21.6358ZM13.3206 11.7402L16.1698 8.89115C17.2231 9.87143 18.1501 10.5239 18.8529 10.9456C19.0629 11.0716 19.2528 11.1769 19.4198 11.264L18.5711 12.7917C16.7937 13.2721 14.8387 12.9216 13.3206 11.7402ZM12.2599 10.6796C12.412 10.875 12.5778 11.0631 12.7574 11.2426C12.937 11.4223 13.1252 11.5881 13.3206 11.7402L5.53046 19.5303C5.23757 19.8232 4.7627 19.8232 4.4698 19.5303C4.17691 19.2374 4.17691 18.7626 4.46981 18.4697L12.2599 10.6796ZM11.2082 5.42911L12.7361 4.58031C12.8233 4.74737 12.9286 4.93726 13.0546 5.14735C13.4762 5.85016 14.1288 6.7772 15.1091 7.83049L12.2599 10.6796C11.0785 9.16162 10.7279 7.20651 11.2082 5.42911ZM11.2082 5.42911C11.4498 4.53507 11.9017 3.68598 12.5637 2.96011L1.6359 9.03125C1.27381 9.23242 1.14336 9.68902 1.34452 10.0511C1.54569 10.4132 2.00229 10.5436 2.36438 10.3425L11.2082 5.42911Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "fillRule": "evenodd", "clipRule": "evenodd", "d": "M13.0863 5.0397L2.33263 10.3577C1.96134 10.5413 1.5115 10.3892 1.32788 10.0179C1.14427 9.64658 1.29641 9.19674 1.6677 9.01312L14.0956 2.86719L14.2406 3.87783C14.2411 3.88008 14.2418 3.88314 14.2427 3.88702C14.2475 3.90687 14.2584 3.94823 14.2796 4.01058C14.3219 4.13517 14.4058 4.34465 14.5646 4.63462C14.8823 5.21478 15.5014 6.11878 16.6907 7.30811C17.8801 8.49744 18.784 9.11638 19.364 9.43407C19.6539 9.59285 19.8634 9.67662 19.9879 9.71895C20.0502 9.74014 20.0916 9.75105 20.1114 9.75582C20.1153 9.75674 20.1183 9.75744 20.1206 9.75794L21.1314 9.90274L14.9857 22.331C14.8021 22.7023 14.3523 22.8544 13.981 22.6708C13.6097 22.4872 13.4575 22.0374 13.6411 21.6661L18.9588 10.9122C18.8608 10.865 18.7557 10.8111 18.6435 10.7497C18.0248 10.4108 17.193 9.8424 16.1696 8.88984L5.53049 19.5289C5.2376 19.8218 4.76273 19.8218 4.46983 19.5289C4.17694 19.236 4.17694 18.7611 4.46984 18.4682L15.109 7.82918C14.1564 6.80585 13.5879 5.974 13.249 5.3552C13.1875 5.24293 13.1336 5.13772 13.0863 5.0397Z", "fill": "#1C274C"}], ["path", {"d": "M20.8236 10.5271L21.1314 9.90469L20.1206 9.75989L20.1114 9.75777C20.0916 9.753 20.0502 9.7421 19.9879 9.72091C19.8634 9.67857 19.6539 9.5948 19.364 9.43602C18.784 9.11834 17.8801 8.4994 16.6907 7.31006C15.5014 6.12073 14.8823 5.21674 14.5646 4.63657C14.4058 4.34661 14.3219 4.13712 14.2796 4.01254C14.2584 3.95019 14.2475 3.90882 14.2427 3.88897L14.2406 3.87979L14.0956 2.86914L13.47 3.17854C15.522 1.49761 18.5545 1.61479 20.4698 3.53008C22.3842 5.4445 22.5022 8.47511 20.8236 10.5271Z", "fill": "#1C274C"}], ["path", {"d": "M18.3144 12.2174L18.9588 10.9142C18.8608 10.867 18.7557 10.8131 18.6435 10.7516C18.0248 10.4128 17.193 9.84435 16.1696 8.89179L13.6505 11.4109C15.01 12.4284 16.7525 12.6972 18.3144 12.2174Z", "fill": "#1C274C"}], ["path", {"d": "M12.5897 10.3504L15.109 7.83114C14.1564 6.80781 13.5879 5.97595 13.249 5.35715C13.1875 5.24488 13.1336 5.13967 13.0863 5.04165L11.782 5.68668C11.3026 7.24866 11.5718 8.99107 12.5897 10.3504Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12.6289 2.92377L1.63565 9.03126C1.27357 9.23242 1.14311 9.68902 1.34428 10.0511C1.54544 10.4132 2.00205 10.5436 2.36413 10.3425L11.0496 5.5171C10.5129 7.32327 10.8478 9.33324 12.0542 10.8851L4.46957 18.4697C4.17667 18.7626 4.17667 19.2374 4.46956 19.5303C4.76245 19.8232 5.23733 19.8232 5.53022 19.5303L13.1149 11.9457C14.6668 13.152 16.6767 13.4868 18.4828 12.9502L13.6575 21.6358C13.4563 21.9979 13.5868 22.4545 13.9489 22.6556C14.311 22.8568 14.7676 22.7263 14.9687 22.3642L21.0761 11.3709C23.3329 9.03243 23.3075 5.30714 21.0001 2.99975C18.6927 0.692357 14.9674 0.667032 12.6289 2.92377ZM20.273 10.0152C21.6786 8.25856 21.5674 5.6883 19.9395 4.06041C18.3116 2.43252 15.7413 2.32135 13.9847 3.72687C14.0693 3.89872 14.1856 4.11732 14.3406 4.37566C14.7718 5.09432 15.5038 6.12295 16.6904 7.30957C17.8771 8.49619 18.9057 9.22816 19.6243 9.65927C19.8826 9.81424 20.1012 9.93051 20.273 10.0152ZM19.0644 11.0697C18.9963 11.0307 18.9257 10.9894 18.8526 10.9456C18.1498 10.524 17.2228 9.87143 16.1695 8.89115L14.1869 10.8738C15.6343 11.9031 17.5567 11.9684 19.0644 11.0697ZM13.1262 9.81314C12.0967 8.36572 12.0314 6.44317 12.9302 4.93544C12.9691 5.00355 13.0105 5.07423 13.0544 5.14735C13.476 5.85016 14.1286 6.77721 15.1088 7.8305L13.1262 9.81314Z", "fill": "white"}]]};

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

const SolarSatellite = React.forwardRef((props, ref) => {
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

SolarSatellite.nodes = nodes;
SolarSatellite.iconName = iconName;
SolarSatellite.category = category;

const SatelliteOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarSatellite, Object.assign({ ref, variant: 'outline' }, props));
});

const SatelliteBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarSatellite, Object.assign({ ref, variant: 'bold' }, props));
});

const SatelliteBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarSatellite, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const Satellite = SolarSatellite;

module.exports = {
  iconName,
  category,
  nodes,
  SolarSatellite,
  Satellite,
  SatelliteOutline,
  SatelliteBold,
  SatelliteBoldDuotone,
  default: SolarSatellite
};
