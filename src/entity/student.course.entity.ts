import {
    BaseEntity,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn
  } from "typeorm";
  import { StudentsTable } from "./student.entity";
  import { CourseTable } from "./course.entity";
  
  @Entity()
  export class StudentCourse extends BaseEntity {
    @PrimaryColumn({type: 'bigint'})
    mobile: string;
  
    @PrimaryColumn()
    courseId: number;
  
    // @ManyToOne(() => Author, author => author.bookConnection, { primary: true })
    // @JoinColumn({ name: "authorId" })
    // author: Promise<Student>;
  
    // @ManyToOne(() => Book, book => book.authorConnection, {
    //   primary: true
    // })
    // @JoinColumn({ name: "bookId" })
    // book: Promise<Course>;
  }