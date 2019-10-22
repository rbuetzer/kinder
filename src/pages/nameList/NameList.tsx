import React from "react";
import { FileDialog } from "./FileDialog";
import { Presets } from "./Presets";

export const NameList: React.FunctionComponent = () => {
  return (
    <>
      <FileDialog />
      <Presets />
    </>
  );
};
