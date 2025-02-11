import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { CheckIcon } from '@heroicons/react/24/solid';

interface BenefitsProps {
  imgPos?: 'left' | 'right';
  data: {
    imgPos?: 'left' | 'right';
    title: string;
    desc?: string;
    image: any;
    bullets: {
      title: string;
    }[];
  };
}
export const BenefitsRigth = (props: Readonly<BenefitsProps>) => {
  const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000',
  };
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px',
  };

  const slideImages = [
    {
      url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Slide 1',
    },
    {
      url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
      caption: 'Slide 2',
    },
    {
      url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Slide 3',
    },
  ];
  const { data } = props;
  return (
    <div className="flex flex-wrap shadow-md px-10 pb-10 bg-[#003459]">
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div>
          <div className="flex flex-col w-full">
            <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-white lg:leading-tight lg:text-4xl dark:text-white">
              {data.title}
            </h3>

            {/* <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                {data.desc}
              </p> */}
          </div>

          <div className="w-full">
            {data.bullets.map((item, index) => (
              <Benefit key={index} title={item.title}></Benefit>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div className="slide-container">
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div key={index} className="each-slide">
                <div
                  style={{
                    ...divStyle,
                    backgroundImage: `url(${slideImage.url})`,
                  }}>
                  <span style={spanStyle}>{slideImage.caption}</span>
                </div>
              </div>
            ))}
          </Slide>
        </div>

        {/* <div>
          <img
            src={data.image}
            width={521}
            height={521}
            alt="Benefits"
            className={'object-cover'}
          />
        </div> */}
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
        <h4 className="text-xl font-medium text-white dark:text-gray-200">
          {props.title}
        </h4>
        {/* <p className="mt-1 text-gray-500 dark:text-gray-400">
            {props.children}
          </p> */}
      </div>
    </div>
  );
}
