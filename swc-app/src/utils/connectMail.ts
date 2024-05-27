export const connectMail = async (email: string, token: string) => {
  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  await sleep(3000);

  return {
    status: 200,
    message: `Email ${email} connected with token ${token}`,
  };
};
