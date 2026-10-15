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

export declare const iconName: 'speaker';
export declare const category: 'Home, Furniture';
export declare const nodes: Record<string, IconNode[]>;

export interface SolarIconComponent extends React.ForwardRefExoticComponent<MultiVariantIconProps & React.RefAttributes<SVGSVGElement>> {
  nodes: Record<string, IconNode[]>;
  iconName: string;
  category: string;
}

export declare const SolarSpeaker: SolarIconComponent;
export declare const SpeakerOutline: React.ForwardRefExoticComponent<SingleVariantIconProps & React.RefAttributes<SVGSVGElement>>;
export declare const SpeakerBold: React.ForwardRefExoticComponent<SingleVariantIconProps & React.RefAttributes<SVGSVGElement>>;
export declare const SpeakerBoldDuotone: React.ForwardRefExoticComponent<SingleVariantIconProps & React.RefAttributes<SVGSVGElement>>;
export declare const Speaker: SolarIconComponent;
export default SolarSpeaker;
