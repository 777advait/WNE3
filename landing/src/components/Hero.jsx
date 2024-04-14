// assets
import heroImage from "../assets/hero/hero-image.png";

export default function Hero() {
  return (
    <main className="max-w-[80%] mx-auto py-12">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-6 w-1/2">
          <h1 className="text-6xl font-display font-bold">
            Discover the Future of Image Creation with Cutting-Edge Technology
          </h1>
          <p className="text-xl">
            With WNE 3, inspiration is just a click away. Whether you're a
            beginner or a seasoned pro, our AI technology offers a treasure
            trove of creative tools to explore.
          </p>
          <a href="#">
            <span className="bg-[#E95628] px-6 py-3 rounded-full border border-white font-semibold text-white">
              Try For Free
            </span>
          </a>
        </div>

        <div className="flex flex-col gap-6 bg-[#1E1F25] p-4 rounded-xl">
          <img src={heroImage} alt="" />
          <div className="flex items-center gap-6 px-4">
            <div className="bg-[#d9d9d9] w-16 h-16 rounded-full"></div>
            <p className="text-[#E5E5E5] font-bold">Modern Cyclops</p>
          </div>
        </div>
      </div>
    </main>
  );
}
