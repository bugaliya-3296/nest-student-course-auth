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

  // @Get()
  // getStudents(
  //     @Param('courseId', new ParseUUIDPipe()) courseId: string
  // ): Promise<StudentsTable[]> {
  //     return this.studentService.getStudentsBycourseId(courseId)
  // }

  // @Put('/:studentId',)
  // updateStudentCourse(
  //     @Param('courseId', new ParseUUIDPipe()) courseId: string,
  //     @Param('studentId', new ParseUUIDPipe()) studentId: string
  // ): Promise<StudentsTable> {
  //     return this.studentService.updateStudentCourse(courseId, studentId)
  // }

  //   createCourse(@Body() body: CreateCourseDto): Promise<CourseTable> {

  @Post()
  async addStudentCourse(@Body() body: any): Promise<any> {
    try {
      const isCourseAvailable = await this.courseService.findCourse(
        body.courseDetails.courseId,
      );
      console.log('isCourseAvailable--->>>>', isCourseAvailable)

      return this.courseService.addStudentCourse(body);
    } catch (error) {
      return error;
    }
  }
}
