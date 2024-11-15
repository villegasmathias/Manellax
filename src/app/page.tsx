import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import Image from "next/image";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Servicios de Manellax"
        title=" Consultoría industrial integral"
      >
        Inspeccion de obras, redacción de procedimientos, reclutamiento de nuevos talentos, recursos humanos y capacitaciones.
      </SectionTitle>

      <Container className={`flex w-full justify-center`}>
        <Image
          src="/img/image.png"
          alt="manellax"
          width={850}
          height={600}
          className=" content-center flex pb-20"
        />
      </Container>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      {/* <SectionTitle
        preTitle="Quienes somos"
        title="Introducción"
      >
        Nuestro servicio se basa en más de 15 años de experiencia en el sector, trabajando en roles claves como ayudante, apuntador, operador de END, supervisor, planificador, inspector y coordinador de control de calidad, producción, seguridad y salud en obras. He tenido el privilegio de colaborar con empresas reconocidas a nivel nacional e internacional, siempre enfocado en la seguridad y salud en el trabajo además del buen arte de la calidad. Esta prioridad no solo busca proteger a los empleados, sino que también está alinieada con el compromiso de maximizar la producción y el crecimiento sostenible de la empresa. A lo largo de mi trayectoria, eh estado comprometido con el estudio y la aplicación de la ingeniería industrial, la gestión de calidad y la mejora continua en las organizaciones. Esta sólida base de conocimientos y experiencias nos permite ofrecer un servicio de Consultoría excepcional, adaptado a las necesidades específicas de las empresas en las industrias del gas, petróleo y minería.
      </SectionTitle> */}
      <SectionTitle
        preTitle="Quienes somos"
        title="Visión"
      >
        Nuestra visión es revolucionar la conexión entre personas y empresas en las industrias del gas, petróleo y minería, donde el talento florece y la vanguardia, la seguridad y la calidad son nustrso estandartes para un futuro sostenible.
      </SectionTitle>
      <SectionTitle
        title="Misión"
      >
       Nuestra misión es conectar talentos con oportunidades en las distintas industrias, con capacitaciones, entrevistas y búsqueda de todos los niveles de experiencia, que pararan al recurso para el ingreso a su futuro profesional, siendo nosotros el filtro. Nos comprometemos a hacer crecer los valores y retener talentos, ofreciendo asesoría, soluciones innovadoras que garantizan el éxito de tu empresa y relaciones laborales, así como en producción, seguridad y calidad.
      </SectionTitle>

      {/* <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq />
      <Cta /> */}
    </Container>
  );
}
