import * as React from "react";

interface IProps {
  onClick: () => void;
}

export const MenuItem: React.FunctionComponent<IProps> = props => {
  return (
    <li
      className={"p-4 text-2xl cursor-pointer border-b border-menu-700"}
      onClick={props.onClick}
    >
      {props.children}
    </li>
  );
};
