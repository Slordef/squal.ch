import PictureCollection from "@/components/PictureCollection";
import coversImages from "@/data/covers";

export default function Covers() {
  return (
    <main>
      <div className="title-hidden">
        <h1>Cards</h1>
      </div>
      <section className={"gallery"}>
        <div className="gallery_pictures">
          <PictureCollection pictures={coversImages} />
        </div>
      </section>
    </main>
  );
}
