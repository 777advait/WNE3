// assets


// components
import ShippingForm from "./ShippingForm";
import Cart from "./Cart"

export default function Shipping() {
    return (
        <div className="flex h-screen justify-center items-center ">
            <div className="flex flex-1 justify-center items-start gap-20">
                <ShippingForm className="w-[75%]" />
                <Cart />
            </div>
        </div>
    )
}