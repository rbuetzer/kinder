import * as React from "react";
import { MenuButton } from "./MenuButton";
import { SubPage } from "../models/SubPage";

export const Menu: React.FunctionComponent = () => {
  return (
    <div className={"flex justify-around h-full border-t-4 border-gray-300"}>
      <MenuButton
        caption={"Bewerten"}
        icon={"heart"}
        subPage={SubPage.Voting}
      />
      <MenuButton
        caption={"Resultate"}
        icon={"trophy"}
        subPage={SubPage.Results}
      />
      <MenuButton
        caption={"Namen"}
        icon={"file-alt"}
        subPage={SubPage.NameList}
      />
    </div>
  );
};
