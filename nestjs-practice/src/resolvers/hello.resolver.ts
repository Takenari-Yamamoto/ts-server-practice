import { Resolver, Query } from '@nestjs/graphql';
import { IQuery } from 'src/generated/graphql';

@Resolver()
export class HelloResolver implements IQuery {
  @Query(() => String)
  hello(): string {
    return 'Hello World!!';
  }

  @Query(() => String)
  goodbye(): string {
    return 'Goodbye World!!';
  }
}
