import React from 'react';

export const iconName = 'leaf';
export const category = 'Nature, Travel';
export const nodes = {"bold": [["path", {"d": "M11.25 2.08203C11.0066 2.13629 10.7675 2.21727 10.5371 2.32499C6.55332 4.18703 4 9.39397 4 13.8561C4 18.0961 7.18341 21.5793 11.25 21.9641V2.08203Z", "fill": "#1C274C"}], ["path", {"d": "M12.75 21.9641C16.8166 21.5793 20 18.0961 20 13.8561C20 13.4501 19.9789 13.0379 19.9374 12.6227L12.75 19.8101V21.9641Z", "fill": "#1C274C"}], ["path", {"d": "M18.2597 7.17909C17.8707 6.45427 17.4222 5.7676 16.92 5.14013L12.75 9.3101V12.6888L18.2597 7.17909Z", "fill": "#1C274C"}], ["path", {"d": "M15.9084 4.03034C15.1732 3.3251 14.3538 2.7414 13.4629 2.32499C13.2325 2.21727 12.9934 2.13629 12.75 2.08203V7.18878L15.9084 4.03034Z", "fill": "#1C274C"}], ["path", {"d": "M18.9364 8.62366L12.75 14.8101V17.6888L19.5 10.9388L19.6319 10.8069C19.458 10.0692 19.2246 9.33578 18.9364 8.62366Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 22C7.58172 22 4 18.3541 4 13.8567C4 9.39453 6.55332 4.18759 10.5371 2.32555C11.0014 2.10852 11.5007 2 12 2V22Z", "fill": "#1C274C"}], ["path", {"opacity": "0.3", "d": "M13.4629 2.32555C12.9986 2.10852 12.4993 2 12 2V9.00006L16.4317 4.56841C15.5689 3.62059 14.5713 2.84361 13.4629 2.32555Z", "fill": "#1C274C"}], ["path", {"opacity": "0.4", "d": "M12 9.00001V14.5L18.6142 7.88572C18.0421 6.66554 17.3062 5.52917 16.4317 4.56836L12 9.00001Z", "fill": "#1C274C"}], ["path", {"opacity": "0.6", "d": "M12 19.501L19.811 11.69C19.5911 10.3995 19.1838 9.10158 18.6142 7.88672L12 14.501V19.501Z", "fill": "#1C274C"}], ["path", {"opacity": "0.7", "d": "M19.811 11.6895L12 19.5005V22.0004C16.4183 22.0004 20 18.3545 20 13.8571C20 13.1479 19.9355 12.4199 19.811 11.6895Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M10.2195 1.64611C10.7841 1.38221 11.3919 1.25 12 1.25C12.6081 1.25 13.2159 1.38221 13.7805 1.64611C15.9556 2.66278 17.6944 4.56688 18.8844 6.75814C20.076 8.95209 20.75 11.4916 20.75 13.8567C20.75 18.7557 16.845 22.75 12 22.75C7.15501 22.75 3.25 18.7557 3.25 13.8567C3.25 11.4916 3.92403 8.95209 5.11556 6.75814C6.30562 4.56688 8.04437 2.66278 10.2195 1.64611ZM11.25 2.85638C11.1157 2.89525 10.9835 2.94478 10.8546 3.005C9.04602 3.85036 7.51624 5.48075 6.4337 7.47402C5.35263 9.46459 4.75 11.7596 4.75 13.8567C4.75 17.6927 7.60821 20.8285 11.25 21.2108V2.85638ZM12.75 2.85638V7.18934L15.378 4.56137C14.6988 3.91209 13.9496 3.38092 13.1454 3.005C13.0165 2.94478 12.8843 2.89525 12.75 2.85638ZM16.3862 5.67443L12.75 9.31066V12.6893L17.7044 7.73496C17.6593 7.64743 17.6132 7.56044 17.5663 7.47402C17.2175 6.83177 16.8223 6.2272 16.3862 5.67443ZM18.3577 9.20294L12.75 14.8107V17.6893L18.9696 11.4697L19.0175 11.5176C18.8669 10.7404 18.6451 9.96116 18.3577 9.20294ZM19.2373 13.3234L12.75 19.8107V21.2108C16.3918 20.8285 19.25 17.6927 19.25 13.8567C19.25 13.6802 19.2457 13.5024 19.2373 13.3234Z", "fill": "white"}]]};

function renderNodes(variantNodes, color = 'currentColor', secondaryColor, secondaryOpacity) {
  return variantNodes.map(([tag, attrs], index) => {
    const computed = { ...attrs };
    if (color !== 'original' && color !== 'source') {
      if ('opacity' in attrs) {
        computed.opacity = secondaryOpacity ?? attrs.opacity;
        computed.fill = secondaryColor || color;
      } else if (attrs.fill && attrs.fill !== 'none' && attrs.fill !== 'transparent') {
        const isWhite = attrs.fill === 'white' || attrs.fill === '#FEFEFF' || attrs.fill === '#FBFCFF';
        if (!isWhite || variantNodes.length === 1) computed.fill = color;
      }
      if (attrs.stroke && attrs.stroke !== 'none') computed.stroke = color;
    }
    return React.createElement(tag, { key: index, ...computed });
  });
}

export const LeafOutline = React.forwardRef((props, ref) => {
  const { size = 24, color = 'currentColor', secondaryColor, secondaryOpacity, className, style, title, ...rest } = props;
  return React.createElement('svg', {
    ref,
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className,
    style: { display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, ...style },
    'aria-hidden': title ? undefined : 'true',
    role: title ? 'img' : 'presentation',
    ...rest
  }, title && React.createElement('title', null, title), ...renderNodes(nodes['outline'] || [], color, secondaryColor, secondaryOpacity));
});

export const LeafBold = React.forwardRef((props, ref) => {
  const { size = 24, color = 'currentColor', secondaryColor, secondaryOpacity, className, style, title, ...rest } = props;
  return React.createElement('svg', {
    ref,
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className,
    style: { display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, ...style },
    'aria-hidden': title ? undefined : 'true',
    role: title ? 'img' : 'presentation',
    ...rest
  }, title && React.createElement('title', null, title), ...renderNodes(nodes['bold'] || [], color, secondaryColor, secondaryOpacity));
});

export const LeafBoldDuotone = React.forwardRef((props, ref) => {
  const { size = 24, color = 'currentColor', secondaryColor, secondaryOpacity, className, style, title, ...rest } = props;
  return React.createElement('svg', {
    ref,
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className,
    style: { display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, ...style },
    'aria-hidden': title ? undefined : 'true',
    role: title ? 'img' : 'presentation',
    ...rest
  }, title && React.createElement('title', null, title), ...renderNodes(nodes['bold-duotone'] || [], color, secondaryColor, secondaryOpacity));
});

export const Leaf = LeafOutline;
export default Leaf;
