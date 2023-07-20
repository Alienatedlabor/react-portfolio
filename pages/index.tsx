import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import avatar from '../public/ReadyPlayerMe-Avatar.png';
import Project from '@/components/Project';
import { ContactMe } from '@/components/ContactMe';
import { useState } from 'react';

//function for google font, allows preload of font
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const darkClass = darkMode ? 'dark' : '';
  const font = inter.className;

  return (
    <div className={`${darkClass} ${font}`}>
      <Head>
        <title>Cole Heideman | Web Developer</title>
      </Head>

      <main>
        <section className="min-h-screen">
          <nav className="p-5 mb-10 flex gap-2  items-center justify-end lg:mx-4 ">
            <ul className="  text-cyan-900 flex items-center text-center font-bold text-lg gap-2  dark:text-white">
              <li>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  className=" hover:opacity-80  border border-cyan-900 px-4 py-2 rounded-md dark:border-white "
                  href="/Cole_Heideman_-_Frontend_Web_Developer.pdf"
                >
                  Resume
                </a>
              </li>
              <li>
                <button
                  className="text-center gap-1 flex px-3 hover:opacity-80 rounded-md items-center "
                  onClick={() => setDarkMode(!darkMode)}
                >
                  {' '}
                  <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
                  <p className="hidden lg:block">
                    {darkMode === false ? 'Dark mode' : 'Light mode'}
                  </p>
                </button>
              </li>
              <li>
                <button className="hover:opacity-80 flex">
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://github.com/Alienatedlabor"
                  >
                    {' '}
                    <SiGithub className="cursor-pointer text-2xl" />
                  </a>
                </button>
              </li>
              <li>
                <button className="hover:opacity-90 flex px-3">
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://www.linkedin.com/in/cole-heideman-98a781141/"
                  >
                    <SiLinkedin className="cursor-pointer text-2xl" />
                  </a>
                </button>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col text-center p-10">
            <h2 className=" lg:text-7xl text-5xl font-medium text-cyan-900 dark:text-white">
              Cole Heideman
            </h2>
            <h3 className="lg:text-3xl text-1xl py-4 font-bold">
              Frontend Web Developer
            </h3>
          </div>

          <div className="bg-gradient-to-b from-cyan-900 to-cyan-600 rounded-full relative mx-auto max-w-[320px] max-h-[320px] overflow-hidden">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              priority
              src={avatar}
              alt="3d digital representation of smiling bald bearded man with glasses (me) "
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <p className="text-md text-center text-gray-800 dark:text-white py-10 max-w-xl mx-auto">
            I&apos;m passionate about learning new things and solving problems
            with code. When I&apos;m not coding you&apos;ll find me improving my
            German, playing guitar, or gaming.
          </p>
          <div className="flex justify-center my-2">
            <svg
              className="dark:fill-white"
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
            >
              <path
                d="M9.5 14.25L19 23.75L28.5 14.25"
                stroke="rgb(8 51 68)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </section>
        <section className="flex-col flex lg:flex-row justify-center  p-8 bg-cyan-700">
          <div className="flex flex-col items-center  lg:p-8 ">
            <h3 className="text-xl py-3 text-center font-bold  text-white">
              Languages & Frameworks:
            </h3>
            <ul className=" border border-white p-5  rounded-md grid grid-cols-2 gap-x-12 gap-1 w-64 h-36  text-white">
              <li>Javascript</li>
              <li>Typescript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>HTML/CSS</li>
              <li>Tailwind</li>
              <li>Bootstrap</li>
              <li>SASS</li>
            </ul>
          </div>
          <div className="flex flex-col items-center  lg:p-8">
            <h3 className="text-xl py-3 items-center text-center font-bold  text-white">
              Tech:
            </h3>
            <div>
              <ul className=" border border-white p-5  rounded-md grid grid-cols-2 gap-x-12 gap-1  w-64 h-36 text-white">
                <li>Git</li>
                <li>Linux CLI</li>
                <li>VS Code</li>
                <li>VMBox</li>
                <li>Wordpress</li>
                <li>Firebase</li>
                <li>Vercel</li>
              </ul>
            </div>
          </div>
          <div></div>
        </section>
        <section className="mt-14">
          <h3 className="flex justify-center text-cyan-700 dark:text-white font-bold text-5xl py-2">
            Projects
          </h3>
          <div className="grid gap-2 mx-1 my-1 px-1 py-1 lg:grid-cols-3 ">
            <Project
              title="Brewview"
              description="A React app to conduct online beer tastings. Styled with Tailwind, backend and auth handled through Firebase. Full CRUD functionality."
              demoLink="https://beerview.vercel.app/"
              githubLink="https://github.com/Alienatedlabor/beerview"
              imageURL="/brewview.png"
              alt="an image depicting a greyer background half which contains a few listed beers to be rated, and a bright modal open on the right with a form for rating."
            />

            <Project
              title="Overwatch Main Report"
              description="A react typescript app utilizing the Overfast API to fetch account-level Overwatch hero reports. Styled with Tailwind."
              demoLink="https://overwatch-main-report.vercel.app/"
              githubLink="https://github.com/Alienatedlabor/overwatch-main-report"
              imageURL="/overwatch.png"
              alt="a simple UI with an input and search button, a list of results, and a card giving stats on the selected result"
            />

            <Project
              title="Etch-a-Sketch"
              imageURL="/etchASketchScreenshot.png"
              alt="a 16 by 16 grid of squares with some squares colored randomly and some squares colored black. On the left side are buttons to change the color, clear the grid, change the grid size, or enable a random color mode."
              description="Web app DOM manipulation exercise written in vanilla javascript."
              githubLink="https://github.com/Alienatedlabor/Etch-a-Sketch"
              demoLink="https://alienatedlabor.github.io/Etch-a-Sketch/"
            />
          </div>
          <div className="text-center">
            <p className="mb-6">
              This portfolio is a next.js app utilizing typescript styled with
              tailwind. Check it out on github{' '}
              <a
                className="underline hover:text-cyan-700"
                href="https://github.com/Alienatedlabor/react-portfolio"
              >
                {' '}
                here.
              </a>
            </p>
          </div>
        </section>
        <section className="flex justify-center align-middle py-4  bg-cyan-700">
          <ContactMe />
        </section>
      </main>
    </div>
  );
}
// TODO: change the links to open in a new tab/window
