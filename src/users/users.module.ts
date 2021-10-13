import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserInfoTable } from '../entity/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserInfoTable])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
