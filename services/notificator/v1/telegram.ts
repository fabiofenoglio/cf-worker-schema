
export type SendTelegramMessageV1Input = {
    botToken?: string;
    to: string;
    text?: string;
    html?: string;
}

export type SendTelegramMessageV1Output = {
    sent: true;
}

export type SendSystemNotificationTelegramMessageV1Input = {
    botToken?: string;
    to?: string;
    text?: string;
    html?: string;
}

export type SendSystemNotificationTelegramMessageV1Output = {
    sent: true;
}
