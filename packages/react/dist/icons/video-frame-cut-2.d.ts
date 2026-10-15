import React from 'react';
import { IconNode } from '../types';

export interface IconComponentProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
  secondaryColor?: string;
  secondaryOpacity?: number | string;
  title?: string;
}

export declare const iconName: 'video-frame-cut-2';
export declare const category: 'Video, Audio, Sound';
export declare const nodes: Record<string, IconNode[]>;
export declare const VideoFrameCut2Outline: React.ForwardRefExoticComponent<IconComponentProps & React.RefAttributes<SVGSVGElement>>;
export declare const VideoFrameCut2Bold: React.ForwardRefExoticComponent<IconComponentProps & React.RefAttributes<SVGSVGElement>>;
export declare const VideoFrameCut2BoldDuotone: React.ForwardRefExoticComponent<IconComponentProps & React.RefAttributes<SVGSVGElement>>;
export declare const VideoFrameCut2: React.ForwardRefExoticComponent<IconComponentProps & React.RefAttributes<SVGSVGElement>>;
export default VideoFrameCut2;
