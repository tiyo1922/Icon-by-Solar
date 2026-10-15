const React = require('react');

const iconName = 'music-note';
const category = 'Video, Audio, Sound';
const nodes = {"bold": [["path", {"d": "M10.0909 11.9629L19.3636 8.63087V14.1707C18.8126 13.8538 18.1574 13.67 17.4545 13.67C15.4964 13.67 13.9091 15.096 13.9091 16.855C13.9091 18.614 15.4964 20.04 17.4545 20.04C19.4126 20.04 21 18.614 21 16.855C21 16.855 21 16.8551 21 16.855L21 7.49236C21 6.37238 21 5.4331 20.9123 4.68472C20.8999 4.57895 20.8852 4.4738 20.869 4.37569C20.7845 3.86441 20.6352 3.38745 20.347 2.98917C20.2028 2.79002 20.024 2.61055 19.8012 2.45628C19.7594 2.42736 19.716 2.39932 19.6711 2.3722L19.6621 2.36679C18.8906 1.90553 18.0233 1.93852 17.1298 2.14305C16.2657 2.34086 15.1944 2.74368 13.8808 3.23763L11.5963 4.09656C10.9806 4.32806 10.4589 4.52419 10.0494 4.72734C9.61376 4.94348 9.23849 5.1984 8.95707 5.57828C8.67564 5.95817 8.55876 6.36756 8.50501 6.81203C8.4545 7.22978 8.45452 7.7378 8.45455 8.33743V16.1307C7.90347 15.8138 7.24835 15.63 6.54545 15.63C4.58735 15.63 3 17.056 3 18.815C3 20.574 4.58735 22 6.54545 22C8.50355 22 10.0909 20.574 10.0909 18.815C10.0909 18.815 10.0909 18.8151 10.0909 18.815L10.0909 11.9629Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M10.091 11.9629L19.3637 8.63087L21 7.95235V7.49236C21.0001 6.37238 21.0001 5.4331 20.9123 4.68472C20.8999 4.57895 20.8852 4.4738 20.8691 4.37569C20.7846 3.86441 20.6352 3.38745 20.347 2.98917C20.2029 2.79002 20.024 2.61055 19.8012 2.45628C19.7594 2.42736 19.7161 2.39932 19.6712 2.3722L19.6621 2.36679C18.8906 1.90553 18.0233 1.93852 17.1298 2.14305C16.2657 2.34086 15.1945 2.74368 13.8808 3.23763L11.5964 4.09656C10.9806 4.32806 10.4589 4.52419 10.0495 4.72734C9.6138 4.94348 9.23854 5.1984 8.95711 5.57828C8.67568 5.95817 8.5588 6.36756 8.50506 6.81203C8.45455 7.22978 8.45457 7.7378 8.45459 8.33743V12.6016L10.091 11.9629Z", "fill": "#1C274C"}], ["g", {"opacity": "0.5"}], ["path", {"d": "M8.45455 16.1315C7.90347 15.8145 7.24835 15.6308 6.54545 15.6308C4.58735 15.6308 3 17.0568 3 18.8158C3 20.5748 4.58735 22.0008 6.54545 22.0008C8.50355 22.0008 10.0909 20.5748 10.0909 18.8158L10.0909 11.9636L8.45455 12.6023V16.1315Z", "fill": "#1C274C"}], ["path", {"d": "M19.3636 8.63165V14.1715C18.8126 13.8545 18.1574 13.6708 17.4545 13.6708C15.4964 13.6708 13.9091 15.0968 13.9091 16.8558C13.9091 18.6148 15.4964 20.0408 17.4545 20.0408C19.4126 20.0408 21 18.6148 21 16.8558L21 7.95312L19.3636 8.63165Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M18.6731 3.6658C18.0356 3.77927 17.1965 4.05694 15.9723 4.46503L11.9723 5.79836C11.2959 6.02383 10.8487 6.17409 10.5192 6.32735C10.2072 6.47248 10.0724 6.58927 9.98595 6.70917C9.89953 6.82908 9.83138 6.99396 9.79235 7.33581C9.75113 7.69682 9.75 8.16859 9.75 8.88158V10.958L20.25 7.45798C20.2499 6.21638 20.2459 5.35885 20.1541 4.73323C20.0627 4.11 19.906 3.88559 19.7309 3.75934C19.5557 3.6331 19.2933 3.55543 18.6731 3.6658ZM21.7402 5.99854C21.7279 5.43404 21.7003 4.93897 21.6382 4.51557C21.522 3.72291 21.2634 3.01488 20.608 2.54248C19.9525 2.07008 19.1991 2.04863 18.4103 2.18901C17.6516 2.32404 16.7078 2.63868 15.5559 3.02267L11.4584 4.38849C10.8321 4.59726 10.3027 4.77368 9.88651 4.96732C9.44407 5.17314 9.06018 5.42824 8.76908 5.83211C8.47799 6.23598 8.35738 6.68084 8.30203 7.16566C8.27376 7.41325 8.26085 7.69086 8.25495 7.99854H8.25V8.75772C8.25 8.78496 8.25 8.81238 8.25 8.83998L8.25 15.9983C7.62325 15.5275 6.8442 15.2485 6 15.2485C3.92893 15.2485 2.25 16.9275 2.25 18.9985C2.25 21.0696 3.92893 22.7485 6 22.7485C8.07107 22.7485 9.75 21.0696 9.75 18.9985V12.5391L20.25 9.03911V13.9983C19.6233 13.5275 18.8442 13.2485 18 13.2485C15.9289 13.2485 14.25 14.9275 14.25 16.9985C14.25 19.0696 15.9289 20.7485 18 20.7485C20.0711 20.7485 21.75 19.0696 21.75 16.9985V7.48712C21.75 7.45144 21.75 7.41594 21.75 7.38063V5.99854H21.7402ZM20.25 16.9985C20.25 15.7559 19.2426 14.7485 18 14.7485C16.7574 14.7485 15.75 15.7559 15.75 16.9985C15.75 18.2412 16.7574 19.2485 18 19.2485C19.2426 19.2485 20.25 18.2412 20.25 16.9985ZM8.25 18.9985C8.25 17.7559 7.24264 16.7485 6 16.7485C4.75736 16.7485 3.75 17.7559 3.75 18.9985C3.75 20.2412 4.75736 21.2485 6 21.2485C7.24264 21.2485 8.25 20.2412 8.25 18.9985Z", "fill": "white"}]]};

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

const SolarMusicNote = React.forwardRef((props, ref) => {
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

SolarMusicNote.nodes = nodes;
SolarMusicNote.iconName = iconName;
SolarMusicNote.category = category;

const MusicNoteOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarMusicNote, Object.assign({ ref, variant: 'outline' }, props));
});

const MusicNoteBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarMusicNote, Object.assign({ ref, variant: 'bold' }, props));
});

const MusicNoteBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarMusicNote, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const MusicNote = SolarMusicNote;

module.exports = {
  iconName,
  category,
  nodes,
  SolarMusicNote,
  MusicNote,
  MusicNoteOutline,
  MusicNoteBold,
  MusicNoteBoldDuotone,
  default: SolarMusicNote
};
