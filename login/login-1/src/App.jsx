// components
import SigninForm from "./components/SigninForm"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="flex flex-col gap-12 font-display min-h-screen justify-center items-center bg-[radial-gradient(circle_at_50%_2%,rgba(255,255,255,1)_0%,rgba(128,42,237,1)_33%,rgba(66,13,133,1)_66%,rgba(0,0,0,1)_100%)]">
      <SigninForm />
      <Footer />
    </div>
  )
}

export default App
