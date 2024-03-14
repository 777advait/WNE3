// components
import SigninForm from "./components/SigninForm"
import Footer from "./components/Footer"

// assets

function App() {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col justify-center items-center min-h-screen w-[40%] bg-[#131313]">
        <div className="flex flex-col gap-12">
          <img src="/logo.svg" width={98} height={39} alt="" />
          <SigninForm />
          <Footer />
        </div>

      </div>
      <div className="min-h-screen w-[60%] bg-[radial-gradient(circle_at_80%_-3%,rgba(19,19,19,1)_0%,rgba(137,1,243,1)_50%,rgba(19,19,19,1)_100%)]"></div>
    </div>
  )
}

export default App
