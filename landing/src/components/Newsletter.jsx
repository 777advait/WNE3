// assets
import carousel from "../assets/newsletter/carousel.png";

export default function Newsletter() {
  return (
    <section className="max-w-[80%] mx-auto py-12">
      <div className="flex items-center justify-between">
        <div className="">
          <img src={carousel} alt="" />
        </div>
        <div className="flex flex-col gap-6 w-[45%]">
          <h1 className="font-semibold text-4xl">
            Subscribe to get the latest Offers and Design
          </h1>
          <p className="text-lg">
            We believe in delivering nothing but the best, which is why we use
            premium materials and state-of-the-art printing techniques to ensure
            that your custom t-shirt is as comfortable as it is stylish.
          </p>
          <form className="relative flex items-center">
            <input
              type="email"
              className="w-full bg-[#403C47] py-4 px-8 rounded-full text-white outline-none"
              name="email"
              placeholder="Enter your email address"
            />
            <button className="absolute right-2" href="#">
              <span className="bg-[#E95628] px-6 py-2 rounded-full font-semibold text-white">
                Submit
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
