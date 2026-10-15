import { IconNode, SolarIcon } from './index.cjs';
export { CanonicalIconName, Icon, IconBySolar, IconName, IconNodeMap, IconVariant, SolarIconProps, registerIcons, renderIconNodes, resolveIcon } from './index.cjs';
import 'react';

declare const iconAliases: Record<string, string>;
declare const iconDefinitions: Record<string, Record<string, IconNode[]>>;

export { IconNode, SolarIcon, SolarIcon as default, iconAliases, iconDefinitions };
