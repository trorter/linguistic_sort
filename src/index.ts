export const linguisticSort = (array: string[], locales?: string | string[]): string[] => {
  if (locales) {
    locales = Intl.Collator.supportedLocalesOf(locales, { localeMatcher: 'lookup' });
  }

  const comparator = new Intl.Collator(locales, {
    sensitivity: 'base',
    ignorePunctuation: true,
    numeric: true,
  });

  return array.sort(comparator.compare);
};
