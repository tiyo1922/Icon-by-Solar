import React from 'react';
import { IconNode } from '../types';

export interface IconComponentProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
  secondaryColor?: string;
  secondaryOpacity?: number | string;
  title?: string;
}

export declare const iconName: 'expressionless-circle';
export declare const category: 'Faces, Emotions, Stickers';
export declare const nodes: Record<string, IconNode[]>;
export declare const ExpressionlessCircleOutline: React.ForwardRefExoticComponent<IconComponentProps & React.RefAttributes<SVGSVGElement>>;
export declare const ExpressionlessCircleBold: React.ForwardRefExoticComponent<IconComponentProps & React.RefAttributes<SVGSVGElement>>;
export declare const ExpressionlessCircleBoldDuotone: React.ForwardRefExoticComponent<IconComponentProps & React.RefAttributes<SVGSVGElement>>;
export declare const ExpressionlessCircle: React.ForwardRefExoticComponent<IconComponentProps & React.RefAttributes<SVGSVGElement>>;
export default ExpressionlessCircle;
