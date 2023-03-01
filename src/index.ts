/**
 * @param localeMatcher - The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit".<br/><br/>
 * @param sensitivity - The differences in the strings should lead to non-zero result values. Possible values are:
 * <br/> - "base": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A.<br/>
 * - "accent": Only strings that differ in base letters or accents and other diacritic marks compare as unequal. Examples: a ≠ b, a ≠ á, a = A.<br/>
 * - "case": Only strings that differ in base letters or case compare as unequal. Examples: a ≠ b, a = á, a ≠ A.<br/>
 * - "variant": Strings that differ in base letters, accents and other diacritic marks, or case compare as unequal. Other differences may also be taken into consideration. Examples: a ≠ b, a ≠ á, a ≠ A. The default is "variant".<br/><br/>
 * @param ignorePunctuation - Whether punctuation should be ignored. Possible values are true and false; the default is false.<br/><br/>
 * @param numeric - Whether numeric collation should be used, such that "1" < "2" < "10". Possible values are true and false; the default is false. This option can be set through an options property or through a Unicode extension key; if both are provided, the options property takes precedence. Implementations are not required to support this property.<br/><br/>
 * @param caseFirst - Whether upper case or lower case should sort first. Possible values are "upper", "lower", or "false" (use the locale's default); the default is "false". This option can be set through an options property or through a Unicode extension key; if both are provided, the options property takes precedence. Implementations are not required to support this property.<br/><br/>
 */
type option = {
  localeMatcher?: 'lookup' | 'best fit';
  sensitivity?: 'base' | 'accent' | 'case' | 'variant';
  ignorePunctuation?: true | false;
  numeric?: true | false;
  caseFirst?: 'upper' | 'lower' | 'false';
};

const optionDefault: option = {
  localeMatcher: 'best fit',
  sensitivity: 'variant',
  ignorePunctuation: false,
  numeric: false,
  caseFirst: 'false',
};

/**
 * @param {string[]} array - the string array to be sorted
 * @param {option} options - Optional is an object with some or all of the following properties:
 * @param {string | string[]} locales - Optional. A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the locales' argument, see the Intl page.
 */
export const configurableLinguisticSort = (array: string[], options: option, locales?: string | string[]): string[] => {
  if (locales) {
    locales = Intl.Collator.supportedLocalesOf(locales, { localeMatcher: 'lookup' });
  }

  return array.sort(new Intl.Collator(locales, { ...optionDefault, ...options }).compare);
};

/**
 * @param {string[]} array - the string array to be sorted
 * @param {string | string[]} locales - Optional. A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the locales' argument, see the Intl page.
 */
export const linguisticSort = (array: string[], locales?: string | string[]): string[] => {
  return configurableLinguisticSort(
    array,
    {
      sensitivity: 'base',
    },
    locales,
  );
};
