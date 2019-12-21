import * as React from "react";
import { useSelector } from "react-redux";
import { Voting } from "./pages/voting/Voting";
import { Results } from "./pages/results/Results";
import { SubPage } from "./models/SubPage";
import { getSubPage } from "./redux/appStore";
import { NameList } from "./pages/nameList/NameList";
import { Header } from "./header/Header";

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
      <div className={"flex-shrink-0 h-26 w-full"}>
        <Header />
      </div>
      <div
        className={
          "flex-grow overflow-y-auto overflow-x-hidden h-full relative"
        }
      >
        {renderSubPage()}
      </div>
    </div>
  );
};
