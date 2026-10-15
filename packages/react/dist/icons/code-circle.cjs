const React = require('react');

const iconName = 'code-circle';
const category = 'Network, IT, Programming';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM13.4881 6.44591C13.8882 6.55311 14.1256 6.96437 14.0184 7.36447L11.4302 17.0237C11.323 17.4238 10.9117 17.6613 10.5116 17.5541C10.1115 17.4468 9.8741 17.0356 9.98131 16.6355L12.5695 6.97624C12.6767 6.57614 13.088 6.3387 13.4881 6.44591ZM14.9697 8.46967C15.2626 8.17678 15.7374 8.17678 16.0303 8.46967L16.2387 8.67801C16.874 9.3133 17.4038 9.84308 17.7678 10.3202C18.1521 10.8238 18.4216 11.3559 18.4216 12C18.4216 12.6441 18.1521 13.1762 17.7678 13.6798C17.4038 14.1569 16.874 14.6867 16.2387 15.322L16.0303 15.5303C15.7374 15.8232 15.2626 15.8232 14.9697 15.5303C14.6768 15.2374 14.6768 14.7626 14.9697 14.4697L15.1412 14.2981C15.8229 13.6164 16.2797 13.1574 16.5753 12.7699C16.8577 12.3998 16.9216 12.1843 16.9216 12C16.9216 11.8157 16.8577 11.6002 16.5753 11.2301C16.2797 10.8426 15.8229 10.3836 15.1412 9.70191L14.9697 9.53033C14.6768 9.23744 14.6768 8.76257 14.9697 8.46967ZM7.96986 8.46967C8.26275 8.17678 8.73762 8.17678 9.03052 8.46967C9.32341 8.76257 9.32341 9.23744 9.03052 9.53033L8.85894 9.70191C8.17729 10.3836 7.72052 10.8426 7.42488 11.2301C7.14245 11.6002 7.07861 11.8157 7.07861 12C7.07861 12.1843 7.14245 12.3998 7.42488 12.7699C7.72052 13.1574 8.17729 13.6164 8.85894 14.2981L9.03052 14.4697C9.32341 14.7626 9.32341 15.2374 9.03052 15.5303C8.73762 15.8232 8.26275 15.8232 7.96986 15.5303L7.76151 15.322C7.12617 14.6867 6.59638 14.1569 6.23235 13.6798C5.84811 13.1762 5.57861 12.6441 5.57861 12C5.57861 11.3559 5.84811 10.8238 6.23235 10.3202C6.59638 9.84308 7.12617 9.31331 7.76151 8.67801L7.96986 8.46967Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", "fill": "#1C274C"}], ["path", {"d": "M13.4881 6.44566C13.8882 6.55287 14.1256 6.96412 14.0184 7.36422L11.4302 17.0235C11.323 17.4236 10.9117 17.661 10.5116 17.5538C10.1115 17.4466 9.8741 17.0354 9.98131 16.6353L12.5695 6.97599C12.6767 6.57589 13.088 6.33846 13.4881 6.44566Z", "fill": "#1C274C"}], ["path", {"d": "M14.9697 8.46943C15.2626 8.17654 15.7374 8.17654 16.0303 8.46943L16.2387 8.67777C16.874 9.31305 17.4038 9.84284 17.7678 10.3199C18.1521 10.8236 18.4216 11.3556 18.4216 11.9998C18.4216 12.6439 18.1521 13.176 17.7678 13.6796C17.4038 14.1567 16.874 14.6864 16.2387 15.3217L16.0303 15.5301C15.7374 15.823 15.2626 15.823 14.9697 15.5301C14.6768 15.2372 14.6768 14.7623 14.9697 14.4694L15.1412 14.2979C15.8229 13.6162 16.2797 13.1572 16.5753 12.7697C16.8577 12.3995 16.9216 12.1841 16.9216 11.9998C16.9216 11.8155 16.8577 11.6 16.5753 11.2298C16.2797 10.8423 15.8229 10.3833 15.1412 9.70166L14.9697 9.53009C14.6768 9.2372 14.6768 8.76232 14.9697 8.46943Z", "fill": "#1C274C"}], ["path", {"d": "M7.96986 8.46943C8.26275 8.17654 8.73762 8.17654 9.03052 8.46943C9.32341 8.76232 9.32341 9.2372 9.03052 9.53009L8.85894 9.70166C8.17729 10.3833 7.72052 10.8423 7.42488 11.2298C7.14245 11.6 7.07861 11.8155 7.07861 11.9998C7.07861 12.1841 7.14245 12.3995 7.42488 12.7697C7.72052 13.1572 8.17729 13.6162 8.85894 14.2979L9.03052 14.4694C9.32341 14.7623 9.32341 15.2372 9.03052 15.5301C8.73762 15.823 8.26275 15.823 7.96986 15.5301L7.76151 15.3217C7.12617 14.6864 6.59638 14.1567 6.23235 13.6796C5.84811 13.176 5.57861 12.6439 5.57861 11.9998C5.57861 11.3556 5.84811 10.8236 6.23235 10.3199C6.59638 9.84283 7.12617 9.31307 7.76151 8.67777L7.96986 8.46943Z", "fill": "#1C274C"}]], "outline": [["path", {"d": "M16.0303 8.46967C15.7374 8.17678 15.2626 8.17678 14.9697 8.46967C14.6768 8.76256 14.6768 9.23744 14.9697 9.53033L15.1412 9.7019C15.8229 10.3836 16.2797 10.8426 16.5753 11.2301C16.8577 11.6002 16.9216 11.8157 16.9216 12C16.9216 12.1843 16.8577 12.3998 16.5753 12.7699C16.2797 13.1574 15.8229 13.6164 15.1412 14.2981L14.9697 14.4697C14.6768 14.7626 14.6768 15.2374 14.9697 15.5303C15.2626 15.8232 15.7374 15.8232 16.0303 15.5303L16.2387 15.322C16.874 14.6867 17.4038 14.1569 17.7678 13.6798C18.1521 13.1762 18.4216 12.6441 18.4216 12C18.4216 11.3559 18.1521 10.8238 17.7678 10.3202C17.4038 9.84307 16.874 9.31331 16.2387 8.67801L16.0303 8.46967Z", "fill": "#FEFEFF"}], ["path", {"d": "M13.4881 6.4459C13.8882 6.55311 14.1256 6.96436 14.0184 7.36446L11.4302 17.0237C11.323 17.4238 10.9117 17.6613 10.5116 17.5541C10.1115 17.4468 9.8741 17.0356 9.98131 16.6355L12.5695 6.97623C12.6767 6.57614 13.088 6.3387 13.4881 6.4459Z", "fill": "#FEFEFF"}], ["path", {"d": "M9.03052 8.46967C8.73762 8.17678 8.26275 8.17678 7.96986 8.46967L7.76151 8.67801C7.12618 9.31331 6.59637 9.84307 6.23235 10.3202C5.84811 10.8238 5.57861 11.3559 5.57861 12C5.57861 12.6441 5.84811 13.1762 6.23235 13.6798C6.59637 14.1569 7.12616 14.6867 7.7615 15.322L7.96986 15.5303C8.26275 15.8232 8.73762 15.8232 9.03052 15.5303C9.32341 15.2374 9.32341 14.7626 9.03052 14.4697L8.85894 14.2981C8.17729 13.6164 7.72052 13.1574 7.42488 12.7699C7.14245 12.3998 7.07861 12.1843 7.07861 12C7.07861 11.8157 7.14245 11.6002 7.42488 11.2301C7.72052 10.8426 8.17729 10.3836 8.85894 9.7019L9.03052 9.53033C9.32341 9.23744 9.32341 8.76256 9.03052 8.46967Z", "fill": "#FEFEFF"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z", "fill": "#FEFEFF"}]]};

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

const CodeCircleOutline = React.forwardRef((props, ref) => {
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

const CodeCircleBold = React.forwardRef((props, ref) => {
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

const CodeCircleBoldDuotone = React.forwardRef((props, ref) => {
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

const CodeCircle = CodeCircleOutline;

module.exports = {
  iconName,
  category,
  nodes,
  CodeCircle,
  CodeCircleOutline,
  CodeCircleBold,
  CodeCircleBoldDuotone,
  default: CodeCircle
};
