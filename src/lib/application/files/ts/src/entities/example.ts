import { Entity, Field, EntityModule } from '@fission-js/fission'

@Entity()
export class Example {
  @Field({ primary: true })
  id: number

  @Field()
  title: string
}

export const ExampleModule = EntityModule.forRoot(Example)
