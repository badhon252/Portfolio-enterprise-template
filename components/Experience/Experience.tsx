"use client"
// import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid"
import { useState } from "react"

function AccordionItem({ title, content }: { title: string; content: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left focus:outline-none"
      >
        <span className="text-lg font-semibold text-indigo-800">{title}</span>
        {/* {isOpen ? (
          <ChevronUpIcon className="h-5 w-5 text-indigo-600" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 text-indigo-600" />
        )} */}
      </button>
      {isOpen && <div className="p-4 text-gray-700">{content}</div>}
    </div>
  )
}

export default function Accordion() {
  const data = [
    {
      title: "Python Programming Instructor",
      content: `
        - Delivered Comprehensive Training: Led engaging and practical Python programming courses, passionately teaching a diverse group of students and equipping them with essential skills in Python for real-world applications.
        - Developed Custom Curricula: Created and refined course materials to meet the evolving needs of students, ensuring a deep understanding of Python fundamentals, object-oriented programming, and advanced concepts.
        - Achieved High Student Success Rates: Fostered an interactive learning environment, resulting in exceptional student performance and high course completion rates. Received positive feedback for making complex topics accessible and engaging.
        - Mentored Aspiring Developers: Provided ongoing support and mentorship to students, helping them build confidence in their coding abilities and guiding them in their journey towards becoming proficient Python developers.
      `,
    },
    {
      title: "Freelance Projects",
      content: `
        - Developed various web applications using Next.js, React, and Tailwind CSS.
        - Collaborated with clients to understand their requirements and deliver custom solutions.
        - Focused on performance optimization, responsive design, and best practices in web development.
      `,
    },
  ]

  return (
    <section id="experience" className="mx-auto min-h-screen max-w-3xl px-4 py-16">
      <h1 className="mb-12 text-center text-4xl font-black text-indigo-700 md:text-6xl lg:text-8xl">Experiences</h1>
      <div className="accordion space-y-4">
        {data.map((item, index) => (
          <AccordionItem key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </section>
  )
}
