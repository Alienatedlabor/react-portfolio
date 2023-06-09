import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { Figtree } from 'next/font/google';
import Image from 'next/image';
import avatar from '../public/ReadyPlayerMe-Avatar.png';
import Project from '@/components/Project';
import { ContactMe } from '@/components/ContactMe';
import { useState } from 'react';

//function for google font, allows preload of font
const figtree = Figtree({ subsets: ['latin'] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const darkClass = darkMode ? 'dark' : '';
  const font = figtree.className;

  return (
    <div className={`${darkClass} ${font}`}>
      <Head>
        <title>Cole Heideman | Web Developer</title>
      </Head>

      <main>
        <section className="min-h-screen">
          <nav className="p-5 mb-10 flex gap-2 justify-between">
            <ul className="flex items-center gap-2">
              <li>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  className=" hover:shadow-md hover:opacity-90   bg-gradient-to-r from-cyan-900 to-cyan-600 text-white px-4 py-2 rounded-md "
                  href="/Resume5-23-2023.pdf"
                >
                  Resume
                </a>
              </li>
              <li>
                <button
                  className="text-center gap-1 flex px-3 py-1.5 rounded-md align-middle "
                  onClick={() => setDarkMode(!darkMode)}
                >
                  {' '}
                  <p>{darkMode === false ? 'Dark mode: ' : 'Light mode: '}</p>
                  <BsFillMoonStarsFill className="cursor-pointer text-xl" />
                </button>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col text-center p-10">
            <h2 className=" text-5xl font-medium py-4 text-cyan-900 dark:text-cyan-600">
              Cole Heideman
            </h2>
            <h3 className="text-2xl py-4">Frontend Web Developer</h3>
            <p className="text-md leading-normal text-gray-800 dark:text-cyan-600 py-4 max-w-xl mx-auto">
              I&apos;m passionate about creating dynamic and engaging user
              experiences that are functional and intuitive, and I&apos;m
              constantly striving to learn and grow. When I&apos;m not coding
              you&apos;ll find me improving my German, playing guitar, or
              getting better at my current favorite game.
            </p>
          </div>

          <div className="bg-gradient-to-b from-cyan-900 to-cyan-600 rounded-full relative mx-auto w-80 h-80 overflow-hidden">
            <Image
              src={avatar}
              alt="3d digital representation of smiling bald bearded man with glasses (me) "
              fill
            />
          </div>
          <div className="flex justify-center text-5xl gap-12 py-4 dark:text-cyan-600 text-cyan-900">
            <SiGithub className="cursor-pointer" />
            <SiLinkedin className="cursor-pointer" />
          </div>
        </section>
        <section className="flex-col flex lg:flex-row justify-center gap-16 p-8 bg-gradient-to-b from-cyan-900 to-cyan-600">
          <div className="flex flex-col items-center shadow-md p-10 bg-white dark:bg-gray-200 rounded-md">
            <h3 className="text-xl py-3 text-center dark:text-cyan-800 text-cyan-700">
              Languages/Frameworks used:
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-2  text-gray-800">
              <li>Javascript</li>
              <li>Typescript</li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind</li>
              <li>SASS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className="flex flex-col items-center shadow-lg p-10 bg-white  dark:bg-gray-200 rounded-md">
            <h3 className="text-xl py-3 items-center text-center  dark:text-cyan-800 text-cyan-700">
              Technology used:
            </h3>
            <div>
              <ul className="grid grid-cols-2 gap-x-6 gap-2  text-gray-800">
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
        <section>
          <h3 className="flex justify-center text-cyan-700 dark:text-cyan-600 text-2xl py-4">
            Projects:
          </h3>
          <div className="grid gap-2 mx-1 my-1 px-1 py-1 lg:grid-cols-3 ">
            <Project
              title="Brewview"
              description="A React app to conduct online beer tastings with my friends. The primary goal is to have a consensus based way to decide on a beer to taste together, establish vocabulary for rating/tasting, and then to aggregate those ratings. The app is styled with Tailwind and the backend and auth is handled through Firebase. This is still a work in progress."
              demoLink="https://beerview.vercel.app/"
              githubLink="https://github.com/Alienatedlabor/beerview"
              imageURL="/brewview.png"
              alt="an image depicting a greyer background half which contains a few listed beers to be rated, and a bright modal open on the right with a form for rating."
            />
            <Project
              title="Overwatch Main Report"
              description="A react typescript app that utilizes the overfast API to look a player up and report what character they main in the game Overwatch. Styled with Tailwind."
              demoLink="https://overwatch-main-report.vercel.app/"
              githubLink="https://github.com/Alienatedlabor/overwatch-main-report"
              imageURL="/overwatch.png"
              alt="a simple UI with an input and search button, a list of results, and a card giving stats on the selected result"
            />
            <Project
              title="This portfolio!"
              description="a Next.js app utilizing typescript, styled with Tailwind"
              demoLink="https://react-portfolio-cole-heideman.vercel.app/"
              githubLink="https://github.com/Alienatedlabor/react-portfolio"
              imageURL="/portfolio.png"
              alt="this portfolio's hero section in dark mode"
            />
            <Project
              alt="weather app UI showing example weather, a search bar, and a five day forecast"
              title="Weather App"
              imageURL="/weatherApp.png"
              description="A weather app written in vanilla Javascript, utilizing OpenWeather API. Features include localized weather, results in either Fahrenheit or Celsius, a five-day forecast, and a backround that changes dynamically depending on whether it is day or night in the respective location. "
              demoLink="https://alienatedlabor.github.io/Weather-App/"
              githubLink="https://github.com/Alienatedlabor/Weather-App"
            />

            <Project
              title="Etch-a-Sketch"
              imageURL="/etchASketchScreenshot.png"
              alt="a 16 by 16 grid of squares with some squares colored randomly and some squares colored black. On the left side are buttons to change the color, clear the grid, change the grid size, or enable a random color mode."
              description="An etch-a-sketch webapp featuring the ability to change the grid-count, a color picker, a random color mode, and a clear button, written in vanilla javascript."
              githubLink="https://github.com/Alienatedlabor/Etch-a-Sketch"
              demoLink="https://alienatedlabor.github.io/Etch-a-Sketch/"
            />

            <Project
              title="Tic-Tac-Toe"
              imageURL="/ticTacToeScreenshot.png"
              alt="an image of a tic tac toe grid where O won."
              description="A Tic-tac-toe webapp game for two same-screen players, written in vanilla javascript."
              githubLink="https://github.com/Alienatedlabor/Tic-Tac-Toe"
              demoLink="https://alienatedlabor.github.io/Tic-Tac-Toe/"
            />

            <Project
              title="Admin Dashboard"
              imageURL="/adminDashboardScreenshot.png"
              alt="an admin dashboard layout"
              description="A mock admin dashboard I made to practice layouts combining CSS Grid and Flex. The design layout was built according to a design sheet, and I added a dynamic greeting that changes depending on what time it is."
              githubLink="https://github.com/Alienatedlabor/Admin-Dashboard"
              demoLink="https://alienatedlabor.github.io/Admin-Dashboard/"
            />

            <Project
              title="Signup Form"
              imageURL="/signupFormScreenshot.png"
              alt="a signup form for a fake cryogenics company called Ewig"
              description="A mock signup form meant to practice HTML form validation and some javascript form validation, as well as CSS positioning. Uses some SASS features for styling."
              githubLink="https://github.com/Alienatedlabor/Signup-Form"
              demoLink="https://alienatedlabor.github.io/Signup-Form/"
            />
          </div>
        </section>
        <section className="flex justify-center align-middle py-8 bg-gradient-to-tr from-cyan-900 to-cyan-600">
          <ContactMe />
        </section>
      </main>
    </div>
  );
}
// TODO: change the links to open in a new tab/window
