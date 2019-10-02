import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "../redux/sagas";
import { default as React } from "react";
import { INameCandidate } from "../models/INameCandidate";
import { getCurrentName } from "../redux/stackStore";

export const Voting: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const upvote = () => {
    dispatch(sagaActions.upvote());
  };

  const downvote = () => {
    dispatch(sagaActions.downvote());
  };

  const currentName: INameCandidate = useSelector(getCurrentName);

  return (
    <div>
      <a href="#" onClick={upvote}>
        Upvote
      </a>
      <br />
      <span>{currentName.value}</span>
      <br />
      <a href="#" onClick={downvote}>
        Downvote
      </a>
    </div>
  );
};
