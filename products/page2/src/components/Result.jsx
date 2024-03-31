// data
import { promptData } from "../api/promptData"

export default function Result() {
    return (
        <main className="flex flex-col gap-8 max-w-[75%] mx-auto py-4">
            <div className=" flex flex-col gap-6 border border-[#6A6A6A] px-8 py-6 rounded-lg">
                <p className="text-[#CCCCCC] ">Prompt: {promptData.prompt}</p>

                <div className="grid grid-cols-4 gap-4">
                    {
                        promptData.iterations.map(iteration => (
                            <div class="relative group">
                                <img src={iteration.image} alt="Image" class="w-full" />
                                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300"></div>
                                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div class="flex flex-col gap-4">
                                        <a href="#" class="bg-[#7C55FF] text-center cursor-pointer text-white py-2 px-4 rounded-full">
                                            Buy Now
                                        </a>
                                        <a href="#" class="bg-white text-center cursor-pointer py-2 px-4 rounded-full">
                                            Add to cart +
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <a href="#" className="text-white font-semibold mx-auto"><span className="bg-[#9C2EF3] px-3 py-2 rounded-md">Load More</span></a>
            </div>
            <form action="">
                <label htmlFor="prompt" hidden>Enter a prompt to make something cool</label>
                <input className="w-full rounded-full px-10 border border-[#9C2EF3] outline-none text-white text-lg py-5 bg-[#1D1D1D]" id="prompt" name="prompt" type="text" placeholder="Enter a prompt to make something cool" />
            </form>
        </main>
    )
}