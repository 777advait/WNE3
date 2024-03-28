// components
import ProductsGallery from "./ProductsGallery"
import Suggestions from "./Suggestions"

export default function Products() {
    return (
        <main className="max-w-[75%] mx-auto py-8">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-4">
                    <h1 className="text-6xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-l from-[#802AED]  via-[#FF31E2] to-[#802AED]">Hello John</h1>
                    <h2 className="text-3xl text-[#A2A2A2]">What do you want to shop today ? </h2>
                </div>
                <ProductsGallery />
                <Suggestions />
                <form action="">
                    <label htmlFor="prompt" hidden>Enter a prompt to make something cool</label>
                    <input className="w-full rounded-full px-10 border border-[#9C2EF3] outline-none text-white text-lg py-5 bg-[#1D1D1D]" id="prompt" name="prompt" type="text" placeholder="Enter a prompt to make something cool" />
                </form>
            </div>
        </main>
    )
}