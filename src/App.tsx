import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import names from "./data/few-names.json";
import { sagaActions } from "./redux/sagas";
import { isLoaded } from "./redux/nameListStore";
import { Voting } from "./voting/Voting";

export const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const importNames = () => {
    dispatch(sagaActions.importNames(names));
  };

  useEffect(importNames, []);

  let ready = useSelector(isLoaded);

  if (!ready) {
    return <>loading...</>;
  }

  return <Voting />;
};
