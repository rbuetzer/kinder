import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { nameListActions } from "./redux/store";

import names from "./data/names.json";

export const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const importNames = () => {
    dispatch(nameListActions.importNames(names));
  };

  useEffect(importNames, []);

  return <>Hello, World </>;
};
