import { IconNode, SolarIcon } from './index.js';
export { CanonicalIconName, Icon, IconBySolar, IconName, IconNodeMap, IconVariant, SolarIconProps, registerIcons, renderIconNodes, resolveIcon } from './index.js';
import 'react';

declare const iconAliases: Record<string, string>;
declare const iconDefinitions: Record<string, Record<string, IconNode[]>>;

export { IconNode, SolarIcon, SolarIcon as default, iconAliases, iconDefinitions };
