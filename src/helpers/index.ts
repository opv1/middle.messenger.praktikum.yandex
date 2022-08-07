export const addClass = (cl: string, el: HTMLElement | null): void => {
  if (el) {
    el.classList.add(cl);
  }
};

export const removeClass = (cl: string, el: HTMLElement | null): void => {
  if (el) {
    el.classList.remove(cl);
  }
};

export const setMessage = (msg: string, el?: HTMLElement | null): void => {
  if (el) {
    el.innerText = msg;
  }
};

export const inputHasValue = (input?: HTMLInputElement | null): boolean => {
  if (input && input.value) {
    return true;
  }

  return false;
};

export const getValidationMessage = (input: HTMLInputElement) => {
  return input.validationMessage;
};

export const isValid = (input: HTMLInputElement) => {
  return input.validity.valid;
};

export const getDataObject = (formData: FormData) => {
  const object: { [key: string]: FormDataEntryValue } = {};

  formData.forEach((value, key) => {
    object[key] = value;
  });

  return object;
};
