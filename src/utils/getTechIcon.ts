
import * as simpleIcons from 'simple-icons';

interface SimpleIcon {
  title: string;
  slug: string;
  hex: string;
  source: string;
  svg: string;
  path: string;
}

export const getTechIcon = (iconName: string): string => {
  const icon = simpleIcons[iconName as keyof typeof simpleIcons];
  if (icon && typeof icon === 'object' && 'svg' in icon) {
    return (icon as SimpleIcon).svg;
  }
  return '';
};
