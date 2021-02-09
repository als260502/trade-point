import 'reflect-metadata';
import FakeCreateUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUsersService from './CreateUsersService';

describe('CreateUser', () => {
  it('Should be able to create a new user', async () => {
    const fakeCreateUsersRepository = new FakeCreateUsersRepository();
    const createUser = new CreateUsersService(fakeCreateUsersRepository);

    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@exlaple.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });
});
