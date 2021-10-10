import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/student.dto';
import { v4 as uuid } from 'uuid';
import { StudentsTable } from 'src/entity/student.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
// const studentRepository = getRepository(StudentsTable); // you can also get it via getConnection().getRepository() or getManager().getRepository()
import { CourseTable  } from 'src/entity/course.entity';


@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentsTable)
    private readonly studentRepository: Repository<StudentsTable>,
  ) {}

  async getStudents(): Promise<StudentsTable[]> {
    return await this.studentRepository.find();
  }

  async getStudentById(studentId: string): Promise<StudentsTable> {
    try {
      let student = await this.studentRepository.find({
        where: { mobile: studentId },
      });

      if (student.length === 0) {
        throw new Error('User not found');
      }
      return student[0];
    } catch (error) {
      return error;
    }
  }

  async createStudent(payload: CreateStudentDto): Promise<StudentsTable> {
    try {
      let newStudent = {
        ...payload,
      };
      // this.students.push(newStudent)
      console.log('----', newStudent);
      return await this.studentRepository.save(newStudent);
    } catch (error) {
      return error;
    }
  }
  async updateStudent(
    payload: CreateStudentDto,
    id: string,
  ): Promise<StudentsTable> {
    try {
      const studentId = id;
      let student = await this.studentRepository.find({
        where: { mobile: studentId },
      });
      if (student.length == 0) {
        throw Error('User not found');
      }
      const updatedStudent = {
        ...payload,
      };
      let mobile = studentId;
      // await this.studentRepository.updateById(mobile, updatedStudent);

      let result = await this.studentRepository.update(
        { mobile: studentId },
        updatedStudent,
      );
      return await this.studentRepository.findOne({
        where: { mobile: studentId },
      });
       
    } catch (error) {
      return error;
    }
  }

  async addStudentCourse( req: any){
    const studentId = req.studentsDetails.mobile;
    let student = await this.studentRepository.find({
      where: { mobile: studentId },
    });

    if (student.length === 0) {
      throw new Error('User not found, Please Do register befor');
    }

    let addCourse = [];

    for(let index = 0 ;index < req.courseDetails; index = index +1){
      let course = new CourseTable();

      course.courseCode
      course.courseId
      course.courseName

      // student.courseData.push(course);
    }
    return ' selected course for student'
  }
  async findOne(username: string): Promise<StudentsTable | undefined> {
    // return this.studentRepository.find(user => user. === username);
    return await this.studentRepository.findOne({
      where: { mobile: username },
    });
  }

  // getStudentsByCourseId(teacherId: string) {
  // return 'get Students By CourseId calling';
  // }


  // updateStudentCourse(courseId: string, studentId: string) {
  // let updatedStudent;
  // let updatedStudentList = this.students.map(student => {
  // if(student.id === studentId){
  // updatedStudent = {
  // ...student,
  // teacher: courseId
  // };
  // return updatedStudent
  // } else return student
  // });
  // return updatedStudent
  // }
}
