
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

export type SendSystemNotificationV1Input = {
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

export type SendSystemNotificationV1Output = {
  sent: true;
}

export interface NotificatorServiceContract {
  sendEmailV1(input: SendEmailV1Input): Promise<SendEmailV1Output>;
  sendSystemNotificationV1(input: SendSystemNotificationV1Input): Promise<SendSystemNotificationV1Output>;
}
