import { Student } from "../../type/Student/student";

export interface postRegisterStudentParam {
  name: string;
  age: number;
}

export interface patchEditStudentParam extends Student {}

export interface deleteStudentByIdParam {
  id: number;
}
