import {
  Controller,
  Get,
  Put,
  Param,
  ParseUUIDPipe,
  Post,
  Body,
} from '@nestjs/common';
import { CreateStudentDto } from '../student/dto/student.dto';
import { StudentService } from '../student/student.service';
import { StudentsTable } from '../entity/student.entity';
import { CourseService } from './course.service';

// @Controller('course/:courseId/students')
@Controller('course/students')
export class StudentCourseController {
  constructor(
    private readonly studentService: StudentService,
    private readonly courseService: CourseService,
  ) {}

  @Get('/:courseId')
  getStudentsBycourseId(
    @Param('courseId') courseId: string,
  ): Promise<StudentsTable[]> {
    console.log('-------------------', courseId);
    return this.courseService.getStudentsBycourseId(courseId);
  }

  @Post()
  async addStudentCourse(@Body() body: any): Promise<any> {
    try {
      const isCourseAvailable = await this.courseService.findCourse(
        body.courseDetails.courseId,
      );
      console.log('isCourseAvailable--->>>>', isCourseAvailable);

      return this.courseService.addStudentCourse(body);
    } catch (error) {
      return error;
    }
  }
}
