import { Indexed } from '@types';

export const isObject = (item: Indexed<any> | undefined): boolean => {
  if (!item) return false;

  return item && typeof item === 'object' && !Array.isArray(item);
};
