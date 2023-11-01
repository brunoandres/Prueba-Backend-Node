import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from 'src/entities/company.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CompanyService {
    constructor(@InjectRepository(Company) private companyRepo: Repository<Company>) { }

    async create(body: any) {
        const company = new Company();
        company.name = body.name;
        company.country = body.country;

        const newCompany = await this.companyRepo.save(company);
        return newCompany;
    }

    findAll() {
        return this.companyRepo.find();
    }

    async listCompanyEmployees(): Promise<Company[]> {
        const companies = await this.companyRepo.createQueryBuilder('company')
            .leftJoinAndSelect('company.employees', 'employees')
            .getMany();

        return companies;
    }

    /*async listCompanyEmployees2(companyId: any): Promise<any[]> {
        console.log("Recibiendo company_-", companyId.id)
        var company = await this.companyRepo
            .createQueryBuilder('company')
            .leftJoinAndSelect('company.employees', 'employees')
            .getMany();

        console.log(company);
        //const companyEmployees = company.filter(x => x.idCompany === companyId);
        const filteredCompanies = company.filter(company => company.idCompany === 5);
        console.log(filteredCompanies);
        return filteredCompanies;
    }*/

    async listCompanyEmployees2(companyId: any): Promise<Company | undefined> {
        const companyIdd = companyId.id;
        const company = await this.companyRepo.createQueryBuilder('company')
            .leftJoinAndSelect('company.employees', 'employee')
            .where('company.idCompany = :companyIdd',  {companyIdd} )
            .getOne();
        
        return company;
    }

}
