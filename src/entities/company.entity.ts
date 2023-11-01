import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Employees } from './employees.entity';

@Entity()
export class Company {

  // Modificado
  @PrimaryGeneratedColumn()
  id: number;

  // Agrego que name no sea null además de único
  @Column({ nullable: false, unique: true })
  name: string;

  @Column({ type: 'enum', enum: ['UY', 'BR', 'AR'], default: 'UY' })
  country: string;

  // Agrego relación a Employees
  @OneToMany(() => Employees, employee => employee.company)
  employees: Employees[];

  // Original
  /*@PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false})
  name: string;

  @Column({ type: 'enum', enum: ['UY', 'BR', 'AR'], default: 'UY' })
  country: string;

  @Column({ nullable: true })
  cantEmployees: number;*/
}