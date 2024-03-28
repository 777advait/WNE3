// data
import { galleryData } from "../api/galleryData"


export default function ProductsGallery() {
    return (
        <div className="flex flex-col gap-4">
            <p className=" text-lg text-white">What people are making</p>
            <div className="grid grid-cols-4 gap-6">
                {
                    galleryData.map(data => (
                        <img width={300} src={data.image} alt={data.title} />
                    ))
                }
            </div>
        </div>
    )
}