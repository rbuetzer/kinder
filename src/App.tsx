import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import names from "./data/names.json";
import { sagaActions } from "./redux/sagas";
import { isLoaded } from "./redux/nameListStore";
import { Voting } from "./voting/Voting";
import { Menu } from "./menu/Menu";
import { Results } from "./results/Results";
import { SubPage } from "./models/SubPage";
import { getSubPage } from "./redux/appStore";

export const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const ready = useSelector(isLoaded);
  const subPage = useSelector(getSubPage);

  const importNames = () => {
    if (!ready) {
      dispatch(sagaActions.importNames(names));
    }
  };

  useEffect(importNames, []);

  if (!ready) {
    return <>loading...</>;
  }

  const renderSubPage = () => {
    switch (subPage) {
      case SubPage.Voting:
        return <Voting />;
      case SubPage.Results:
        return <Results />;
    }
  };

  return (
    <div className={"flex flex-col h-full"}>
      <div className={"flex-grow overflow-y-scroll overflow-x-hidden"}>
        {renderSubPage()}
      </div>
      <div className={"flex-shrink-0 h-24 w-full bg-gray-100"}>
        <Menu />
      </div>
    </div>
  );
};
