export const MetamaskErrorMessage = (error) => {
  const message = error.data
    ? error.data.message
    : "execution reverted: Unknown error";
  return message.slice(20);
};
