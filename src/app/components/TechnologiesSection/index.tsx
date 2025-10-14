"use client";
import RevealContainer from "@/components/animations-and-loading/RevealContainer";
import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";
import Image from "next/image";

export default function TechnologiesSection() {
  const techs = [
    {
      name: "React",
      icon: <Image width={24} height={24} src="/techs/react.png" alt="React" />,
      color: "#55eeff",
    },
    {
      name: "React Native",
      icon: (
        <Image
          width={24}
          height={24}
          src="/techs/react-native.png"
          alt="React Native"
        />
      ),
      color: "#696de4",
    },
    {
      name: "Next.js",
      icon: (
        <Image width={24} height={24} src="/techs/next.png" alt="Next.js" />
      ),
      color: "#606060",
    },
    {
      name: "JavaScript",
      icon: (
        <Image
          width={24}
          height={24}
          src="/techs/javascript.png"
          alt="JavaScript"
        />
      ),
      color: "#f7df1e",
    },
    {
      name: "TypeScript",
      icon: (
        <Image
          width={24}
          height={24}
          src="/techs/typescript.png"
          alt="TypeScript"
        />
      ),
      color: "#0013e4",
    },

    {
      name: "Node.js",
      icon: (
        <Image width={24} height={24} src="/techs/node.png" alt="Node.js" />
      ),
      color: "#08b32a",
    },
    {
      name: "GraphQL",
      icon: (
        <Image
          width={24}
          height={24}
          src="/techs/graphql.png"
          alt="Tailwind CSS"
        />
      ),
      color: "#fa036a",
    },
    {
      name: "Docker",
      icon: (
        <Image width={24} height={24} src="/techs/docker.png" alt="Docker" />
      ),
      color: "#0023ec",
    },
    {
      name: "Tailwind CSS",
      icon: (
        <Image
          width={24}
          height={24}
          src="/techs/tailwind.png"
          alt="Tailwind CSS"
        />
      ),
      color: "#048686",
    },
    {
      name: "PrismaORM",
      icon: (
        <Image width={24} height={24} src="/techs/prisma.png" alt="Prisma" />
      ),
      color: "#3845d5",
    },
    {
      name: "NestJS",
      icon: <Image width={24} height={24} src="/techs/nest.png" alt="Prisma" />,
      color: "#be0062",
    },
    {
      name: "Expo",
      icon: <Image width={24} height={24} src="/techs/expo.png" alt="Expo" />,
      color: "#cacaca",
    },
  ];

  return (
    <section
      className="flex flex-col items-center max-w-7xl mx-auto gap-4 py-8 px-4 scroll-mt-12 sm:scroll-mt-14"
      id="tecnologias"
    >
      <Title content="Tecnologias" />
      <Subtitle
        content="Principais tecnologias que utilizamos para o desenvolvimento de nossas soluções."
        weight="light"
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-6 mt-4">
        {techs.map((tech, i) => (
          <RevealContainer key={tech.name} delay={i * 1}>
            <div
              key={tech.name}
              className="flex items-center justify-evenly gap-3 rounded-full border p-2 sm:px-4 py-2 bg-none text-foreground"
              style={{
                borderColor: tech.color,
                backgroundColor: tech.color + "10",
              }}
            >
              {tech.icon}
              <span className="whitespace-nowrap text-xs sm:text-sm">
                {tech.name}
              </span>
            </div>
          </RevealContainer>
        ))}
      </div>
    </section>
  );
}
