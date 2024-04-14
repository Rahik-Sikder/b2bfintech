import React from "react";

export const useStorageState = (key, intialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || intialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

export const useBoolStorageState = (key, intialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) === "true" || intialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};
