import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { MouseEvent } from "react";

const styles = require("./NameCard.css");

interface IProps {
  upvote: () => void;
  downvote: () => void;
  name: string;
}

/**
 * Distance in pixel the card has to be swiped
 */
const MINIMUM_SWIPE_DISTANCE = 100;

export const NameCard: React.FunctionComponent<IProps> = props => {
  const touchPosition = useRef(0);
  const [position, setPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const startDragging = () => {
    setIsDragging(() => true);
    window.addEventListener("mousemove", drag as any);
    window.addEventListener("mouseup", stopDragging);
  };

  const stopDragging = () => {
    window.removeEventListener("mousemove", drag as any);
    window.removeEventListener("mouseup", stopDragging);
    setIsDragging(() => false);
  };

  const drag = (e: MouseEvent) => {
    setPosition(position => position + e.movementX);
  };

  const startDraggingTouch = (e: TouchEvent) => {
    touchPosition.current = e.touches[0].clientX;
    setIsDragging(() => true);
    window.addEventListener("touchmove", dragTouch as any);
    window.addEventListener("touchend", stopDraggingTouch);
  };

  const dragTouch = (e: TouchEvent) => {
    const { clientX } = e.touches[0];
    setPosition(position => position - touchPosition.current + clientX);
    touchPosition.current = clientX;
  };

  const stopDraggingTouch = () => {
    window.removeEventListener("touchmove", dragTouch as any);
    window.removeEventListener("touchend", stopDraggingTouch);
    setIsDragging(() => false);
  };

  const moveBack = () => {
    if (!isDragging) {
      setPosition(
        position => Math.sign(position) * Math.max(0, Math.abs(position) - 10)
      );
    }
  };

  useEffect(() => {
    const backwardsMovement = window.setInterval(moveBack, 10);
    return () => {
      window.clearInterval(backwardsMovement);
    };
  });

  /**
   * Remove event listeners on unmount
   */
  useEffect(
    () => () => {
      window.removeEventListener("mousemove", drag as any);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchmove", dragTouch as any);
      window.removeEventListener("touchend", stopDraggingTouch);
    },
    []
  );

  useEffect(() => {
    if (position > MINIMUM_SWIPE_DISTANCE) {
      props.upvote();
    } else if (position < -MINIMUM_SWIPE_DISTANCE) {
      props.downvote();
    }
  }, [isDragging]);

  return (
    <div className={styles.cardWrapper}>
      <div
        className={styles.card}
        onMouseDown={startDragging}
        onTouchStart={startDraggingTouch as any}
        style={{ left: position }}
      >
        <div className={styles.title}>{props.name}</div>
      </div>
    </div>
  );
};
