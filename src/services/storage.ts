const keyPrefix = '@AppAdmin:';

const Storage = {
  get(key: string | string[]) {
    if (Array.isArray(key)) {
      return key.map((itemKey) => {
        const value = localStorage.getItem(`${keyPrefix}${itemKey}`);

        return value && JSON.parse(value);
      });
    }

    const value = localStorage.getItem(`${keyPrefix}${key}`);

    return value && JSON.parse(value);
  },

  save(key: string, value: any) {
    localStorage.setItem(`${keyPrefix}${key}`, JSON.stringify(value));
  },

  delete(key: string[] | string) {
    if (Array.isArray(key)) {
      key.forEach((itemKey) =>
        localStorage.removeItem(`${keyPrefix}${itemKey}`),
      );
    }

    localStorage.removeItem(`${keyPrefix}${key}`);
  },
};

export default Storage;
