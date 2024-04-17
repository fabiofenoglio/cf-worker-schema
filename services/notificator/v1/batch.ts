import { SendEmailV1Input, SendEmailV1Output, SendSystemNotificationEmailV1Input, SendSystemNotificationEmailV1Output } from "./email"
import { SendSystemNotificationTelegramMessageV1Input, SendSystemNotificationTelegramMessageV1Output, SendTelegramMessageV1Input, SendTelegramMessageV1Output } from "./telegram";

export type SendNotificationV1Input = {
    type: 'email';
    notification: SendEmailV1Input;
} | {
    type: 'system/email';
    notification: SendSystemNotificationEmailV1Input;
} | {
    type: 'telegram';
    notification: SendTelegramMessageV1Input;
} | {
    type: 'system/telegram';
    notification: SendSystemNotificationTelegramMessageV1Input;
};

export type SendNotificationV1Output = {
    type: 'email';
    notification: SendEmailV1Output;
} | {
    type: 'system/email';
    notification: SendSystemNotificationEmailV1Output;
} | {
    type: 'telegram';
    notification: SendTelegramMessageV1Output;
} | {
    type: 'system/telegram';
    notification: SendSystemNotificationTelegramMessageV1Output;
};