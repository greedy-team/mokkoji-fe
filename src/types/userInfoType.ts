export interface userInterface {
  student_id: string;
  password: string;
}

export interface UserInfoType {
  studentId: string;    
  department: string;  
  name: string;         
  grade: string;   
  email: string; 
}

export interface EditableUserInfoType extends Omit<UserInfoType, "email"> {
  email?: string;  
}