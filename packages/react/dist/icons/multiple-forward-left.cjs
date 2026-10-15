const React = require('react');

const iconName = 'multiple-forward-left';
const category = 'Messages, Conversation';
const nodes = {"bold": [["path", {"d": "M12.4751 5.18355L7.49731 9.60829C6.56674 10.4355 6.10145 10.8491 5.92997 11.3374C5.77939 11.7663 5.77939 12.2337 5.92997 12.6626C6.10145 13.1509 6.56674 13.5645 7.49731 14.3917L12.4751 18.8165C12.8974 19.1918 13.1086 19.3795 13.2879 19.3862C13.4437 19.3921 13.5934 19.3249 13.6925 19.2046C13.8066 19.0661 13.8066 18.7835 13.8066 18.2185V15.4286C16.2347 15.4286 18.7993 16.2084 20.6719 17.5928C21.6468 18.3135 22.1343 18.6739 22.3199 18.6596C22.5009 18.6458 22.6158 18.5751 22.7097 18.4198C22.806 18.2604 22.7209 17.7625 22.5507 16.7667C21.4458 10.3006 16.9958 8.57143 13.8066 8.57143V5.78148C13.8066 5.21646 13.8066 4.93396 13.6925 4.79545C13.5934 4.67513 13.4437 4.60794 13.2879 4.61378C13.1086 4.62049 12.8974 4.80818 12.4751 5.18355Z", "fill": "#1C274C"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M9.81777 3.98966C9.53592 3.68613 9.06137 3.66856 8.75784 3.95041L3.54163 8.79403C2.5947 9.67333 2.05664 10.9072 2.05664 12.1994C2.05664 13.5616 2.65432 14.8553 3.69163 15.7382L8.78205 20.0711C9.09747 20.3396 9.57081 20.3016 9.8393 19.9861C10.1078 19.6707 10.0697 19.1974 9.75431 18.9289L4.66389 14.596C3.9614 13.998 3.55664 13.122 3.55664 12.1994C3.55664 11.3243 3.92102 10.4887 4.56231 9.89322L9.77852 5.0496C10.082 4.76775 10.0996 4.2932 9.81777 3.98966Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"d": "M12.475 5.18341L7.49717 9.60815C6.56659 10.4353 6.1013 10.8489 5.92983 11.3373C5.77925 11.7662 5.77925 12.2335 5.92983 12.6624C6.1013 13.1508 6.56659 13.5644 7.49717 14.3916L12.475 18.8163C12.8973 19.1917 13.1085 19.3794 13.2878 19.3861C13.4436 19.3919 13.5932 19.3247 13.6924 19.2044C13.8065 19.0659 13.8065 18.7834 13.8065 18.2184V15.4284C16.2346 15.4284 18.7991 16.2083 20.6718 17.5926C21.6467 18.3133 22.1341 18.6737 22.3198 18.6595C22.5008 18.6456 22.6156 18.575 22.7095 18.4196C22.8058 18.2603 22.7208 17.7624 22.5506 16.7666C21.4456 10.3004 16.9956 8.57129 13.8065 8.57129V5.78134C13.8065 5.21632 13.8065 4.93381 13.6924 4.79531C13.5932 4.67498 13.4436 4.6078 13.2878 4.61363C13.1085 4.62034 12.8973 4.80803 12.475 5.18341Z", "fill": "#1C274C"}], ["g", {"opacity": "0.5"}], ["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M9.81777 3.98966C9.53592 3.68613 9.06137 3.66856 8.75784 3.95041L3.54163 8.79403C2.5947 9.67333 2.05664 10.9072 2.05664 12.1994C2.05664 13.5616 2.65432 14.8553 3.69163 15.7382L8.78205 20.0711C9.09747 20.3396 9.57081 20.3016 9.8393 19.9861C10.1078 19.6707 10.0697 19.1974 9.75431 18.9289L4.66389 14.596C3.9614 13.998 3.55664 13.122 3.55664 12.1994C3.55664 11.3243 3.92102 10.4887 4.56231 9.89322L9.77852 5.0496C10.082 4.76775 10.0996 4.2932 9.81777 3.98966Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M9.01089 3.98966C9.29274 4.2932 9.27517 4.76775 8.97163 5.0496L3.75543 9.89322C3.11414 10.4887 2.74976 11.3243 2.74976 12.1994C2.74976 13.122 3.15452 13.998 3.85701 14.596L8.94742 18.9289C9.26285 19.1974 9.3009 19.6707 9.03241 19.9861C8.76393 20.3016 8.29058 20.3396 7.97516 20.0711L2.88474 15.7382C1.84743 14.8553 1.24976 13.5616 1.24976 12.1994C1.24976 10.9072 1.78781 9.67333 2.73475 8.79403L7.95096 3.95041C8.25449 3.66856 8.72904 3.68613 9.01089 3.98966ZM12.2469 5.67696C12.1338 5.77386 11.9988 5.89337 11.8339 6.03999L7.8616 9.57092C7.0605 10.283 6.51998 10.7658 6.16981 11.1773C5.83351 11.5725 5.76038 11.8033 5.76038 12C5.76038 12.1967 5.83351 12.4275 6.1698 12.8227C6.51998 13.2342 7.0605 13.717 7.8616 14.4291L11.8339 17.96C11.9988 18.1066 12.1338 18.2261 12.2469 18.323C12.2496 18.1742 12.25 17.9939 12.25 17.7732V15.4286C12.25 15.0144 12.5858 14.6786 13 14.6786C14.9125 14.6786 16.9 15.1325 18.616 15.9686C19.5348 16.4163 20.3902 16.981 21.1161 17.6568C20.7473 14.6098 19.6576 12.6439 18.3565 11.399C16.7364 9.84897 14.6896 9.32143 13 9.32143C12.5858 9.32143 12.25 8.98565 12.25 8.57143V6.22685C12.25 6.00615 12.2496 5.82585 12.2469 5.67696ZM11.7648 4.1541C12.0217 3.9845 12.4888 3.73814 13.0121 3.97312C13.5353 4.20811 13.6615 4.7209 13.7054 5.02557C13.7501 5.33583 13.7501 5.741 13.75 6.17513C13.75 6.19233 13.75 6.20957 13.75 6.22685V7.85061C15.5736 7.99207 17.6719 8.668 19.3935 10.3152C21.3686 12.2051 22.75 15.279 22.75 20C22.75 20.3451 22.5145 20.6456 22.1795 20.7282C21.8445 20.8108 21.4963 20.6541 21.3359 20.3486C20.6802 19.0996 19.4719 18.0543 17.959 17.3171C16.6724 16.6902 15.2015 16.3047 13.75 16.2046V17.7732C13.75 17.7904 13.75 17.8077 13.75 17.8249C13.7501 18.259 13.7501 18.6642 13.7054 18.9744C13.6615 19.2791 13.5353 19.7919 13.0121 20.0269C12.4888 20.2619 12.0217 20.0155 11.7648 19.8459C11.5032 19.6732 11.2004 19.404 10.876 19.1155C10.8631 19.1041 10.8503 19.0926 10.8373 19.0811L6.82352 15.5133C6.07457 14.8476 5.45371 14.2958 5.02743 13.7948C4.5794 13.2683 4.26038 12.7014 4.26038 12C4.26038 11.2986 4.57941 10.7317 5.02743 10.2052C5.45371 9.70426 6.07457 9.15242 6.82351 8.48673L10.8373 4.91888C10.8503 4.9074 10.8631 4.89594 10.876 4.88452C11.2004 4.59604 11.5032 4.32681 11.7648 4.1541Z", "fill": "white"}]]};

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

const MultipleForwardLeftOutline = React.forwardRef((props, ref) => {
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

const MultipleForwardLeftBold = React.forwardRef((props, ref) => {
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

const MultipleForwardLeftBoldDuotone = React.forwardRef((props, ref) => {
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

const MultipleForwardLeft = MultipleForwardLeftOutline;

module.exports = {
  iconName,
  category,
  nodes,
  MultipleForwardLeft,
  MultipleForwardLeftOutline,
  MultipleForwardLeftBold,
  MultipleForwardLeftBoldDuotone,
  default: MultipleForwardLeft
};
