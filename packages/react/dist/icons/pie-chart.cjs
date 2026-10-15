const React = require('react');

const iconName = 'pie-chart';
const category = 'Business, Statistic';
const nodes = {"bold": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M9.16312 3.77546C9.28724 4.17064 9.0675 4.59162 8.67232 4.71574C5.23899 5.79408 2.75 9.00204 2.75 12.7894C2.75 17.4622 6.53805 21.2502 11.2108 21.2502C14.9982 21.2502 18.2061 18.7612 19.2845 15.3279C19.4086 14.9327 19.8296 14.713 20.2247 14.8371C20.6199 14.9612 20.8397 15.3822 20.7155 15.7774C19.4465 19.8179 15.6721 22.7502 11.2108 22.7502C5.70962 22.7502 1.25 18.2906 1.25 12.7894C1.25 8.32812 4.18231 4.55372 8.22285 3.28466C8.61803 3.16054 9.039 3.38028 9.16312 3.77546Z", "fill": "#1C274C"}], ["path", {"d": "M21.9131 9.94727C20.8515 6.14438 17.8556 3.14845 14.0527 2.0869C12.4091 1.6281 11 3.05419 11 4.76062V11.4551C11 12.3083 11.6917 13 12.5449 13H19.2394C20.9458 13 22.3719 11.5909 21.9131 9.94727Z", "fill": "#1C274C"}]], "bold-duotone": [["path", {"opacity": "0.5", "fillRule": "evenodd", "clipRule": "evenodd", "d": "M9.16312 3.77546C9.28724 4.17064 9.0675 4.59162 8.67232 4.71574C5.23899 5.79408 2.75 9.00204 2.75 12.7894C2.75 17.4622 6.53805 21.2502 11.2108 21.2502C14.9982 21.2502 18.2061 18.7612 19.2845 15.3279C19.4086 14.9327 19.8296 14.713 20.2247 14.8371C20.6199 14.9612 20.8397 15.3822 20.7155 15.7774C19.4465 19.8179 15.6721 22.7502 11.2108 22.7502C5.70962 22.7502 1.25 18.2906 1.25 12.7894C1.25 8.32812 4.18231 4.55372 8.22285 3.28466C8.61803 3.16054 9.039 3.38028 9.16312 3.77546Z", "fill": "#1C274C"}], ["path", {"d": "M21.9131 9.94727C20.8515 6.14438 17.8556 3.14845 14.0527 2.0869C12.4091 1.6281 11 3.05419 11 4.76062V11.4551C11 12.3083 11.6917 13 12.5449 13H19.2394C20.9458 13 22.3719 11.5909 21.9131 9.94727Z", "fill": "#1C274C"}]], "outline": [["path", {"fillRule": "evenodd", "clipRule": "evenodd", "d": "M14.2544 1.36477C13.1584 1.05884 12.132 1.38956 11.4026 2.05979C10.6845 2.71963 10.25 3.70576 10.25 4.76087V11.4554C10.25 12.7228 11.2775 13.7503 12.5449 13.7503H19.2394C20.2945 13.7503 21.2806 13.3158 21.9405 12.5977C22.6107 11.8683 22.9414 10.8419 22.6355 9.74587C21.5034 5.69027 18.31 2.49687 14.2544 1.36477ZM11.75 4.76087C11.75 4.10956 12.0201 3.52942 12.4175 3.16432C12.8035 2.80959 13.3035 2.65668 13.8511 2.80954C17.4013 3.80055 20.1997 6.599 21.1907 10.1492C21.3436 10.6968 21.1907 11.1967 20.8359 11.5828C20.4708 11.9801 19.8907 12.2503 19.2394 12.2503H12.5449C12.1059 12.2503 11.75 11.8944 11.75 11.4554V4.76087Z", "fill": "white"}], ["path", {"d": "M8.67232 4.71579C9.0675 4.59167 9.28724 4.1707 9.16312 3.77552C9.039 3.38034 8.61803 3.1606 8.22285 3.28472C4.18231 4.55378 1.25 8.32818 1.25 12.7894C1.25 18.2906 5.70962 22.7503 11.2108 22.7503C15.6721 22.7503 19.4465 19.8179 20.7155 15.7774C20.8397 15.3822 20.6199 14.9613 20.2247 14.8371C19.8296 14.713 19.4086 14.9328 19.2845 15.3279C18.2061 18.7613 14.9982 21.2503 11.2108 21.2503C6.53805 21.2503 2.75 17.4622 2.75 12.7894C2.75 9.00209 5.23899 5.79414 8.67232 4.71579Z", "fill": "white"}]]};

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

const SolarPieChart = React.forwardRef((props, ref) => {
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

SolarPieChart.nodes = nodes;
SolarPieChart.iconName = iconName;
SolarPieChart.category = category;

const PieChartOutline = React.forwardRef((props, ref) => {
  return React.createElement(SolarPieChart, Object.assign({ ref, variant: 'outline' }, props));
});

const PieChartBold = React.forwardRef((props, ref) => {
  return React.createElement(SolarPieChart, Object.assign({ ref, variant: 'bold' }, props));
});

const PieChartBoldDuotone = React.forwardRef((props, ref) => {
  return React.createElement(SolarPieChart, Object.assign({ ref, variant: 'bold-duotone' }, props));
});

const PieChart = SolarPieChart;

module.exports = {
  iconName,
  category,
  nodes,
  SolarPieChart,
  PieChart,
  PieChartOutline,
  PieChartBold,
  PieChartBoldDuotone,
  default: SolarPieChart
};
