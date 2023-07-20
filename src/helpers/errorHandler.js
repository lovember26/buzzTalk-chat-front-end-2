import { errorNotification } from "./notification";

export const errorHandler = (error) => {
  const message = error?.message;
  errorNotification(message);

  return message;
};
