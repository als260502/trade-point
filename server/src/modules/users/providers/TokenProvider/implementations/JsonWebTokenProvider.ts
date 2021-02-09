import ITokenProviderDTO from '@modules/users/dtos/ITokenProviderDTO';
import { sign, verify } from 'jsonwebtoken';
import authConfig from '@config/auth';
import ITokenProvider from '../models/ITokenProvider';

export default class JsonWebTokenProvider implements ITokenProvider {
  public generateToken(tokenData: ITokenProviderDTO): string {
    const { secret, expiresIn } = authConfig.jwt;
    const token = sign(
      {
        user_id: tokenData.id,
        name: tokenData.name,
        email: tokenData.email,
      },
      secret,
      {
        subject: tokenData.id,
        expiresIn,
      },
    );
    return token;
  }

  public generateRefreshToken(email: string): string {
    const { secret } = authConfig.jwt;

    const refresh_token = sign({}, secret, {
      subject: email,
    });

    return refresh_token;
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  public getTokenDecoded(token: string): string | Object {
    const tokenDecoded = verify(token, authConfig.jwt.secret);

    return tokenDecoded;
  }
}
