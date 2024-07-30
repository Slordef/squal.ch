import PictureCollection from "@/components/PictureCollection";
import cardImages from "@/data/cards";

export default function Cards() {
  return (
    <main>
      <div className="title-hidden">
        <h1>Cards</h1>
      </div>
      <section className={"gallery"}>
        <div className="gallery_pictures">
          <PictureCollection pictures={cardImages} />
        </div>
      </section>
    </main>
  );
}
