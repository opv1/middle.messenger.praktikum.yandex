import { createNestedObj } from './createNestedObj';
import { isObject } from './isObject';
import { merge } from './merge';

import { Indexed } from '@types';

export const set = (object: Indexed<any>, path: string, value: unknown): Indexed<any> => {
  if (typeof path !== 'string') throw new Error('path must be string');
  if (!isObject(object)) return object;

  const baseObject = { [path]: value };
  const newObject = createNestedObj(baseObject);

  return merge(object, newObject);
};
