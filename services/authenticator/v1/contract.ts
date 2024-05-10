import { AuthenticateTokenV1Input, AuthenticateTokenV1Output, GetIdentityV1Input, GetIdentityV1Output } from "./models";

export interface AuthenticatorServiceContract {
  authenticateTokenV1(input: AuthenticateTokenV1Input): Promise<AuthenticateTokenV1Output>
  getIdentityV1(input: GetIdentityV1Input): Promise<GetIdentityV1Output>
}
