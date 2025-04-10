import { toast } from "react-toastify";

const emailRegex = /^[^\s@]+@[^\s@]+\.(com|net|org|co\.kr)$/;

export const emailValidate = (email: string) => {
  if (!email) {
    toast.warn("이메일을 입력하세요.");
    return false;
  }

  if (!emailRegex.test(email)) {
    toast.warn("올바른 이메일 형식을 입력하세요.");
    return false;
  }
  return true;
};
