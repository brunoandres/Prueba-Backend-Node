import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employees } from 'src/entities/employees.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeesService {
    constructor(@InjectRepository(Employees) private employeesRepo: Repository<Employees>) { }

    async create(body: any) {
        const employee = new Employees();
        employee.first_name = body.first_name;
        employee.last_name = body.last_name;
        employee.document_number = body.document_number;
        employee.company = body.company;

        const newEmployee = await this.employeesRepo.save(employee);
        return newEmployee;
    }

    findAll() {
        return this.employeesRepo.find();
    }
    
}
