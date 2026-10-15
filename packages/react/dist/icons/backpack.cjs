const React = require('react');

const iconName = 'backpack';
const category = 'School';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M7.2915 4.78553V4.72453C7.2915 4.38601 7.30305 3.94261 7.4565 3.50336C7.9652 2.04714 9.35853 1 11 1H13C14.6415 1 16.0349 2.04714 16.5436 3.50336C16.697 3.94261 16.7085 4.38601 16.7085 4.72453V4.78555C19.212 5.52304 20.9631 7.79709 20.9994 10.4163C21 10.4574 21 10.5036 21 10.596V12.9191C20.8982 12.9191 20.7947 12.9398 20.6956 12.9835C15.1597 15.4273 8.84065 15.4273 3.30479 12.9835C3.2056 12.9397 3.10197 12.919 3 12.9191V10.596C3 10.5036 3 10.4574 3.00057 10.4163C3.03694 7.79707 4.78799 5.52301 7.2915 4.78553ZM8.87362 3.99175C9.17937 3.11649 10.017 2.48989 11 2.48989H13C13.9831 2.48989 14.8207 3.11649 15.1264 3.99175C15.1719 4.12188 15.194 4.27205 15.2032 4.46183C13.0832 4.10168 10.9169 4.10168 8.79689 4.46182C8.80602 4.27205 8.82816 4.12188 8.87362 3.99175ZM9.25 12.6708C9.25 12.2594 9.58579 11.9258 10 11.9258H14C14.4142 11.9258 14.75 12.2594 14.75 12.6708C14.75 13.0822 14.4142 13.4157 14 13.4157H10C9.58579 13.4157 9.25 13.0822 9.25 12.6708Z", "fill": "#1C274C"}], ["path", {"d": "M21 14.4769C20.1 14.8588 19.1814 15.1809 18.2502 15.4432V16.644C18.2502 17.0554 17.9144 17.3889 17.5002 17.3889C17.086 17.3889 16.7502 17.0554 16.7502 16.644V15.8119C12.1726 16.7754 7.36827 16.3304 3 14.4767V16.0231C3 18.1267 4.47101 19.9482 6.53853 20.4045C10.1356 21.1985 13.8644 21.1985 17.4615 20.4045C19.529 19.9482 21 18.1267 21 16.0231V14.4769Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M7.2915 4.78522C4.78799 5.5227 3.03694 7.79676 3.00057 10.416C3 10.4571 3 10.5033 3 10.5957V12.9188C3.10197 12.9187 3.2056 12.9394 3.30479 12.9832C8.84065 15.427 15.1597 15.427 20.6956 12.9832C20.7947 12.9394 20.8982 12.9188 21 12.9188V10.5957C21 10.5033 21 10.4571 20.9994 10.416C20.9631 7.79678 19.212 5.52273 16.7085 4.78524C16.4308 4.69422 15.5892 4.5315 15.2032 4.46152C13.0832 4.10137 10.9169 4.10137 8.79689 4.46151C8.39226 4.5381 7.52471 4.71006 7.2915 4.78522ZM10 11.9255C9.58579 11.9255 9.25 12.2591 9.25 12.6705C9.25 13.0819 9.58579 13.4154 10 13.4154H14C14.4142 13.4154 14.75 13.0819 14.75 12.6705C14.75 12.2591 14.4142 11.9255 14 11.9255H10Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M8.87313 3.99175C9.17888 3.11649 10.0165 2.48989 10.9995 2.48989H12.9995C13.9826 2.48989 14.8202 3.11649 15.1259 3.99175C15.1714 4.12188 15.1935 4.27205 15.2027 4.46183C15.5887 4.53181 16.4303 4.69453 16.7081 4.78555V4.72453C16.7081 4.38601 16.6965 3.94261 16.5431 3.50336C16.0344 2.04714 14.641 1 12.9995 1H10.9995C9.35804 1 7.96471 2.04714 7.45601 3.50336C7.30256 3.94261 7.29102 4.38601 7.29102 4.72453V4.78553C7.52422 4.71037 8.39178 4.53841 8.7964 4.46182C8.80554 4.27205 8.82767 4.12188 8.87313 3.99175Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M21 14.4767C20.1 14.8586 19.1814 15.1807 18.2502 15.443V16.6438C18.2502 17.0552 17.9144 17.3888 17.5002 17.3888C17.086 17.3888 16.7502 17.0552 16.7502 16.6438V15.8117C12.1726 16.7753 7.36827 16.3302 3 14.4766V16.0229C3 18.1266 4.47101 19.948 6.53853 20.4043C10.1356 21.1983 13.8644 21.1983 17.4615 20.4043C19.529 19.948 21 18.1266 21 16.0229V14.4767Z", "fill": "#1C274C"}]], "outline": [["path", {"d": "M9.99994 12.25C9.58573 12.25 9.24994 12.5858 9.24994 13C9.24994 13.4142 9.58573 13.75 9.99994 13.75H13.9999C14.4142 13.75 14.7499 13.4142 14.7499 13C14.7499 12.5858 14.4142 12.25 13.9999 12.25H9.99994Z", "fill": "white"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M7.32008 4.27529C7.6581 2.55091 9.1764 1.25 11 1.25H13C14.8235 1.25 16.3418 2.55092 16.6799 4.2753C19.6249 5.03147 21.7072 7.66894 21.7493 10.7198C21.7499 10.7665 21.7499 10.8178 21.7499 10.9044V13.9829C21.7502 13.994 21.7502 14.0052 21.7499 14.0163V16.375C21.7499 18.8445 20.0348 20.9827 17.6241 21.5184C13.9198 22.3415 10.08 22.3415 6.37577 21.5184C3.9651 20.9827 2.24994 18.8445 2.24994 16.375V14.0163C2.24969 14.0052 2.24969 13.994 2.24994 13.9829V10.9043C2.24994 10.8177 2.24994 10.7664 2.25058 10.7198C2.29266 7.66892 4.37498 5.03144 7.32008 4.27529ZM9.0144 3.94034C9.39334 3.23199 10.1408 2.75 11 2.75H13C13.8591 2.75 14.6066 3.232 14.9855 3.94035C13.0067 3.63773 10.9932 3.63772 9.0144 3.94034ZM20.2499 10.9111V13.5066C14.9714 15.711 9.02853 15.711 3.74994 13.5066V10.9111C3.74994 10.8157 3.74996 10.7755 3.75044 10.7405C3.78363 8.33419 5.44866 6.25854 7.7905 5.70414C7.82449 5.69609 7.8638 5.68733 7.95689 5.66665C8.04114 5.64793 8.08107 5.63905 8.12046 5.63048C10.6769 5.07434 13.323 5.07434 15.8794 5.63048C15.9188 5.63905 15.9588 5.64793 16.043 5.66665C16.1361 5.68733 16.1754 5.69609 16.2094 5.70414C18.5512 6.25854 20.2163 8.33419 20.2494 10.7405C20.2499 10.7755 20.2499 10.8157 20.2499 10.9111ZM3.74994 16.375V15.123C7.91432 16.7307 12.4329 17.0771 16.7499 16.1622V17C16.7499 17.4142 17.0857 17.75 17.4999 17.75C17.9142 17.75 18.2499 17.4142 18.2499 17V15.7911C18.924 15.5999 19.5914 15.3772 20.2499 15.123V16.375C20.2499 18.1415 19.0231 19.6709 17.2987 20.0541C13.8088 20.8296 10.1911 20.8296 6.70117 20.0541C4.97681 19.6709 3.74994 18.1415 3.74994 16.375Z", "fill": "white"}]]};

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

const SolarBackpack = React.forwardRef((props, ref) => {
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

SolarBackpack.nodes = nodes;
SolarBackpack.iconName = iconName;
SolarBackpack.category = category;

const BackpackOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarBackpack, Object.assign({ ref, variant: 'outline' }, props));
});

const BackpackBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarBackpack, Object.assign({ ref, variant: 'bold' }, props));
});

const BackpackBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarBackpack, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const Backpack = SolarBackpack;

module.exports = {
  iconName,
  category,
  nodes,
  SolarBackpack,
  Backpack,
  BackpackOutline,
  BackpackBold,
  BackpackBoldDuotone,
  default: SolarBackpack
};
