import { Resolver } from '@nestjs/graphql';
import { User } from 'src/graph/generated/graphql';

@Resolver()
export class UserResolver {
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

  getUserById(id: string): User | null {
    return this.userData.find((todo) => todo.id === id) || null;
  }

  getAllUsers(): User[] {
    return this.userData;
  }
}
