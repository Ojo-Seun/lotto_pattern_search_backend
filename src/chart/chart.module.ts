import { Module } from '@nestjs/common'
import { ChartService } from './chart.service'
import { ChartResolver } from './chart.resolver'

@Module({
  providers: [ChartResolver, ChartService],
})
export class ChartModule {}
