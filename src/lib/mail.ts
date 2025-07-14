import "server-only";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.GMAIL_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

export type SendMailProps = {
  name: string;
  email: string;
  description: string;
  projectTitle: string;
};

export async function sendMail({
  name,
  email,
  description,
  projectTitle,
}: SendMailProps) {
  try {
    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER,
      subject: `Formulário de contato: ${email} enviou uma mensagem.`,
      text: `Mensagem de ${name}. Selecionou projeto: ${projectTitle}.\n${description}`,
    });
    return { message: "Email sent!" };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error, message: error.message };
    }
    return {
      error: new Error("Something went wrong."),
      message: "Something went wrong.",
    };
  }
}
