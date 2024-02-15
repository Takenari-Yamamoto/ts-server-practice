import { UserRepository } from "./features/user/user.repository";
import { UserService } from "./features/user/user.service";

async function main() {
  const userRepository = new UserRepository();
  const userService = new UserService(userRepository);

  const user = await userService.createUser({
    email: "hogehoge",
    password: "password",
  });

  console.log(user);
}
main();
