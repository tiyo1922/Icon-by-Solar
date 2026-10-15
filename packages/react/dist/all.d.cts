import { SolarIcon } from './index.cjs';
export { Icon, IconBySolar, registerIcons, renderIconNodes, resolveIcon } from './index.cjs';
import { IconNode } from './types.cjs';
export { CanonicalIconName, IconName, IconNodeMap, IconVariant, SolarIconProps } from './types.cjs';
import 'react';

declare const iconAliases: Record<string, string>;
declare const iconDefinitions: Record<string, Record<string, IconNode[]>>;

export { IconNode, SolarIcon, SolarIcon as default, iconAliases, iconDefinitions };
