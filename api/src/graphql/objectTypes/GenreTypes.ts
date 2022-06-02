import { builder } from '../../builder';

export const Genre = builder.enumType('LengthUnit', {
  values: [
    'FICTION',
    'ROMANCE',
    'BIOGRAPHY',
    'SELF_IMPROVEMENT',
    'EDUCATION',
  ] as const,
});
