const React = require('react');

const iconName = 'code';
const category = 'Network, IT, Programming';
const nodes = {"bold": [["path", {"d": "M14.1809 4.27574C14.581 4.38295 14.8185 4.7942 14.7113 5.1943L10.7377 20.024C10.6304 20.4241 10.2192 20.6615 9.81909 20.5543C9.41899 20.4471 9.18156 20.0359 9.28876 19.6358L13.2624 4.80607C13.3696 4.40597 13.7808 4.16854 14.1809 4.27574Z", "fill": "#1C274C"}], ["path", {"d": "M16.4425 7.32805C16.7196 7.02017 17.1938 6.99521 17.5017 7.27231L19.2392 8.83605C19.9756 9.49871 20.5864 10.0484 21.0058 10.547C21.4468 11.0712 21.7603 11.6345 21.7603 12.3298C21.7603 13.0251 21.4468 13.5883 21.0058 14.1126C20.5864 14.6112 19.9756 15.1608 19.2392 15.8235L17.5017 17.3872C17.1938 17.6643 16.7196 17.6394 16.4425 17.3315C16.1654 17.0236 16.1904 16.5494 16.4983 16.2723L18.1947 14.7455C18.9826 14.0364 19.5138 13.556 19.8579 13.147C20.1882 12.7544 20.2603 12.5252 20.2603 12.3298C20.2603 12.1344 20.1882 11.9052 19.8579 11.5126C19.5138 11.1036 18.9826 10.6232 18.1947 9.91407L16.4983 8.38725C16.1904 8.11015 16.1654 7.63594 16.4425 7.32805Z", "fill": "#1C274C"}], ["path", {"d": "M7.50178 8.38725C7.80966 8.11015 7.83462 7.63594 7.55752 7.32805C7.28043 7.02017 6.80621 6.99521 6.49833 7.27231L4.76084 8.83605C4.0245 9.49871 3.41369 10.0484 2.99428 10.547C2.55325 11.0712 2.23975 11.6345 2.23975 12.3298C2.23975 13.0251 2.55325 13.5883 2.99428 14.1126C3.41369 14.6111 4.02449 15.1608 4.76082 15.8235L6.49833 17.3872C6.80621 17.6643 7.28043 17.6394 7.55752 17.3315C7.83462 17.0236 7.80966 16.5494 7.50178 16.2723L5.80531 14.7455C5.01743 14.0364 4.48623 13.556 4.14213 13.147C3.81188 12.7544 3.73975 12.5252 3.73975 12.3298C3.73975 12.1344 3.81188 11.9052 4.14213 11.5126C4.48623 11.1036 5.01743 10.6232 5.80531 9.91407L7.50178 8.38725Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"d": "M16.4425 7.32836C16.7196 7.02048 17.1938 6.99552 17.5017 7.27261L19.2392 8.83635C19.9756 9.49902 20.5864 10.0487 21.0058 10.5473C21.4468 11.0715 21.7603 11.6348 21.7603 12.3301C21.7603 13.0254 21.4468 13.5886 21.0058 14.1129C20.5864 14.6115 19.9756 15.1611 19.2392 15.8238L17.5017 17.3876C17.1938 17.6646 16.7196 17.6397 16.4425 17.3318C16.1654 17.0239 16.1904 16.5497 16.4983 16.2726L18.1947 14.7458C18.9826 14.0367 19.5138 13.5563 19.8579 13.1473C20.1882 12.7547 20.2603 12.5255 20.2603 12.3301C20.2603 12.1347 20.1882 11.9055 19.8579 11.5129C19.5138 11.1039 18.9826 10.6235 18.1947 9.91438L16.4983 8.38756C16.1904 8.11046 16.1654 7.63624 16.4425 7.32836Z", "fill": "#1C274C"}], ["path", {"d": "M7.50178 8.38756C7.80966 8.11046 7.83462 7.63624 7.55752 7.32836C7.28043 7.02048 6.80621 6.99552 6.49833 7.27261L4.76084 8.83635C4.0245 9.49902 3.41369 10.0487 2.99428 10.5473C2.55325 11.0715 2.23975 11.6348 2.23975 12.3301C2.23975 13.0254 2.55325 13.5886 2.99428 14.1129C3.41369 14.6115 4.02449 15.1611 4.76082 15.8238L6.49833 17.3876C6.80621 17.6646 7.28043 17.6397 7.55752 17.3318C7.83462 17.0239 7.80966 16.5497 7.50178 16.2726L5.80531 14.7458C5.01743 14.0367 4.48623 13.5563 4.14213 13.1473C3.81188 12.7547 3.73975 12.5255 3.73975 12.3301C3.73975 12.1347 3.81188 11.9055 4.14213 11.5129C4.48623 11.1039 5.01743 10.6235 5.80531 9.91438L7.50178 8.38756Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M14.1811 4.27574C14.5812 4.38295 14.8186 4.7942 14.7114 5.1943L10.7378 20.024C10.6306 20.4241 10.2194 20.6615 9.81926 20.5543C9.41916 20.4471 9.18172 20.0359 9.28893 19.6358L13.2625 4.80607C13.3697 4.40597 13.781 4.16854 14.1811 4.27574Z", "fill": "#1C274C"}]], "outline": [["path", {"d": "M14.1809 4.27574C14.581 4.38295 14.8185 4.7942 14.7113 5.1943L10.7377 20.024C10.6304 20.4241 10.2192 20.6615 9.81909 20.5543C9.41899 20.4471 9.18156 20.0359 9.28876 19.6358L13.2624 4.80607C13.3696 4.40597 13.7808 4.16854 14.1809 4.27574Z", "fill": "#FEFEFF"}], ["path", {"d": "M16.4425 7.32805C16.7196 7.02017 17.1938 6.99521 17.5017 7.27231L19.2392 8.83605C19.9756 9.49871 20.5864 10.0484 21.0058 10.547C21.4468 11.0712 21.7603 11.6345 21.7603 12.3298C21.7603 13.0251 21.4468 13.5883 21.0058 14.1126C20.5864 14.6112 19.9756 15.1608 19.2392 15.8235L17.5017 17.3872C17.1938 17.6643 16.7196 17.6394 16.4425 17.3315C16.1654 17.0236 16.1904 16.5494 16.4983 16.2723L18.1947 14.7455C18.9826 14.0364 19.5138 13.556 19.8579 13.147C20.1882 12.7544 20.2603 12.5252 20.2603 12.3298C20.2603 12.1344 20.1882 11.9052 19.8579 11.5126C19.5138 11.1036 18.9826 10.6232 18.1947 9.91407L16.4983 8.38725C16.1904 8.11015 16.1654 7.63594 16.4425 7.32805Z", "fill": "#FEFEFF"}], ["path", {"d": "M7.50178 8.38725C7.80966 8.11015 7.83462 7.63594 7.55752 7.32805C7.28043 7.02017 6.80621 6.99521 6.49833 7.27231L4.76084 8.83605C4.0245 9.49871 3.41369 10.0484 2.99428 10.547C2.55325 11.0712 2.23975 11.6345 2.23975 12.3298C2.23975 13.0251 2.55325 13.5883 2.99428 14.1126C3.41369 14.6111 4.02449 15.1608 4.76082 15.8235L6.49833 17.3872C6.80621 17.6643 7.28043 17.6394 7.55752 17.3315C7.83462 17.0236 7.80966 16.5494 7.50178 16.2723L5.80531 14.7455C5.01743 14.0364 4.48623 13.556 4.14213 13.147C3.81188 12.7544 3.73975 12.5252 3.73975 12.3298C3.73975 12.1344 3.81188 11.9052 4.14213 11.5126C4.48623 11.1036 5.01743 10.6232 5.80531 9.91407L7.50178 8.38725Z", "fill": "#FEFEFF"}]]};

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

const CodeOutline = React.forwardRef((props, ref) => {
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

const CodeBold = React.forwardRef((props, ref) => {
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

const CodeBoldDuotone = React.forwardRef((props, ref) => {
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

const Code = CodeOutline;

module.exports = {
  iconName,
  category,
  nodes,
  Code,
  CodeOutline,
  CodeBold,
  CodeBoldDuotone,
  default: Code
};
