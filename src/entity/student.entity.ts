import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
// import { StudentCourse } from './course.student.entity';
import { CourseTable  } from './course.entity';
import { StudentCourseTable } from './student.course.entity';

@Entity({name: 'students'})
export class StudentsTable {
  @ApiProperty()
  @PrimaryGeneratedColumn({type: 'bigint'})
  mobile: string;

  @ApiProperty()
  @Column('varchar', { nullable: false, length: 255 })
  studentName!: string;

  @ApiProperty()
  @Column()
  email: string;

  @ApiProperty()
  @Column()
  gender: string;

  @ApiProperty()
  @Column('text', { nullable: true })
  address?: string;    

  @ApiProperty()
  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'updated_at',
  })
  updated_at!: Date;

  @ApiProperty()
  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  created_at!: Date;

  @OneToMany(
    () => StudentCourseTable,
    (student: StudentCourseTable) => student.students
  )
  studentsCourses: StudentCourseTable[];
  // studentsCourses: Array<StudentCourseTable>;

}
