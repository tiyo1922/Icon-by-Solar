import React from 'react';
import { IconNode } from '../types';

export interface IconComponentProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
  secondaryColor?: string;
  secondaryOpacity?: number | string;
  title?: string;
}

export declare const iconName: 'info-circle';
export declare const category: 'Essentional, UI';
export declare const nodes: Record<string, IconNode[]>;
export declare const InfoCircleOutline: React.ForwardRefExoticComponent<IconComponentProps & React.RefAttributes<SVGSVGElement>>;
export declare const InfoCircleBold: React.ForwardRefExoticComponent<IconComponentProps & React.RefAttributes<SVGSVGElement>>;
export declare const InfoCircleBoldDuotone: React.ForwardRefExoticComponent<IconComponentProps & React.RefAttributes<SVGSVGElement>>;
export declare const InfoCircle: React.ForwardRefExoticComponent<IconComponentProps & React.RefAttributes<SVGSVGElement>>;
export default InfoCircle;
