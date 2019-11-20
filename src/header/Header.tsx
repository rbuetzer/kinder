import * as React from "react";
import { useState } from "react";
import { Menu } from "./Menu";

export const Header: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen(open => !open);

  return (
    <>
      <div
        className={
          "flex h-full bg-menu-900 border-b-2 border-menu-700 px-4 shadow-md"
        }
      >
        <img
          src={require("../assets/logo.svg")}
          alt={"Kinder"}
          className={"h-12 my-2"}
        />
        <div className={"flex-grow"} />
        <img
          id={"menu-button"}
          onClick={toggleIsOpen}
          src={require("../assets/menu.svg")}
          alt={"Menu"}
          className={"cursor-pointer"}
        />
      </div>
      {isOpen && <Menu close={() => setIsOpen(false)} />}
    </>
  );
};
