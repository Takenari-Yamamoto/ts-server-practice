import { connectMail } from "@utils/connectMail";

const main = async () => {
  console.log("Starting main function");
  try {
    const res = await connectMail("hoge@hoge.com", "xxxxxxxx");
    console.log(res);
  } catch (error) {
    console.error("Error in connectMail:", error);
  }
  console.log("Hello World");
};

main();
