const React = require('react');

const iconName = 'bolt-circle';
const category = 'Essentional, UI';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM11.2274 8.56904L9.21236 10.1737C8.36695 10.8469 7.94424 11.1836 8.02675 11.5594L8.03114 11.578C8.12514 11.9515 8.66096 12.0951 9.73259 12.3823C10.3281 12.5418 10.6259 12.6216 10.7656 12.8473L10.7727 12.8592C10.9075 13.0876 10.8308 13.3737 10.6775 13.9459L10.6374 14.0954C10.2123 15.6818 9.99979 16.4749 10.4091 16.7311C10.8184 16.9872 11.4697 16.4686 12.7723 15.4314L14.7873 13.8267C15.6327 13.1535 16.0554 12.8169 15.9729 12.441L15.9686 12.4224C15.8745 12.0489 15.3387 11.9053 14.2671 11.6182C13.6716 11.4586 13.3738 11.3788 13.2341 11.1531L13.227 11.1412C13.0922 10.9128 13.1689 10.6267 13.3222 10.0546L13.3623 9.905C13.7873 8.31864 13.9999 7.52547 13.5905 7.26931C13.1812 7.01316 12.5299 7.53179 11.2274 8.56904Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z", "fill": "#1C274C"}], ["path", {"d": "M11.2274 8.56757L9.21236 10.1722C8.36695 10.8455 7.94424 11.1821 8.02675 11.5579L8.03114 11.5765C8.12514 11.9501 8.66096 12.0936 9.73259 12.3808C10.3281 12.5404 10.6259 12.6201 10.7656 12.8458L10.7727 12.8577C10.9075 13.0862 10.8308 13.3722 10.6775 13.9444L10.6374 14.0939L10.6374 14.0939C10.2123 15.6803 9.99979 16.4735 10.4091 16.7296C10.8184 16.9858 11.4697 16.4672 12.7722 15.4299L12.7723 15.4299L14.7873 13.8253C15.6327 13.152 16.0554 12.8154 15.9729 12.4396L15.9686 12.421C15.8745 12.0474 15.3387 11.9039 14.2671 11.6167C13.6716 11.4572 13.3738 11.3774 13.2341 11.1517L13.227 11.1398C13.0922 10.9114 13.1689 10.6253 13.3222 10.0531L13.3623 9.90353C13.7873 8.31718 13.9999 7.524 13.5905 7.26785C13.1812 7.0117 12.5299 7.53032 11.2274 8.56757Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12.3567 6.79173C12.7267 6.56855 13.3708 6.24675 13.9885 6.63333C14.621 7.02911 14.5877 7.76061 14.5333 8.18375C14.4717 8.66282 14.3017 9.29745 14.102 10.0425L14.0468 10.2485C14.0077 10.3943 13.977 10.5092 13.9531 10.6087C13.9409 10.6592 13.9318 10.7009 13.9249 10.7358C14.036 10.7768 14.1989 10.8232 14.4614 10.8935L14.5117 10.907C15.0041 11.0389 15.4487 11.158 15.7772 11.2971C16.1032 11.4352 16.5469 11.6869 16.6905 12.2181L16.6926 12.2258L16.6949 12.2343L16.6969 12.2423L16.6988 12.2502L16.7006 12.2582L16.7024 12.2663L16.7042 12.2749L16.7058 12.2829C16.8158 12.8294 16.5226 13.2517 16.281 13.5173C16.0319 13.7914 15.6621 14.0888 15.2547 14.4132L13.1952 16.0532C12.5818 16.5417 12.0622 16.9555 11.6433 17.2083C11.2733 17.4314 10.6292 17.7532 10.0114 17.3666C9.37896 16.9709 9.41224 16.2394 9.46664 15.8162C9.52824 15.3371 9.69834 14.7025 9.89803 13.9574L9.9532 13.7515C9.99228 13.6057 10.023 13.4908 10.0469 13.3913C10.0578 13.3462 10.0663 13.3081 10.0728 13.2756C9.96145 13.2288 9.79443 13.175 9.53863 13.1065C9.02039 12.9676 8.55593 12.8407 8.21199 12.6899C7.88373 12.5459 7.44693 12.2881 7.30504 11.7632L7.30294 11.7555L7.30071 11.747L7.29871 11.739L7.29681 11.7311L7.29498 11.7232L7.29321 11.7152L7.29141 11.7066L7.28984 11.6986C7.17835 11.1451 7.48144 10.7253 7.72358 10.466C7.96296 10.2096 8.3168 9.92793 8.70292 9.62054L10.8047 7.94679C11.4181 7.45826 11.9377 7.04446 12.3567 6.79173ZM11.6948 9.15552C12.2924 8.67962 12.709 8.34951 13.0223 8.14483C12.9602 8.50318 12.8283 9.00044 12.638 9.71067L12.5879 9.89758C12.5199 10.1509 12.4506 10.4095 12.4225 10.6334C12.3901 10.8924 12.397 11.21 12.5811 11.5221L12.5852 11.529L12.5894 11.5358C12.7747 11.8352 13.0461 11.9945 13.2842 12.0951C13.5095 12.1904 13.7886 12.2662 14.0731 12.3424C14.5276 12.4642 14.8372 12.5484 15.0552 12.6256C14.897 12.7756 14.6622 12.9675 14.3203 13.2398L12.3052 14.8445C11.7076 15.3204 11.291 15.6505 10.9776 15.8551C11.0398 15.4968 11.1717 14.9995 11.362 14.2893L11.4121 14.1025C11.4801 13.8492 11.5494 13.5905 11.5775 13.3666C11.6099 13.1076 11.603 12.79 11.4189 12.478L11.4161 12.4795C11.239 12.2074 10.9846 12.0448 10.7517 11.936C10.5148 11.8254 10.2304 11.7389 9.92686 11.6576C9.47254 11.5359 9.16106 11.4482 8.94371 11.3679C9.10378 11.2204 9.33829 11.0321 9.67973 10.7602L11.6948 9.15552Z", "fill": "white"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z", "fill": "white"}]]};

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

const SolarBoltCircle = React.forwardRef((props, ref) => {
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

SolarBoltCircle.nodes = nodes;
SolarBoltCircle.iconName = iconName;
SolarBoltCircle.category = category;

const BoltCircleOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarBoltCircle, Object.assign({ ref, variant: 'outline' }, props));
});

const BoltCircleBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarBoltCircle, Object.assign({ ref, variant: 'bold' }, props));
});

const BoltCircleBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarBoltCircle, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const BoltCircle = SolarBoltCircle;

module.exports = {
  iconName,
  category,
  nodes,
  SolarBoltCircle,
  BoltCircle,
  BoltCircleOutline,
  BoltCircleBold,
  BoltCircleBoldDuotone,
  default: SolarBoltCircle
};
