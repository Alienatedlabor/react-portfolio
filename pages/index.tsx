import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { Figtree } from 'next/font/google';
import Image from 'next/image';
import avatar from '../public/ReadyPlayerMe-Avatar.png';

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
              I'm passionate about creating dynamic and engaging user //
              eslint-disable-next-line react/no-unescaped-entities experiences
              that are functional and intuitive, and I'm constantly striving to
              learn and grow. When I'm not coding you'll find me improving my
              German, playing guitar, or getting better at my current favorite
              game.
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
        <section className="flex justify-center gap-16 p-8 bg-gradient-to-b from-cyan-900 to-cyan-600">
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
        <section>Projects:</section>
      </main>
    </div>
  );
}
