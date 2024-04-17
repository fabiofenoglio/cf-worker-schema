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
    result: SendEmailV1Output;
} | {
    type: 'system/email';
    result: SendSystemNotificationEmailV1Output;
} | {
    type: 'telegram';
    result: SendTelegramMessageV1Output;
} | {
    type: 'system/telegram';
    result: SendSystemNotificationTelegramMessageV1Output;
};

export type SendNotificationV1FailureOutput = {
    type: 'email';
    error: any;
} | {
    type: 'system/email';
    error: any;
} | {
    type: 'telegram';
    error: any;
} | {
    type: 'system/telegram';
    error: any;
};

export type SendBatchedNotificationsV1Input = {
    notifications: SendNotificationV1Input[];
}

export type SendBatchedNotificationsV1Output = {
    numberOfSent: number;
    numberOfFailures: number;
    results: (SendNotificationV1Output | SendNotificationV1FailureOutput)[];
}