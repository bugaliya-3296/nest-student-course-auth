import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/student.dto';
import { v4 as uuid } from 'uuid';
import { StudentsTable } from 'src/entity/student.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
// const studentRepository = getRepository(StudentsTable); // you can also get it via getConnection().getRepository() or getManager().getRepository()
import { CourseTable } from 'src/entity/course.entity';

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

  async addStudentCourse(req: any) {
    // console.log('=====find me here===', req)
    // const studentId = req.studentsDetails.mobile;
    // let student = await this.studentRepository.find({
    //   where: { mobile: studentId },
    // });

    // if (student.length === 0) {
    //   throw new Error('User not found, Please Do register befor');
    // }
    try {
      let newCourseStudent = new CourseTable();

      newCourseStudent.courseCode = req.courseDetails.courseCode;
      newCourseStudent.courseId = req.courseDetails.courseId;
      newCourseStudent.courseName = req.courseDetails.courseName;

      let addCourse = [];

      for (let index = 0; index < req.studentDetails; index = index + 1) {
        const studentInfo = await this.studentRepository.find({
          where: { mobile: req.studentDetails[index].mobile },
        });
        let studentTest = studentInfo[0]; //= new StudentsTable();
        // studentTest.
        // newCourseStudent.studentsData.push(studentTest);
      }
      const temp = await this.studentRepository.save(newCourseStudent);
      return temp;
    } catch (error) {
      return error;
    }
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
