import { Controller, Get, Put, Param, ParseUUIDPipe, Post, Body } from '@nestjs/common';
import { CreateStudentDto } from '../student/dto/student.dto';
import { StudentService } from '../student/student.service';
import { StudentsTable } from '../entity/student.entity'



// @Controller('course/:courseId/students')
@Controller('course/students')
export class StudentCourseController {

    constructor(private readonly studentService: StudentService){}

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

    @Post('/',)
    addStudentCourse(
        @Body() body: any ): Promise<any> {
        return this.studentService.addStudentCourse(body);
    }
}
