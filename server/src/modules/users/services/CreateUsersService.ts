import { injectable, inject } from 'tsyringe';

import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}
@injectable()
export default class CreateUsersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  public async execute({ name, email, password }: IRequest): Promise<User> {
    const user = {
      name,
      email,
      password,
      id: '123',
      created_at: new Date(),
      updated_at: new Date(),
    };
    return user;
  }
}
