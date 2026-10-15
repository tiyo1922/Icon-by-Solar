const React = require('react');

const iconName = 'archive-check';
const category = 'Notes';
const nodes = {"bold": [["path", {"d": "M2 5C2 4.05719 2 3.58579 2.29289 3.29289C2.58579 3 3.05719 3 4 3H20C20.9428 3 21.4142 3 21.7071 3.29289C22 3.58579 22 4.05719 22 5C22 5.94281 22 6.41421 21.7071 6.70711C21.4142 7 20.9428 7 20 7H4C3.05719 7 2.58579 7 2.29289 6.70711C2 6.41421 2 5.94281 2 5Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M20.5 8.49805C20.3551 8.50005 20.2101 8.49999 20.0689 8.49993H3.93114C3.78999 8.49999 3.64488 8.50005 3.5 8.49805V12.9999C3.5 16.7711 3.5 18.6568 4.67157 19.8283C5.84315 20.9999 7.72876 20.9999 11.5 20.9999H12.5C16.2712 20.9999 18.1569 20.9999 19.3284 19.8283C20.5 18.6568 20.5 16.7711 20.5 12.9999V8.49805ZM15.5857 12.4685C15.8444 12.1451 15.792 11.6731 15.4685 11.4143C15.1451 11.1556 14.6731 11.208 14.4143 11.5315L10.9881 15.8142L9.57617 14.1199C9.31099 13.8017 8.83807 13.7587 8.51986 14.0238C8.20165 14.289 8.15866 14.7619 8.42383 15.0801L10.4238 17.4801C10.568 17.6531 10.7823 17.7522 11.0075 17.75C11.2327 17.7477 11.445 17.6444 11.5857 17.4685L15.5857 12.4685Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12.5 21H11.5C7.72876 21 5.84315 21 4.67157 19.8284C3.5 18.6569 3.5 16.7713 3.5 13V6.99805C3.6452 7.00008 3.84905 7.00005 4 7.00002H20C20.1509 7.00005 20.3548 7.00008 20.5 6.99805V13C20.5 16.7713 20.5 18.6569 19.3284 19.8284C18.1569 21 16.2712 21 12.5 21ZM15.5857 11.4685C15.8444 11.1451 15.792 10.6731 15.4685 10.4144C15.1451 10.1556 14.6731 10.2081 14.4144 10.5315L10.9882 14.8143L9.57618 13.1199C9.31101 12.8017 8.83809 12.7587 8.51988 13.0239C8.20167 13.289 8.15868 13.762 8.42385 14.0802L10.4239 16.4802C10.568 16.6532 10.7823 16.7522 11.0075 16.75C11.2327 16.7477 11.445 16.6444 11.5857 16.4685L15.5857 11.4685Z", "fill": "#1C274C"}], ["g", {"opacity": "0.5"}], ["path", {"d": "M2 5C2 4.05719 2 3.58579 2.29289 3.29289C2.58579 3 3.05719 3 4 3H20C20.9428 3 21.4142 3 21.7071 3.29289C22 3.58579 22 4.05719 22 5C22 5.94281 22 6.41421 21.7071 6.70711C21.4142 7 20.9428 7 20 7H4C3.05719 7 2.58579 7 2.29289 6.70711C2 6.41421 2 5.94281 2 5Z", "fill": "#1C274C"}]], "outline": [["path", {"d": "M15.5857 11.4685C15.8444 11.1451 15.792 10.6731 15.4685 10.4143C15.1451 10.1556 14.6731 10.208 14.4143 10.5315L10.9881 14.8142L9.57617 13.1199C9.31099 12.8017 8.83807 12.7587 8.51986 13.0238C8.20165 13.289 8.15866 13.7619 8.42383 14.0801L10.4238 16.4801C10.568 16.6531 10.7823 16.7522 11.0075 16.75C11.2327 16.7477 11.445 16.6444 11.5857 16.4685L15.5857 11.4685Z", "fill": "white"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M3.95526 2.25C3.52244 2.24995 3.12561 2.24991 2.8028 2.29331C2.44732 2.3411 2.07159 2.45355 1.76257 2.76257C1.45355 3.07159 1.3411 3.44732 1.29331 3.8028C1.24991 4.12561 1.24995 4.52244 1.25 4.95526V5.04476C1.24995 5.47757 1.24991 5.8744 1.29331 6.19721C1.3411 6.55269 1.45355 6.92842 1.76257 7.23744C2.05634 7.53121 2.41038 7.64733 2.75001 7.69914L2.75001 13.0564C2.74999 14.8942 2.74998 16.3498 2.90314 17.489C3.06077 18.6615 3.39289 19.6104 4.14125 20.3588C4.88961 21.1071 5.83856 21.4392 7.01098 21.5969C8.15019 21.75 9.60581 21.75 11.4436 21.75H12.5564C14.3942 21.75 15.8498 21.75 16.989 21.5969C18.1615 21.4392 19.1104 21.1071 19.8588 20.3588C20.6071 19.6104 20.9392 18.6615 21.0969 17.489C21.25 16.3498 21.25 14.8942 21.25 13.0565V7.69914C21.5896 7.64733 21.9437 7.53121 22.2374 7.23744C22.5465 6.92842 22.6589 6.55269 22.7067 6.19721C22.7501 5.8744 22.7501 5.47757 22.75 5.04475V4.95526C22.7501 4.52245 22.7501 4.12561 22.7067 3.8028C22.6589 3.44732 22.5465 3.07159 22.2374 2.76257C21.9284 2.45355 21.5527 2.3411 21.1972 2.29331C20.8744 2.24991 20.4776 2.24995 20.0448 2.25H3.95526ZM4.25001 13V7.75001H19.75V13C19.75 14.9068 19.7484 16.2615 19.6102 17.2892C19.475 18.2952 19.2213 18.8749 18.7981 19.2981C18.3749 19.7213 17.7952 19.975 16.7892 20.1102C15.7615 20.2484 14.4068 20.25 12.5 20.25H11.5C9.59319 20.25 8.23852 20.2484 7.21086 20.1102C6.20477 19.975 5.62512 19.7213 5.20191 19.2981C4.7787 18.8749 4.52503 18.2952 4.38977 17.2892C4.2516 16.2615 4.25001 14.9068 4.25001 13ZM2.82568 3.82187L2.82324 3.82324L2.82187 3.82568C2.82086 3.82761 2.81924 3.83093 2.81717 3.83597C2.80821 3.85775 2.79291 3.90611 2.77993 4.00267C2.7516 4.21339 2.75001 4.5074 2.75001 5.00001C2.75001 5.49261 2.7516 5.78662 2.77993 5.99734C2.79291 6.0939 2.80821 6.14226 2.81717 6.16404C2.81924 6.16909 2.82086 6.1724 2.82187 6.17434L2.82324 6.17677L2.82568 6.17815C2.82761 6.17916 2.83093 6.18077 2.83597 6.18285C2.85775 6.19181 2.90611 6.2071 3.00267 6.22008C3.21339 6.24841 3.5074 6.25001 4.00001 6.25001H20C20.4926 6.25001 20.7866 6.24841 20.9973 6.22008C21.0939 6.2071 21.1423 6.19181 21.164 6.18285C21.1691 6.18077 21.1724 6.17916 21.1743 6.17815L21.1768 6.17678L21.1781 6.17434C21.1792 6.1724 21.1808 6.16909 21.1828 6.16404C21.1918 6.14226 21.2071 6.0939 21.2201 5.99734C21.2484 5.78662 21.25 5.49261 21.25 5.00001C21.25 4.5074 21.2484 4.21339 21.2201 4.00267C21.2071 3.90611 21.1918 3.85775 21.1828 3.83597C21.1808 3.83093 21.1792 3.82761 21.1781 3.82568L21.1768 3.82323L21.1743 3.82187C21.1724 3.82086 21.1691 3.81924 21.164 3.81717C21.1423 3.80821 21.0939 3.79291 20.9973 3.77993C20.7866 3.7516 20.4926 3.75001 20 3.75001H4.00001C3.5074 3.75001 3.21339 3.7516 3.00267 3.77993C2.90611 3.79291 2.85775 3.80821 2.83597 3.81717C2.83093 3.81924 2.82761 3.82086 2.82568 3.82187Z", "fill": "white"}]]};

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

const ArchiveCheckOutline = React.forwardRef((props, ref) => {
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

const ArchiveCheckBold = React.forwardRef((props, ref) => {
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

const ArchiveCheckBoldDuotone = React.forwardRef((props, ref) => {
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

const ArchiveCheck = ArchiveCheckOutline;

module.exports = {
  iconName,
  category,
  nodes,
  ArchiveCheck,
  ArchiveCheckOutline,
  ArchiveCheckBold,
  ArchiveCheckBoldDuotone,
  default: ArchiveCheck
};
