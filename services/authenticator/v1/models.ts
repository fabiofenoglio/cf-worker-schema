export type AuthenticateTokenV1ParsedAccessToken = {
    iss: string;
    sub: string;
    aud: string[];
    iat: number;
    exp: number;
    scope: string;
    azp: string;
    permissions: string[];
}

export type AuthenticateTokenV1Input = {
    domain: string;
    token: string;
}

export type AuthenticateTokenV1Output = {
    valid: true;
    token: AuthenticateTokenV1ParsedAccessToken;
} | {
    valid: false;
    reason: string;
}
