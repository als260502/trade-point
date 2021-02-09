import IUsersRepository from '../IUsersRepository';
import User from '../../infra/typeorm/entities/User';

export default class FakeUsersRepository implements IUsersRepository {
  private user: User[] = [];
}
