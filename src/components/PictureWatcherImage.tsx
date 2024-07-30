"use client";

import { ArtImage } from "@/intefaces/artImage";
import { useEffect, useState } from "react";

export default function PictureWatcherImage({
  show,
  image,
  add,
  sub,
  setShow,
  direction,
}: {
  show: boolean;
  image: ArtImage;
  add: () => void;
  sub: () => void;
  setShow: (show: boolean) => void;
  direction: "right" | "left" | "none";
}) {
  const [xDown, setXDown] = useState(0);
  const [xValue, setXValue] = useState(0);
  const [pos, setPos] = useState(0);

  const handleTouchStart = (e: TouchEvent) => {
    const firstTouch = e.touches[0];
    setXDown(firstTouch.clientX);
  };

  const handleTouchEnd = () => {
    if (xValue > 80) {
      add();
      setTimeout(() => {
        setXValue(0);
      }, 300);
    } else if (xValue < -80) {
      sub();
      setTimeout(() => {
        setXValue(0);
      }, 300);
    } else {
      setXValue(0);
    }
    setXDown(0);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!xDown) return;
    const xUp = e.touches[0].clientX;
    setXValue(xDown - xUp);
  };

  const keydown = (e: KeyboardEvent) => {
    e.preventDefault();
    if (e.key === "ArrowRight") add();
    if (e.key === "ArrowLeft") sub();
    if (e.key === "Escape") setShow(false);
  };

  const adjust = () => {
    const dif = Math.abs(pos - xValue);
    if (dif < 1) return;
    const value = dif / 10 + 1;
    if (pos < xValue) setPos(pos + value);
    if (pos > xValue) setPos(pos - value);
  };

  useEffect(() => {
    if (!show) return;
    const interval = setInterval(() => {
      adjust();
    }, 1);
    window.addEventListener("touchstart", handleTouchStart, false);
    window.addEventListener("touchend", handleTouchEnd, false);
    window.addEventListener("touchmove", handleTouchMove, false);
    window.addEventListener("keydown", keydown);

    return () => {
      clearInterval(interval);
      window.removeEventListener("touchstart", handleTouchStart, false);
      window.removeEventListener("touchend", handleTouchEnd, false);
      window.removeEventListener("touchmove", handleTouchMove, false);
      window.removeEventListener("keydown", keydown);
    };
  });

  useEffect(() => {
    const scale = window.innerWidth;
    if (show)
      setPos(direction === "none" ? 0 : direction === "right" ? -scale : scale);
    else
      setPos(direction === "none" ? 0 : direction === "right" ? scale : -scale);
  }, [direction, show]);

  const style = { left: `calc(50% + ${-pos}px)` };

  if (!show) return <></>;
  return (
    <div className={"pictureWatcher_image"} style={style}>
      <img src={`/images/${image.link}`} alt={image.name} />
      {/*<div className="title">*/}
      {/*  <h3>{image.name}</h3>*/}
      {/*  <p>{image.description}</p>*/}
      {/*</div>*/}
    </div>
  );
}
