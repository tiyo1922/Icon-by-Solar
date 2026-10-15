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

export declare const iconName: 'turntable-music-note';
export declare const category: 'Electronic, Devices';
export declare const nodes: Record<string, IconNode[]>;

export interface SolarIconComponent extends React.ForwardRefExoticComponent<MultiVariantIconProps & React.RefAttributes<SVGSVGElement>> {
  nodes: Record<string, IconNode[]>;
  iconName: string;
  category: string;
}

export declare const SolarTurntableMusicNote: SolarIconComponent;
export declare const TurntableMusicNoteOutline: React.ForwardRefExoticComponent<SingleVariantIconProps & React.RefAttributes<SVGSVGElement>>;
export declare const TurntableMusicNoteBold: React.ForwardRefExoticComponent<SingleVariantIconProps & React.RefAttributes<SVGSVGElement>>;
export declare const TurntableMusicNoteBoldDuotone: React.ForwardRefExoticComponent<SingleVariantIconProps & React.RefAttributes<SVGSVGElement>>;
export declare const TurntableMusicNote: SolarIconComponent;
export default SolarTurntableMusicNote;
