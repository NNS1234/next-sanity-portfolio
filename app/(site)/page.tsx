import { getProjects } from "@/sanity/sanity-utils"
import cv from "@/public/Nudrat Resume_Algo.jpeg";
import Me from "@/public/per.jpg";
import Image from 'next/image'
import Link from 'next/link'
import Contact from "../components/Contact";
import NameTypography from "../components/NameTypography";
import Skills from "../components/Skills";
export default async function Home() {
  const projects = await getProjects();
  return (
    <div>
       
      <div className="divide-y divide-gray-100 dark:divide-gray-700">
      <div className="space-y-2 pt-5 pb-8 md:space-x-5">
      <h1 className="text-7xl font-extrabold">Hello I&apos;m 
         <NameTypography/>
      </h1>
      </div>

      <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-8">
          <Image
            alt="Picture of Nudrat Saber"
            src={Me}
            className="h-48 w-48 rounded-full object-cover object-top"
          />
          <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
            Nudrat Saber
          </h3>
          <p className="text-gray-500 dark:text-gray-300 text-center">
            Hey my name is Nudrat and I am a Software Developer
          </p>

          <div className="flex space-x-5 pt-6">
            <a href="https://github.com/NNS1234" target="_blank">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8 text-orange-500 hover:text-red-600"
              >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/nudratsaber/" target="_blank">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8  text-orange-500 hover:text-red-600"
              >
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
              </svg>
            </a>
            <a href="mailto:nudratsaber@gmail.com" target="_blank">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8  text-orange-500 hover:text-red-600"
              >
                <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 01194 256h648.8a7.2 7.2 0 014.4 12.9z" />
              </svg>
            </a>
            <a href="https://twitter.com/NNS7367" target="_blank">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8  text-orange-500 hover:text-red-600"
              >
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 01-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 01-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 00229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="prose max-w-none prose-lg pt-8 pb-7 dark:prose-invert xl:col-span-2">
        <h2 className="  font-bold text-gray-700 text-3xl">About Me</h2>
          <p className="mb-7">
          👋 Hey there, I&apos;m your friendly Software Developer with several years of experience in the fascinating realm of frontend development! 💻 I&apos;m your go-to for Java, JavaScript, TypeScript, React.js, Node.js, and Next.js magic. 🚀 When it comes to databases like MYSQL, MongoDB, and PostgreSQL, I&apos;m like a pro explorer. 🐳 I have a knack for crafting user-centric interfaces that shine, and I&apos;m all about optimizing database performance to make things run smoothly. 💪 Challenges? I eat them for breakfast, thanks to my agile mindset. 🤖 And hey, I&apos;m always hungry for knowledge, committed to learning, and thrive on collaborative teamwork. Let&apos;s team up and create some coding wonders! 🌟
          </p>

          <a href="https://flowcv.com/resume/cgusqt7jpi" title="My resume" target="_blank" rel="noopener noreferrer" className="mt-10 bg-orange-500 hover:bg-orange-600 rounded-lg text-white-500 font-bold py-3 px-4 whitespace-nowrap transition">
        My resume
      </a>
        </div>
      </div>
    </div>
    
    <Skills />
    
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>
      <p className="text-gray-500 dark:text-gray-300">
      Explore my portfolio to see a collection of projects that reflect my passion for innovation and problem-solving.
          </p>
      
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project._id} className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-red-600 transition">
          {project.image &&
           (
            <Image
              src={project.image}
              alt={project.name}
              width={750}
              height={300}
              className="object-cover rounded-lg border border-gray-500 h-40"
            />
          )}
          <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            {project.name}
          </div>

          
        </Link>

      ))}
      </div>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">Contact</h2>
      
      <p className="text-gray-500 dark:text-gray-300">
      Open to collaborations, inquiries, or just a friendly chat. Don&apos;t hesitate to get in touch!
          </p>
      <Contact></Contact>


      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">Copyright © Nudrat Nawal Saber</span>      
    </div>
   
  )
}


