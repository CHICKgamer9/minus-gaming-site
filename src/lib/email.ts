"use server";

import { EmailTemplate } from "../components/email-template";
import { Resend } from "resend";
import z from "zod";
import { formSchema } from "./schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

// Server action to send an email
export const send = async (formData: z.infer<typeof formSchema>) => {
  // Optional: Validate formData against schema
  const result = formSchema.safeParse(formData);
  if (!result.success) {
    throw new Error("Invalid form data");
  }

  const { FirstName, Email } = result.data;

  try {
    const { error } = await resend.emails.send({
      from: `Minus Gaming <${process.env.RESEND_FROM_EMAIL}>`,
      to: [Email],
      subject: "We got your message",
      react: EmailTemplate({ firstName: FirstName }),
    });

    if (error) {
      throw new Error(error.message);
    }
  } catch (err) {
    console.error("Failed to send email:", err);
    throw err;
  }
};
