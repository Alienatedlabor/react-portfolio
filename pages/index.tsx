import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { Figtree } from 'next/font/google';
import Image from 'next/image';
import avatar from '../public/ReadyPlayerMe-Avatar.png';
import Project from '@/components/Project';
import weatherAppImage from '../public/weatherApp.png';
import ticTacToeImage from '../public/ticTacToeScreenshot.png';
import etchASketchImage from '../public/etchASketchScreenshot.png';
import adminDashboardImage from '../public/adminDashboardScreenshot.png';
import signupFormImage from '../public/signupFormScreenshot.png';
import { ContactMe } from '@/components/ContactMe';

//function for google font, allows preload of font
const figtree = Figtree({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={figtree.className}>
      <Head>
        <title>Cole Heideman | Web Developer</title>
      </Head>

      <main className="bg-white">
        <section className="min-h-screen">
          <nav className="p-5 mb-10 flex justify-between">
            <h1 className="text-xl"></h1>
            <ul className="flex items-center gap-2">
              <li>
                <BsFillMoonStarsFill />
              </li>
              <li>
                <a
                  className=" hover:shadow-md hover:opacity-90  bg-gradient-to-r from-cyan-900 to-cyan-600 text-white px-4 py-2 rounded-md "
                  href=""
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col text-center p-10">
            <h2 className=" text-5xl font-medium py-4 text-cyan-900">
              Cole Heideman
            </h2>
            <h3 className="text-2xl py-4">Frontend Web Developer</h3>
            <p className="text-md leading-8 text-gray-800 py-4">
              I'm passionate about creating dynamic and engaging user
              experiences that are functional and intuitive, and I'm constantly
              striving to learn and grow. When I'm not coding you'll find me
              improving my German, playing guitar, or getting better at my
              current favorite game.
            </p>
          </div>

          <div className="bg-gradient-to-b from-cyan-900 to-cyan-600 rounded-full relative mx-auto w-80 h-80 overflow-hidden">
            <Image
              src={avatar}
              alt="3d digital representation of smiling bald bearded man with glasses (me) "
              fill
            />
          </div>
          <div className="flex justify-center text-5xl gap-12 py-4 text-cyan-900">
            <SiGithub className="cursor-pointer" />
            <SiLinkedin className="cursor-pointer" />
          </div>
        </section>
        <section className="flex-col flex lg:flex-row justify-center gap-16 p-8 bg-gradient-to-b from-cyan-900 to-cyan-600">
          <div className="flex flex-col items-center shadow-md p-10 bg-white rounded-md">
            <h3 className="text-xl py-3 text-center text-cyan-700">
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
          <div className="flex flex-col items-center shadow-lg p-10 bg-white rounded-md">
            <h3 className="text-xl py-3 items-center text-center text-cyan-700">
              Technology I've used:
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
          <h3 className="flex justify-center text-cyan-700 text-2xl py-4">
            Projects:
          </h3>
          <div className="grid gap-2 mx-1 my-1 px-1 py-1 lg:grid-cols-3 ">
            <Project
              title="Brewview"
              description="A React app to conduct online beer tastings with my friends. The primary goal is to have a consensus based way to decide on a beer to taste together, establish vocabulary for rating/tasting, and then to aggregate those ratings. The app is styled with Tailwind and the backend and auth is handled through Firebase. This is still a work in progress."
              demoLink="https://beerview.vercel.app/"
              githubLink="https://github.com/Alienatedlabor/beerview"
              imageURL=""
              alt=""
            />

            <Project
              alt="weather app UI showing example weather, a search bar, and a five day forecast"
              title="Weather App"
              imageURL={weatherAppImage}
              description="A weather app written in vanilla Javascript, utilizing OpenWeather API. Features include localized weather, results in either Fahrenheit or Celsius, a five-day forecast, and a backround that changes dynamically depending on whether it is day or night in the respective location. "
              demoLink="https://alienatedlabor.github.io/Weather-App/"
              githubLink="https://github.com/Alienatedlabor/Weather-App"
            />

            <Project
              title="Etch-a-Sketch"
              imageURL={etchASketchImage}
              alt="a 16 by 16 grid of squares with some squares colored randomly and some squares colored black. On the left side are buttons to change the color, clear the grid, change the grid size, or enable a random color mode."
              description="An etch-a-sketch webapp featuring the ability to change the grid-count, a color picker, a random color mode, and a clear button, written in vanilla javascript."
              githubLink="https://github.com/Alienatedlabor/Etch-a-Sketch"
              demoLink="https://alienatedlabor.github.io/Etch-a-Sketch/"
            />

            <Project
              title="Tic-Tac-Toe"
              imageURL={ticTacToeImage}
              alt="an image of a tic tac toe grid where O won."
              description="A Tic-tac-toe webapp game for two same-screen players, written in vanilla javascript."
              githubLink="https://github.com/Alienatedlabor/Tic-Tac-Toe"
              demoLink="https://alienatedlabor.github.io/Tic-Tac-Toe/"
            />

            <Project
              title="Admin Dashboard"
              imageURL={adminDashboardImage}
              alt="an admin dashboard layout"
              description="A mock admin dashboard I made to practice layouts combining CSS Grid and Flex. The design layout was built according to a design sheet, and I added a dynamic greeting that changes depending on what time it is."
              githubLink="https://github.com/Alienatedlabor/Admin-Dashboard"
              demoLink="https://alienatedlabor.github.io/Admin-Dashboard/"
            />

            <Project
              title="Signup Form"
              imageURL={signupFormImage}
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
