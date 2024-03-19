import { IconComponentProps } from './IconComponent.types';
import { iconsMap } from './iconsMap';

export const IconComponent = ({ iconName, ...props }: IconComponentProps) => {
  const Icon = iconsMap[iconName]?.component;

  return <Icon {...props} />;
};
