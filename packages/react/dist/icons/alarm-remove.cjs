const React = require('react');

const iconName = 'alarm-remove';
const category = 'Time';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12.0001 22.0001C16.9707 22.0001 21.0001 17.9707 21.0001 13.0001C21.0001 8.02954 16.9707 4.0001 12.0001 4.0001C7.02954 4.0001 3.0001 8.02954 3.0001 13.0001C3.0001 17.9707 7.02954 22.0001 12.0001 22.0001ZM15.0001 12.2501C15.4143 12.2501 15.7501 12.5859 15.7501 13.0001C15.7501 13.4143 15.4143 13.7501 15.0001 13.7501L9.0001 13.7501C8.58589 13.7501 8.2501 13.4143 8.2501 13.0001C8.2501 12.5859 8.58589 12.2501 9.0001 12.2501L15.0001 12.2501Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M8.13612 1.6026C8.35566 1.95386 8.24887 2.41657 7.89762 2.6361L3.8976 5.1361C3.54634 5.35563 3.08363 5.24885 2.8641 4.8976C2.64457 4.54634 2.75135 4.08363 3.1026 3.8641L7.10263 1.3641C7.45388 1.14457 7.91659 1.25135 8.13612 1.6026ZM15.8641 1.6026C16.0836 1.25135 16.5463 1.14457 16.8976 1.3641L20.8976 3.8641C21.2489 4.08363 21.3556 4.54635 21.1361 4.8976C20.9166 5.24885 20.4539 5.35563 20.1026 5.1361L16.1026 2.6361C15.7513 2.41657 15.6446 1.95385 15.8641 1.6026Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M12 22C16.9706 22 21 17.9706 21 13C21 8.02944 16.9706 4 12 4C7.02944 4 3 8.02944 3 13C3 17.9706 7.02944 22 12 22Z", "fill": "#1C274C"}], ["path", {"d": "M15 12.25C15.4142 12.25 15.75 12.5858 15.75 13C15.75 13.4142 15.4142 13.75 15 13.75L9 13.75C8.58579 13.75 8.25 13.4142 8.25 13C8.25 12.5858 8.58579 12.25 9 12.25L15 12.25Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M8.2405 2.33986C8.45409 2.67841 8.3502 3.1244 8.00844 3.33599L4.11657 5.74562C3.77481 5.95722 3.32461 5.8543 3.11102 5.51574C2.89742 5.17718 3.00131 4.7312 3.34307 4.5196L7.23494 2.10998C7.5767 1.89838 8.0269 2.0013 8.2405 2.33986Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M15.7595 2.33985C15.9731 2.0013 16.4233 1.89838 16.7651 2.10998L20.6569 4.5196C20.9987 4.7312 21.1026 5.17719 20.889 5.51574C20.6754 5.8543 20.2252 5.95722 19.8834 5.74562L15.9916 3.33599C15.6498 3.1244 15.5459 2.67841 15.7595 2.33985Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M8.13602 1.6026C8.35556 1.95386 8.24877 2.41657 7.89752 2.6361L3.8975 5.1361C3.54624 5.35563 3.08353 5.24885 2.864 4.8976C2.64447 4.54634 2.75125 4.08363 3.1025 3.8641L7.10253 1.3641C7.45378 1.14457 7.91649 1.25135 8.13602 1.6026ZM15.864 1.6026C16.0835 1.25135 16.5462 1.14457 16.8975 1.3641L20.8975 3.8641C21.2488 4.08363 21.3555 4.54635 21.136 4.8976C20.9165 5.24885 20.4538 5.35563 20.1025 5.1361L16.1025 2.6361C15.7512 2.41657 15.6445 1.95385 15.864 1.6026ZM12 4.7501C7.44365 4.7501 3.75 8.44375 3.75 13.0001C3.75 17.5564 7.44365 21.2501 12 21.2501C16.5563 21.2501 20.25 17.5564 20.25 13.0001C20.25 8.44375 16.5563 4.7501 12 4.7501ZM2.25 13.0001C2.25 7.61532 6.61522 3.2501 12 3.2501C17.3848 3.2501 21.75 7.61532 21.75 13.0001C21.75 18.3849 17.3848 22.7501 12 22.7501C6.61522 22.7501 2.25 18.3849 2.25 13.0001ZM8.25 13.0001C8.25 12.5859 8.58579 12.2501 9 12.2501H15C15.4142 12.2501 15.75 12.5859 15.75 13.0001C15.75 13.4143 15.4142 13.7501 15 13.7501H9C8.58579 13.7501 8.25 13.4143 8.25 13.0001Z", "fill": "white"}]]};

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

const SolarAlarmRemove = React.forwardRef((props, ref) => {
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

SolarAlarmRemove.nodes = nodes;
SolarAlarmRemove.iconName = iconName;
SolarAlarmRemove.category = category;

const AlarmRemoveOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarAlarmRemove, Object.assign({ ref, variant: 'outline' }, props));
});

const AlarmRemoveBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarAlarmRemove, Object.assign({ ref, variant: 'bold' }, props));
});

const AlarmRemoveBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarAlarmRemove, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const AlarmRemove = SolarAlarmRemove;

module.exports = {
  iconName,
  category,
  nodes,
  SolarAlarmRemove,
  AlarmRemove,
  AlarmRemoveOutline,
  AlarmRemoveBold,
  AlarmRemoveBoldDuotone,
  default: SolarAlarmRemove
};
