import { toast } from "react-hot-toast";

export const validate = (values) => {
  const errors = validateUsername(values, {});
  return errors;
};

const validateUsername = (values, error = {}) => {
  if (!values.username)
    error.username = toast.error("Username is required...!");
  else if (values.username.includes(" "))
    error.username = toast.error("Username is invalid...!");
  return error;
};
