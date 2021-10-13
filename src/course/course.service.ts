import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/course.dto';
import { StudentsTable } from '../entity/student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseTable } from 'src/entity/course.entity';
import { Repository } from 'typeorm';
import { StudentCourseTable } from 'src/entity/student.course.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(CourseTable)
    private readonly courseRepository: Repository<CourseTable>,
    @InjectRepository(StudentsTable)
    private readonly studentRepository: Repository<StudentsTable>,

    @InjectRepository(StudentCourseTable)
    private readonly studentCourseRepository: Repository<StudentCourseTable>,
  ) {}

  async getCourses(): Promise<CourseTable[]> {
    return await this.courseRepository.find();
  }

  async getCourseById(courseId: string): Promise<CourseTable> {
    try {
      let course = await this.courseRepository.find({
        where: { courseId: courseId },
      });

      if (course.length === 0) {
        throw new Error('Course not found');
      }
      return course[0];
    } catch (error) {
      return error;
    }
  }

  async createCourse(payload: CreateCourseDto): Promise<CourseTable> {
    try {
      let newCourse = {
        ...payload,
      };
      // this.students.push(newStudent)
      console.log('----', newCourse);
      return await this.courseRepository.save(newCourse);
    } catch (error) {
      console.log('create Course' + error);
      return error;
    }
  }
  async updateStudent(
    payload: CreateCourseDto,
    id: string,
  ): Promise<CourseTable> {
    try {
      const courseId = id;
      let student = await this.courseRepository.find({
        where: { courseId: courseId },
      });
      if (student.length == 0) {
        throw Error('Course not found');
      }
      const updatedStudent = {
        ...payload,
      };
      let mobile = courseId;
      // await this.studentRepository.updateById(mobile, updatedStudent);

      let result = await this.courseRepository.update(
        { courseId: courseId },
        updatedStudent,
      );
      return await this.courseRepository.findOne({
        where: { courseId: courseId },
      });
    } catch (error) {
      return error;
    }
  }

  async findCourse(courseId: string) {
    try {
      let course = await this.courseRepository.find({
        where: { courseId: courseId },
      });

      if (course.length === 0) {
        throw new Error('Course not found');
      }
      return course[0];
    } catch (error) {
      return error;
    }
  }
  async addStudentCourse(req: any) {
    try {
      let newCourseStudent = new StudentCourseTable();

      let course = await this.courseRepository.findOne({
        where: { courseId: req.courseDetails.courseId },
      });

      newCourseStudent.courses = course;
      let result = { courses: {}, students: [] };
      result.courses = course;
      for (
        let index = 0;
        index < req.studentDetails.length;
        index = index + 1
      ) {
        const studentInfo = await this.studentRepository.findOne({
          where: { mobile: req.studentDetails[index].mobile },
        });

        newCourseStudent.students = studentInfo;
        newCourseStudent.Id = 1;
        const temp = await this.studentCourseRepository.save(newCourseStudent);
        result.students.push(studentInfo);
      }

      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
