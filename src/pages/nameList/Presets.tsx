import React from "react";
import { useDispatch } from "react-redux";
import { sagaActions } from "../../redux/sagas";
import { appAction } from "../../redux/appStore";
import { SubPage } from "../../models/SubPage";

type NameListData = { names: string[] };

interface INameListEntry {
  name: string;
  file: Promise<NameListData>;
}

export const Presets: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const entries: INameListEntry[] = [
    {
      name: "Männliche Vornamen Deutschschweiz, 2018",
      file: import("../../data/ch-de-2018-m")
    },
    {
      name: "Weibliche Vornamen Deutschschweiz, 2018",
      file: import("../../data/ch-de-2018-f")
    }
  ];

  const loadList = async (file: Promise<NameListData>) => {
    const { names } = await file;
    dispatch(sagaActions.importNames(names));
    dispatch(appAction.selectSubPage(SubPage.Voting));
  };

  return (
    <div className={"px-5 py-2"}>
      {entries.map(({ name, file }, i) => (
        <div
          key={i}
          className={
            "w-full text-xl py-3 flex border-t first:border-t-0 border-gray-300 cursor-pointer break-words"
          }
          onClick={() => loadList(file)}
        >
          {name}
        </div>
      ))}
    </div>
  );
};
