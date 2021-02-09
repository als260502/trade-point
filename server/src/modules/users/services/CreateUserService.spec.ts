import 'reflect-metadata';
import AppError from '@shared/errors/AppError';
import FakeCreateUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUsersService from './CreateUsersService';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

let fakeUsersRepository: FakeCreateUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUsersService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeHashProvider = new FakeHashProvider();
    fakeUsersRepository = new FakeUsersRepository();

    createUser = new CreateUsersService(fakeUsersRepository, fakeHashProvider);
  });

  it('Should be able to create a new user', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@exlaple.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('Should not be able to create a new user with a email already used', async () => {
    await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@exlaple.com',
      password: '123456',
    });

    expect(
      createUser.execute({
        name: 'John',
        email: 'johndoe@exlaple.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
