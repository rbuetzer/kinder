import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "../redux/sagas";
import { INameCandidate } from "../models/INameCandidate";
import { getCurrentName } from "../redux/stackStore";
import { NameCard } from "./NameCard";
import { useState } from "react";

export const Voting: React.FunctionComponent = () => {
  const [key, setKey] = useState(0);
  const toggleKey = () => {
    setKey(key => key ^ 1);
  };

  const dispatch = useDispatch();

  const upvote = () => {
    dispatch(sagaActions.upvote());
    toggleKey();
  };

  const downvote = () => {
    dispatch(sagaActions.downvote());
    toggleKey();
  };

  const currentName: INameCandidate = useSelector(getCurrentName);

  if (!currentName) {
    return <>Loading ...</>;
  }

  return (
    <NameCard
      key={key}
      name={currentName.value}
      upvote={upvote}
      downvote={downvote}
    />
  );
};
