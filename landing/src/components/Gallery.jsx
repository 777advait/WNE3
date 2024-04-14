// api
import { galleryData } from "../api/galleryData";

function GalleryItem(props) {
  return (
    <div className="flex flex-col gap-4 bg-[#2A2731] p-4 rounded-xl">
      <img src={props.image} alt="" />
      <p className="text-xl font-semibold text-white">{props.text}</p>
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="flex flex-col max-w-[80%] mx-auto gap-12 py-12">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl font-semibold">
          Join the Future of Image Creation
        </h1>
        <p className="text-lg w-[60%] text-center">
          Start with selecting from the style below, with our AI-powered
          platform, the only limit is your imagination. From bold graphics to
          intricate patterns, the possibilities are endless.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-10">
        {galleryData.map((data) => (
          <GalleryItem key={data.id} image={data.image} text={data.text} />
        ))}
      </div>

      <a className="self-center" href="#">
        <span className="bg-[#E95628] px-12 py-3 rounded-full border border-white font-semibold text-white">
          See All
        </span>
      </a>
    </section>
  );
}
