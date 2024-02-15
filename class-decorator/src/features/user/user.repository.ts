export class UserRepository {
  constructor() {}

  private users: { email: string; password: string }[] = [];

  createUser(params: {
    email: string;
    password: string;
  }): Promise<{ email: string; password: string }> {
    this.users.push(params);
    return Promise.resolve(params);
  }
}
