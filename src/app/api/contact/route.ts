import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resendKey = process.env.NEXT_PUBLIC_RESEND_API_KEY;
if (!resendKey) {
  throw new Error("RESEND_API_KEY is not defined");
}
const resend = new Resend(resendKey);

type FormData = {
  name: string;
  email: string;
  message: string;
  whatsapp: string;
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, whatsapp } : FormData = await req.json();
    if (!name || !email || !message ||!whatsapp) {
      return NextResponse.json(
        { message: '"name", "email" and "message" are required.' },
        { status: 400 }
      );
    }
    await resend.emails.send({
      from: "PS Code <contato@pscode.com.br>",
      to: "pscodecontato@gmail.com",
      subject: "Novo contato de " + name,
      replyTo: email,
      html: `
                <p>Você recebeu uma nova mensagem de contato:</p>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Whatsapp:</strong> ${whatsapp}</p>
                <p><strong>Mensagem:</strong></p>
                <p>${message}</p>
            `,
    });
    console.log("Contact form submitted successfully.");
    return NextResponse.json(
      { message: "Contact form submitted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error at submitting contact form:", error);
    return NextResponse.json(
      { message: "Error processing request." },
      { status: 500 }
    );
  }
}
