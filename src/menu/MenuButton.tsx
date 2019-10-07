import * as React from "react";
import { SubPage } from "../models/SubPage";
import { useDispatch } from "react-redux";
import { appAction } from "../redux/appStore";

interface IProps {
  caption: string;
  icon: string;
  subPage: SubPage;
}

export const MenuButton: React.FunctionComponent<IProps> = props => {
  const dispatch = useDispatch();

  const handleClick = () => {
    return dispatch(appAction.selectSubPage(props.subPage));
  };

  return (
    <div
      className={"self-center text-center cursor-pointer"}
      onClick={handleClick}
    >
      <div className={"w-full text-gray-700 mb-1"}>
        <i className={`fas fa-${props.icon} text-4xl`} />
      </div>
      <div className={"w-full text-lg font-bold text-gray-700"}>
        {props.caption}
      </div>
    </div>
  );
};
