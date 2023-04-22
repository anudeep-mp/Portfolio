import { useEffect, useState } from "react";

export const useStorage = (
  key: string,
  initalValue: any,
  storageObject = localStorage
) => {
  const [value, setValue] = useState(() => {
    const storedValue =
      storageObject === window.sessionStorage
        ? sessionStorage.getItem(key)
        : localStorage.getItem(key);

    return storedValue !== null ? JSON.parse(storedValue) : initalValue;
  });

  useEffect(() => {
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = () => setValue(undefined);

  return [value, setValue, remove];
};
