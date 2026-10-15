const React = require('react');

const iconName = 'stethoscope';
const category = 'Medicine';
const nodes = {"bold": [["path", {"d": "M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V2.25143C12.8612 2.25311 12.9561 2.25675 13.0446 2.26458C14.8548 2.42465 16.2896 3.85953 16.4497 5.66968C16.4643 5.83512 16.4643 6.02256 16.4643 6.29785L16.4643 7.521C16.4643 11.3903 13.5202 14.5719 9.75001 14.9481V17.0001C9.75001 19.3473 11.6528 21.2501 14 21.2501H14.8824C16.2803 21.2501 17.4809 20.3981 17.9902 19.1822C18.03 19.0872 18.0578 18.9789 18.075 18.8547C16.8708 18.4647 16 17.3341 16 16C16 14.3431 17.3432 13 19 13C20.6569 13 22 14.3431 22 16C22 17.4603 20.9567 18.6768 19.5748 18.945C19.5472 19.2085 19.4887 19.4872 19.3738 19.7617C18.6391 21.5156 16.9058 22.7501 14.8824 22.7501H14C10.8244 22.7501 8.25001 20.1757 8.25001 17.0001V14.9495C4.3217 14.5722 1.25001 11.2625 1.25001 7.23529L1.25 6.29791C1.24997 6.02259 1.24995 5.83514 1.26458 5.66968C1.42465 3.85953 2.85954 2.42465 4.66969 2.26458C4.82536 2.25081 5.00051 2.25002 5.25001 2.24999V2C5.25001 1.58579 5.58579 1.25 6.00001 1.25C6.41422 1.25 6.75001 1.58579 6.75001 2V4C6.75001 4.41421 6.41422 4.75 6.00001 4.75C5.58579 4.75 5.25001 4.41421 5.25001 4V3.75002C4.9866 3.7502 4.88393 3.75148 4.80181 3.75875C3.71573 3.85479 2.85479 4.71572 2.75875 5.80181C2.75074 5.8924 2.75001 6.00802 2.75001 6.3369V7.23529C2.75001 10.6871 5.54823 13.4853 9.00001 13.4853C12.294 13.4853 14.9643 10.815 14.9643 7.521V6.3369C14.9643 6.00802 14.9636 5.8924 14.9555 5.80181C14.8595 4.71572 13.9986 3.85479 12.9125 3.75875C12.8702 3.755 12.8224 3.75285 12.75 3.75162V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25Z", "fill": "#1C274C"}]], "bold-duotone": [["circle", {"cx": "19", "cy": "16", "r": "3", "fill": "#1C274C"}], ["path", {"d": "M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V2.25143C12.8612 2.25311 12.9561 2.25675 13.0446 2.26458C14.8548 2.42465 16.2896 3.85953 16.4497 5.66968C16.4643 5.83513 16.4643 6.02257 16.4643 6.29788L16.4643 7.521C16.4643 11.6434 13.1224 14.9853 9.00001 14.9853C4.7198 14.9853 1.25001 11.5155 1.25001 7.23529L1.25 6.29791C1.24997 6.02259 1.24995 5.83514 1.26458 5.66968C1.42465 3.85953 2.85954 2.42465 4.66969 2.26458C4.82536 2.25081 5.00051 2.25002 5.25001 2.24999V2C5.25001 1.58579 5.58579 1.25 6.00001 1.25C6.41422 1.25 6.75001 1.58579 6.75001 2V4C6.75001 4.41421 6.41422 4.75 6.00001 4.75C5.58579 4.75 5.25001 4.41421 5.25001 4V3.75002C4.9866 3.7502 4.88393 3.75148 4.80181 3.75875C3.71573 3.85479 2.85479 4.71572 2.75875 5.80181C2.75074 5.8924 2.75001 6.00802 2.75001 6.3369V7.23529C2.75001 10.6871 5.54823 13.4853 9.00001 13.4853C12.294 13.4853 14.9643 10.815 14.9643 7.521V6.3369C14.9643 6.00802 14.9636 5.8924 14.9555 5.80181C14.8595 4.71572 13.9986 3.85479 12.9125 3.75875C12.8702 3.755 12.8224 3.75285 12.75 3.75162V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M8.25 14.9487V16.9992C8.25 20.1749 10.8244 22.7492 14 22.7492H14.8824C16.6952 22.7492 18.2756 21.7578 19.1126 20.2912C19.3594 19.8586 19.4822 19.3955 19.542 18.9503C19.3662 18.9824 19.1851 18.9992 19 18.9992C18.6649 18.9992 18.3426 18.9442 18.0417 18.8429C17.9986 19.1099 17.926 19.344 17.8098 19.5477C17.2289 20.5657 16.135 21.2492 14.8824 21.2492H14C11.6528 21.2492 9.75 19.3465 9.75 16.9992V14.9473C9.50334 14.9719 9.25314 14.9845 9.00001 14.9845C8.74699 14.9845 8.4968 14.9724 8.25 14.9487Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V2.25143C12.8612 2.25311 12.9561 2.25675 13.0446 2.26458C14.8548 2.42465 16.2896 3.85953 16.4497 5.66968C16.4643 5.83512 16.4643 6.02256 16.4643 6.29785L16.4643 7.521C16.4643 11.3903 13.5202 14.5719 9.75001 14.9481V17.0001C9.75001 19.3473 11.6528 21.2501 14 21.2501H14.8824C16.1325 21.2501 17.2247 20.5684 17.8057 19.5558C16.3202 19.0571 15.25 17.6535 15.25 16C15.25 13.9289 16.9289 12.25 19 12.25C21.0711 12.25 22.75 13.9289 22.75 16C22.75 17.9405 21.2761 19.5367 19.3868 19.7303C18.6592 21.5018 16.9174 22.7501 14.8824 22.7501H14C10.8244 22.7501 8.25001 20.1757 8.25001 17.0001V14.9495C4.3217 14.5722 1.25001 11.2625 1.25001 7.23529L1.25 6.29791C1.24997 6.02259 1.24995 5.83514 1.26458 5.66968C1.42465 3.85953 2.85954 2.42465 4.66969 2.26458C4.82536 2.25081 5.00051 2.25002 5.25001 2.24999V2C5.25001 1.58579 5.58579 1.25 6.00001 1.25C6.41422 1.25 6.75001 1.58579 6.75001 2V4C6.75001 4.41421 6.41422 4.75 6.00001 4.75C5.58579 4.75 5.25001 4.41421 5.25001 4V3.75002C4.9866 3.7502 4.88393 3.75148 4.80181 3.75875C3.71573 3.85479 2.85479 4.71572 2.75875 5.80181C2.75074 5.8924 2.75001 6.00802 2.75001 6.3369V7.23529C2.75001 10.6871 5.54823 13.4853 9.00001 13.4853C12.294 13.4853 14.9643 10.815 14.9643 7.521V6.3369C14.9643 6.00802 14.9636 5.8924 14.9555 5.80181C14.8595 4.71572 13.9986 3.85479 12.9125 3.75875C12.8702 3.755 12.8224 3.75285 12.75 3.75162V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25ZM16.75 16C16.75 14.7574 17.7574 13.75 19 13.75C20.2426 13.75 21.25 14.7574 21.25 16C21.25 17.2426 20.2426 18.25 19 18.25C17.7574 18.25 16.75 17.2426 16.75 16Z", "fill": "white"}]]};

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

const StethoscopeOutline = React.forwardRef((props, ref) => {
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

const StethoscopeBold = React.forwardRef((props, ref) => {
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

const StethoscopeBoldDuotone = React.forwardRef((props, ref) => {
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

const Stethoscope = StethoscopeOutline;

module.exports = {
  iconName,
  category,
  nodes,
  Stethoscope,
  StethoscopeOutline,
  StethoscopeBold,
  StethoscopeBoldDuotone,
  default: Stethoscope
};
