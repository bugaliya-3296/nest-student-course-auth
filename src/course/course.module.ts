import { Module } from '@nestjs/common';
import { StudentModule } from '../student/student.module';
import { StudentCourseController } from './student.controller';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseTable } from '../entity/course.entity'


@Module({
  imports: [ StudentModule,
    TypeOrmModule.forFeature([CourseTable])
  ],
  controllers: [CourseController],//, StudentCourseController],
  providers: [CourseService]
})

export class CourseModule {}
