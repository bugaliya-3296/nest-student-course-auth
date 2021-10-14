import { Controller, Get, Put, Param, Post, Body, UseGuards } from '@nestjs/common';
import { CreateStudentDto } from '../student/dto/student.dto';
import { StudentService } from '../student/student.service';
import { StudentsTable } from '../entity/student.entity';
import { CourseService } from './course.service';
import { CourseTable } from 'src/entity/course.entity';
import { CreateCourseDto } from './dto/course.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getStudent(): Promise<CourseTable[]> {
    return this.courseService.getCourses();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:courseId')
  getCourseById(@Param('courseId') courseId: string): Promise<CourseTable> {
    return this.courseService.getCourseById(courseId);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createCourse(@Body() body: CreateCourseDto): Promise<CourseTable> {
    return this.courseService.createCourse(body);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:courseId')
  updateCourse(
    @Param('courseId') courseId: string,
    @Body() body: CreateCourseDto,
  ): Promise<CourseTable> {
    return this.courseService.updateStudent(body, courseId);
  }
}
