'use client';
import Link from 'next/link';
import ThemeChanger from './DarkSwitch';
import Image from 'next/image';
import { scroller } from 'react-scroll';

export const Navbar = () => {
  const navigation = [
    { title: 'Inicio', id: 'home' },
    { title: 'Servicios', id: 'services' },
    { title: 'Quienes somos', id: 'about' },
    { title: 'Empleos', id: 'jobs' },
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8 lg:justify-between">
        {/* Logo  */}
        <Link href="#home">
          <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
            <span>
              <Image
                src="/img/manellax-re.png"
                width="200"
                alt="logo "
                height="150"
                className="w-36, h-30"
              />
            </span>
            <span className="rounded-lg  bg-indigo-600 text-white p-1">M</span>
          </span>
        </Link>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <button
                  onClick={() => {
                    scroller.scrollTo(menu.id, {
                      duration: 1500,
                      delay: 100,
                      smooth: 'easeInOutBack', // linear “easeInQuint” “easeOutCubic”
                      offset: -25,
                    });
                  }}
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                  {menu.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
