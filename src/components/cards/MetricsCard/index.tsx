'use client';

import CountUp from "react-countup";

interface MetricsCardProps {
  /** Título do cartão */
  title: string;
  /** Texto que antecede o título do cartão */
  preTitle?: string;
  /** Valor a ser exibido */
  value: number;
  /** Ícone a ser exibido */
  icon: React.ReactNode;
  /** Duração em segundos, recomendado valores entre 1 e 10 segudos*/
  countDuration: number;
}

/**
 * Componente para exibir um cartão de métricas com animação de contagem
 * Mais informações sobre o componente podem ser encontradas na documentação do react-countup.
 */
export default function MetricsCard({
  title,
  preTitle,
  value,
  icon,
  countDuration,
} : MetricsCardProps) {
  return (
    <div className="flex flex-col items-center justify-center p-4 border-border-card border bg-bg-card rounded-lg shadow">
      {preTitle && <h3 className="text-md sm:text-lg font-regular">{preTitle}</h3>}
      <CountUp
        end={value}
        start={value / 2}
        duration={countDuration}
        className="text-2xl sm:text-3xl font-bold"
        separator="."
      />
      <h3 className="text-sm sm:text-base font-regular my-4 text-center">{title}</h3>
      <div className="mb-4 text-2xl">{icon}</div>
    </div>
  );
}


