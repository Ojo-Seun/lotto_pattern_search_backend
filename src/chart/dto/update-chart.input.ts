import { CreateChartInput } from './create-chart.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateChartInput extends PartialType(CreateChartInput) {
  id: number;
}
