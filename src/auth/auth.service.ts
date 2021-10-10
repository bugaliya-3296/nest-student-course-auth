import { Injectable } from '@nestjs/common';
import { StudentService } from '../student/student.service';

@Injectable()
export class AuthService {
  constructor(private usersService: StudentService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}