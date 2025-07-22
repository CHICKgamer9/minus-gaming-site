"use server"

import { EmailTemplate } from '../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

import z from "zod"
import { formSchema } from "./schemas"

export const send = async (formData: z.infer<typeof formSchema>) => {
    const {error} = await resend.emails.send({
        from: `Acme <${process.env.RESEND_FROM_EMAIL}>`,
        to: [formData.Email],
        subject: 'We got your message',
        react: EmailTemplate({ firstName: formData.FirstName }),
    });

    if (error) {
        throw(error)
    }
}