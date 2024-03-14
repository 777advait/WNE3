// assets

export default function Footer() {
    return (
        <div className="flex flex-col items-center gap-6 text-[#B7B7B7] bg-[#1B1B1B] bg-opacity-50 px-3 py-4 rounded-md border border-[#2E2E2E] z-50 backdrop-blur-sm">
            <div className="copyright flex flex-col items-center">
                <p className="text-xs">WNE3 Technologies Private Limited    |    All Rights Reserved* 2024</p>
                <p className="text-xs">Vishakapatnam , Andhra Pradesh , India </p>
            </div>
            <div className="contact">
                <p className="text-[10px]">For assistance and inquiries contact: support@wne3.live</p>
            </div>
        </div>
    )
}