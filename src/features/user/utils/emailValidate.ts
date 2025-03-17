const emailRegex = /^[^\s@]+@[^\s@]+\.(com|net|org|co\.kr)$/;

export const emailValidate = (email: string) => {
  if (!email) {
    alert("이메일을 입력하세요.");
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("올바른 이메일 형식을 입력하세요.");
    return false;
  }
  return true;
};
