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
    console.log(props.subPage);
    return dispatch(appAction.selectSubPage(props.subPage));
  };

  return (
    <div
      className={"self-center text-center cursor-pointer text-gray-700"}
      onClick={handleClick}
    >
      <div className={"w-full"}>
        <i className={`fas fa-${props.icon} text-4xl`} />
      </div>
      <div className={"w-full text-lg"}>{props.caption}</div>
    </div>
  );
};
