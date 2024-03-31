// assets
import navLogo from "../assets/nav-logo.svg"

export default function Navbar() {
    return (
        <header className="px-12 py-6">
            <a href="/">
                <img width={76} height={43} src={navLogo} alt="" />
            </a>
        </header>
    )
}