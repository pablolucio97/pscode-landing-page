"use client";

import LandingFooter from "@/components/elements/Footer";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <LandingFooter.Root>
      <LandingFooter.Top columns={3}>
        <LandingFooter.Column
          items={[
            {
              href: "#quemsomos",
              label: "Quem somos",
            },
            {
              href: "#servicos",
              label: "Serviços",
            },
            {
              href: "#solucoes",
              label: "Soluções",
            },
            {
              href: "#tecnologias",
              label: "Tecnologias",
            },
            {
              href: "#metricas",
              label: "Métricas",
            },
            {
              href: "#empresas",
              label: "Empresas assistidas",
            },
          ]}
          title="Empresa"
        />
        <LandingFooter.Column
          items={[
            {
              href: "https://www.treinahub.com.br",
              label: "TreinaHub",
              target: "_blank",
            },
          ]}
          title="Soluções para seu negócio"
        />
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-xs sm:text-sm text-foreground font-bold mb-2">
            Contato
          </h2>
          <p className="text-xs sm:text-sm text-foreground/70">
            Email: pscodecontato@gmail.com
          </p>
          <p className="text-xs sm:text-sm text-foreground/70">
            Telefone/Whatsapp: (31) 98518-7963
          </p>
        </div>
      </LandingFooter.Top>
      <LandingFooter.Bottom>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs text-foreground">
            © {currentYear} PS Code | Soluções em software — CNPJ:
          </p>
          <p className="text-xs text-foreground">
            47.463.499/0001-37
          </p>
          <p className="text-xs text-foreground/60">
            Desenvolvido por PS Code | Soluções em software
          </p>
        </div>
      </LandingFooter.Bottom>
    </LandingFooter.Root>
  );
}
