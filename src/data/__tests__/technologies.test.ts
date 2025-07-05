import {
  TECHNOLOGY_CATEGORIES,
  technologiesCategoryColors,
  categoryOrder,
  technologies,
  sortedTechnologies,
  groupedTechnologies,
} from '../technologies';

describe('Technologies Data', () => {
  it('TECHNOLOGY_CATEGORIES should contain expected categories', () => {
    expect(TECHNOLOGY_CATEGORIES).toEqual([
      "Frontend",
      "Backend",
      "Databases",
      "Tools",
      "Testing",
      "Mobile",
      "Styling",
      "Libraries",
    ]);
  });

  it('technologiesCategoryColors should have colors for all categories', () => {
    TECHNOLOGY_CATEGORIES.forEach(category => {
      expect(technologiesCategoryColors[category]).toBeDefined();
    });
  });

  it('categoryOrder should contain all TECHNOLOGY_CATEGORIES', () => {
    expect(categoryOrder.length).toBe(TECHNOLOGY_CATEGORIES.length);
    TECHNOLOGY_CATEGORIES.forEach(category => {
      expect(categoryOrder).toContain(category);
    });
  });

  it('sortedTechnologies should be sorted by category order then by technology name', () => {
    const categoryCounts = technologies.reduce<Record<string, number>>(
      (acc, tech) => {
        acc[tech.category] = (acc[tech.category] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    const sortedCategoriesTest = Object.entries(categoryCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([category]) => category);

    const expectedSortedTechnologies = [...technologies].sort((a, b) => {
      const categoryDiff = sortedCategoriesTest.indexOf(a.category) - sortedCategoriesTest.indexOf(b.category);
      if (categoryDiff !== 0) return categoryDiff;
      return a.technology.localeCompare(b.technology);
    });
    expect(sortedTechnologies).toEqual(expectedSortedTechnologies);
  });

  it('groupedTechnologies should correctly group technologies by category', () => {
    TECHNOLOGY_CATEGORIES.forEach(category => {
      const technologiesInCategory = technologies.filter(tech => tech.category === category);
      expect(groupedTechnologies[category]).toEqual(expect.arrayContaining(technologiesInCategory));
      expect(groupedTechnologies[category].length).toBe(technologiesInCategory.length);
    });
  });
});