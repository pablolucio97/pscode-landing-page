import FadeContainer from "@/components/animations-and-loading/FadeContainer";
import RevealContainer from "@/components/animations-and-loading/RevealContainer";
import Paragraph from "@/components/typography/Paragraph";
import Title from "@/components/typography/Title";
import Image from "next/image";

export default function IntroductionSection() {
  return (
    <section
      className="flex flex-col items-center max-w-7xl mx-auto gap-4 py-8 px-4 my-8 scroll-mt-13 sm:scroll-mt-142"
      id="quemsomos"
    >
      <Title content="Quem somos" />
      <div className="w-full flex flex-col sm:flex-row items-center gap-8">
        <div className="w-full sm:w-2/3 flex flex-col gap-4">
          <RevealContainer once>
            <Paragraph content="Somos uma empresa que fornece soluções de software por meio de serviços de desenvolvimento, como landing pages, sites, aplicativos web e sistemas. Também fornecemos produtos digitais, como uma plataformas e soluções que agilizam o desenvolvimento de software." />
          </RevealContainer>
          <RevealContainer once>
            <Paragraph content="Desde sua fundação em Agosto de 2022, prestamos serviços de desenvolvimento de software para diversas empresas do Brasil. Já desenvolvemos diversas soluções que impactaram empresas em diversas áreas, como varejo, fintechs, mercado imobiliário e dentre outras." />
          </RevealContainer>
        </div>
        <div className="w-full sm:w-1/3 flex justify-center">
          <FadeContainer>
            <Image
              src="/devices.png"
              alt="dispositivos-imagem"
              width={320}
              height={100}
              quality={100}
            />
          </FadeContainer>
        </div>
      </div>
    </section>
  );
}
