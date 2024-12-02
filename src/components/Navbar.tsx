'use client';
import Link from 'next/link';
import ThemeChanger from './DarkSwitch';
import Image from 'next/image';
import { scroller } from 'react-scroll';

export const Navbar = () => {
  const navigation = [
    { title: 'Servicios', id: 'services' },
    { title: 'Quienes somos', id: 'about' },
    { title: 'Empleos', id: 'jobs' },
    { title: 'Contactos', id: 'footer' },
  ];

  return (
    <div className="w-full">
      <nav className=" shadow-md bg-gradient-to-r from-blue-200 via-blue-500 to-blue-700 relative flex flex-wrap items-center justify-between mx-auto p-8 lg:justify-between">
        {/* Logo  */}
        <Link href="#home" className="flex  gap-2">
          <Image
            src="/img/manellax-simple-recorte.png"
            width="45"
            alt="logo "
            height="45"
          />
          <div className="flex items-center">
            <h1 className="">
              <b>MANELLAX</b>
            </h1>
          </div>
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
                  className="inline-block px-4 py-2 text-lg  text-white font-bold no-underline rounded-md focus:text-blue-700 focus:bg-blue-100 focus:outline-none dark:focus:bg-gray-800">
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
