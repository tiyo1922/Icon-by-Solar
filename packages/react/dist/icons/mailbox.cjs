const React = require('react');

const iconName = 'mailbox';
const category = 'Messages, Conversation';
const nodes = {"bold": [["path", {"d": "M9.5 20V22C9.5 22.4142 9.83579 22.75 10.25 22.75C10.6642 22.75 11 22.4142 11 22V20H9.5Z", "fill": "#1C274C"}], ["path", {"d": "M15 20H13.5V22C13.5 22.4142 13.8358 22.75 14.25 22.75C14.6642 22.75 15 22.4142 15 22V20Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M17.3846 6.58471L17.6407 6.53344C18.0564 6.45022 18.4863 6.48995 18.8814 6.64813C19.5717 6.92453 20.3266 6.97616 21.0458 6.79618L21.1073 6.7808C21.6309 6.64975 22 6.16299 22 5.60336V3.47284C22 2.73503 21.3358 2.19145 20.6454 2.36421C20.249 2.46342 19.8329 2.43496 19.4523 2.28261L19.3793 2.25335C18.7422 1.99828 18.0491 1.93421 17.3787 2.06841L16.93 2.15824C16.3901 2.26632 16 2.75722 16 3.32846V10.2807C16 10.678 16.31 11 16.6923 11C17.0747 11 17.3846 10.678 17.3846 10.2807V6.58471Z", "fill": "#1C274C"}], ["path", {"d": "M14.5 6V10.2807C14.5 11.4518 15.428 12.5 16.6923 12.5C17.9566 12.5 18.8846 11.4518 18.8846 10.2807V8.22795C19.6455 8.43335 20.4446 8.45735 21.22 8.29496C21.7122 9.13671 22 10.1541 22 11.25V17.4253C22 18.8473 21.0119 20 19.7931 20H12.5V11.25C12.5 9.22014 11.6679 7.27604 10.2826 6H14.5Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M2 11.25C2 8.35051 4.01472 6 6.5 6C8.98528 6 11 8.35051 11 11.25V20H4.23256C2.99955 20 2 18.8339 2 17.3953V11.25ZM4.25 16C4.25 15.5858 4.58579 15.25 5 15.25H8C8.41421 15.25 8.75 15.5858 8.75 16C8.75 16.4142 8.41421 16.75 8 16.75H5C4.58579 16.75 4.25 16.4142 4.25 16Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "d": "M2 11.25C2 8.35051 4.01472 6 6.5 6C8.98528 6 11 8.35051 11 11.25V20H4.23256C2.99955 20 2 18.8339 2 17.3953V11.25Z", "fill": "#1C274C"}], ["path", {"opacity": "0.8", "d": "M11 11.25V20H14H15H19.7931C21.0119 20 22 18.8473 22 17.4253V11.25C22 8.35051 19.9853 6 17.5 6H6.5C8.98528 6 11 8.35051 11 11.25Z", "fill": "#1C274C"}], ["path", {"d": "M9.5 20V22C9.5 22.4142 9.83579 22.75 10.25 22.75C10.6642 22.75 11 22.4142 11 22V20H9.5Z", "fill": "#1C274C"}], ["path", {"d": "M15 20H13.5V22C13.5 22.4142 13.8358 22.75 14.25 22.75C14.6642 22.75 15 22.4142 15 22V20Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M4.25 16C4.25 15.5858 4.58579 15.25 5 15.25H8C8.41421 15.25 8.75 15.5858 8.75 16C8.75 16.4142 8.41421 16.75 8 16.75H5C4.58579 16.75 4.25 16.4142 4.25 16Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M17.3846 6.58471L17.6407 6.53344C18.0564 6.45022 18.4863 6.48995 18.8814 6.64813C19.5717 6.92453 20.3266 6.97616 21.0458 6.79618L21.1073 6.7808C21.6309 6.64975 22 6.16299 22 5.60336V3.47284C22 2.73503 21.3358 2.19145 20.6454 2.36421C20.249 2.46342 19.8329 2.43496 19.4523 2.28261L19.3793 2.25335C18.7422 1.99828 18.0491 1.93421 17.3787 2.06841L16.93 2.15824C16.3901 2.26632 16 2.75722 16 3.32846V10.2807C16 10.678 16.31 11 16.6923 11C17.0747 11 17.3846 10.678 17.3846 10.2807V6.58471Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M18.3715 3.03101C17.9435 2.86608 17.4778 2.82464 17.0274 2.91143L16.75 2.96488V4.62009C17.4742 4.48178 18.2228 4.54898 18.9109 4.81415C19.338 4.97875 19.8019 5.02008 20.25 4.93468V3.27638C19.6437 3.35574 19.025 3.28287 18.4506 3.06152L18.3715 3.03101ZM16.75 6.14767L17.0274 6.09422C17.4778 6.00744 17.9435 6.04887 18.3715 6.21381C19.1193 6.50201 19.9371 6.55585 20.7163 6.36818L20.7829 6.35214C21.3502 6.2155 21.75 5.70795 21.75 5.12442V2.90292C21.75 2.1336 21.0305 1.56681 20.2825 1.74695C19.8531 1.8504 19.4023 1.82072 18.99 1.66186L18.9109 1.63135C18.2207 1.3654 17.4698 1.29858 16.7436 1.43852L16.2575 1.53218C15.6726 1.64488 15.25 2.15674 15.25 2.75237V6.25151H7C6.95339 6.25151 6.90777 6.25576 6.86352 6.2639C6.74341 6.25569 6.62219 6.25151 6.5 6.25151C3.6005 6.25151 1.25 8.60202 1.25 11.5015V16.769C1.25 18.4162 2.58534 19.7515 4.23256 19.7515H9.75V22.0015C9.75 22.4157 10.0858 22.7515 10.5 22.7515C10.9142 22.7515 11.25 22.4157 11.25 22.0015V19.7515H13.75V22.0015C13.75 22.4157 14.0858 22.7515 14.5 22.7515C14.9142 22.7515 15.25 22.4157 15.25 22.0015V19.7515H19.7931C21.4261 19.7515 22.75 18.4277 22.75 16.7946V11.5015C22.75 8.60202 20.3995 6.25151 17.5 6.25151H16.75V6.14767ZM15.25 7.75151V11.0015C15.25 11.4157 15.5858 11.7515 16 11.7515C16.4142 11.7515 16.75 11.4157 16.75 11.0015V7.75151H17.5C19.5711 7.75151 21.25 9.43044 21.25 11.5015V16.7946C21.25 17.5992 20.5977 18.2515 19.7931 18.2515H11.75V11.5015C11.75 10.0325 11.1466 8.7044 10.1742 7.75151H15.25ZM10.25 18.2515V11.5015C10.25 9.43044 8.57107 7.75151 6.5 7.75151C4.42893 7.75151 2.75 9.43044 2.75 11.5015V16.769C2.75 17.5877 3.41376 18.2515 4.23256 18.2515H10.25ZM4.25 16.0015C4.25 15.5873 4.58579 15.2515 5 15.2515H8C8.41421 15.2515 8.75 15.5873 8.75 16.0015C8.75 16.4157 8.41421 16.7515 8 16.7515H5C4.58579 16.7515 4.25 16.4157 4.25 16.0015Z", "fill": "white"}]]};

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

const MailboxOutline = React.forwardRef((props, ref) => {
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

const MailboxBold = React.forwardRef((props, ref) => {
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

const MailboxBoldDuotone = React.forwardRef((props, ref) => {
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

const Mailbox = MailboxOutline;

module.exports = {
  iconName,
  category,
  nodes,
  Mailbox,
  MailboxOutline,
  MailboxBold,
  MailboxBoldDuotone,
  default: Mailbox
};
