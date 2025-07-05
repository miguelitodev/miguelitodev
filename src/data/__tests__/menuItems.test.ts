import { menuItems } from '../menuItems';

describe('Menu Items Sorting', () => {
  it('menuItems should be sorted alphabetically by label', () => {
    const sortedArray = [...menuItems].sort((a, b) => a.label.localeCompare(b.label));
    expect(menuItems).toEqual(sortedArray);
  });
});