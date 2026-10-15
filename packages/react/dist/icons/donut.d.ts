import React from 'react';
import { IconNode, IconVariant } from '../types';

export interface MultiVariantIconProps extends React.SVGAttributes<SVGSVGElement> {
  variant?: IconVariant;
  size?: number | string;
  color?: string;
  secondaryColor?: string;
  secondaryOpacity?: number | string;
  title?: string;
}

export interface SingleVariantIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
  secondaryColor?: string;
  secondaryOpacity?: number | string;
  title?: string;
}

export declare const iconName: 'donut';
export declare const category: 'Food, Kitchen';
export declare const nodes: Record<string, IconNode[]>;

export interface SolarIconComponent extends React.ForwardRefExoticComponent<MultiVariantIconProps & React.RefAttributes<SVGSVGElement>> {
  nodes: Record<string, IconNode[]>;
  iconName: string;
  category: string;
}

export declare const SolarDonut: SolarIconComponent;
export declare const DonutOutline: React.ForwardRefExoticComponent<SingleVariantIconProps & React.RefAttributes<SVGSVGElement>>;
export declare const DonutBold: React.ForwardRefExoticComponent<SingleVariantIconProps & React.RefAttributes<SVGSVGElement>>;
export declare const DonutBoldDuotone: React.ForwardRefExoticComponent<SingleVariantIconProps & React.RefAttributes<SVGSVGElement>>;
export declare const Donut: SolarIconComponent;
export default SolarDonut;
