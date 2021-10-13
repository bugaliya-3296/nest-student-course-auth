import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller'
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Zaq123!@#',
      database: 'test',
      // entities: [],
      autoLoadEntities: true,
      synchronize: false    ,
    }),
     StudentModule,CourseModule, AuthModule, UsersModule
  ],
  controllers: [ AppController ],
  providers: [],
})
export class AppModule {}
