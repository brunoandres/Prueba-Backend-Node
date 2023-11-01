import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm'
import { Company } from './company.entity';
@Entity()
export class Employees {

  // Modificado
  @PrimaryGeneratedColumn()
  id: number;

  // Agrego atributo único para el document_number
  @Column({ unique: true, nullable: false })
  document_number: number;

  // Agrego que no sea null first_name
  @Column({ nullable: false })
  first_name: string;

  // Agrego que no sea null last_name
  @Column({ nullable: false })
  last_name: string;

  // Agrego fecha por defecto a date_admission
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  date_admission: Date;

  // Agrego relación a Company
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
