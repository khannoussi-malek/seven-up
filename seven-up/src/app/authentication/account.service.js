import axios from "axios";
import { useMutation } from "@tanstack/react-query";
export const useCreateAccount = (config = {}) => {
  return useMutation(
    ({ username, email, password, phone_number }) =>
    axios.post("/users/", { username, email, password, phone_number }),
    {
      ...config,
    }
  );
};
