import React from "react";
import { useSelector } from "react-redux";
import { getRankedNames } from "../redux/nameListStore";

export const Results: React.FunctionComponent = () => {
  const entries = useSelector(getRankedNames);

  return (
    <div className={"px-5 py-2"}>
      {entries.length === 0 && (
        <div className={"font-bold w-full text-xl py-3 "}>
          Es wurden noch keine Namen bewertet
        </div>
      )}
      {entries.map(({ name, score }, i) => (
        <div
          key={name}
          className={
            "w-full text-xl py-3 flex border-t first:border-t-0 border-gray-300"
          }
        >
          <div className={"w-10 text-gray-600"}>{i + 1}.</div>
          <div className={"flex-grow font-bold break-words"}>{name}</div>
          <div className={"text-gray-600"}>{Math.round(score * 100)}%</div>
        </div>
      ))}
    </div>
  );
};
