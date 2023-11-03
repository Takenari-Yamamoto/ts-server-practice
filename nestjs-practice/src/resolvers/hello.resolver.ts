import { Resolver, Args, Query } from '@nestjs/graphql';
import { IQuery, User } from 'src/generated/graphql'; // 生成された型定義のパスに応じて適切にインポートしてください

@Resolver()
export class HelloResolver implements IQuery {
  // ダミーデータ
  private userData: User[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      password: 'secret',
    },
    {
      id: '2',
      name: 'Jane Doe',
      email: 'jane@example.com',
      password: 'secret',
    },
  ];

  @Query()
  users(): User[] {
    return this.userData;
  }

  @Query()
  user(@Args('id') id: string): User | null {
    return this.userData.find((user) => user.id === id) || null;
  }
}
