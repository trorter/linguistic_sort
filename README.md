# Linguistic sort for a string array

## options
Optional is an object with some or all of the following properties:

### localeMatcher
The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit".

### sensitivity
The differences in the strings should lead to non-zero result values. Possible values are:
- "base": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A.
- "accent": Only strings that differ in base letters or accents and other diacritic marks compare as unequal. Examples: a ≠ b, a ≠ á, a = A.
- "case": Only strings that differ in base letters or case compare as unequal. Examples: a ≠ b, a = á, a ≠ A.
- "variant": Strings that differ in base letters, accents and other diacritic marks, or case compare as unequal. Other differences may also be taken into consideration. Examples: a ≠ b, a ≠ á, a ≠ A.
The default is "variant".

### ignorePunctuation
Whether punctuation should be ignored. Possible values are true and false; the default is false.

### numeric
Whether numeric collation should be used, such that "1" < "2" < "10". Possible values are true and false; the default is false. This option can be set through an options property or through a Unicode extension key; if both are provided, the options property takes precedence. Implementations are not required to support this property.

### caseFirst
Whether upper case or lower case should sort first. Possible values are "upper", "lower", or "false" (use the locale's default); the default is "false". This option can be set through an options property or through a Unicode extension key; if both are provided, the options property takes precedence. Implementations are not required to support this property.

P.S. To read more proceed the link: https://reference.codeproject.com/javascript/Reference/Global_Objects/Collator