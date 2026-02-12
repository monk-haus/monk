'use server'
export const runtime = 'edge';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(prevState: any, formData: FormData) {
    try {
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const projectType = formData.get('projectType') as string;
        const message = formData.get('message') as string;
        const budget = formData.get('budget') as string;

        // Honeypot check
        const botField = formData.get('website') as string;
        if (botField) {
            return { success: false, message: 'Bot detected' };
        }

        if (!name || !email || !message) {
            return { success: false, message: 'Missing required fields' };
        }

        const { data, error } = await resend.emails.send({
            from: 'Monk Haus <onboarding@resend.dev>',
            to: ['hello@monk.haus'],
            subject: `New Transmission: ${projectType} from ${name}`,
            replyTo: email,
            text: `
        New Contact From Monk Haus Website
        
        NAME: ${name}
        EMAIL: ${email}
        PROJECT TYPE: ${projectType}
        BUDGET: ${budget}
        
        MESSAGE:
        ${message}
      `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return { success: false, message: 'Transmission failed. Signal lost.' };
        }

        return { success: true, message: 'Transmission received. Stand by.' };
    } catch (error) {
        console.error('Server Error:', error);
        return { success: false, message: 'System error. Transmission aborted.' };
    }
}
