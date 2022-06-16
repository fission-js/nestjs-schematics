import { AppModule as DynamicAppModule } from '@fission-js/fission'
import { ExampleModule } from '../entities'

export const AppModule = DynamicAppModule.forRoot([ExampleModule])
