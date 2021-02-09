import { container } from 'tsyringe';
import IHashProvider from './HashProvider/models/IHashProvider';
import BCryptHashProvider from './HashProvider/implementations/BCryptHashProvider';
import JsonWebTokenProvider from './TokenProvider/implementations/JsonWebTokenProvider';
import ITokenProvider from './TokenProvider/models/ITokenProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);

container.registerSingleton<ITokenProvider>(
  'TokenProvider',
  JsonWebTokenProvider,
);
