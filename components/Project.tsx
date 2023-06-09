import React from 'react';
import { SiGithub } from 'react-icons/si';
import { HiCode, HiSparkles } from 'react-icons/hi';
import Image from 'next/image';

export default function Project({
  title,
  description,
  imageURL,
  alt,
  githubLink,
  demoLink,
  width = 400,
  height = 400,
}: {
  title: string;
  description: string;
  imageURL?: string;
  alt: string;
  githubLink: string;
  demoLink: string;
  width?: number;
  height?: number;
}) {
  return (
    <div className="flex flex-col items-center justify-between gap-4 shadow-md p-10 rounded-md">
      <div>
        <h1 className="text-lg py-3 text-center dark:text-cyan-600 text-cyan-700">
          {title}
        </h1>
      </div>

      <div className="flex items-center justify-center align-middle h-52">
        {!!imageURL && (
          <Image src={imageURL} alt={alt} height={height} width={width} />
        )}
      </div>
      <div>
        {' '}
        <p className="flex justify-center align-middle text-center py-4">
          {description}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-2">
        <button className="cursor-pointer hover:shadow-md hover:opacity-90  bg-gradient-to-r from-cyan-900 to-cyan-600 text-white px-4 py-2 rounded-md ">
          <a
            target="_blank"
            rel="noreferrer noopener"
            className="flex gap-1 items-center"
            href={githubLink}
          >
            <SiGithub /> View on github <HiCode />
          </a>
        </button>
        <button className="cursor-pointer hover:shadow-md hover:opacity-90 px-2 py-1  bg-gradient-to-r from-cyan-900 to-cyan-600 text-white lg:px-4 lg:py-2 rounded-md ">
          <a
            target="_blank"
            rel="noreferrer noopener"
            className="flex gap-1 items-center"
            href={demoLink}
          >
            <HiSparkles /> View live <HiSparkles />
          </a>
        </button>
      </div>
    </div>
  );
}
//TODO: make into a column on mobile/small screens
