// assets
import googleLogo from "../assets/googleLogo.svg"
import appleLogo from "../assets/appleLogo.svg"
import facebookLogo from "../assets/facebookLogo.svg"

export default function SigninForm() {
    return (
        <div className="">
            <div className="bg-[#161616] border border-[#2D2D2D] p-9 rounded-xl">
                <div className="form-header pb-8">
                    <h1 className="text-2xl pb-4 font-semibold text-white">Log In to your account</h1>
                    <p className="text-white text-xs"><a href="#" className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#7C55FF] to-[#9C2EF3]">Create an account</a> If you dont have one.</p>
                </div>
                <div className="form-contaienr">
                    <form className="flex flex-col gap-4" action="">
                        <div className="flex flex-col gap-1">
                            <label className="text-[#919191]" htmlFor="email">Username/Email</label>
                            <input className=" outline-none border rounded-md px-3 py-2 border-[#404040]  bg-transparent text-white text-sm" type="email" name="email" id="email" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-[#919191]" htmlFor="password">Password</label>
                            <input className=" outline-none border rounded-md px-3 py-2 border-[#404040]  bg-transparent text-white text-sm" type="password" name="password" id="password" />
                        </div>
                    </form>
                </div>
                <div className="form-Oauth pt-6 flex flex-col gap-2">
                    <p className="text-[#919191] text-sm">Or Use:</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="bg-[#1A1A1A] rounded px-6 py-1">
                            <img src={googleLogo} alt="" />
                        </a>
                        <a href="#" className="bg-[#1A1A1A] rounded px-6 py-1">
                            <img src={appleLogo} alt="" />
                        </a>
                        <a href="#" className="bg-[#1A1A1A] rounded px-6 py-1">
                            <img src={facebookLogo} alt="" />
                        </a>
                    </div>
                </div>
                <div className="form-footer pt-6">
                    <p className="text-[#919191] text-[10px] text-center">WNE3 Live - Development Beta  - D2C |  V 0.1</p>
                </div>
            </div>
        </div>
    )
}