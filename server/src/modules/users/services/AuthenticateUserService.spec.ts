import 'reflect-metadata';
import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUsersService from './CreateUsersService';
import AuthenticateUserService from './AuthenticateUserService';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeTokenProvider from '../providers/TokenProvider/fakes/FakeTokenProvider';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let fakeTokenProvider: FakeTokenProvider;
let createUser: CreateUsersService;
let authenticateUser: AuthenticateUserService;

describe('AuthenticateUser', () => {
  beforeEach(() => {
    fakeHashProvider = new FakeHashProvider();
    fakeTokenProvider = new FakeTokenProvider();
    fakeUsersRepository = new FakeUsersRepository();

    createUser = new CreateUsersService(fakeUsersRepository, fakeHashProvider);
    authenticateUser = new AuthenticateUserService(
      fakeUsersRepository,
      fakeHashProvider,
      fakeTokenProvider,
    );
  });

  it('Should be able to authenticate with a valid user', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@exlaple.com',
      password: '123456',
    });

    const response = await authenticateUser.execute({
      email: 'johndoe@exlaple.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });
  it('Should not be able to authenticate with a non existing  user', async () => {
    expect(
      authenticateUser.execute({
        email: 'johndoe@exlaple.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
  it('Should not be able to authenticate with a invalid password', async () => {
    await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@exlaple.com',
      password: '123456',
    });

    expect(
      authenticateUser.execute({
        email: 'johndoe@exlaple.com',
        password: 'wrong-password',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
