import Image from "next/image"
import "./navbar.css"
import Link from "next/link"
import logo from "Assets/khb-logo-zip-file (1)/svg/logo-black.svg"
import { Button } from "components/Button/Button"
export default function Navbar() {
  return (
    <header className="flex items-center justify-between py-3">
      <div className="logo text-2xl font-extrabold ">
        <a href="#">
          <Image src={logo} alt="KHB" className="w-24 font-black"></Image>
        </a>
      </div>
      <ul className="nav flex flex-wrap items-center justify-evenly">
        <li className="nav-link mx-2 text-xl sm:mx-6">
          <Link href="#experience">Experience</Link>
        </li>
        <li className="nav-link mx-2 text-xl sm:mx-6">
          <Link href="/works">Work</Link>
        </li>
        <li className="nav-link mx-2 text-xl sm:mx-6">
          <Link href="#about">About</Link>
        </li>
        <li className="nav-link mx-2 text-xl sm:mx-6">
          <Link href="#contact">Contact</Link>
        </li>
        <Button href="#" intent={"secondary"}>
          Resume
        </Button>
      </ul>
    </header>
  )
}
