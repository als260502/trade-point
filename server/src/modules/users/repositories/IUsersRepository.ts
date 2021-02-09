import ICreateUsersDTO from '../dtos/IUsersRepository';
import User from '../infra/typeorm/entities/User';

export default interface IUsersRepository {
  findByEmail(email: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
  create(userData: ICreateUsersDTO): Promise<User>;
  save(user: User): Promise<User>;
}
