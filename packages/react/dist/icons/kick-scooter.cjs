const React = require('react');

const iconName = 'kick-scooter';
const category = 'Transport, Parts, Service';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M16.6312 4.76853C16.3898 4.75049 16.0785 4.75 15.6088 4.75H14.381C13.9667 4.75 13.631 4.41421 13.631 4C13.631 3.58579 13.9667 3.25 14.381 3.25L15.6357 3.25C16.0714 3.24999 16.4391 3.24998 16.743 3.2727C17.0624 3.29657 17.365 3.34825 17.6605 3.47926C18.1166 3.68148 18.5069 4.00766 18.7852 4.42132C18.966 4.69002 19.0682 4.979 19.1449 5.28811C19.2178 5.58159 19.2784 5.94083 19.3499 6.36484L20.3586 12.3459C20.3953 12.5635 20.3343 12.7863 20.1918 12.9548C20.0493 13.1234 19.8398 13.2206 19.619 13.2206C17.1319 13.2206 15.131 15.2107 15.131 17.6471C15.131 18.0613 14.7952 18.3971 14.381 18.3971H7.42003C7.08088 19.7531 5.84304 20.75 4.38095 20.75C2.66017 20.75 1.25 19.3691 1.25 17.6471C1.25 15.925 2.66017 14.5441 4.38095 14.5441C5.84304 14.5441 7.08088 15.541 7.42003 16.8971H13.6784C14.0147 14.2579 16.1026 12.1673 18.7426 11.7837L17.8754 6.64136C17.7981 6.18308 17.7466 5.8808 17.6892 5.64959C17.6341 5.42779 17.5857 5.32551 17.5407 5.25874C17.4211 5.08096 17.2522 4.93904 17.0526 4.85054C16.9761 4.81665 16.8634 4.78588 16.6312 4.76853ZM16.4881 17.6471C16.4881 15.925 17.8983 14.5441 19.619 14.5441C21.3398 14.5441 22.75 15.925 22.75 17.6471C22.75 19.3691 21.3398 20.75 19.619 20.75C17.8983 20.75 16.4881 19.3691 16.4881 17.6471Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"d": "M16.6312 4.76853C16.3898 4.75049 16.0785 4.75 15.6088 4.75H14.381C13.9667 4.75 13.631 4.41421 13.631 4C13.631 3.58579 13.9667 3.25 14.381 3.25H15.6357H15.6357C16.0714 3.24999 16.4391 3.24998 16.743 3.2727C17.0624 3.29657 17.365 3.34825 17.6605 3.47926C18.1166 3.68148 18.5069 4.00766 18.7852 4.42132C18.966 4.69002 19.0682 4.979 19.1449 5.28811C19.2178 5.58157 19.2784 5.94079 19.3499 6.36477L19.3499 6.36484L20.3586 12.3459C20.3953 12.5635 20.3343 12.7863 20.1918 12.9548C20.0493 13.1234 19.8398 13.2206 19.619 13.2206C17.1319 13.2206 15.131 15.2107 15.131 17.6471C15.131 18.0613 14.7952 18.3971 14.381 18.3971H7.42003C7.08088 19.7531 5.84304 20.75 4.38095 20.75C2.66017 20.75 1.25 19.3691 1.25 17.6471C1.25 15.925 2.66017 14.5441 4.38095 14.5441C5.84304 14.5441 7.08088 15.541 7.42003 16.8971H13.6784C14.0147 14.2579 16.1026 12.1673 18.7426 11.7837L17.8754 6.64136C17.7981 6.18308 17.7466 5.8808 17.6892 5.64959C17.6341 5.42779 17.5857 5.32551 17.5407 5.25874C17.4211 5.08096 17.2522 4.93904 17.0526 4.85054C16.9761 4.81665 16.8634 4.78588 16.6312 4.76853Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "fillRule": "evenodd", "clipRule": "evenodd", "d": "M16.4883 17.6459C16.4883 15.9239 17.8984 14.543 19.6192 14.543C21.34 14.543 22.7502 15.9239 22.7502 17.6459C22.7502 19.368 21.34 20.7488 19.6192 20.7488C17.8984 20.7488 16.4883 19.368 16.4883 17.6459Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M16.6312 4.76853C16.3898 4.75049 16.0785 4.75 15.6088 4.75H14.381C13.9667 4.75 13.631 4.41421 13.631 4C13.631 3.58579 13.9667 3.25 14.381 3.25L15.6357 3.25C16.0714 3.24999 16.4391 3.24998 16.743 3.2727C17.0624 3.29657 17.365 3.34825 17.6605 3.47926C18.1166 3.68148 18.5069 4.00766 18.7852 4.42132C18.966 4.69002 19.0682 4.979 19.1449 5.28811C19.2178 5.58159 19.2784 5.94083 19.3499 6.36484L20.3586 12.3459C20.3953 12.5635 20.3343 12.7863 20.1918 12.9548C20.0493 13.1234 19.8398 13.2206 19.619 13.2206C17.1319 13.2206 15.131 15.2107 15.131 17.6471C15.131 18.0613 14.7952 18.3971 14.381 18.3971H7.42003C7.08088 19.7531 5.84304 20.75 4.38095 20.75C2.66017 20.75 1.25 19.3691 1.25 17.6471C1.25 15.925 2.66017 14.5441 4.38095 14.5441C5.84304 14.5441 7.08088 15.541 7.42003 16.8971H13.6784C14.0147 14.2579 16.1026 12.1673 18.7426 11.7837L17.8754 6.64136C17.7981 6.18308 17.7466 5.8808 17.6892 5.64959C17.6341 5.42779 17.5857 5.32551 17.5407 5.25874C17.4211 5.08096 17.2522 4.93904 17.0526 4.85054C16.9761 4.81665 16.8634 4.78588 16.6312 4.76853ZM4.38095 16.0441C3.47181 16.0441 2.75 16.7701 2.75 17.6471C2.75 18.524 3.47181 19.25 4.38095 19.25C5.2901 19.25 6.0119 18.524 6.0119 17.6471C6.0119 16.7701 5.2901 16.0441 4.38095 16.0441ZM19.619 16.0441C18.7099 16.0441 17.9881 16.7701 17.9881 17.6471C17.9881 18.524 18.7099 19.25 19.619 19.25C20.5282 19.25 21.25 18.524 21.25 17.6471C21.25 16.7701 20.5282 16.0441 19.619 16.0441ZM16.4881 17.6471C16.4881 15.925 17.8983 14.5441 19.619 14.5441C21.3398 14.5441 22.75 15.925 22.75 17.6471C22.75 19.3691 21.3398 20.75 19.619 20.75C17.8983 20.75 16.4881 19.3691 16.4881 17.6471Z", "fill": "white"}]]};

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

const SolarKickScooter = React.forwardRef((props, ref) => {
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

SolarKickScooter.nodes = nodes;
SolarKickScooter.iconName = iconName;
SolarKickScooter.category = category;

const KickScooterOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarKickScooter, Object.assign({ ref, variant: 'outline' }, props));
});

const KickScooterBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarKickScooter, Object.assign({ ref, variant: 'bold' }, props));
});

const KickScooterBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarKickScooter, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const KickScooter = SolarKickScooter;

module.exports = {
  iconName,
  category,
  nodes,
  SolarKickScooter,
  KickScooter,
  KickScooterOutline,
  KickScooterBold,
  KickScooterBoldDuotone,
  default: SolarKickScooter
};
