'use client';
import { Container } from '@/components/Container';
import { Hero } from '@/components/Hero';
import { SectionTitle } from '@/components/SectionTitle';
import { Benefits } from '@/components/Benefits';
import { Video } from '@/components/Video';
import { Testimonials } from '@/components/Testimonials';
import { Faq } from '@/components/Faq';
import { Cta } from '@/components/Cta';
import Image from 'next/image';
import {} from '@heroicons/react/24/solid';
import { benefitOne, benefitTwo } from '@/components/data';
import { useForm, useWatch } from 'react-hook-form';
import { useState } from 'react';
import { Element } from 'react-scroll';

export default function Home() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: 'onTouched',
  });

  const userName = useWatch({
    control,
    name: 'Enzo',
    defaultValue: 'Calderon',
  });

  const onSubmit = async (data: any, e: any) => {
    console.log(data);
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          setIsSuccess(true);
          // setMessage(json.message);
          e.target.reset();
          reset();
        } else {
          setIsSuccess(false);
          // setMessage(json.message);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        // setMessage("Client Error. Please check the console.log for more info");
        console.log(error);
      });
  };
  return (
    <Container>
      <Element name="home">
        <div id="home">
          <Hero />
        </div>
      </Element>

      <Element name="services">
        <div id="services">
          <SectionTitle
            preTitle="Servicios de Manellax"
            title=" Consultoría industrial integral">
            Inspeccion de obras, redacción de procedimientos, reclutamiento de
            nuevos talentos, recursos humanos y capacitaciones.
          </SectionTitle>
        </div>
      </Element>
      <Container className={`flex w-full justify-center`}>
        <Image
          src="/img/image.png"
          alt="manellax"
          width={850}
          height={600}
          className=" content-center flex pb-20"
        />
      </Container>

      <SectionTitle title="Servicios de construccón">
        También ofrecemos los siguientes servicios:
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <Element name="about">
        <div id="about" className="mt-20">
          <SectionTitle preTitle="Quienes somos" title="Visión">
            Nuestra visión es revolucionar la conexión entre personas y empresas
            en las industrias del gas, petróleo y minería, donde el talento
            florece y la vanguardia, la seguridad y la calidad son nustrso
            estandartes para un futuro sostenible.
          </SectionTitle>
        </div>
      </Element>
      <SectionTitle title="Misión">
        Nuestra misión es conectar talentos disponibles con oportunidades
        vigentes en las distintas industrias, con capacitaciones, entrevistas y
        búsqueda de todos los niveles de experiencia, que prepararán al recurso
        para el ingreso a su futuro profesional, siendo nosotros el filtro. Nos
        comprometemos a hacer crecer los valores y retener talentos, ofreciendo
        asesoría, soluciones innovadoras que garantizan el éxito de tu empresa y
        relaciones laborales, así como en producción, seguridad y calidad.
      </SectionTitle>
      <div className="mt-20 mb-10">
        <SectionTitle
          title="Reglas de Oro"
          preTitle="Éstas son nuestras 5 reglas de Oro"
        />
      </div>
      <Testimonials />

      <div className="mt-20 mb-10">
        <SectionTitle
          title="Trabaja con nosotros"
          preTitle="Podés trabajar con nosotros"
        />
      </div>
      <Element name="jobs">
        <div
          id="jobs"
          className="flex rounded-md mt-4 flex-col mx-auto  w-full sm:w-[650px] min-h-[250px] sm:h-[600px] border border-gray-300 dark:border-gray-800 bg-white shadow-2xl sm:max-h-[calc(100vh-120px)]">
          <div className="flex flex-col items-center justify-center h-32 p-5 bg-indigo-600">
            <h3 className="text-lg text-white">¡Envíanos tu curriculum!</h3>
            <p className="text-white opacity-50">Adjunta tu archivo</p>
          </div>
          <div className="flex-grow h-full p-6  bg-gray-50 ">
            {!isSubmitSuccessful && (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <input
                  type="hidden"
                  value="76958020-0af6-4717-9eb4-93d778329976"
                  {...register('apikey')}
                />
                <input
                  type="hidden"
                  value={`${userName} te envió un mensaje desde https://manellax.com/`}
                  {...register('subject')}
                />
                <input
                  type="hidden"
                  value="https://manellax.com/"
                  {...register('from_name')}
                />
                <input
                  type="checkbox"
                  className="hidden"
                  style={{ display: 'none' }}
                  {...register('botcheck')}></input>

                <div className="mb-4">
                  <label
                    htmlFor="full_name"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Nombre y apellido
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    placeholder="Enzo Calderón"
                    {...register('name', {
                      required: 'Ingresá tu nombre completo',
                      maxLength: 80,
                    })}
                    className={`w-full px-3 py-2 text-gray-600 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring   ${
                      errors.name
                        ? 'border-red-600 focus:border-red-600 ring-red-100'
                        : 'border-gray-300 focus:border-indigo-600 ring-indigo-100'
                    }`}
                  />
                  {errors.name && (
                    <div className="mt-1 text-sm text-red-400 invalid-feedback">
                      {errors.name.message as string}
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Direccion de correo
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Ingresá tu email',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Por favor, ingresá un email válido',
                      },
                    })}
                    placeholder="tu@correo.com"
                    className={`w-full px-3 py-2 text-gray-600 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring   ${
                      errors.email
                        ? 'border-red-600 focus:border-red-600 ring-red-100'
                        : 'border-gray-300 focus:border-indigo-600 ring-indigo-100'
                    }`}
                  />

                  {errors.email && (
                    <div className="mt-1 text-sm text-red-400 invalid-feedback">
                      {errors.email.message as string}
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="attachment"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Tu curriculum en pdf
                  </label>

                  <input
                    accept="application/pdf"
                    id="attachment"
                    type="file"
                    {...register('attachment', {
                      required: 'Cargá tu archivo',
                    })}
                  />
                  {errors.attachment && (
                    <div className="mt-1 text-sm text-red-400 invalid-feedback">
                      {errors.attachment.message as string}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <button
                    type="submit"
                    className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">
                    {isSubmitting ? (
                      <svg
                        className="w-5 h-5 mx-auto text-white animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      'Enviar mensaje'
                    )}
                  </button>
                </div>
                {/* <p
                              className="text-xs text-center text-gray-400"
                              id="result"
                            >
                              <span>
                                Powered by{" "}
                                <a
                                  href="https://Web3Forms.com"
                                  className="text-gray-600"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Web3Forms
                                </a>
                              </span>
                            </p> */}
              </form>
            )}

            {isSubmitSuccessful && isSuccess && (
              <div className="flex flex-col items-center justify-center h-full text-center text-white rounded-md">
                <svg
                  width="60"
                  height="60"
                  className="text-green-300"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144C26.4796 90.7692 21.3351 87.3317 17.0017 82.9983C12.6683 78.6649 9.23082 73.5204 6.8856 67.8586C4.54038 62.1967 3.33331 56.1283 3.33331 50C3.33331 43.8716 4.54038 37.8033 6.8856 32.1414C9.23082 26.4796 12.6683 21.3351 17.0017 17.0017C21.3351 12.6683 26.4796 9.23084 32.1414 6.88562C37.8033 4.5404 43.8716 3.33333 50 3.33333C62.3767 3.33333 74.2466 8.24998 82.9983 17.0017C91.75 25.7534 96.6666 37.6232 96.6666 50C96.6666 62.3768 91.75 74.2466 82.9983 82.9983C74.2466 91.75 62.3767 96.6667 50 96.6667Z"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
                <h3 className="py-5 text-xl text-green-500">
                  Mensaje enviado correctamente
                </h3>
                {/* <p className="text-gray-700 md:px-3">{Message}</p> */}
                <button
                  className="mt-6 text-indigo-600 focus:outline-none"
                  onClick={() => reset()}>
                  Volver
                </button>
              </div>
            )}

            {isSubmitSuccessful && !isSuccess && (
              <div className="flex flex-col items-center justify-center h-full text-center text-white rounded-md">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 97 97"
                  className="text-red-400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M27.9995 69C43.6205 53.379 52.3786 44.621 67.9995 29M26.8077 29L67.9995 69M48.2189 95C42.0906 95 36.0222 93.7929 30.3604 91.4477C24.6985 89.1025 19.554 85.6651 15.2206 81.3316C10.8872 76.9982 7.44975 71.8538 5.10454 66.1919C2.75932 60.53 1.55225 54.4617 1.55225 48.3333C1.55225 42.205 2.75932 36.1366 5.10454 30.4748C7.44975 24.8129 10.8872 19.6684 15.2206 15.335C19.554 11.0016 24.6985 7.56418 30.3604 5.21896C36.0222 2.87374 42.0906 1.66667 48.2189 1.66667C60.5957 1.66667 72.4655 6.58333 81.2172 15.335C89.9689 24.0867 94.8856 35.9566 94.8856 48.3333C94.8856 60.7101 89.9689 72.58 81.2172 81.3316C72.4655 90.0833 60.5957 95 48.2189 95Z"
                    stroke="CurrentColor"
                    strokeWidth="3"
                  />
                </svg>

                <h3 className="text-xl text-red-400 py-7">
                  Oops, ocurrió un error!
                </h3>
                {/* <p className="text-gray-700 md:px-3">{Message}</p> */}
                <button
                  className="mt-6 text-indigo-600 focus:outline-none"
                  onClick={() => reset()}>
                  Volver
                </button>
              </div>
            )}
          </div>
        </div>
      </Element>
    </Container>
  );
}
