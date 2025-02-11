import Image from 'next/image';

export const Hero = () => {
  return (
    <>
      <div className="flex flex-wrap bg-[url('/img/petrolera.jpg')] bg-cover h-[720px] xl:h-[1000px]">
        <div className="flex w-full lg: px-20">
          <div className="flex justify-center items-center w-full lg:w-1/2">
            <div className="max-w-2xl mb-8 text-center">
              <h1 className="text-4xl font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
                ¡Bienvenidos!
              </h1>
              <p className="py-5 text-xl leading-normal text-white lg:text-xl xl:text-2xl">
                Ofrecemos un servicio integral de consultoría diseñado para
                satisfacer las necesidades específicas de empresas de las
                industrias del gas, petróleo y minería. Nuestro compromiso con
                la excelencia garantiza que cada paquete de servicios se adapte
                a las demandas del cliente, proporcionando soluciones efectivas
                y sostenibles.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center w-full lg:w-1/2">
            <div className="">
              <img
                src="/img/manellax-blanco-nuevo.png"
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
