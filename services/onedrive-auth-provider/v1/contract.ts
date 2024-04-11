import { WorkerEntrypoint } from "cloudflare:workers";

export type Input = {
    key: string;
    auth: string;
}

export type Output = {
    access_token: string;
	source: string;
}

export interface OnedriveAuthProviderServiceContract {
    getToken(input: Input): Promise<Output>;
}


export declare class OnedriveAuthProviderServiceStub extends WorkerEntrypoint implements OnedriveAuthProviderServiceContract {
	getToken(input: Input): Promise<Output>;
}