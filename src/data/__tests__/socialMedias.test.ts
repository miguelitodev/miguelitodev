import { professionalSocialMedias, personalSocialMedias } from '../socialMedias';

describe('Social Medias Sorting', () => {
  it('professionalSocialMedias should be sorted alphabetically by name', () => {
    const sortedArray = [...professionalSocialMedias].sort((a, b) => a.name.localeCompare(b.name));
    expect(professionalSocialMedias).toEqual(sortedArray);
  });

  it('personalSocialMedias should be sorted alphabetically by name', () => {
    const sortedArray = [...personalSocialMedias].sort((a, b) => a.name.localeCompare(b.name));
    expect(personalSocialMedias).toEqual(sortedArray);
  });
});