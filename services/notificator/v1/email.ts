export type EmailChannel = 'sendgrid/default' | 'postmark/default';

export type SendEmailV1Input = {
  from: string;
  fromName?: string;
  to: string;
  toName?: string;
  subject: string;
  text?: string;
  html?: string;
  inReplyTo?: string;
  replyTo?: string;
  cc?: string[];
  bcc?: string[];
  channel?: EmailChannel;
}

export type SendEmailV1Output = {
  messageId: string;
}

export type SendSystemNotificationEmailV1Input = {
  from?: string;
  fromName?: string;
  to?: string;
  toName?: string;
  subject?: string;
  text?: string;
  html?: string;
  inReplyTo?: string;
  replyTo?: string;
  cc?: string[];
  bcc?: string[];
  channel?: EmailChannel;
}

export type SendSystemNotificationEmailV1Output = {
  messageId: string;
}
