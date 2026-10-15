const React = require('react');

const iconName = 'hearts';
const category = 'Like';
const nodes = {"bold": [["path", {"d": "M16.5 13.2871C14.0251 10.5713 11 12.5746 11 15.3995C11 17.9583 12.814 19.4344 14.3584 20.6912L14.4018 20.7265C14.5474 20.8449 14.6903 20.9615 14.829 21.0769C15.4 21.5523 15.95 22 16.5 22C17.05 22 17.6 21.5523 18.171 21.0769C19.7893 19.7296 22 18.2243 22 15.3995C22 14.4715 21.6735 13.6321 21.1474 13.0197C20.0718 11.7677 18.1619 11.4635 16.5 13.2871Z", "fill": "#1C274C"}], ["path", {"d": "M8.10627 18.2471C5.29819 16.0836 2 13.5424 2 9.13734C2 4.27441 7.50016 0.825708 12 5.50088C16.4998 0.825708 22 4.27441 22 9.13734C22 9.97092 21.8819 10.7377 21.6714 11.4479C20.9524 10.8704 20.051 10.5059 19.052 10.5003C18.162 10.4953 17.2936 10.7747 16.4988 11.3103C15.1099 10.3775 13.5429 10.252 12.1698 10.9149C10.5345 11.7044 9.5 13.4707 9.5 15.3997C9.5 17.7049 10.6485 19.3219 11.8415 20.4939C10.8942 20.4187 9.94514 19.6864 8.96173 18.9111C8.68471 18.6927 8.39814 18.4719 8.10627 18.2471Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M2 9.13734C2 14.0003 6.01943 16.5917 8.96173 18.9111C10 19.7296 11 20.5002 12 20.5002C13 20.5002 14 19.7296 15.0383 18.9111C17.9806 16.5917 22 14.0003 22 9.13734C22 4.27441 16.4998 0.825708 12 5.50088C7.50016 0.825708 2 4.27441 2 9.13734Z", "fill": "#1C274C"}], ["path", {"d": "M16.5 13.2871C14.0251 10.5713 11 12.5746 11 15.3995C11 17.9583 12.814 19.4344 14.3584 20.6912L14.4018 20.7265C14.5474 20.8449 14.6903 20.9615 14.829 21.0769C15.4 21.5523 15.95 22 16.5 22C17.05 22 17.6 21.5523 18.171 21.0769C19.7893 19.7296 22 18.2243 22 15.3995C22 14.4715 21.6735 13.6321 21.1474 13.0197C20.0718 11.7677 18.1619 11.4635 16.5 13.2871Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M5.63598 4.15556C3.98228 4.94593 2.75 6.83985 2.75 9.11988C2.75 13.3468 5.74875 15.772 8.58725 18.0676C8.8738 18.2993 9.15873 18.5297 9.43876 18.7605C9.96496 19.1943 10.4342 19.5748 10.8862 19.851C11.3394 20.1279 11.699 20.2509 12 20.2509C12.3238 20.2509 12.6889 20.1124 13.1269 19.8424C11.7649 18.7945 10.25 17.3418 10.25 15.0604C10.25 13.4871 11.1866 12.1327 12.523 11.552C13.7325 11.0265 15.191 11.1614 16.4999 12.165C17.3135 11.5407 18.1916 11.2466 19.0473 11.2509C19.6921 11.2542 20.2987 11.4271 20.8263 11.7264C21.0953 10.9398 21.25 10.0779 21.25 9.11988C21.25 6.83985 20.0177 4.94593 18.364 4.15556C16.7677 3.3926 14.6136 3.58576 12.5518 5.82556C12.4098 5.97983 12.2097 6.06761 12 6.06761C11.7903 6.06761 11.5902 5.97983 11.4482 5.82556C9.3864 3.58576 7.2323 3.3926 5.63598 4.15556ZM22.0221 12.8001C22.4792 13.4325 22.75 14.2148 22.75 15.0604C22.75 16.5784 22.0803 17.7269 21.2404 18.6259C20.5743 19.3389 19.756 19.9374 19.0621 20.445C18.9078 20.5578 18.7597 20.6662 18.6208 20.7703C18.342 20.9792 18.0215 21.2185 17.6918 21.4016C17.3615 21.585 16.956 21.7509 16.5 21.7509C16.044 21.7509 15.6385 21.585 15.3082 21.4016C14.9892 21.2244 14.6789 20.9947 14.4066 20.7908C13.7012 21.2983 12.8842 21.7509 12 21.7509C11.301 21.7509 10.6606 21.471 10.1042 21.131C9.54665 20.7903 8.99677 20.3401 8.4847 19.918C8.2135 19.6945 7.92786 19.4653 7.63303 19.2287C4.85059 16.9962 1.25 14.1071 1.25 9.11988C1.25 6.31525 2.7678 3.86386 4.98914 2.80219C7.09794 1.7943 9.69249 2.10286 12 4.2536C14.3075 2.10286 16.9021 1.7943 19.0109 2.80219C21.2322 3.86386 22.75 6.31525 22.75 9.11988C22.75 10.4907 22.4789 11.7082 22.0221 12.8001ZM13.1208 12.9277C12.3259 13.2731 11.75 14.0913 11.75 15.0604C11.75 16.9432 13.2191 18.0587 14.845 19.2496C14.9905 19.3562 15.1364 19.4633 15.2787 19.5699C15.5709 19.7888 15.811 19.965 16.0365 20.0903C16.2615 20.2153 16.406 20.2509 16.5 20.2509C16.594 20.2509 16.7385 20.2153 16.9635 20.0903C17.189 19.965 17.4291 19.7888 17.7213 19.5699C17.888 19.4449 18.0555 19.3222 18.2222 19.2C18.9097 18.6959 19.5844 18.2012 20.1443 17.6018C20.8143 16.8848 21.25 16.0847 21.25 15.0604C21.25 14.4239 21.0019 13.8524 20.6048 13.4364C20.1988 13.011 19.6433 12.7539 19.0398 12.7509C18.4445 12.7479 17.7361 12.9926 17.027 13.6929C16.7349 13.9814 16.2651 13.9814 15.973 13.6929C14.9309 12.6637 13.8774 12.599 13.1208 12.9277Z", "fill": "white"}]]};

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

const HeartsOutline = React.forwardRef((props, ref) => {
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

const HeartsBold = React.forwardRef((props, ref) => {
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

const HeartsBoldDuotone = React.forwardRef((props, ref) => {
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

const Hearts = HeartsOutline;

module.exports = {
  iconName,
  category,
  nodes,
  Hearts,
  HeartsOutline,
  HeartsBold,
  HeartsBoldDuotone,
  default: Hearts
};
