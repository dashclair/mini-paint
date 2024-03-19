import { IconComponentProps } from '../lib/IconComponent.types';
import { iconsMap } from '../lib/iconsMap';

export const IconComponent = ({ iconName, ...props }: IconComponentProps) => {
  const Icon = iconsMap[iconName]?.component;

  return <Icon {...props} />;
};
