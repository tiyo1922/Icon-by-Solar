import { SolarIcon } from './index.js';
export { Icon, IconBySolar, registerIcons, renderIconNodes, resolveIcon } from './index.js';
import { IconNode } from './types.js';
export { CanonicalIconName, IconName, IconNodeMap, IconVariant, SolarIconProps } from './types.js';
import 'react';

declare const iconAliases: Record<string, string>;
declare const iconDefinitions: Record<string, Record<string, IconNode[]>>;

export { IconNode, SolarIcon, SolarIcon as default, iconAliases, iconDefinitions };
