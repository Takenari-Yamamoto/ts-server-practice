import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Resolvers } from './graph/resolver';
import { UserResolver } from './modules/user/user.resolver';
import { TodoResolver } from './modules/todo/todo.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
    }),
  ],
  providers: [Resolvers, UserResolver, TodoResolver],
})
export class AppModule {}
