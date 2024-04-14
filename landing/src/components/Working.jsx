// assets
import separator from "../assets/working/separator.svg";

export default function Working() {
  return (
    <section className="flex flex-col max-w-[80%] mx-auto gap-16 py-12">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl font-semibold">How it works</h1>
        <p className="text-lg w-[40%] text-center">
          Welcome to WNE3, where innovation meets imagination. Are you ready to
          elevate your photos to new heights
        </p>
      </div>
      <div className="flex gap-10 items-start">
        <div className="flex flex-col gap-4 items-center text-center">
          <h2 className="text-4xl font-semibold">Input Your Vision</h2>
          <p className="text-sm">
            Start by providing a brief description or concept for the image you
            want to create. Whether it's a simple sketch, a detailed brief, or
            just a few keywords, our AI algorithms can understand your vision
            and bring it to life.
          </p>
        </div>
        <img className="self-center" src={separator} alt="" />
        <div className="flex flex-col gap-4 items-center text-center">
          <h2 className="text-4xl font-semibold">AI Magic by WNE3</h2>
          <p className="text-sm">
            Once you've input your vision, our powerful AI technology gets to
            work. Using sophisticated algorithms, our system generates a range
            of image options based on your input, taking into account factors
            such as style, composition, and subject matter.
          </p>
        </div>
        <img className="self-center" src={separator} alt="" />
        <div className="flex flex-col gap-4 items-center text-center">
          <h2 className="text-4xl font-semibold">Final Output</h2>
          <p className="text-sm">
            Once you're satisfied with the results, you can download the final
            image in high resolution, ready to use for your projects, campaigns,
            or creative endeavors. With WNE3, the possibilities are endless, and
            the results are always stunning.
          </p>
        </div>
      </div>
    </section>
  );
}
