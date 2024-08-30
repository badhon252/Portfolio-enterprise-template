import Link from "next/link"
export default function Contact() {
  return (
    <footer id="contact" className="relative mx-auto min-h-screen sm:w-11/12 md:w-4/6 xl:w-3/6">
      <h1 className="h1 text-bold my-16 text-8xl font-black">Contact info</h1>
      <div className="my-4 text-center text-2xl font-bold ">
        <h3 className="primary inline-block px-8">Let&apos;s Connect </h3>
      </div>
      <article>
        {" "}
        I&apos;m always open to discussing new opportunities, collaborating on exciting projects, or simply exchanging
        ideas. Feel free to reach out via email or connect with me on LinkedIn. Let&apos;s create something
        extraordinary together!
      </article>
      <div className="contact-mail my-8 text-blue-700">
        <Link href="#">dev.khalidhossain@gmail.com </Link>
      </div>

      <p className="absolute bottom-10">All rights reserved by @badhon252</p>
    </footer>
  )
}
