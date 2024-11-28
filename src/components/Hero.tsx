import Image from 'next/image';
import { Container } from '@/components/Container';
import heroImg from '../../public/img/hero.png';

export const Hero = () => {
  return (
    <>
      <div className="flex flex-wrap bg-[url('/img/Minas-galeria-animada.webp')] bg-cover ">
        <div className="flex w-full bg-black/50 lg: p-20">
          <div className="flex justify-center items-center w-full lg:w-1/2">
              <div className="max-w-2xl mb-8 text-center">
                <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-200 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                  ¡Bienvenidos!
                </h1>
                <p className="py-5 text-xl leading-normal text-gray-100 lg:text-xl xl:text-2xl dark:text-gray-300">
                  Ofrecemos un servicio integral de consultoría diseñado para
                  satisfacer las necesidades específicas de empresas de las
                  industrias del gas, petróleo y minería. Nuestro compromiso con la
                  excelencia garantiza que cada paquete de servicios se adapte a las
                  demandas del cliente, proporcionando soluciones efectivas y
                  sostenibles.
                </p>
              </div>
            </div>
            <div className="flex justify-center w-full lg:w-1/2">
              <div className="">
                <Image
                  src="/img/manellax_logo_1.png"
                  width="616"
                  height="617"
                  className={'object-cover'}
                  alt="Hero Illustration"
                />
              </div>
            </div>
        </div>
      </div>
    </>
  );
};
