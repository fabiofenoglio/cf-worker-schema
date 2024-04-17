import { SendBatchedNotificationsV1Input, SendBatchedNotificationsV1Output } from "./batch";
import { SendEmailV1Input, SendEmailV1Output, SendSystemNotificationEmailV1Input, SendSystemNotificationEmailV1Output } from "./email";
import { SendSystemNotificationTelegramMessageV1Input, SendSystemNotificationTelegramMessageV1Output, SendTelegramMessageV1Input, SendTelegramMessageV1Output } from "./telegram";

export interface NotificatorServiceContract {
  sendEmailV1(input: SendEmailV1Input): Promise<SendEmailV1Output>;
  sendSystemNotificationEmailV1(input: SendSystemNotificationEmailV1Input): Promise<SendSystemNotificationEmailV1Output>;

  sendTelegramMessageV1(input: SendTelegramMessageV1Input): Promise<SendTelegramMessageV1Output>;
  sendSystemNotificationTelegramMessageV1(input: SendSystemNotificationTelegramMessageV1Input): Promise<SendSystemNotificationTelegramMessageV1Output>;

  sendBatchedNotificationsV1(input: SendBatchedNotificationsV1Input): Promise<SendBatchedNotificationsV1Output>

  // LEGACY
  sendSystemNotificationV1(input: SendSystemNotificationEmailV1Input): Promise<SendSystemNotificationEmailV1Output>;
}
