import ITokenProviderDTO from '@modules/users/dtos/ITokenProviderDTO';

export default interface ITokenProvider {
  generateToken(tokenData: ITokenProviderDTO): string;
  generateRefreshToken(email: string): string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  getTokenDecoded(token: string): string | Object;
}
