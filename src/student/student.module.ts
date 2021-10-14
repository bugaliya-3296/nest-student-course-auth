import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { StudentsTable } from '../entity/student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentCourseTable } from 'src/entity/student.course.entity';
import { CourseStudentController } from './course.controller';
import { CourseTable } from 'src/entity/course.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([StudentsTable, StudentCourseTable, CourseTable]),
  ],
  controllers: [StudentController, CourseStudentController],
  providers: [StudentService],
  exports: [StudentService],
})
export class StudentModule {}
