import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { CompanyService } from 'src/services/company.service';

@Controller('company')
export class CompanyController {

  constructor(private companyService: CompanyService) { }

  @Get()
  async listCompanyEmployees(): Promise<any[]> {
    return this.companyService.listCompanyEmployees();
  }

  @Get('list')
  async findAll(): Promise<any[]> {
    return await this.companyService.findAll();
  }

  @Get('/:id')
  async listCompanyEmployeesFindByCompany(@Param() id: any){    
    return this.companyService.listCompanyEmployeesByCompany(id);
  }

  @Post()
  async create(@Body() company: any): Promise<any> {
    try {
      const result = await this.companyService.create(company);
      //return 'Company guardado correctamente';
      return result;
    } catch (error) {
      throw new HttpException('Error al guardar Company', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}