import React from 'react';
import { IconNode } from '../types';

export interface IconComponentProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
  secondaryColor?: string;
  secondaryOpacity?: number | string;
  title?: string;
}

export declare const iconName: 'bath';
export declare const category: 'Home, Furniture';
export declare const nodes: Record<string, IconNode[]>;
export declare const BathOutline: React.ForwardRefExoticComponent<IconComponentProps & React.RefAttributes<SVGSVGElement>>;
export declare const BathBold: React.ForwardRefExoticComponent<IconComponentProps & React.RefAttributes<SVGSVGElement>>;
export declare const BathBoldDuotone: React.ForwardRefExoticComponent<IconComponentProps & React.RefAttributes<SVGSVGElement>>;
export declare const Bath: React.ForwardRefExoticComponent<IconComponentProps & React.RefAttributes<SVGSVGElement>>;
export default Bath;
