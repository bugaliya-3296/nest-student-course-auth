import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { StudentCourseTable } from './student.course.entity';
import { StudentsTable } from './student.entity';

@Entity({name: 'courses'})
export class CourseTable {
  @PrimaryGeneratedColumn()
  courseId: string;

  @Column('varchar', { nullable: false, length: 255 })
  courseName!: string;

  @Column()
  courseCode: string;

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'updated_at',
  })
  updated_at!: Date;

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  created_at!: Date;
  
  // @ManyToMany(()=> StudentsTable, student => student.courseData )
  // @JoinTable()
  // studentsData: StudentsTable[]
  @OneToMany(
    () => StudentCourseTable,
    (courseInfo: StudentCourseTable) => courseInfo.courses
  )
  studentsCourses: Array<StudentCourseTable>;

}
