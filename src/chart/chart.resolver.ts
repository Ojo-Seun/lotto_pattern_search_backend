import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ChartService } from './chart.service'
import { CreateChartInput } from './dto/create-chart.input'
import { UpdateChartInput } from './dto/update-chart.input'

@Resolver('Chart')
export class ChartResolver {
  constructor(private readonly chartService: ChartService) {}

  @Mutation('createChart')
  create(@Args('createChartInput') createChartInput: CreateChartInput) {
    return this.chartService.create(createChartInput)
  }

  @Query('chart')
  findAll() {
    return this.chartService.findAll()
  }

  @Query('chart')
  findOne(@Args('id') id: number) {
    return this.chartService.findOne(id)
  }

  @Mutation('updateChart')
  update(@Args('updateChartInput') updateChartInput: UpdateChartInput) {
    return this.chartService.update(updateChartInput.id, updateChartInput)
  }

  @Mutation('removeChart')
  remove(@Args('id') id: number) {
    return this.chartService.remove(id)
  }
}
