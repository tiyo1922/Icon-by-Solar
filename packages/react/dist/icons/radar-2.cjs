const React = require('react');

const iconName = 'radar-2';
const category = 'Map & Location';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.3584 6.93033C12.604 6.72817 11.8458 6.70116 11.1255 6.82338C10.7171 6.89267 10.3299 6.61779 10.2606 6.20941C10.1913 5.80103 10.4662 5.41381 10.8745 5.34452C11.8033 5.18693 12.7796 5.22232 13.7466 5.48144C17.3467 6.44608 19.4832 10.1465 18.5186 13.7466C17.5539 17.3467 13.8535 19.4832 10.2534 18.5186C6.65325 17.5539 4.51679 13.8535 5.48144 10.2534C5.67232 9.54098 5.97096 8.8846 6.35561 8.29795C6.80849 7.60723 7.71251 7.56491 8.27405 8.01941L12.4718 11.417C12.7938 11.6776 12.8436 12.1499 12.583 12.4718C12.3224 12.7938 11.8501 12.8436 11.5282 12.583L9.39091 10.8531C9.2365 11.2038 9.15089 11.5916 9.15089 12C9.15089 13.5735 10.4265 14.8491 12 14.8491C13.5735 14.8491 14.8491 13.5735 14.8491 12C14.8491 10.4265 13.5735 9.15089 12 9.15089C11.5858 9.15089 11.25 8.81511 11.25 8.40089C11.25 7.98668 11.5858 7.65089 12 7.65089C14.4019 7.65089 16.3491 9.59805 16.3491 12C16.3491 14.4019 14.4019 16.3491 12 16.3491C9.59805 16.3491 7.65089 14.4019 7.65089 12C7.65089 11.2339 7.8495 10.5131 8.19774 9.8874L7.48915 9.31389C7.2486 9.7184 7.0586 10.1629 6.93033 10.6416C6.1801 13.4415 7.84168 16.3194 10.6416 17.0697C13.4415 17.8199 16.3194 16.1583 17.0697 13.3584C17.8199 10.5585 16.1583 7.68056 13.3584 6.93033Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", "fill": "#1C274C"}], ["path", {"d": "M11.1256 6.82338C11.846 6.70116 12.6041 6.72817 13.3586 6.93033C16.1585 7.68056 17.8201 10.5585 17.0699 13.3584C16.3196 16.1583 13.4417 17.8199 10.6418 17.0697C7.84187 16.3194 6.18028 13.4415 6.93051 10.6416C7.05878 10.1629 7.24878 9.7184 7.48934 9.31389L8.19792 9.8874C7.84968 10.5131 7.65108 11.2339 7.65108 12C7.65108 14.4019 9.59824 16.3491 12.0002 16.3491C14.4021 16.3491 16.3493 14.4019 16.3493 12C16.3493 9.59805 14.4021 7.65089 12.0002 7.65089C11.586 7.65089 11.2502 7.98668 11.2502 8.40089C11.2502 8.81511 11.586 9.15089 12.0002 9.15089C13.5737 9.15089 14.8493 10.4265 14.8493 12C14.8493 13.5735 13.5737 14.8491 12.0002 14.8491C10.4267 14.8491 9.15108 13.5735 9.15108 12C9.15108 11.5916 9.23669 11.2038 9.3911 10.8531L11.5283 12.583C11.8503 12.8436 12.3226 12.7938 12.5832 12.4718C12.8438 12.1499 12.794 11.6776 12.472 11.417L8.27423 8.01941C7.7127 7.56491 6.80868 7.60723 6.3558 8.29795C5.97114 8.8846 5.67251 9.54098 5.48162 10.2534C4.51698 13.8535 6.65344 17.5539 10.2535 18.5186C13.8536 19.4832 17.5541 17.3467 18.5187 13.7466C19.4834 10.1465 17.3469 6.44608 13.7468 5.48144C12.7798 5.22232 11.8035 5.18693 10.8747 5.34452C10.4664 5.41381 10.1915 5.80103 10.2608 6.20941C10.33 6.61779 10.7173 6.89267 11.1256 6.82338Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M14.3941 3.0638C11.9587 2.41124 9.49125 2.7934 7.45537 3.942C7.09461 4.14553 6.63716 4.01807 6.43363 3.65731C6.2301 3.29655 6.35755 2.8391 6.71831 2.63557C9.08232 1.30186 11.9525 0.856671 14.7823 1.61491C20.517 3.15153 23.9203 9.04616 22.3837 14.7809C20.8471 20.5157 14.9524 23.9189 9.21768 22.3823C3.48292 20.8457 0.0796552 14.9511 1.61628 9.21631C1.92054 8.08078 2.39631 7.03536 3.00873 6.10132C3.58273 5.22587 4.74051 5.15806 5.47376 5.75154L12.4718 11.4156C12.7938 11.6762 12.8436 12.1485 12.583 12.4705C12.3224 12.7924 11.8501 12.8422 11.5281 12.5816L7.48843 9.31193C7.01928 10.0978 6.74998 11.0161 6.74998 11.9986C6.74998 14.8981 9.10049 17.2486 12 17.2486C14.8995 17.2486 17.25 14.8981 17.25 11.9986C17.25 9.09912 14.8995 6.74861 12 6.74861C11.4185 6.74861 10.8606 6.84285 10.3398 7.01631C9.94678 7.14719 9.5221 6.93471 9.39122 6.54172C9.26034 6.14873 9.47282 5.72404 9.86581 5.59316C10.5375 5.36945 11.2554 5.24861 12 5.24861C15.7279 5.24861 18.75 8.27069 18.75 11.9986C18.75 15.7265 15.7279 18.7486 12 18.7486C8.27206 18.7486 5.24998 15.7265 5.24998 11.9986C5.24998 10.6597 5.64044 9.41069 6.31328 8.36079L4.53007 6.91749C4.47423 6.87229 4.41139 6.85872 4.3615 6.86474C4.31608 6.87023 4.28531 6.88996 4.26313 6.9238C3.73714 7.72602 3.32761 8.62511 3.06517 9.60454C1.74296 14.5391 4.67134 19.6112 9.60591 20.9334C14.5405 22.2556 19.6126 19.3273 20.9348 14.3927C22.257 9.45813 19.3286 4.38601 14.3941 3.0638Z", "fill": "white"}]]};

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

const Radar2Outline = React.forwardRef((props, ref) => {
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

const Radar2Bold = React.forwardRef((props, ref) => {
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

const Radar2BoldDuotone = React.forwardRef((props, ref) => {
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

const Radar2 = Radar2Outline;

module.exports = {
  iconName,
  category,
  nodes,
  Radar2,
  Radar2Outline,
  Radar2Bold,
  Radar2BoldDuotone,
  default: Radar2
};
