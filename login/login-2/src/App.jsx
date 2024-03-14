// components
import SigninForm from "./components/SigninForm"
import Footer from "./components/Footer"

// assets
import cross1 from "./assets/cross 1.svg"
import cross2 from "./assets/cross 2.svg"
import cross3 from "./assets/cross 3.svg"
import cube from "./assets/cube.svg"
import torus from "./assets/torus.svg"

function App() {
  return (
    <div className="relative flex flex-col gap-12 font-display min-h-screen justify-center items-center bg-[#131313]">
      <div className="bg-elements">
        <img className="absolute top-20 left-48" src={cross1} alt="" />
        <img className="absolute top-44 right-36" src={cross2} alt="" />
        <img className="absolute bottom-48 left-[22%]" src={cross3} alt="" />
        <img className="absolute bottom-28 right-[35%]" src={cross2} alt="" />
        <img className="absolute bottom-16 left-20" src={cube} alt="" />
        <img className="absolute bottom-16 right-12" src={cube} alt="" />
        <img className="absolute top-72 right-[27%]" src={cube} alt="" />
        <img className="absolute top-80 left-20" src={torus} alt="" />
        <img className="absolute bottom-48 right-[20%]" src={torus} alt="" />
      </div>
      <img width={95} height={39} src="/logo.svg" alt="logo" />
      <SigninForm />
      <Footer />
    </div>
  )
}

export default App
