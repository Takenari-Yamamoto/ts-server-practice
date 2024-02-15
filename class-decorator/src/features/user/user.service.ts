import { Logger } from "../../decorator/logger";
import { UserRepository } from "./user.repository";

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  @Logger
  createUser(params: {
    email: string;
    password: string;
  }): Promise<{ email: string; password: string }> {
    return this.userRepository.createUser(params);
  }
}
