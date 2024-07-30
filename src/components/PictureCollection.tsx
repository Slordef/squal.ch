"use client";
import { ArtImage } from "@/intefaces/artImage";
import PictureFrame from "@/components/PictureFrame";
import PictureWatcherEvent from "@/utils/pictureWatcherEvent";

export default function PictureCollection({
  pictures,
}: {
  pictures: ArtImage[];
}) {
  const open = (index: number) => {
    PictureWatcherEvent.emit("open", pictures, index);
  };
  return (
    <>
      {pictures.map((picture, i) => (
        <PictureFrame
          key={picture.id}
          picture={picture}
          onClick={() => open(i)}
        />
      ))}
    </>
  );
}
