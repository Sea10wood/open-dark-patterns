import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface CardProps {
  href: string;
  imageSrc: StaticImageData;
  alt: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ href, imageSrc, alt, title, description }) => {
  return (
    <a href={href} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-lx hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={imageSrc} alt={alt} width={100} height={100}/>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
      </div>
    </a>
  );
};

export default Card;
