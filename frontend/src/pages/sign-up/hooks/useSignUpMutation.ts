import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../queries";

export const useSignUpMutation = () => {
  return useMutation(SIGN_UP, {
    onCompleted: (data) => {
      localStorage.setItem("token", data.signUp?.token ?? "");
    },
  });
};
