"use client";

import { useEffect, useState } from "react";
import PictureWatcherImage from "@/components/PictureWatcherImage";
import { ArtImage } from "@/intefaces/artImage";
import PictureWatcherEvent from "@/utils/pictureWatcherEvent";

export default function PictureWatcher() {
  const [pictures, setPictures] = useState<ArtImage[]>([]);
  const [show, setShow] = useState(false);
  const [indexing, setIndexing] = useState(0);
  const [direction, setDirection] = useState<"right" | "left" | "none">("none");

  const add = () => {
    setIndexing((indexing + 1) % pictures.length);
    setDirection("right");
  };

  const sub = () => {
    setIndexing((indexing - 1 + pictures.length) % pictures.length);
    setDirection("left");
  };

  const close = () => {
    setShow(false);
    setIndexing(0);
    setPictures([]);
    setDirection("none");
  };

  const handlePictureWatcher = (images: ArtImage[], index: number) => {
    setPictures(images);
    setIndexing(index);
    setShow(true);
  };

  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("pictureWatcher_image")) {
      close();
    }
  };

  useEffect(() => {
    PictureWatcherEvent.on("open", handlePictureWatcher);
    document.addEventListener("click", handleClick);
    return () => {
      PictureWatcherEvent.off("open", handlePictureWatcher);
      document.removeEventListener("click", handleClick);
    };
  });

  if (!show) return null;
  return (
    <div className="pictureWatcher">
      <div className="content">
        <div className="image">
          {pictures.map((image, i) => (
            <PictureWatcherImage
              show={i === indexing}
              key={`${image.id}_${image.link}`}
              image={image}
              add={add}
              sub={sub}
              setShow={setShow}
              direction={direction}
            />
          ))}
        </div>
        <button
          type={"button"}
          className="watcher_button close"
          onClick={close}
        >
          <img alt="Croix pour quitter" src="/images/template/Croix.svg" />
        </button>
        <button className="watcher_button arrow leftarrow" onClick={sub}>
          <img alt="Flèche gauche" src="/images/template/Flèche.png" />
        </button>
        <button className="watcher_button arrow rightarrow" onClick={add}>
          <img alt="Flèche droite" src="/images/template/Flèche.png" />
        </button>
      </div>
    </div>
  );
}
