"use client";
import Button from "@/components/buttons/Button";
import MaskedTextInput from "@/components/inputs/MaskedTextInput";
import TextAreaInput from "@/components/inputs/TextAreaInput";
import TextInput from "@/components/inputs/TextInput";
import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";
import { CheckCircleIcon } from "@phosphor-icons/react";
import { useMemo, useState } from "react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const MIN_MESSAGE_LENGTH = 20;
  const MIN_NAME_LENGTH = 3;
  const MAX_MESSAGE_LENGTH = 500;

  const isFormValid = useMemo(() => {
    const isEmailValidRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailIsValid = isEmailValidRegex.test(email);

    const isValid =
      name.length > MIN_NAME_LENGTH &&
      emailIsValid &&
      message.length > MIN_MESSAGE_LENGTH;
    return isValid;
  }, [name, email, message]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setLoading(true);
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message, whatsapp }),
      });
      setFormSubmitted(true);
    } catch (error) {
      console.log("Error submitting contact form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="flex flex-col items-center max-w-7xl mx-auto gap-4 py-8 px-4 my-8 scroll-mt-12 sm:scroll-mt-14"
      id="contato"
    >
      <Title content="Como podemos ajudar seu projeto?" />
      <Subtitle
        content="Preencha o formulário abaixo para entendermos melhor suas necessidades."
        weight="light"
        className="mb-4"
      />
      {formSubmitted ? (
        <div className="w-full sm:w-lg flex flex-col items-center gap-4 bg-foreground/5 rounded-md border border-foreground/5 p-6">
          <CheckCircleIcon className="h-12 w-12 text-success-500" />
          <span className="text-foreground text-xs sm:text-sm text-center">
            Formulário enviado com sucesso! Entraremos em contato em breve.
          </span>
        </div>
      ) : (
        <form
          action="register-contact"
          className="w-full sm:w-lg flex flex-col gap-4 bg-foreground/5 rounded-md border border-foreground/5 p-6"
          onSubmit={handleSubmit}
        >
          <div className="w-full gap-4 grid grid-cols-1 sm:grid-cols-2">
            <TextInput
              label="Seu nome"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextInput
              label="Seu email"
              type="email"
              placeholder="Seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <MaskedTextInput
              label="Whatsapp"
              placeholder="(99) 99999-9999"
              mask="(00) 00000-0000"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />
            <TextAreaInput
              label="Sua mensagem"
              containerClassName="col-span-2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escreva sua mensagem aqui..."
              currentTextLength={message.length}
              maxTextLength={MAX_MESSAGE_LENGTH}
              required
              multiple
            />
          </div>
          <Button
            type="submit"
            label="Enviar mensagem"
            className="w-full"
            loading={loading}
            disabled={!isFormValid || loading}
          />
        </form>
      )}
    </section>
  );
}
