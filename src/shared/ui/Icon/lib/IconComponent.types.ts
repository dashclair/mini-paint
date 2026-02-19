import { FunctionComponent, SVGAttributes } from 'react';
import { iconsMap } from './iconsMap';

export type IconMap = { component: FunctionComponent<SVGAttributes<SVGElement>> };
export type IconName = keyof typeof iconsMap;
export interface IconComponentProps {
  iconName: IconName;
  className?: string;
}
