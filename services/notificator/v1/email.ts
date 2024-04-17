
export type SendEmailV1Input = {
  from: string;
  fromName?: string;
  to: string;
  subject: string;
  text?: string;
  html?: string;
  inReplyTo?: string;
  replyTo?: string;
  cc?: string[];
}

export type SendEmailV1Output = {
  sent: true;
}

export type SendSystemNotificationEmailV1Input = {
  from?: string;
  fromName?: string;
  to?: string;
  subject?: string;
  text?: string;
  html?: string;
  inReplyTo?: string;
  replyTo?: string;
  cc?: string[];
}

export type SendSystemNotificationEmailV1Output = {
  sent: true;
}
