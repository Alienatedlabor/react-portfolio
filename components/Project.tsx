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
    <div className="flex flex-col items-center justify-between gap-4 p-10 rounded-md">
      <div className="flex items-center justify-center align-middle h-52">
        {!!imageURL && (
          <Image src={imageURL} alt={alt} height={height} width={width} />
        )}
      </div>
      <div>
        <div>
          <h1 className="text-3xl font-bold py-2 dark:text-white text-cyan-700">
            {title}
          </h1>
        </div>
        <div>
          {' '}
          <p className="flex py-2">{description}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-2">
          <button className="cursor-pointer hover:opacity-80 text-cyan-900 border border-cyan-900  px-4 py-2 rounded-md dark:border-white dark:text-white  ">
            <a
              target="_blank"
              rel="noreferrer noopener"
              className="flex gap-1 items-center"
              href={githubLink}
            >
              View on github
            </a>
          </button>
          <button className="cursor-pointer hover:opacity-80 text-cyan-900 border border-cyan-900  px-4 py-2 rounded-md dark:border-white  dark:text-white  ">
            <a
              target="_blank"
              rel="noreferrer noopener"
              className="flex gap-1 items-center"
              href={demoLink}
            >
              View live
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
//TODO: make into a column on mobile/small screens
