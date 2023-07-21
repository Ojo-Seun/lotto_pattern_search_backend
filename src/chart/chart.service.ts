import { Injectable } from '@nestjs/common';
import { CreateChartInput } from './dto/create-chart.input';
import { UpdateChartInput } from './dto/update-chart.input';

@Injectable()
export class ChartService {
  create(createChartInput: CreateChartInput) {
    return 'This action adds a new chart';
  }

  findAll() {
    return `This action returns all chart`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chart`;
  }

  update(id: number, updateChartInput: UpdateChartInput) {
    return `This action updates a #${id} chart`;
  }

  remove(id: number) {
    return `This action removes a #${id} chart`;
  }
}
