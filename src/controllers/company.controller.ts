import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { CompanyService } from 'src/services/company.service';

@Controller('company')
export class CompanyController {

  constructor(private companyService: CompanyService) { }

  @Get()
  async findAll(): Promise<any[]> {
    return await this.companyService.findAll();
  }

  @Get('list')
  async listCompanyEmployees(): Promise<any[]> {
    return this.companyService.listCompanyEmployees();
  }

  @Get('/:id')
  async listCompanyEmployeesFindByCompany(@Param() id: any){    
    return this.companyService.listCompanyEmployeesByCompany(id);
  }

  @Post()
  async create(@Body() company: any): Promise<string> {
    try {
      const result = await this.companyService.create(company);
      return 'Guardado correctamente';
    } catch (error) {
      throw new HttpException('Error al guardar la compañía', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}