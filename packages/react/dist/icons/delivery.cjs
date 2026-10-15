const React = require('react');

const iconName = 'delivery';
const category = 'Essentional, UI';
const nodes = {"bold": [["path", {"d": "M9.56443 8.73049L10.0789 10.5926C10.5639 12.3481 10.8064 13.2259 11.5194 13.6252C12.2323 14.0244 13.1374 13.7892 14.9474 13.3188L16.8673 12.8199C18.6774 12.3495 19.5824 12.1143 19.9941 11.4227C20.4057 10.7312 20.1632 9.85344 19.6782 8.09788L19.1638 6.2358C18.6788 4.48023 18.4363 3.60244 17.7233 3.20319C17.0103 2.80394 16.1052 3.03915 14.2952 3.50955L12.3753 4.00849C10.5652 4.47889 9.66021 4.71409 9.24856 5.40562C8.83692 6.09714 9.07943 6.97493 9.56443 8.73049Z", "fill": "#1C274C"}], ["path", {"d": "M2.27749 5.24694C2.38823 4.84781 2.80157 4.61402 3.2007 4.72476L4.9044 5.19744C5.82129 5.45183 6.5469 6.15866 6.80003 7.07489L8.95106 14.8609L9.10935 15.4075C9.74249 15.6438 10.2863 16.0866 10.6314 16.6747L10.9414 16.579L19.8115 14.2739C20.2124 14.1697 20.6219 14.4102 20.7261 14.8111C20.8303 15.212 20.5897 15.6214 20.1888 15.7256L11.3515 18.0223L11.0228 18.1238C11.0161 19.3947 10.1392 20.5555 8.81236 20.9003C7.22189 21.3136 5.58709 20.3982 5.16092 18.8556C4.73476 17.313 5.67861 15.7274 7.26908 15.3141C7.3479 15.2936 7.42682 15.2764 7.5057 15.2623L5.35419 7.47433C5.24592 7.08242 4.92897 6.76092 4.50338 6.64284L2.79968 6.17016C2.40054 6.05942 2.16675 5.64608 2.27749 5.24694Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"d": "M2.27749 5.24499C2.38823 4.84585 2.80157 4.61206 3.2007 4.7228L4.9044 5.19549C5.82129 5.44988 6.5469 6.1567 6.80003 7.07294L8.95106 14.859L9.10935 15.4055C9.74249 15.6418 10.2863 16.0847 10.6314 16.6728L10.9414 16.5771L19.8115 14.2719C20.2124 14.1677 20.6219 14.4083 20.7261 14.8091C20.8303 15.21 20.5897 15.6195 20.1888 15.7237L11.3515 18.0203L11.0228 18.1218C11.0161 19.3928 10.1392 20.5535 8.81236 20.8983C7.22189 21.3117 5.58709 20.3962 5.16092 18.8536C4.73476 17.3111 5.67861 15.7255 7.26908 15.3121C7.3479 15.2917 7.42682 15.2744 7.5057 15.2604L5.35419 7.47238C5.24592 7.08047 4.92897 6.75897 4.50338 6.64089L2.79968 6.1682C2.40054 6.05746 2.16675 5.64413 2.27749 5.24499Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M9.56443 8.73049L10.0789 10.5926C10.5639 12.3481 10.8064 13.2259 11.5194 13.6252C12.2323 14.0244 13.1374 13.7892 14.9474 13.3188L16.8673 12.8199C18.6774 12.3495 19.5824 12.1143 19.9941 11.4227C20.4057 10.7312 20.1632 9.85344 19.6782 8.09788L19.1638 6.2358C18.6788 4.48023 18.4363 3.60244 17.7233 3.20319C17.0103 2.80394 16.1052 3.03915 14.2952 3.50955L12.3753 4.00849C10.5652 4.47889 9.66021 4.71409 9.24856 5.40562C8.83692 6.09714 9.07942 6.97493 9.56443 8.73049Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M18.0906 2.54877C17.5383 2.23946 16.9502 2.20831 16.3285 2.286C15.7381 2.3598 15.0197 2.54651 14.1564 2.7709L12.1382 3.2954C11.2752 3.51963 10.5567 3.70634 10.007 3.92891C9.42895 4.16293 8.92919 4.47736 8.60501 5.02195C8.27878 5.56998 8.24639 6.15584 8.32769 6.76777C8.40435 7.34473 8.59781 8.04488 8.82828 8.87901L9.37084 10.8429C9.60137 11.6775 9.79474 12.3775 10.0256 12.9139C10.2708 13.4835 10.5982 13.9684 11.1538 14.2795C11.7062 14.5888 12.2943 14.62 12.9159 14.5423C13.5063 14.4685 14.2247 14.2818 15.088 14.0574L17.1063 13.5329C17.9692 13.3086 18.6877 13.1219 19.2375 12.8994C19.8155 12.6653 20.3153 12.3509 20.6394 11.8063C20.9657 11.2583 20.9981 10.6724 20.9167 10.0605C20.8401 9.48355 20.6466 8.7834 20.4162 7.94926L19.8736 5.98536C19.6431 5.1508 19.4497 4.45076 19.2188 3.91434C18.9737 3.34477 18.6462 2.85989 18.0906 2.54877ZM14.4847 4.2354C15.4097 3.99503 16.0328 3.83463 16.5146 3.77442C16.9762 3.71673 17.1971 3.7676 17.3577 3.85754C17.5151 3.94567 17.6654 4.09931 17.841 4.50734C18.0262 4.93768 18.1935 5.53684 18.4418 6.43548L18.9562 8.29754C19.2045 9.19641 19.3684 9.79611 19.4298 10.2581C19.4881 10.6968 19.4359 10.8956 19.3505 11.0391C19.263 11.186 19.1045 11.3349 18.6745 11.509C18.2268 11.6903 17.6047 11.8535 16.6796 12.0939L14.7597 12.5929C13.8348 12.8333 13.2116 12.9937 12.7299 13.0539C12.2683 13.1116 12.0473 13.0607 11.8867 12.9707C11.7293 12.8826 11.579 12.729 11.4034 12.3209C11.2182 11.8906 11.0509 11.2914 10.8027 10.3928L10.2883 8.53074C10.0399 7.63187 9.876 7.03217 9.81463 6.57022C9.75634 6.13148 9.80852 5.93269 9.89393 5.78921C9.9814 5.64227 10.14 5.49334 10.5699 5.31928C11.0176 5.138 11.6397 4.97476 12.5649 4.73434L14.4847 4.2354Z", "fill": "white"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M3.20046 4.72469C2.80132 4.61396 2.38799 4.84775 2.27725 5.24688C2.16651 5.64602 2.4003 6.05936 2.79943 6.17009L4.50313 6.64278C4.92873 6.76086 5.24567 7.08236 5.35395 7.47427L7.30525 14.5374C7.23029 14.5521 7.15536 14.5692 7.08055 14.5887C5.1035 15.1025 3.89539 17.0913 4.43812 19.0558C4.97823 21.0108 7.0319 22.1384 9.00112 21.6266C10.7244 21.1788 11.8635 19.6102 11.7681 17.9139L20.1886 15.7256C20.5895 15.6214 20.83 15.2119 20.7258 14.811C20.6216 14.4101 20.2122 14.1696 19.8113 14.2738L11.3732 16.4667C10.8648 15.4794 9.93121 14.7927 8.86664 14.5562L6.79978 7.07483C6.54666 6.1586 5.82104 5.45177 4.90415 5.19738L3.20046 4.72469ZM7.45784 16.0404C8.66957 15.7255 9.88551 16.4288 10.1977 17.5589C10.5073 18.6796 9.82773 19.862 8.62383 20.1748C7.41211 20.4897 6.19617 19.7864 5.88395 18.6563C5.57435 17.5357 6.25395 16.3533 7.45784 16.0404Z", "fill": "white"}]]};

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

const DeliveryOutline = React.forwardRef((props, ref) => {
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

const DeliveryBold = React.forwardRef((props, ref) => {
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

const DeliveryBoldDuotone = React.forwardRef((props, ref) => {
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

const Delivery = DeliveryOutline;

module.exports = {
  iconName,
  category,
  nodes,
  Delivery,
  DeliveryOutline,
  DeliveryBold,
  DeliveryBoldDuotone,
  default: Delivery
};
