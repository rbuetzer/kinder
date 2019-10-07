import React, { useRef, useState } from "react";
import { file } from "@babel/types";
import { useDispatch } from "react-redux";
import { sagaActions } from "../redux/sagas";

export const NameList: React.FunctionComponent = () => {
  const fileUpload = useRef<HTMLInputElement>();
  const dispatch = useDispatch();

  const importFile = async (e: any) => {
    const fileToLoad = (fileUpload.current as any).files[0];

    var fileReader = new FileReader();

    fileReader.onload = function(fileLoadedEvent) {
      const text = fileLoadedEvent.target.result as string;
      dispatch(sagaActions.importFile(text));
    };

    fileReader.readAsText(fileToLoad, "UTF-8");
  };

  return (
    <>
      <form className={"p-5"}>
        <input ref={fileUpload} type={"file"} onInput={importFile} hidden />
        <a
          onClick={() => fileUpload.current.click()}
          className={"btn btn-primary text-lg"}
        >
          Datei importieren
        </a>
      </form>
    </>
  );
};
