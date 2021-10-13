import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StudentsTable } from './student.entity';
import { CourseTable } from './course.entity';

@Entity({ name: 'students_courses' })
export class StudentCourseTable extends BaseEntity {
  @Column({ type: 'bigint' })
  Id: number;

  @ManyToOne(
    () => StudentsTable,
    (student: StudentsTable) => student.studentsCourses,
    { primary: true },
  )
  @JoinColumn({ name: 'student_id' })
  students: StudentsTable;

  @ManyToOne(
    () => CourseTable,
    (course: CourseTable) => course.studentsCourses,
    { primary: true },
  )
  @JoinColumn({ name: 'course_id' })
  courses: CourseTable;
}
