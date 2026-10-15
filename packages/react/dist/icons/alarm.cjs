const React = require('react');

const iconName = 'alarm';
const category = 'Time';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 22C16.8362 22 20.7567 18.1162 20.7567 13.3253C20.7567 8.53446 16.8362 4.65069 12 4.65069C7.16383 4.65069 3.24334 8.53446 3.24334 13.3253C3.24334 18.1162 7.16383 22 12 22ZM12 8.74705C12.403 8.74705 12.7297 9.0707 12.7297 9.46994V13.0259L14.9484 15.2238C15.2334 15.5061 15.2334 15.9638 14.9484 16.2461C14.6634 16.5284 14.2014 16.5284 13.9164 16.2461L11.484 13.8365C11.3472 13.7009 11.2703 13.5171 11.2703 13.3253V9.46994C11.2703 9.0707 11.597 8.74705 12 8.74705Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M8.2405 2.33986C8.45409 2.67841 8.3502 3.1244 8.00844 3.33599L4.11657 5.74562C3.77481 5.95722 3.32461 5.8543 3.11102 5.51574C2.89742 5.17718 3.00131 4.7312 3.34307 4.5196L7.23494 2.10998C7.5767 1.89838 8.0269 2.0013 8.2405 2.33986Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M15.7595 2.33985C15.9731 2.0013 16.4233 1.89838 16.7651 2.10998L20.6569 4.5196C20.9987 4.7312 21.1026 5.17719 20.889 5.51574C20.6754 5.8543 20.2252 5.95722 19.8834 5.74562L15.9916 3.33599C15.6498 3.1244 15.5459 2.67841 15.7595 2.33985Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M11.9998 22.0017C16.836 22.0017 20.7565 18.1179 20.7565 13.327C20.7565 8.53612 16.836 4.65234 11.9998 4.65234C7.16366 4.65234 3.24316 8.53612 3.24316 13.327C3.24316 18.1179 7.16366 22.0017 11.9998 22.0017Z", "fill": "#1C274C"}], ["path", {"d": "M11.9997 8.74609C12.4028 8.74609 12.7295 9.06974 12.7295 9.46898V13.025L14.9481 15.2229C15.2331 15.5052 15.2331 15.9629 14.9481 16.2452C14.6632 16.5275 14.2011 16.5275 13.9162 16.2452L11.4838 13.8355C11.3469 13.7 11.27 13.5161 11.27 13.3244V9.46898C11.27 9.06974 11.5967 8.74609 11.9997 8.74609Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M8.2405 2.33986C8.45409 2.67841 8.3502 3.1244 8.00844 3.33599L4.11657 5.74562C3.77481 5.95722 3.32461 5.8543 3.11102 5.51574C2.89742 5.17718 3.00131 4.7312 3.34307 4.5196L7.23494 2.10998C7.5767 1.89838 8.0269 2.0013 8.2405 2.33986Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M15.7595 2.33985C15.9731 2.0013 16.4233 1.89838 16.7651 2.10998L20.6569 4.5196C20.9987 4.7312 21.1026 5.17719 20.889 5.51574C20.6754 5.8543 20.2252 5.95722 19.8834 5.74562L15.9916 3.33599C15.6498 3.1244 15.5459 2.67841 15.7595 2.33985Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M8.13602 1.6026C8.35556 1.95386 8.24877 2.41657 7.89752 2.6361L3.8975 5.1361C3.54624 5.35563 3.08353 5.24885 2.864 4.8976C2.64447 4.54634 2.75125 4.08363 3.1025 3.8641L7.10253 1.3641C7.45378 1.14457 7.91649 1.25135 8.13602 1.6026ZM15.864 1.6026C16.0835 1.25135 16.5462 1.14457 16.8975 1.3641L20.8975 3.8641C21.2488 4.08363 21.3555 4.54635 21.136 4.8976C20.9165 5.24885 20.4538 5.35563 20.1025 5.1361L16.1025 2.6361C15.7512 2.41657 15.6445 1.95385 15.864 1.6026ZM12 4.7501C7.44365 4.7501 3.75 8.44375 3.75 13.0001C3.75 17.5564 7.44365 21.2501 12 21.2501C16.5563 21.2501 20.25 17.5564 20.25 13.0001C20.25 8.44375 16.5563 4.7501 12 4.7501ZM2.25 13.0001C2.25 7.61532 6.61522 3.2501 12 3.2501C17.3848 3.2501 21.75 7.61532 21.75 13.0001C21.75 18.3849 17.3848 22.7501 12 22.7501C6.61522 22.7501 2.25 18.3849 2.25 13.0001ZM12 8.2501C12.4142 8.2501 12.75 8.58589 12.75 9.0001V12.6894L15.0303 14.9698C15.3232 15.2627 15.3232 15.7375 15.0303 16.0304C14.7374 16.3233 14.2626 16.3233 13.9697 16.0304L11.4697 13.5304C11.329 13.3898 11.25 13.199 11.25 13.0001V9.0001C11.25 8.58589 11.5858 8.2501 12 8.2501Z", "fill": "white"}]]};

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

const SolarAlarm = React.forwardRef((props, ref) => {
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

SolarAlarm.nodes = nodes;
SolarAlarm.iconName = iconName;
SolarAlarm.category = category;

const AlarmOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarAlarm, Object.assign({ ref, variant: 'outline' }, props));
});

const AlarmBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarAlarm, Object.assign({ ref, variant: 'bold' }, props));
});

const AlarmBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarAlarm, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const Alarm = SolarAlarm;

module.exports = {
  iconName,
  category,
  nodes,
  SolarAlarm,
  Alarm,
  AlarmOutline,
  AlarmBold,
  AlarmBoldDuotone,
  default: SolarAlarm
};
