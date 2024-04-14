// api
import { ordersData } from "../api/ordersData";

function OrderItem(props) {
  return (
    <div className="flex gap-4 bg-[#2A2731] p-4 rounded-xl">
      <img src={props.image} alt="" />
      <div className="flex flex-col justify-between py-2.5">
        <p className="text-lg text-white">{props.name}</p>
        <p className="text-[#777777]">From {props.location}</p>
      </div>
    </div>
  );
}

export default function Orders() {
  return (
    <section className="flex flex-col max-w-[80%] mx-auto gap-12 py-12">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl font-semibold">Recently Ordered</h1>
      </div>

      <div className="grid grid-cols-3 gap-10">
        {ordersData.map((data) => (
          <OrderItem
            key={data.id}
            image={data.image}
            name={data.name}
            location={data.location}
          />
        ))}
      </div>
    </section>
  );
}
