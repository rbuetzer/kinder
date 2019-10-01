import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actions } from "./redux/store";

import names from "./data/names.json";

export const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const importNames = () => {
    dispatch(actions.importNames(names));
  };

  useEffect(importNames, []);

  return <>Hello, World </>;
};
