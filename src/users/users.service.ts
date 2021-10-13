import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserInfoTable } from '../entity/users.entity';
import { Repository } from 'typeorm';
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
  // userRepo: any;
  constructor(
    @InjectRepository(UserInfoTable)
    private readonly userRepo: Repository<UserInfoTable>,
  ) {}
  async findOne(username: string): Promise<any> {
    try {
      let student = await this.userRepo.find({
        where: { email: username },
      });
      console.log('user table is empty .......', student);

      if (student.length === 0) {
        const newUser = {
          email: username,
          password: '1234567890',
        };
        console.log('user table is empty .......');
        // throw new Error('User not found');
        await this.userRepo.save(newUser);
      }
      console.log('user table is empty down 1234567');
      return student[0];
    } catch (error) {
      console.log('user table is empty down error', error);

      return error;
    }
    // console.log('----FIND ME HERE---username ', username)
    // return this.users.find(user => user.username === username);
  }
}
