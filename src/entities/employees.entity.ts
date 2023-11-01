import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm'
import { Company } from './company.entity';
@Entity()
export class Employees {

  // Modificado
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  document_number: number;

  @Column({ nullable: false })
  first_name: string;

  @Column({ nullable: false })
  last_name: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  date_admission: Date;

  @ManyToOne(() => Company, company => company.employees, {nullable: false})
  company: Company;


  // Original
  /*@PrimaryGeneratedColumn()
  id: number;

  @Column()
  company_name: string;

  @Column()
  document_number: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  date_admission: string;*/

}
