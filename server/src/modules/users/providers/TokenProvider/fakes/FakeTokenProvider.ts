import ITokenProviderDTO from '@modules/users/dtos/ITokenProviderDTO';
import ITokenProvider from '../models/ITokenProvider';

export default class FakeTokenProvider implements ITokenProvider {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public generateToken(tokenData: ITokenProviderDTO): string {
    const token = 'my_token';
    return token;
  }

  public generateRefreshToken(email: string): string {
    const token = email;
    return token;
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  public getTokenDecoded(token: string): string | Object {
    const tokenDecoded = token;

    return tokenDecoded;
  }
}
