export interface UserLoginType {
  studentId: string;
  password: string;
}

export interface UserVerifyType {
  studentIdVerify: string;
  passwordVerify: string;
}

export interface UserInfoType extends Pick<UserLoginType, "studentId"> {
  department: string;
  name: string;
  grade: string;
  email: string;
}

export interface EditableUserInfoType extends Omit<UserInfoType, "email"> {
  email: string | undefined;
}

export interface UserResponseType {
  data: { user: UserInfoType };
}
