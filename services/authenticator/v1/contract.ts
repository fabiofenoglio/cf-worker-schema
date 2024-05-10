import { AuthenticateTokenV1Input, AuthenticateTokenV1Output } from "./models";

export interface AuthenticatorServiceContract {
  authenticateTokenV1(input: AuthenticateTokenV1Input): Promise<AuthenticateTokenV1Output>
}
