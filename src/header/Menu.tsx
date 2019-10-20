import * as React from "react";
import { SubPage } from "../models/SubPage";
import { MenuItem } from "./MenuItem";
import { useDispatch } from "react-redux";
import { appAction } from "../redux/appStore";

interface IProps {
  close: () => void;
}

export const Menu: React.FunctionComponent<IProps> = props => {
  const dispatch = useDispatch();

  const selectMenuItem = (subPage: SubPage) => () => {
    dispatch(appAction.selectSubPage(subPage));
    props.close();
  };

  return (
    <ul className={"absolute w-full top-24 z-40 right-0 bg-menu-900 shadow-lg"}>
      <MenuItem onClick={selectMenuItem(SubPage.Voting)}>Bewerten</MenuItem>
      <MenuItem onClick={selectMenuItem(SubPage.Results)}>Resultate</MenuItem>
      <MenuItem onClick={selectMenuItem(SubPage.NameList)}>
        Namensliste
      </MenuItem>
    </ul>
  );
};
