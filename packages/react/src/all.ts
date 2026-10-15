// Full collection bundle for Icon by Solar (registers all 1,246 icons)
import { SolarIcon, registerIcons, IconBySolar, Icon, resolveIcon, renderIconNodes } from './components/SolarIcon';
import { iconDefinitions, iconAliases } from './data';

// Auto-register all 1,246 icons into SolarIcon
registerIcons(iconDefinitions);
for (const [alias, canonical] of Object.entries(iconAliases)) {
  if (iconDefinitions[canonical]) {
    registerIcons({ [alias]: iconDefinitions[canonical] });
  }
}

export {
  SolarIcon,
  IconBySolar,
  Icon,
  registerIcons,
  resolveIcon,
  renderIconNodes,
  iconDefinitions,
  iconAliases
};
export * from './types';
export default SolarIcon;
