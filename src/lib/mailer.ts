// src/lib/mailer.ts
// WebForge v10.0 Nodemailer lazy singleton

export interface MailerOptions {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}

export interface MailerResult {
  sent: boolean;
  reason?: 'not-configured' | 'error' | 'success';
  messageId?: string;
  error?: string;
}

export async function sendMail(opts: MailerOptions): Promise<MailerResult> {
  // If running in browser, mail is delegated to server-side endpoint or logged locally
  if (typeof window !== 'undefined') {
    console.info('[Mailer Client Stub] Outbound email prepared (server dispatch required in production):', opts.subject);
    return {
      sent: false,
      reason: 'not-configured',
    };
  }

  // If running in server runtime:
  const host = typeof process !== 'undefined' ? process.env?.EMAIL_SERVER_HOST : undefined;
  const user = typeof process !== 'undefined' ? process.env?.EMAIL_SERVER_USER : undefined;
  const pass = typeof process !== 'undefined' ? process.env?.EMAIL_SERVER_PASSWORD : undefined;
  const from = (typeof process !== 'undefined' ? process.env?.EMAIL_FROM : undefined) || 'noreply@proppsptyltd.com.au';

  if (!host || !user || !pass) {
    // Graceful return - never throws
    return {
      sent: false,
      reason: 'not-configured',
    };
  }

  try {
    const pkg = 'nodemailer';
    const nodemailer = (await import(/* @vite-ignore */ pkg)).default || (await import(/* @vite-ignore */ pkg));
    const port = Number(process.env?.EMAIL_SERVER_PORT) || 465;
    const secure = process.env?.EMAIL_SERVER_SECURE === 'true' || port === 465;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });

    const info = await transporter.sendMail({
      from,
      to: opts.to,
      subject: opts.subject,
      text: opts.text,
      html: opts.html,
      replyTo: opts.replyTo,
    });

    return {
      sent: true,
      reason: 'success',
      messageId: info.messageId,
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    return {
      sent: false,
      reason: 'error',
      error: errorMsg,
    };
  }
}
