const React = require('react');

const iconName = 'smart-speaker-2';
const category = 'Electronic, Devices';
const nodes = {"bold": [["path", {"d": "M11.4922 3.21962C13.0968 2.77334 14.5867 2.66198 15.6848 2.81448C16.2354 2.89093 16.6494 3.02843 16.9257 3.19117C17.1969 3.3509 17.2917 3.50572 17.3219 3.62281C17.3529 3.74275 17.3447 3.93434 17.1819 4.22212C17.0174 4.51282 16.7209 4.8504 16.2792 5.20375C15.3979 5.90876 14.0516 6.5861 12.4475 7.03225C10.843 7.47853 9.35305 7.58989 8.25488 7.43739C7.70434 7.36093 7.29032 7.22344 7.014 7.06069C6.74281 6.90097 6.648 6.74614 6.61777 6.62906C6.58681 6.50912 6.59498 6.31752 6.75783 6.02975C6.92233 5.73904 7.2188 5.40147 7.66052 5.04812C8.54184 4.3431 9.88813 3.66577 11.4922 3.21962Z", "fill": "#1C274C"}], ["path", {"d": "M18.2103 5.37941C17.9424 5.73253 17.6022 6.06632 17.2162 6.37508C16.1432 7.23341 14.6023 7.98986 12.8494 8.47739C11.097 8.96479 9.39589 9.11023 8.04855 8.92313C7.37633 8.82978 6.75398 8.64838 6.25277 8.35319C6.06018 8.23976 5.87953 8.10551 5.72093 7.94918L5.33284 12.3335L5.77764 12.7802C6.14621 13.1503 7.6062 14.2504 11.9997 14.2504C16.5085 14.2504 17.9278 13.0921 18.2498 12.7513L18.7202 12.2533L18.2103 5.37941Z", "fill": "#1C274C"}], ["path", {"d": "M5.15426 14.351L5.16572 14.2215C6.13919 14.93 8.1088 15.7504 11.9997 15.7504C15.9332 15.7504 17.9031 14.9117 18.8646 14.199L18.8825 14.4404C19.0377 17.1794 19.1153 18.5489 18.6162 19.5882C18.2472 20.3564 17.6678 20.9943 16.9506 21.4218C15.9804 22 14.6588 22 12.0156 22C9.34227 22 8.00563 22 7.02989 21.413C6.3088 20.9793 5.72853 20.3324 5.36308 19.5549C4.86856 18.5028 4.9638 17.1189 5.15426 14.351Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M18.0479 3.43536C18.0694 3.51861 18.0817 3.60345 18.0852 3.68959C18.1423 5.10574 15.8127 6.87468 12.6482 7.75482C9.29128 8.6885 6.26612 8.26841 5.89134 6.81651C5.85917 6.69189 5.84757 6.56372 5.85537 6.43293C5.85691 6.40709 5.85921 6.38114 5.86226 6.3551C6.02349 4.9776 8.27913 3.33475 11.291 2.49705C14.6479 1.56337 17.6731 1.98346 18.0479 3.43536Z", "fill": "#1C274C"}], ["path", {"d": "M12.648 7.75273C9.29106 8.68642 6.2659 8.26632 5.89111 6.81443C5.85894 6.6898 5.84735 6.56163 5.85515 6.43084L5.24609 13.3068C5.80507 13.8681 7.49022 14.9978 11.9996 14.9978C16.6277 14.9978 18.2809 13.8078 18.7949 13.2637L18.0849 3.6875C18.1421 5.10365 15.8124 6.87259 12.648 7.75273Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M7.02989 21.4129C8.00563 21.9999 9.34227 21.9999 12.0156 21.9999C14.6588 21.9999 15.9804 21.9999 16.9506 21.4216C17.6678 20.9942 18.2472 20.3563 18.6162 19.5881C19.1153 18.5488 19.0377 17.1793 18.8825 14.4403L18.7949 13.2656C18.2809 13.8098 16.6277 14.9997 11.9996 14.9997C7.49022 14.9997 5.80507 13.8701 5.24609 13.3087L5.15426 14.3509C4.9638 17.1187 4.86856 18.5027 5.36308 19.5547C5.72853 20.3322 6.3088 20.9791 7.02989 21.4129Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M15.6843 2.81449C14.5862 2.66199 13.0963 2.77335 11.4917 3.21963C9.88765 3.66578 8.54135 4.34311 7.66003 5.04812C7.21832 5.40147 6.92185 5.73905 6.75735 6.02976C6.66333 6.19589 6.62087 6.32997 6.60773 6.43671L6.60383 6.48078C6.60075 6.53915 6.60676 6.58825 6.61729 6.62906C6.64752 6.74615 6.74232 6.90098 7.01352 7.0607C7.28984 7.22344 7.70386 7.36094 8.25439 7.43739C9.35257 7.58989 10.8425 7.47853 12.447 7.03225C14.0511 6.5861 15.3974 5.90877 16.2787 5.20376C16.7204 4.85041 17.0169 4.51283 17.1814 4.22212C17.3442 3.93435 17.3524 3.74276 17.3214 3.62282C17.2912 3.50573 17.1964 3.3509 16.9252 3.19118C16.6489 3.02844 16.2349 2.89094 15.6843 2.81449ZM5.10647 6.38465C5.1304 5.99807 5.26182 5.62687 5.45188 5.29101C5.74015 4.78159 6.1876 4.30511 6.72303 3.87679C7.796 3.01847 9.33693 2.26201 11.0898 1.77448C12.8422 1.28708 14.5433 1.14164 15.8907 1.32875C16.5629 1.42209 17.1852 1.6035 17.6865 1.89869C18.1928 2.1969 18.6167 2.63904 18.7738 3.2479C18.8089 3.38388 18.8284 3.51929 18.8343 3.65332L19.6314 14.398L19.6332 14.4333C19.7092 15.7729 19.7689 16.8266 19.7444 17.6734C19.7194 18.5361 19.6068 19.2579 19.2922 19.9129C18.8608 20.8111 18.1812 21.5615 17.3346 22.066C16.7133 22.4363 16.0144 22.5974 15.1795 22.6745C14.3628 22.75 13.3429 22.75 12.0533 22.75H11.9775C10.6731 22.75 9.64181 22.75 8.81679 22.6734C7.97363 22.5951 7.26833 22.4317 6.64326 22.0557C5.79209 21.5437 5.11154 20.7829 4.68431 19.8739C4.37257 19.2107 4.26692 18.4808 4.2519 17.6093C4.23714 16.7535 4.3104 15.6889 4.40357 14.335L4.40652 14.2922L5.10647 6.38465ZM17.5134 6.12358C17.4178 6.20911 17.3183 6.29298 17.2157 6.37509C16.1427 7.23341 14.6018 7.98987 12.849 8.4774C11.0966 8.9648 9.39541 9.11023 8.04807 8.92313C7.45298 8.8405 6.89697 8.68885 6.42949 8.45034L6.02741 12.9927C6.6572 13.4589 8.27332 14.2502 11.9996 14.2502C15.824 14.2502 17.4256 13.4169 18.0203 12.9559L17.5134 6.12358ZM18.1427 14.6422C17.0183 15.2186 15.1313 15.7502 11.9996 15.7502C8.89457 15.7502 7.0131 15.2278 5.88501 14.6567C5.79823 15.9222 5.739 16.8482 5.75167 17.5834C5.76504 18.3588 5.85904 18.847 6.04182 19.2358C6.34549 19.8819 6.82548 20.4148 7.41648 20.7704C7.76715 20.9813 8.21804 21.1114 8.95546 21.1798C9.70302 21.2492 10.6647 21.25 12.0155 21.25C13.3513 21.25 14.3019 21.2493 15.0415 21.1809C15.7708 21.1135 16.2177 20.9855 16.5666 20.7775C17.1543 20.4272 17.6336 19.9018 17.9401 19.2635C18.1246 18.8792 18.2228 18.3967 18.245 17.63C18.2666 16.8851 18.2162 15.942 18.1427 14.6422Z", "fill": "white"}]]};

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

const SmartSpeaker2Outline = React.forwardRef((props, ref) => {
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

const SmartSpeaker2Bold = React.forwardRef((props, ref) => {
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

const SmartSpeaker2BoldDuotone = React.forwardRef((props, ref) => {
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

const SmartSpeaker2 = SmartSpeaker2Outline;

module.exports = {
  iconName,
  category,
  nodes,
  SmartSpeaker2,
  SmartSpeaker2Outline,
  SmartSpeaker2Bold,
  SmartSpeaker2BoldDuotone,
  default: SmartSpeaker2
};
