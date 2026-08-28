import type { APIRoute } from 'astro';
import { brand } from '../../config/brand';
import { client } from '../../data/client';

// Runs on-demand (as a Vercel function) instead of being statically prerendered.
export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();

  // Honeypot field — real visitors never fill this in, so a value means a bot.
  // Redirect to success anyway so bots don't learn their submission was rejected.
  if (formData.get('bot-field')) {
    return redirect('/contact/success');
  }

  const name = formData.get('name')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const phone = formData.get('phone')?.toString().trim();
  const message = formData.get('message')?.toString().trim();

  if (!name || !email || !message) {
    return new Response('Missing required fields.', { status: 400 });
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set — contact form email was not sent.');
    return new Response('Server misconfiguration.', { status: 500 });
  }

  const emailRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `${brand.name} Website <onboarding@resend.com>`,
      to: client.email,
      reply_to: email,
      subject: `New quote request from ${name}`,
      text: [`Name: ${name}`, `Email: ${email}`, phone ? `Phone: ${phone}` : null, '', message]
        .filter(Boolean)
        .join('\n'),
    }),
  });

  if (!emailRes.ok) {
    console.error('Resend API error:', await emailRes.text());
    return new Response('Failed to send message.', { status: 502 });
  }

  return redirect('/contact/success');
};
