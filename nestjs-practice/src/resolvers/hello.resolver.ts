import { Resolver, Query } from '@nestjs/graphql';
import { IQuery } from 'src/generated/graphql';

@Resolver()
export class HelloResolver implements IQuery {
  @Query(() => String)
  hello(): string {
    return 'Hello World!!';
  }
}
