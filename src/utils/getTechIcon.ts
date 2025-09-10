
import * as simpleIcons from 'simple-icons';

interface SimpleIcon {
  title: string;
  slug: string;
  hex: string;
  source: string;
  svg: string;
  path: string;
}

export const getTechIcon = (iconName: string, color?: string): string => {
  const icon = simpleIcons[iconName as keyof typeof simpleIcons];
  if (icon && typeof icon === 'object' && 'svg' in icon) {
    let svg = (icon as SimpleIcon).svg;

    // Remove existing fill attributes and styles
    svg = svg.replace(/fill="[^"]*"/g, ''); // Remove fill attributes
    svg = svg.replace(/style="[^"]*"/g, (match) => { // Remove fill from style attributes
      return match.replace(/fill:[^;]*;/g, '');
    });

    if (color) {
      svg = svg.replace('<svg', `<svg fill="${color}"`);
    }
    return svg;
  }
  return '';
};
