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

export declare const iconName: 'pen';
export declare const category: 'Messages, Conversation';
export declare const nodes: Record<string, IconNode[]>;

export interface SolarIconComponent extends React.ForwardRefExoticComponent<MultiVariantIconProps & React.RefAttributes<SVGSVGElement>> {
  nodes: Record<string, IconNode[]>;
  iconName: string;
  category: string;
}

export declare const SolarPen: SolarIconComponent;
export declare const PenOutline: React.ForwardRefExoticComponent<SingleVariantIconProps & React.RefAttributes<SVGSVGElement>>;
export declare const PenBold: React.ForwardRefExoticComponent<SingleVariantIconProps & React.RefAttributes<SVGSVGElement>>;
export declare const PenBoldDuotone: React.ForwardRefExoticComponent<SingleVariantIconProps & React.RefAttributes<SVGSVGElement>>;
export declare const Pen: SolarIconComponent;
export default SolarPen;
