// assets
import arrowRight from "../assets/about/arrow-right.svg";

export default function About() {
  return (
    <section className="max-w-[80%] mx-auto py-12">
      <div className="flex items-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-semibold">
            Ready to unleash your creativity? Empower Your Imagination with
            Innovative Generative AI Technology
          </h1>
          <div className="flex items-center gap-8">
            <div className="flex items-center">
              <div className="bg-[#494553] border-4 border-[#201A28] h-12 w-12 rounded-full -mr-4"></div>
              <div className="bg-[#494553] border-4 border-[#201A28] h-12 w-12 rounded-full -mr-4"></div>
              <div className="bg-[#494553] border-4 border-[#201A28] h-12 w-12 rounded-full -mr-4"></div>
            </div>
            <a
              className="flex items-center gap-2 text-[#F2994A] font-medium"
              href="#"
            >
              View all examples
              <span>
                <img src={arrowRight} alt="" />
              </span>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 w-full">
          <p className=" text-lg text-right">
            Don't settle for mass-produced mediocrity. Embrace the future with
            custom images powered by generative AI
          </p>

          <div className="grid grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <h2 className="text-4xl font-semibold">
                245<span className="text-[#E95628]">K</span>
              </h2>
              <p className="text-center">Creators</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-4xl font-semibold">
                545<span className="text-[#E95628]">K</span>
              </h2>
              <p className="text-center">Artworks</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-4xl font-semibold">
                445<span className="text-[#E95628]">K</span>
              </h2>
              <p className="text-center">Orders Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
