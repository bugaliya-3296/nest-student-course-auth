import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: '9649754833',
      password: 'qwertyuiop1234567890',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
      console.log('----FIND ME HERE---username ', username)
    return this.users.find(user => user.username === username);
  }
}