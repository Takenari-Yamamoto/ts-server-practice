import { connectMail } from "@utils/connectMail";

const main = async () => {
  const res = await connectMail("hoge@hoge.com", "xxxxxxxx");
  console.info(`finish to store mail: ${res.message}`);
};

main();
