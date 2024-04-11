
export type GetTokenV1Input = {
    key: string;
    auth: string;
}

export type GetTokenV1Output = {
    accessToken: string;
    expiresAt: string;
	source: string;
}

export interface OnedriveAuthProviderServiceContract {
    getTokenV1(input: GetTokenV1Input): Promise<GetTokenV1Output>;
}
