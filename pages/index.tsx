import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { Figtree } from 'next/font/google';
const figtree = Figtree({ subsets: ['latin'] });

console.log(figtree);
export default function Home() {
  return (
    <div className={figtree.className}>
      <Head>
        <title>Cole Heideman | Web Developer</title>
      </Head>

      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="p-5 mb-12 flex justify-between">
            <h1 className="text-xl"></h1>
            <ul className="flex items-center gap-2">
              <li>{/* <BsFillMoonStarsFill /> */}</li>
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
          <div className="flex flex-col text-center">
            <h2 className=" text-xl font-bold">Cole Heideman</h2>
            <h3 className="text-lg">Frontend Web Developer</h3>
            <p>
              I'm passionate about creating dynamic and engaging user
              experiences that are functional and intuitive, constantly striving
              to learn and grow. When I'm not coding you'll find me improving my
              German, playing guitar, or getting better at my current favorite
              game.
            </p>
          </div>

          <div className="flex justify-center text-lg gap-3 my-2">
            <SiGithub />
            <SiLinkedin />
          </div>
        </section>
      </main>
    </div>
  );
}
