"use client";

import { ArtImage } from "@/intefaces/artImage";
import { CSSProperties, useEffect, useRef, useState } from "react";

export default function PictureFrame({
  picture,
  onClick,
}: {
  picture: ArtImage;
  onClick: () => void;
}) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  const imageSrc = "/images/" + picture.link;
  const imageAlt = picture.name;

  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, [imgRef]);

  const style: CSSProperties = loaded
    ? { display: "block" }
    : { display: "none" };
  return (
    <button
      type={"button"}
      className={"pictureFrame"}
      onClick={onClick}
      style={style}
    >
      <div className="pictureFrame_image">
        <img
          ref={imgRef}
          src={imageSrc}
          alt={imageAlt}
          onLoad={() => setLoaded(true)}
        />
      </div>
    </button>
  );
}
