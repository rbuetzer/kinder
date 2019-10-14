import * as React from "react";
import { useSelector } from "react-redux";
import { Voting } from "./voting/Voting";
import { Menu } from "./menu/Menu";
import { Results } from "./results/Results";
import { SubPage } from "./models/SubPage";
import { getSubPage } from "./redux/appStore";
import { NameList } from "./nameList/NameList";

export const App: React.FunctionComponent = () => {
  const subPage = useSelector(getSubPage);

  const renderSubPage = () => {
    switch (subPage) {
      case SubPage.Voting:
        return <Voting />;
      case SubPage.Results:
        return <Results />;
      case SubPage.NameList:
        return <NameList />;
    }
  };

  return (
    <div className={"flex flex-col h-full"}>
      <div className={"flex-grow overflow-y-scroll overflow-x-hidden h-full"}>
        {renderSubPage()}
      </div>
      <div className={"flex-shrink-0 h-24 w-full bg-gray-100"}>
        <Menu />
      </div>
    </div>
  );
};
