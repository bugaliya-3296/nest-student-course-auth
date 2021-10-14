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
import { CourseTable } from 'src/entity/course.entity';

// @Controller('course/:courseId/students')
@Controller('student/course')
export class CourseStudentController {
  constructor(
    private readonly studentService: StudentService,
    // private readonly courseService: CourseService,
  ) {}

  @Get('/:studentId')
  getCoursesBystudentId(
    @Param('studentId') studentId: string,
  ): Promise<CourseTable[]> {
    console.log('-------------------', studentId);
    return this.studentService.getCoursesBystudentId(studentId);
  }

  @Post('/register')
  async addCourseStudent(@Body() body: any): Promise<any> {
    try {
      const isStudentRegisterd = await this.studentService.findStudent(
        body.studentDetails.mobile,
      );
      console.log('isCourseAvailable--->>>>', isStudentRegisterd);

      return this.studentService.addCourseStudent(body);
    } catch (error) {
      return error;
    }
  }
}
