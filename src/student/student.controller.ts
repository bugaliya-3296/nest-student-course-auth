import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateStudentDto } from './dto/student.dto';
import { StudentService } from './student.service';
import { StudentsTable } from '../entity/student.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @UseGuards(JwtAuthGuard)
  @Get()
  getStudent(): Promise<StudentsTable[]> {
    return this.studentService.getStudents();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:studentId')
  getStudentById(
    @Param('studentId') studentId: string,
  ): Promise<StudentsTable> {
    return this.studentService.getStudentById(studentId);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createStudent(@Body() body: CreateStudentDto): Promise<StudentsTable> {
    return this.studentService.createStudent(body);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:studentId')
  updateStudent(
    @Param('studentId') studentId: string,
    @Body() body: CreateStudentDto,
  ): Promise<StudentsTable> {
    return this.studentService.updateStudent(body, studentId);
  }
}
