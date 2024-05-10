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
    requirements?: AuthenticateTokenV1InputVerificationRequirements;
}

export type AuthenticateTokenV1Output = {
    valid: true;
    token: AuthenticateTokenV1ParsedAccessToken;
} | {
    valid: false;
    reason: string;
}

export type AuthenticateTokenV1InputVerificationRequirements = {
    requiredAudiences?: string[];
    requiredPermissions?: string[];
}

export type GetIdentityV1Input = {
    domain: string;
    token: string;
}

export type GetIdentityV1Output = {
    email: string;
    emailVerified?: boolean;
    givenName?: string;
    familyName?: string;
    middleName?: string;
    preferredUsername?: string;
    nickname?: string;
    name?: string;
    profile?: string;
    picture?: string;
    website?: string;
    locale?: string;
    gender?: string;
    birthdate?: string;
    zoneinfo?: string;
    phoneNumber?: string;
    phoneNumberVerified?: boolean;
}
