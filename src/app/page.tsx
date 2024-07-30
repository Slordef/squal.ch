import galleryImages from "@/data/gallery";
import PictureCollection from "@/components/PictureCollection";

export default function Gallery() {
  return (
    <main>
      <div className="title-hidden">
        <h1>Gallery</h1>
      </div>
      <section className={"gallery"}>
        <div className="gallery_pictures">
          <PictureCollection pictures={galleryImages} />
        </div>
      </section>
    </main>
  );
}
