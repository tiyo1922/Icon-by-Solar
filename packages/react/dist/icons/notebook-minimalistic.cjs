const React = require('react');

const iconName = 'notebook-minimalistic';
const category = 'School';
const nodes = {"bold": [["path", {"d": "M2 16.1426V4.99683C2 3.89865 2.8863 3.00655 3.9824 3.07391C4.95877 3.13392 6.11349 3.25253 7 3.48647C8.04921 3.76333 9.29611 4.35303 10.2823 4.87448C10.5893 5.03684 10.9158 5.14947 11.25 5.21296L11.25 20.3916C10.9471 20.3248 10.6515 20.217 10.3724 20.0683C9.37293 19.5355 8.08145 18.9178 7 18.6324C6.12329 18.401 4.98428 18.2825 4.01486 18.2218C2.90605 18.1525 2 17.2536 2 16.1426Z", "fill": "#1C274C"}], ["path", {"d": "M12.75 20.3916C13.0529 20.3248 13.3485 20.217 13.6276 20.0683C14.6271 19.5355 15.9185 18.9178 17 18.6324C17.8767 18.401 19.0157 18.2825 19.9851 18.2218C21.094 18.1525 22 17.2536 22 16.1426V4.93222C22 3.85977 21.1538 2.97944 20.082 3.01677C18.9534 3.05608 17.5469 3.17305 16.5 3.48647C15.5924 3.75819 14.5353 4.30321 13.6738 4.80178C13.3824 4.97047 13.0708 5.09437 12.75 5.17293L12.75 20.3916Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "fillRule": "evenodd", "clipRule": "evenodd", "d": "M2 16.1445V4.99876C2 3.90059 2.8863 3.00848 3.9824 3.07585C4.95877 3.13585 6.11349 3.25447 7 3.4884C8.04921 3.76527 9.29611 4.35497 10.2823 4.87642C10.8166 5.15898 11.41 5.2909 12 5.27537V20.4751C11.4394 20.4751 10.8788 20.3401 10.3724 20.0702C9.37293 19.5374 8.08145 18.9197 7 18.6343C6.12329 18.403 4.98428 18.2844 4.01486 18.2238C2.90605 18.1544 2 17.2555 2 16.1445Z", "fill": "#1C274C"}], ["path", {"d": "M22 16.1446V4.93417C22 3.86172 21.1538 2.98139 20.082 3.01872C18.9534 3.05804 17.5469 3.175 16.5 3.48842C15.5924 3.76014 14.5353 4.30516 13.6738 4.80373C13.1587 5.10186 12.581 5.26009 12 5.27538V20.4751C12.5606 20.4751 13.1212 20.3402 13.6276 20.0702C14.6271 19.5374 15.9185 18.9197 17 18.6343C17.8767 18.403 19.0157 18.2844 19.9851 18.2238C21.094 18.1544 22 17.2555 22 16.1446Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M22.75 4.93225C22.75 3.46895 21.5847 2.21401 20.0559 2.26726C18.9175 2.30691 17.4296 2.42533 16.2849 2.76801C15.2899 3.0659 14.1706 3.64774 13.2982 4.15268C12.4801 4.62615 11.4617 4.64976 10.6328 4.2115C9.63736 3.68512 8.32766 3.06117 7.19136 2.76133C6.23055 2.50779 5.01517 2.38601 4.02841 2.32536C2.47017 2.22959 1.25 3.4977 1.25 4.99686V16.1426C1.25 17.6789 2.49378 18.8782 3.96804 18.9704C4.9268 19.0304 6.00566 19.1457 6.80864 19.3576C7.8012 19.6195 9.0286 20.2019 10.0196 20.7301C11.2529 21.3876 12.7471 21.3876 13.9804 20.7301C14.9714 20.2019 16.1988 19.6195 17.1914 19.3576C17.9943 19.1457 19.0732 19.0304 20.032 18.9704C21.5062 18.8782 22.75 17.6789 22.75 16.1426V4.93225ZM20.1081 3.76635C20.7229 3.74494 21.25 4.25066 21.25 4.93225V16.1426C21.25 16.8284 20.6817 17.4268 19.9383 17.4733C18.9582 17.5346 17.7591 17.6564 16.8086 17.9072C15.6383 18.2161 14.2827 18.8692 13.2748 19.4065C13.1065 19.4961 12.9305 19.5668 12.75 19.6184V5.94109C13.2023 5.85055 13.6421 5.68674 14.0495 5.45094C14.9 4.95874 15.8949 4.45055 16.7151 4.205C17.6643 3.92085 18.9892 3.80532 20.1081 3.76635ZM11.25 5.97404C10.795 5.90328 10.349 5.75821 9.93167 5.53753C8.95486 5.02102 7.77076 4.46556 6.80864 4.21168C5.99643 3.99735 4.90238 3.8819 3.93639 3.82253C3.30243 3.78357 2.75 4.29968 2.75 4.99686V16.1426C2.75 16.8284 3.31831 17.4268 4.06168 17.4733C5.04176 17.5346 6.24092 17.6564 7.19136 17.9072C8.3617 18.2161 9.71727 18.8692 10.7252 19.4065C10.8935 19.4961 11.0695 19.5668 11.25 19.6184V5.97404Z", "fill": "white"}]]};

function renderNodes(variantNodes, variant, color = 'currentColor', secondaryColor, secondaryOpacity) {
  return variantNodes.map(([tag, attrs], index) => {
    const computed = Object.assign({}, attrs);
    if (color !== 'original' && color !== 'source') {
      if ('opacity' in attrs) {
        computed.opacity = secondaryOpacity !== undefined ? secondaryOpacity : attrs.opacity;
        computed.fill = secondaryColor || color;
      } else if (attrs.fill && attrs.fill !== 'none' && attrs.fill !== 'transparent') {
        const isWhite = attrs.fill === 'white' || attrs.fill === '#FEFEFF' || attrs.fill === '#FBFCFF';
        if (!(variant === 'bold' && isWhite && variantNodes.length > 1)) computed.fill = color;
      }
      if (attrs.stroke && attrs.stroke !== 'none') computed.stroke = color;
    }
    return React.createElement(tag, Object.assign({ key: index }, computed));
  });
}

const SolarNotebookMinimalistic = React.forwardRef((props, ref) => {
  const {
    variant = 'outline',
    size = 24,
    color = 'currentColor',
    secondaryColor,
    secondaryOpacity,
    className,
    style,
    title,
    ...rest
  } = props;
  const normVariant = variant === 'bold_duotone' ? 'bold-duotone' : variant.toLowerCase();
  const variantNodes = nodes[normVariant] || nodes['outline'] || [];
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
  }, rest), title && React.createElement('title', null, title), ...renderNodes(variantNodes, normVariant, color, secondaryColor, secondaryOpacity));
});

SolarNotebookMinimalistic.nodes = nodes;
SolarNotebookMinimalistic.iconName = iconName;
SolarNotebookMinimalistic.category = category;

const NotebookMinimalisticOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarNotebookMinimalistic, Object.assign({ ref, variant: 'outline' }, props));
});

const NotebookMinimalisticBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarNotebookMinimalistic, Object.assign({ ref, variant: 'bold' }, props));
});

const NotebookMinimalisticBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarNotebookMinimalistic, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const NotebookMinimalistic = SolarNotebookMinimalistic;

module.exports = {
  iconName,
  category,
  nodes,
  SolarNotebookMinimalistic,
  NotebookMinimalistic,
  NotebookMinimalisticOutline,
  NotebookMinimalisticBold,
  NotebookMinimalisticBoldDuotone,
  default: SolarNotebookMinimalistic
};
