import { isArray } from './isArray';
import { isPlainObject } from './isPlainObject';

import { Indexed } from '@types';

export const isArrayOrObject = (value: unknown): value is [] | Indexed => {
  return isPlainObject(value) || isArray(value);
};
