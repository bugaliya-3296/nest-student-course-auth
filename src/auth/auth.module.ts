import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { StudentModule } from 'src/student/student.module';
import { StudentService } from 'src/student/student.service';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  providers: [AuthService, LocalStrategy],
  imports: [PassportModule, StudentModule ]
})
export class AuthModule {}
