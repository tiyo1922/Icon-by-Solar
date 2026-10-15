const React = require('react');

const iconName = 'undo-right';
const category = 'Arrows Action';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M16.4697 3.46967C16.7626 3.17678 17.2374 3.17678 17.5303 3.46967L20.5303 6.46967C20.8232 6.76256 20.8232 7.23744 20.5303 7.53033L17.5303 10.5303C17.2374 10.8232 16.7626 10.8232 16.4697 10.5303C16.1768 10.2374 16.1768 9.76256 16.4697 9.46967L18.1893 7.75H9.00001C8.05159 7.75 7.39042 7.75072 6.8778 7.79718C6.37549 7.84271 6.0899 7.92737 5.875 8.05144C5.53296 8.24892 5.24893 8.53295 5.05145 8.87499C4.92738 9.0899 4.84271 9.37548 4.79718 9.87779C4.75072 10.3904 4.75 11.0516 4.75 12C4.75 12.9484 4.75072 13.6096 4.79718 14.1222C4.84271 14.6245 4.92737 14.9101 5.05144 15.125C5.24892 15.467 5.53296 15.7511 5.875 15.9486C6.0899 16.0726 6.37549 16.1573 6.87779 16.2028C7.39041 16.2493 8.05158 16.25 9 16.25H16C16.4142 16.25 16.75 16.5858 16.75 17C16.75 17.4142 16.4142 17.75 16 17.75H8.96423C8.05998 17.75 7.3307 17.75 6.7424 17.6967C6.13605 17.6417 5.60625 17.5254 5.125 17.2476C4.55493 16.9185 4.08154 16.4451 3.75241 15.875C3.47455 15.3937 3.35826 14.8639 3.3033 14.2576C3.24998 13.6693 3.24999 12.94 3.25 12.0358V11.9642C3.24999 11.06 3.24999 10.3307 3.30331 9.74239C3.35826 9.13604 3.47456 8.60624 3.75241 8.12499C4.08154 7.55492 4.55493 7.08154 5.125 6.75241C5.60625 6.47456 6.13605 6.35826 6.7424 6.3033C7.33069 6.24998 8.05997 6.24999 8.96421 6.25L18.1893 6.25L16.4697 4.53033C16.1768 4.23744 16.1768 3.76256 16.4697 3.46967Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M16.4697 3.46967C16.1768 3.76256 16.1768 4.23744 16.4697 4.53033L18.9393 7L16.4697 9.46967C16.1768 9.76256 16.1768 10.2374 16.4697 10.5303C16.7626 10.8232 17.2374 10.8232 17.5303 10.5303L20.5303 7.53033C20.8232 7.23744 20.8232 6.76256 20.5303 6.46967L17.5303 3.46967C17.2374 3.17678 16.7626 3.17678 16.4697 3.46967Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M18.9393 7L18.1893 6.25H8.96422C8.05998 6.24999 7.33069 6.24998 6.7424 6.3033C6.13605 6.35826 5.60625 6.47456 5.125 6.75241C4.55493 7.08154 4.08154 7.55492 3.75241 8.12499C3.47456 8.60624 3.35826 9.13604 3.3033 9.74239C3.24998 10.3307 3.24999 11.06 3.25 11.9643V12.0358C3.24999 12.94 3.24998 13.6693 3.3033 14.2576C3.35826 14.8639 3.47455 15.3938 3.75241 15.875C4.08154 16.4451 4.55493 16.9185 5.125 17.2476C5.60625 17.5254 6.13605 17.6417 6.7424 17.6967C7.33069 17.75 8.05998 17.75 8.96423 17.75H16C16.4142 17.75 16.75 17.4142 16.75 17C16.75 16.5858 16.4142 16.25 16 16.25H9C8.05158 16.25 7.39041 16.2493 6.87779 16.2028C6.37549 16.1573 6.0899 16.0726 5.875 15.9486C5.53296 15.7511 5.24892 15.467 5.05144 15.125C4.92737 14.9101 4.84271 14.6245 4.79718 14.1222C4.75072 13.6096 4.75 12.9484 4.75 12C4.75 11.0516 4.75072 10.3904 4.79718 9.87779C4.84271 9.37548 4.92738 9.0899 5.05145 8.87499C5.24893 8.53296 5.53296 8.24892 5.875 8.05145C6.0899 7.92737 6.37549 7.84271 6.8778 7.79718C7.39042 7.75072 8.05159 7.75 9.00001 7.75H18.1893L18.9393 7Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M16.4772 2.46225C16.7742 2.17351 17.249 2.1802 17.5377 2.47719L22.5377 7.62007C22.8208 7.91116 22.8208 8.37459 22.5377 8.66568L17.5377 13.8085C17.249 14.1055 16.7742 14.1122 16.4772 13.8235C16.1802 13.5347 16.1735 13.0599 16.4622 12.7629L20.2248 8.89287H8.25001C7.06754 8.89287 6.23226 8.89363 5.58224 8.95423C4.94334 9.01379 4.55828 9.12615 4.25795 9.3045C3.80271 9.57484 3.4221 9.96524 3.15643 10.4385C2.97904 10.7546 2.8683 11.1591 2.80991 11.8217C2.75068 12.4938 2.75 13.3564 2.75 14.5714C2.75 15.7865 2.75068 16.6491 2.80991 17.3212C2.86829 17.9838 2.97903 18.3883 3.15642 18.7043C3.42209 19.1776 3.80271 19.568 4.25795 19.8384C4.55828 20.0167 4.94334 20.1291 5.58223 20.1887C6.23226 20.2492 7.06754 20.25 8.25 20.25H17C17.4142 20.25 17.75 20.5858 17.75 21C17.75 21.4142 17.4142 21.75 17 21.75H8.21251C7.07604 21.75 6.17081 21.75 5.443 21.6822C4.69608 21.6125 4.06191 21.4665 3.49205 21.1281C2.80715 20.7214 2.24098 20.138 1.84839 19.4385C1.52337 18.8595 1.38291 18.2157 1.3157 17.4529C1.24999 16.7072 1.24999 15.7785 1.25 14.6072V14.5357C1.24999 13.3643 1.24999 12.4357 1.3157 11.69C1.38292 10.9272 1.52338 10.2834 1.8484 9.70433C2.24099 9.00492 2.80715 8.4215 3.49205 8.01477C4.06191 7.67636 4.69608 7.53034 5.443 7.46071C6.1708 7.39286 7.07602 7.39287 8.21247 7.39287H20.2248L16.4622 3.52281C16.1735 3.22582 16.1802 2.75099 16.4772 2.46225Z", "fill": "white"}]]};

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

const SolarUndoRight = React.forwardRef((props, ref) => {
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

SolarUndoRight.nodes = nodes;
SolarUndoRight.iconName = iconName;
SolarUndoRight.category = category;

const UndoRightOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarUndoRight, Object.assign({ ref, variant: 'outline' }, props));
});

const UndoRightBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarUndoRight, Object.assign({ ref, variant: 'bold' }, props));
});

const UndoRightBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarUndoRight, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const UndoRight = SolarUndoRight;

module.exports = {
  iconName,
  category,
  nodes,
  SolarUndoRight,
  UndoRight,
  UndoRightOutline,
  UndoRightBold,
  UndoRightBoldDuotone,
  default: SolarUndoRight
};
