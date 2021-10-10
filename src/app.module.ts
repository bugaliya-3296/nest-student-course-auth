import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';


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
    StudentModule,CourseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
