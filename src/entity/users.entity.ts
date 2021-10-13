import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserInfoTable {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column('varchar', { nullable: false, length: 255 , unique: true})
  email: string;

  // @Column({select: false})
  @Column()
  password: string;

}
