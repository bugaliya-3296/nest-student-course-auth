import { Controller, Get, Param, Post, Body, UseGuards } from '@nestjs/common';
import { CreateStudentDto } from '../student/dto/student.dto';
import { StudentService } from '../student/student.service';
import { StudentsTable } from '../entity/student.entity';
import { CourseTable } from 'src/entity/course.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

// @Controller('course/:courseId/students')
@Controller('student/course')
export class CourseStudentController {
  constructor(
    private readonly studentService: StudentService,
  ) // private readonly courseService: CourseService,
  {}

  @UseGuards(JwtAuthGuard)
  @Get('/:studentId')
  getCoursesBystudentId(
    @Param('studentId') studentId: string,
  ): Promise<CourseTable[]> {
    return this.studentService.getCoursesBystudentId(studentId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/register')
  async addCourseStudent(@Body() body: any): Promise<any> {
    try {
      const isStudentRegisterd = await this.studentService.findStudent(
        body.studentDetails.mobile,
      );
      return this.studentService.addCourseStudent(body);
    } catch (error) {
      return error;
    }
  }
}
