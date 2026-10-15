const React = require('react');

const iconName = 'turntable-minimalistic';
const category = 'Electronic, Devices';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M17.7501 2.22165V7.96482C17.7501 8.54993 17.4577 9.09634 16.9708 9.4209L14.4161 11.124C14.0715 11.3538 13.6058 11.2607 13.376 10.916C13.1463 10.5714 13.2394 10.1057 13.5841 9.87596L16.1388 8.17283C16.2083 8.12646 16.2501 8.0484 16.2501 7.96482V2.06874C15.0943 2 13.7005 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.8515 2.78045 18.9728 2.41592 17.7501 2.22165ZM6.25 12C6.25 8.82436 8.82436 6.25 12 6.25C12.5997 6.25 13.1793 6.34206 13.7247 6.51336C14.1199 6.63748 14.3397 7.05846 14.2155 7.45364C14.0914 7.84882 13.6704 8.06856 13.2753 7.94444C12.8736 7.81829 12.4455 7.75 12 7.75C9.65279 7.75 7.75 9.65279 7.75 12C7.75 14.3472 9.65279 16.25 12 16.25C14.3472 16.25 16.25 14.3472 16.25 12C16.25 11.5858 16.5858 11.25 17 11.25C17.4142 11.25 17.75 11.5858 17.75 12C17.75 15.1756 15.1756 17.75 12 17.75C8.82436 17.75 6.25 15.1756 6.25 12ZM10 11.25C10.4142 11.25 10.75 11.5858 10.75 12C10.75 12.6904 11.3096 13.25 12 13.25C12.4142 13.25 12.75 13.5858 12.75 14C12.75 14.4142 12.4142 14.75 12 14.75C10.4812 14.75 9.25 13.5188 9.25 12C9.25 11.5858 9.58579 11.25 10 11.25Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.4", "d": "M12 2C13.7005 2 15.0943 2 16.2501 2.06874L17.7501 2.22165C18.9728 2.41592 19.8515 2.78045 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2Z", "fill": "#1C274C"}], ["path", {"d": "M12 6.25C8.82436 6.25 6.25 8.82436 6.25 12C6.25 15.1756 8.82436 17.75 12 17.75C15.1756 17.75 17.75 15.1756 17.75 12C17.75 11.5858 17.4142 11.25 17 11.25C16.5858 11.25 16.25 11.5858 16.25 12C16.25 14.3472 14.3472 16.25 12 16.25C9.65279 16.25 7.75 14.3472 7.75 12C7.75 9.65279 9.65279 7.75 12 7.75C12.4455 7.75 12.8736 7.81829 13.2753 7.94444C13.6704 8.06856 14.0914 7.84882 14.2155 7.45364C14.3397 7.05846 14.1199 6.63748 13.7247 6.51336C13.1793 6.34206 12.5997 6.25 12 6.25Z", "fill": "#1C274C"}], ["path", {"d": "M10.75 12C10.75 11.5858 10.4142 11.25 10 11.25C9.58579 11.25 9.25 11.5858 9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C12.4142 14.75 12.75 14.4142 12.75 14C12.75 13.5858 12.4142 13.25 12 13.25C11.3096 13.25 10.75 12.6904 10.75 12Z", "fill": "#1C274C"}], ["path", {"d": "M17.7501 7.96639V2.22322L16.2501 2.07031V7.96639C16.2501 8.04998 16.2083 8.12803 16.1388 8.1744L13.5841 9.87753C13.2394 10.1073 13.1463 10.573 13.376 10.9176C13.6058 11.2622 14.0715 11.3554 14.4161 11.1256L16.9708 9.42248C17.4577 9.09791 17.7501 8.55151 17.7501 7.96639Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M11.9426 1.25H12.0574C14.3658 1.24999 16.1748 1.24998 17.5863 1.43975C19.031 1.63399 20.1711 2.03933 21.0659 2.93414C21.9607 3.82895 22.366 4.96897 22.5603 6.41371C22.75 7.82519 22.75 9.63423 22.75 11.9426V12.0574C22.75 14.3658 22.75 16.1748 22.5603 17.5863C22.366 19.031 21.9607 20.1711 21.0659 21.0659C20.1711 21.9607 19.031 22.366 17.5863 22.5603C16.1748 22.75 14.3658 22.75 12.0574 22.75H11.9426C9.63423 22.75 7.82519 22.75 6.41371 22.5603C4.96897 22.366 3.82895 21.9607 2.93414 21.0659C2.03933 20.1711 1.63399 19.031 1.43975 17.5863C1.24998 16.1748 1.24999 14.3658 1.25 12.0574V11.9426C1.24999 9.63423 1.24998 7.82519 1.43975 6.41371C1.63399 4.96897 2.03933 3.82895 2.93414 2.93414C3.82895 2.03933 4.96897 1.63399 6.41371 1.43975C7.82519 1.24998 9.63423 1.24999 11.9426 1.25ZM6.61358 2.92637C5.33517 3.09825 4.56445 3.42514 3.9948 3.9948C3.42514 4.56445 3.09825 5.33517 2.92637 6.61358C2.75159 7.91356 2.75 9.62178 2.75 12C2.75 14.3782 2.75159 16.0864 2.92637 17.3864C3.09825 18.6648 3.42514 19.4355 3.9948 20.0052C4.56445 20.5749 5.33517 20.9018 6.61358 21.0736C7.91356 21.2484 9.62178 21.25 12 21.25C14.3782 21.25 16.0864 21.2484 17.3864 21.0736C18.6648 20.9018 19.4355 20.5749 20.0052 20.0052C20.5749 19.4355 20.9018 18.6648 21.0736 17.3864C21.2484 16.0864 21.25 14.3782 21.25 12C21.25 9.62178 21.2484 7.91356 21.0736 6.61358C20.9018 5.33517 20.5749 4.56445 20.0052 3.9948C19.4917 3.4813 18.8148 3.16506 17.75 2.98181V7.96482C17.75 8.54994 17.4576 9.09634 16.9707 9.4209L14.416 11.124C14.0714 11.3538 13.6057 11.2607 13.376 10.916C13.1462 10.5714 13.2393 10.1057 13.584 9.87596L16.1387 8.17283C16.2082 8.12646 16.25 8.0484 16.25 7.96482V2.81997C15.1242 2.75085 13.7418 2.75 12 2.75C9.62178 2.75 7.91356 2.75159 6.61358 2.92637ZM6.25 12C6.25 8.82436 8.82436 6.25 12 6.25C12.5997 6.25 13.1793 6.34206 13.7247 6.51336C14.1199 6.63748 14.3397 7.05846 14.2155 7.45364C14.0914 7.84882 13.6704 8.06856 13.2753 7.94444C12.8736 7.81829 12.4455 7.75 12 7.75C9.65279 7.75 7.75 9.65279 7.75 12C7.75 14.3472 9.65279 16.25 12 16.25C14.3472 16.25 16.25 14.3472 16.25 12C16.25 11.5858 16.5858 11.25 17 11.25C17.4142 11.25 17.75 11.5858 17.75 12C17.75 15.1756 15.1756 17.75 12 17.75C8.82436 17.75 6.25 15.1756 6.25 12ZM10 11.25C10.4142 11.25 10.75 11.5858 10.75 12C10.75 12.6904 11.3096 13.25 12 13.25C12.4142 13.25 12.75 13.5858 12.75 14C12.75 14.4142 12.4142 14.75 12 14.75C10.4812 14.75 9.25 13.5188 9.25 12C9.25 11.5858 9.58579 11.25 10 11.25Z", "fill": "white"}]]};

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

const TurntableMinimalisticOutline = React.forwardRef((props, ref) => {
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

const TurntableMinimalisticBold = React.forwardRef((props, ref) => {
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

const TurntableMinimalisticBoldDuotone = React.forwardRef((props, ref) => {
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

const TurntableMinimalistic = TurntableMinimalisticOutline;

module.exports = {
  iconName,
  category,
  nodes,
  TurntableMinimalistic,
  TurntableMinimalisticOutline,
  TurntableMinimalisticBold,
  TurntableMinimalisticBoldDuotone,
  default: TurntableMinimalistic
};
