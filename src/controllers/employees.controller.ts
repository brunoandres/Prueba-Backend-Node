import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { EmployeesService } from 'src/services/employees.service';

@Controller('employees')
export class EmployeesController {

  constructor(private employeesService: EmployeesService) { }

  @Get()
  async findAll(): Promise<any[]> {
    return await this.employeesService.findAll();
  }

  @Post()
  async create(@Body() employee: any): Promise<string> {
    try {
      const result = await this.employeesService.create(employee);
      return 'Guardado correctamente';
    } catch (error) {
      throw new HttpException('Error al guardar la compañía', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}