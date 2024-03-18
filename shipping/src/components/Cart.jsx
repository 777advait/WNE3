// assets

// components

// imports
import { itemsData } from "../items"


function CartItem(props) {
    return (
        <div className="flex flex-col">
            <div className="flex justify-start gap-3">
                <div className="w-32 h-32 bg-[#D9D9D9] rounded-md"></div>
                <div className="flex flex-col justify-between py-2">
                    <div className="flex flex-col">
                        <h1 className="text-xl font-semibold text-white">{props.itemTitle}</h1>
                        <div className="flex gap-4">
                            <p className="text-white text-sm font-normal">{props.itemType} - {props.size}</p>
                            <p className="text-white text-sm font-normal">QTY: {props.quantity}</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-semibold text-white">${props.price}</h1>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default function ShippingForm() {
    return (
        <div className="flex flex-col bg-[#191919] border border-[#393939] p-8 rounded-2xl gap-8">
            <h1 className="text-4xl text-white font-semibold ">Summary</h1>
            {
                itemsData.map(item => (
                    <CartItem key={item.id} itemTitle={item.title} itemType={item.type} size={item.size} quantity={item.quantity} price={item.price} />
                ))
            }
            <div className="flex flex-col gap-6">
                <h1 className="text-3xl font-semibold text-white">Total: ${
                    itemsData.reduce((accumulator, currentItem) => accumulator + currentItem.price, 0)
                }</h1>
                <a className="flex flex-grow-0 text-xl text-white " href="#"><span className="bg-[#9C2EF3] px-6 py-2 rounded-lg">Proceed to payment</span></a>
            </div>
        </div>
    )
}