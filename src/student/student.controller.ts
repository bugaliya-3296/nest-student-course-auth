import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import {
  CreateStudentDto,
} from './dto/student.dto';
import { StudentService } from './student.service';
import { StudentsTable } from '../entity/student.entity'


@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudent(): Promise<StudentsTable[]> {
    return this.studentService.getStudents();
  }

  @Get('/:studentId')
  getStudentById(
    @Param('studentId') studentId: string,
  ): Promise<StudentsTable> {
    return this.studentService.getStudentById(studentId);
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto): Promise<StudentsTable> {
    return this.studentService.createStudent(body);
  }

  @Put('/:studentId')
  updateStudent(
    @Param('studentId') studentId: string,
    @Body() body: CreateStudentDto,
  ): Promise<StudentsTable> {
    return this.studentService.updateStudent(body, studentId);
  }
}
