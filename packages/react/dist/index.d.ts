import React from 'react';
import { SolarIconProps, IconNode, IconNodeMap } from './types.js';
export { CanonicalIconName, IconName, IconVariant } from './types.js';

declare const iconRegistry: Record<string, IconNodeMap>;
declare const aliasRegistry: Record<string, string>;
/**
 * Registers one or more icon components or node maps into SolarIcon.
 * Enables <SolarIcon name="home" /> to be 100% tree-shakeable while only bundling registered icons.
 *
 * @example
 * ```tsx
 * import { registerIcons, SolarIcon } from '@icon-by-solar/react';
 * import { SolarHome, SolarBellBing } from '@icon-by-solar/react/icons';
 *
 * // Array, object, or arguments:
 * registerIcons([SolarHome, SolarBellBing]);
 * registerIcons({ home: SolarHome, 'bell-bing': SolarBellBing });
 * ```
 */
declare function registerIcons(...args: (Record<string, any> | any[] | any)[]): void;
/**
 * Resolves an icon name and variant to canonical icon nodes from the active registry.
 */
declare function resolveIcon(name: string, variant?: string, category?: string): IconNode[] | null;
/**
 * Helper to render an array of IconNodes with smart duotone opacity and coloring.
 */
declare function renderIconNodes(nodes: IconNode[], variant: string, color?: string, secondaryColor?: string, secondaryOpacity?: number | string): React.DOMElement<React.DOMAttributes<Element>, Element>[];
/**
 * SolarIcon component for React.
 *
 * Credit Title: Icon by Solar
 *
 * @example
 * ```tsx
 * // Tree-shakeable with registered icons:
 * import { SolarIcon, registerIcons } from '@icon-by-solar/react';
 * import { SolarHome } from '@icon-by-solar/react/icons';
 * registerIcons({ home: SolarHome });
 *
 * <SolarIcon name="home" variant="outline" size={24} />
 * <SolarIcon name="home" variant="bold" size={32} color="#0342C9" />
 * <SolarIcon name="home" variant="bold-duotone" size={24} />
 *
 * // Or pass icon component directly (zero registration):
 * <SolarIcon icon={SolarHome} variant="outline" size={24} />
 * ```
 */
declare const SolarIcon: React.ForwardRefExoticComponent<SolarIconProps & React.RefAttributes<SVGSVGElement>>;
/** Aliases for convenience */
declare const IconBySolar: React.ForwardRefExoticComponent<SolarIconProps & React.RefAttributes<SVGSVGElement>>;
declare const Icon: React.ForwardRefExoticComponent<SolarIconProps & React.RefAttributes<SVGSVGElement>>;

export { Icon, IconBySolar, IconNode, IconNodeMap, SolarIcon, SolarIconProps, aliasRegistry, iconRegistry, registerIcons, renderIconNodes, resolveIcon };
