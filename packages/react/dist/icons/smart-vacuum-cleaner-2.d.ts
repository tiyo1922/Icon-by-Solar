import React from 'react';
import { IconNode } from '../types';

export interface IconComponentProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
  secondaryColor?: string;
  secondaryOpacity?: number | string;
  title?: string;
}

export declare const iconName: 'smart-vacuum-cleaner-2';
export declare const category: 'Home, Furniture';
export declare const nodes: Record<string, IconNode[]>;
export declare const SmartVacuumCleaner2Outline: React.ForwardRefExoticComponent<IconComponentProps & React.RefAttributes<SVGSVGElement>>;
export declare const SmartVacuumCleaner2Bold: React.ForwardRefExoticComponent<IconComponentProps & React.RefAttributes<SVGSVGElement>>;
export declare const SmartVacuumCleaner2BoldDuotone: React.ForwardRefExoticComponent<IconComponentProps & React.RefAttributes<SVGSVGElement>>;
export declare const SmartVacuumCleaner2: React.ForwardRefExoticComponent<IconComponentProps & React.RefAttributes<SVGSVGElement>>;
export default SmartVacuumCleaner2;
