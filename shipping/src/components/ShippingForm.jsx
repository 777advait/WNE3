// assets

// components

export default function ShippingForm() {
    return (
        <div className="flex flex-col gap-16 w-[40%]">
            <h1 className="text-2xl text-white font-semibold">Add Shipping Address</h1>

            <form action="" className="grid grid-cols-2 gap-12 ">
                <div className="relative col-span-1">
                    <input className="peer border-b-2 border-[#565656] placeholder-transparent focus:outline-none bg-transparent text-white text-lg w-full" type="text" id="fname" name="fname" placeholder="First Name" />
                    <label htmlFor="fname" className="absolute left-0.5 -top-5 peer-placeholder-shown:-top-0.5 peer-placeholder-shown:text-xl text-sm font-medium text-[#8B8B8B] transition-all duration-100 appearance-none hover:cursor-text">First Name</label>
                </div>
                <div className="relative col-span-1">
                    <input className="peer border-b-2 border-[#565656] placeholder-transparent focus:outline-none bg-transparent text-white text-lg w-full" type="text" id="lname" name="lname" placeholder="Last Name" />
                    <label htmlFor="lname" className="absolute left-0.5 -top-5 peer-placeholder-shown:-top-0.5 peer-placeholder-shown:text-xl text-sm font-medium text-[#8B8B8B] transition-all duration-100 appearance-none hover:cursor-text">Last Name</label>
                </div>
                <div className="relative col-span-2">
                    <input className="peer border-b-2 border-[#565656] placeholder-transparent focus:outline-none bg-transparent text-white text-lg w-full" type="text" id="address" name="address" placeholder="Flat no / House no /Street" />
                    <label htmlFor="address" className="absolute left-0.5 -top-5 peer-placeholder-shown:-top-0.5 peer-placeholder-shown:text-xl text-sm font-medium text-[#8B8B8B] transition-all duration-100 appearance-none hover:cursor-text">Flat no / House no /Street</label>
                </div>
                <div className="relative col-span-1">
                    <input className="peer border-b-2 border-[#565656] placeholder-transparent focus:outline-none bg-transparent text-white text-lg w-full" type="text" id="City" name="City" placeholder="City" />
                    <label htmlFor="City" className="absolute left-0.5 -top-5 peer-placeholder-shown:-top-0.5 peer-placeholder-shown:text-xl text-sm font-medium text-[#8B8B8B] transition-all duration-100 appearance-none hover:cursor-text">City</label>
                </div>
                <div className="relative col-span-1">
                    <input className="peer border-b-2 border-[#565656] placeholder-transparent focus:outline-none bg-transparent text-white text-lg w-full" type="text" id="city" name="city" placeholder="State" />
                    <label htmlFor="city" className="absolute left-0.5 -top-5 peer-placeholder-shown:-top-0.5 peer-placeholder-shown:text-xl text-sm font-medium text-[#8B8B8B] transition-all duration-100 appearance-none hover:cursor-text">State</label>
                </div>
                <div className="relative col-span-1">
                    <input className="peer border-b-2 border-[#565656] placeholder-transparent focus:outline-none bg-transparent text-white text-lg w-full" type="number" id="postal" name="postal" placeholder="Postal / Zip code" />
                    <label htmlFor="postal" className="absolute left-0.5 -top-5 peer-placeholder-shown:-top-0.5 peer-placeholder-shown:text-xl text-sm font-medium text-[#8B8B8B] transition-all duration-100 appearance-none hover:cursor-text">Postal / Zip code</label>
                </div>
                <div className="relative col-span-1">
                    <input className="peer border-b-2 border-[#565656] placeholder-transparent focus:outline-none bg-transparent text-white text-lg w-full" type="text" id="name" name="name" placeholder="Name" />
                    <label htmlFor="name" className="absolute left-0.5 -top-5 peer-placeholder-shown:-top-0.5 peer-placeholder-shown:text-xl text-sm font-medium text-[#8B8B8B] transition-all duration-100 appearance-none hover:cursor-text">Name</label>
                </div>
            </form>
        </div>

    )
}