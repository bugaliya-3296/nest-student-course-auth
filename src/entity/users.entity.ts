import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { StudentsTable } from './student.entity';

@Entity('courseTable')
export class CourseTable {
  @Column()
  id: number;

  @Column('varchar', { nullable: false, length: 255 })
  EMAIL!: string;

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
  
  @ManyToMany(()=> StudentsTable, student => student.courseData )
  // @JoinTable()
  studentsData: StudentsTable[]

}
