import Image from 'next/image';
import React from 'react';
import { Container } from '@/components/Container';
import { CheckIcon, FaceSmileIcon } from '@heroicons/react/24/solid';

interface BenefitsProps {
  imgPos?: 'left' | 'right';
  data: {
    imgPos?: 'left' | 'right';
    title: string;
    desc?: string;
    image: any;
    bullets: {
      title: string;
      desc: string;
      icon: React.ReactNode;
    }[];
  };
}
export const BenefitsRigth = (props: Readonly<BenefitsProps>) => {
  const { data } = props;
  return (
    <div className="flex flex-wrap shadow-md px-10 pb-10">
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div>
          <div className="flex flex-col w-full">
            <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
              {data.title}
            </h3>

            {/* <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                {data.desc}
              </p> */}
          </div>

          <div className="w-full">
            {data.bullets.map((item, index) => (
              <Benefit key={index} title={item.title} icon={item.icon}>
                {item.desc}
              </Benefit>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div>
          <Image
            src={data.image}
            width={521}
            height={521}
            alt="Benefits"
            className={'object-cover'}
            placeholder="blur"
            blurDataURL={data.image.src}
          />
        </div>
      </div>
    </div>
  );
};

function Benefit(props: any) {
  return (
    <div className="flex items-start mt-3 space-x-3">
      <div className="flex justify-center flex-shrink-0 mt-1 bg-blue-700 rounded-md w-5 h-5 ">
        <CheckIcon className="text-white" />
      </div>
      <div>
        <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
          {props.title}
        </h4>
        {/* <p className="mt-1 text-gray-500 dark:text-gray-400">
            {props.children}
          </p> */}
      </div>
    </div>
  );
}
