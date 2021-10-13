import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
// import { ValidStudentMiddleware } from "../common/middlewares/validStudent.middleware"
import { StudentsTable }  from '../entity/student.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forFeature([StudentsTable])
  ],
  controllers: [StudentController],
  providers: [StudentService],
  exports: [StudentService]
})

export class StudentModule{}
//  implements NestModule {
//     configure(consumer: MiddlewareConsumer) {
//       consumer.apply(ValidStudentMiddleware).forRoutes({
//         path: 'students/:studentId',
//         method: RequestMethod.GET
//       });
//       consumer.apply(ValidStudentMiddleware).forRoutes({
//         path: 'students/:studentId',
//         method: RequestMethod.PUT
//       });
//     }
  // }