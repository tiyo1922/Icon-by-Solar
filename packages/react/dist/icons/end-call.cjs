const React = require('react');

const iconName = 'end-call';
const category = 'Call';
const nodes = {"bold": [["path", {"d": "M8 13.4782L8 12.8617C8 12.8617 8 11.3963 12 11.3963C16 11.3963 16 12.8617 16 12.8617V13.25C16 14.2064 16.7227 15.0192 17.7004 15.1625L19.7004 15.4556C20.9105 15.6329 22 14.7267 22 13.5429V11.4183C22 10.8313 21.8162 10.2542 21.3703 9.85601C20.2296 8.83732 17.4208 7 12 7C6.25141 7 3.44027 9.58269 2.44083 10.7889C2.1247 11.1704 2 11.6525 2 12.1414L2 14.0643C2 15.3623 3.29561 16.292 4.57997 15.9156L6.57997 15.3295C7.42329 15.0823 8 14.3305 8 13.4782Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M8 12.8625L8 13.479C8 14.3312 7.42329 15.0831 6.57997 15.3302L4.57997 15.9164C3.29561 16.2927 2 15.3631 2 14.0651L2 12.1422C2 11.6533 2.1247 11.1712 2.44083 10.7897C3.17325 9.90571 4.87862 8.28254 8 7.47831V12.8625ZM16 12.8625V13.2507C16 14.2071 16.7227 15.02 17.7004 15.1633L19.7004 15.4563C20.9105 15.6337 22 14.7275 22 13.5437V11.419C22 10.8321 21.8162 10.255 21.3703 9.85677C20.5528 9.1267 18.8785 7.97616 16 7.38281V12.8625Z", "fill": "#1C274C"}], ["path", {"opacity": "0.5", "d": "M12 11.3963C16 11.3963 16 12.8617 16 12.8617V7.38205C14.862 7.14749 13.5359 7 12 7C10.4641 7 9.13797 7.18435 8 7.47755V12.8617C8 12.8617 8 11.3963 12 11.3963Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 7.75C6.51318 7.75 3.90179 10.2012 3.01834 11.2674C2.84345 11.4785 2.75 11.7741 2.75 12.1414L2.75 14.0643C2.75 14.8281 3.5319 15.4412 4.36905 15.1959L6.36905 14.6097C6.90669 14.4522 7.25 13.9833 7.25 13.4782L7.25 12.8617L8 12.8617C7.25 12.8617 7.25 12.8607 7.25 12.8597L7.25001 12.8576L7.25004 12.8534L7.25019 12.8444L7.25085 12.8245C7.25147 12.8104 7.25248 12.7946 7.25406 12.7773C7.25722 12.7426 7.26263 12.7016 7.27167 12.6552C7.2898 12.5622 7.32239 12.4484 7.37982 12.3222C7.49703 12.0645 7.7059 11.7811 8.05672 11.524C8.74267 11.0214 9.93056 10.6463 12 10.6463C14.0694 10.6463 15.2573 11.0214 15.9433 11.524C16.2941 11.7811 16.503 12.0645 16.6202 12.3222C16.6776 12.4484 16.7102 12.5622 16.7283 12.6552C16.7374 12.7016 16.7428 12.7426 16.7459 12.7773C16.7475 12.7946 16.7485 12.8104 16.7492 12.8245L16.7498 12.8444L16.75 12.8534L16.75 12.8576L16.75 12.8597C16.75 12.8607 16.75 12.8617 16 12.8617H16.75V13.25C16.75 13.8157 17.1811 14.3284 17.8091 14.4204L19.8091 14.7135C20.5953 14.8287 21.25 14.2406 21.25 13.5429V11.4183C21.25 10.9778 21.1133 10.632 20.8708 10.4154C19.8648 9.51708 17.233 7.75 12 7.75ZM15.25 12.9335V13.25C15.25 14.5971 16.2642 15.71 17.5916 15.9046L19.5916 16.1977C21.2257 16.4371 22.75 15.2128 22.75 13.5429V11.4183C22.75 10.6848 22.5191 9.87638 21.8699 9.29661C20.5944 8.15756 17.6087 6.25 12 6.25C5.98964 6.25 2.97874 8.96419 1.86331 10.3104C1.40595 10.8624 1.25 11.5309 1.25 12.1414L1.25 14.0643C1.25 15.8966 3.05932 17.1428 4.7909 16.6353L6.7909 16.0492C7.93988 15.7125 8.75 14.6777 8.75 13.4782L8.75 12.9335C8.76534 12.9044 8.8133 12.8292 8.94328 12.734C9.25733 12.5039 10.0694 12.1463 12 12.1463C13.9306 12.1463 14.7427 12.5039 15.0567 12.734C15.1867 12.8292 15.2347 12.9044 15.25 12.9335Z", "fill": "white"}]]};

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

const EndCallOutline = React.forwardRef((props, ref) => {
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

const EndCallBold = React.forwardRef((props, ref) => {
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

const EndCallBoldDuotone = React.forwardRef((props, ref) => {
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

const EndCall = EndCallOutline;

module.exports = {
  iconName,
  category,
  nodes,
  EndCall,
  EndCallOutline,
  EndCallBold,
  EndCallBoldDuotone,
  default: EndCall
};
