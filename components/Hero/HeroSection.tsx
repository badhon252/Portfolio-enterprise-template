// HeroSection.tsx
/* eslint-disable react/no-unescaped-entities */
import "./Hero.style.css"
import Image from "next/image"
import hero from "Assets/image/badhon252.png"
import { Button } from "components/Button/Button"
import Navbar from "../Nav/Navbar"

export default function HeroSection() {
  return (
    <header id="heroSection" className="flex min-h-screen flex-col justify-between">
      <Navbar />
      <div
        id="hero"
        className="container mx-auto flex flex-col items-center justify-center px-4 py-6 text-center md:py-8"
      >
        {/* Introduction */}
        <div className="mb-8">
          <p className="text-xl font-semibold text-gray-700 sm:text-2xl md:text-3xl">Hello 👋</p>
          <h1 className="name my-2 text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
            I'm Khalid Hossain.
          </h1>
          <h2 className="title my-2 text-3xl font-extrabold sm:text-5xl md:text-7xl">Frontend Engineer</h2>
        </div>

        {/* Hero image and slogans side by side */}
        <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-8 md:space-y-0 lg:space-x-12">
          <p className="slogan text-lg font-medium text-gray-600 md:w-1/3 md:text-2xl">
            "Turning Ideas into Interactive Reality.💡"
          </p>
          <div className="hero-img w-48 sm:w-56 md:w-64 lg:w-80 xl:w-96">
            <Image
              src={hero}
              alt="Photo of Khalid Hossain Badhon."
              layout="responsive"
              className=" rounded-full border-4 border-indigo-500 shadow-lg"
            />
          </div>
          <p className="slogan text-center text-lg font-medium text-gray-600 md:w-1/3 md:text-left md:text-2xl">
            "Determined to Deliver, Passionate to Innovate - Expert in Next.js🚀"
          </p>
        </div>

        {/* Call-to-action buttons */}
        <div className="call-to-action mt-8 flex w-full flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 md:mt-12">
          <Button href="#" intent={"secondary"} className="out-line px-6 py-3 text-lg">
            Hire me
          </Button>
          <Button href="#work" className="primary px-6 py-3 text-lg">
            View Works
          </Button>
        </div>
      </div>
    </header>
  )
}
