import React, { FC } from "react";
interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage: FC<ErrorMessageProps>  = ({
  message = "Oops, something went wrong, please reload the page! 😢😢😢",
}) => {
  return <p>{message}</p>;
};

export default ErrorMessage;