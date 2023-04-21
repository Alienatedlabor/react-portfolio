import React from 'react';
import { SiGithub } from 'react-icons/si';
import { HiCode, HiSparkles } from 'react-icons/hi';

export default function Project({
  title,
  description,
  imageURL,
  alt,
  githubLink,
  demoLink,
}: {
  title: string;
  description: string;
  imageURL: string;
  alt: string;
  githubLink: string;
  demoLink: string;
}) {
  return (
    <div className="flex flex-col items-center shadow-md p-10 rounded-md">
      <h1 className="text-lg py-3 text-center text-cyan-700">{title}</h1>
      <img src={imageURL} alt={alt}></img>
      <p className="flex justify-center align-middle text-center">
        {description}
      </p>
      <div className="flex gap-2">
        <button className="cursor-pointer hover:shadow-md hover:opacity-90  bg-gradient-to-r from-cyan-900 to-cyan-600 text-white px-4 py-2 rounded-md ">
          <a className="flex gap-1 items-center" href={githubLink}>
            <SiGithub /> View on github <HiCode />
          </a>
        </button>
        <button className="cursor-pointer hover:shadow-md hover:opacity-90  bg-gradient-to-r from-cyan-900 to-cyan-600 text-white px-4 py-2 rounded-md ">
          <a className="flex gap-1 items-center" href={demoLink}>
            <HiSparkles /> View live <HiSparkles />
          </a>
        </button>
      </div>
    </div>
  );
}
