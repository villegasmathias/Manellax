'use client';
import { SectionTitle } from '@/components/SectionTitle';
import { Benefits } from '@/components/Benefits';
import { Testimonials } from '@/components/Testimonials';
import {} from '@heroicons/react/24/solid';
import { benefitOne, benefitTwo } from '@/components/data';
import { Element } from 'react-scroll';
import { BenefitsRigth } from '@/components/BenefitsRigth';

export default function Home() {
  return (
    <>
      {/* Servicios */}
      <Element name="services" className="flex flex-col h-full">
        <div id="services" className="bg-[#0B2143]">
          <SectionTitle
            preTitle="Servicios de Manellax"
            title=" Consultoría industrial integral">
            MANELLAX es una firma de consultoría especializada en los sectores
            de gas, petróleo y minería. Nos dedicamos a conectar a nuestros
            clientes con el candidato ideal para cada puesto, asegurando un
            ajuste perfecto entre talento y organización. Además de reclutar
            nuevos talentos y gestionar RRHH brindamos servicios de Inspección
            general de obras, Redacción y revisión de procedimientos operativos
            y de calidad, capacitaciones y conferencias de temas específicos a
            demanda. Inspeccion de obras, redacción de procedimientos,
            reclutamiento de nuevos talentos, recursos humanos y capacitaciones.
          </SectionTitle>
        </div>
        <div>
          <img
            src="/img/manoyruedita.png"
            alt="manellax"
            width={620}
            height={400}
            className="w-full"
          />
        </div>
      </Element>

      <Element name="servicesBuilding">
        <div id="servicesBuilding" className="bg-[#0B2143]">
          <SectionTitle
            preTitle="También ofrecemos los siguientes servicios:"
            background
            title="Servicios de construccón">
            En Manellax SAS, nuestro equipo de socios y gerentes cuenta con más
            de 20 años de experiencia en consultoría y construcción de
            prefabricados. Nos especializamos en ofrecer soluciones innovadoras
            y personalizadas para proyectos de gran envergadura, siempre con un
            enfoque en la calidad, la eficiencia y la sostenibilidad. Nos
            apasiona colaborar estrechamente con nuestros clientes,
            convirtiéndonos en su socio estratégico para llevar sus proyectos al
            siguiente nivel.
          </SectionTitle>
        </div>

        <Benefits data={benefitOne} />
        <BenefitsRigth data={benefitTwo} />
      </Element>
      {/* Quienes somos  */}
      <div className="pb-10">
        {/* <div className="bg-[url('/img/industry-pictures.webp')] bg-cover">
          <div className="flex justify-center items-center w-full">
            <div className=" border-none">
              <img
                src="/img/manellax-blanco-nuevo.png"
                width="616"
                height="617"
                className={'object-cover bg-black/10'}
                alt="Hero Illustration"
              />
            </div>
          </div>
        </div> */}
        {/* <img src="/img/fotobanda.jpg" className="w-full h-auto object-cover" /> */}
        <Element name="about">
          <div id="about" className="bg-[#0B2143]">
            <SectionTitle preTitle="Quienes somos" title="Visión">
              Nuestra visión es revolucionar la conexión entre personas y
              empresas en las industrias del gas, petróleo y minería, donde el
              talento florece y la vanguardia, la seguridad y la calidad son
              nustrso estandartes para un futuro sostenible.
            </SectionTitle>
          </div>
        </Element>
        <div className="bg-[#0B2143]">
          <SectionTitle title="Misión">
            Nuestra misión es conectar talentos disponibles con oportunidades
            vigentes en las distintas industrias, con capacitaciones,
            entrevistas y búsqueda de todos los niveles de experiencia, que
            prepararán al recurso para el ingreso a su futuro profesional,
            siendo nosotros el filtro. Nos comprometemos a hacer crecer los
            valores y retener talentos, ofreciendo asesoría, soluciones
            innovadoras que garantizan el éxito de tu empresa y relaciones
            laborales, así como en producción, seguridad y calidad.
          </SectionTitle>
        </div>
      </div>

      <div className="mt-20 mb-10">
        <SectionTitle
          title="Reglas de Oro"
          preTitle="Éstas son nuestras 5 reglas de Oro"
        />
      </div>
      <Testimonials />
    </>
  );
}
