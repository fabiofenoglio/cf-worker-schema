export type Input = {
    key: string;
    auth: string;
}

export type Output = {
    access_token: string;
	source: string;
}

export interface OdAuthProviderService {
    getToken(input: Input): Promise<Output>;
}