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

export declare const iconName: 'posts-carousel-vertical';
export declare const category: 'Essentional, UI';
export declare const nodes: Record<string, IconNode[]>;

export interface SolarIconComponent extends React.ForwardRefExoticComponent<MultiVariantIconProps & React.RefAttributes<SVGSVGElement>> {
  nodes: Record<string, IconNode[]>;
  iconName: string;
  category: string;
}

export declare const SolarPostsCarouselVertical: SolarIconComponent;
export declare const PostsCarouselVerticalOutline: React.ForwardRefExoticComponent<SingleVariantIconProps & React.RefAttributes<SVGSVGElement>>;
export declare const PostsCarouselVerticalBold: React.ForwardRefExoticComponent<SingleVariantIconProps & React.RefAttributes<SVGSVGElement>>;
export declare const PostsCarouselVerticalBoldDuotone: React.ForwardRefExoticComponent<SingleVariantIconProps & React.RefAttributes<SVGSVGElement>>;
export declare const PostsCarouselVertical: SolarIconComponent;
export default SolarPostsCarouselVertical;
