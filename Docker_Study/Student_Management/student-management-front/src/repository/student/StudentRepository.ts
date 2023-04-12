import axios from "axios";
import {
  patchEditStudentParam,
  postRegisterStudentParam,
} from "./studentRepository.param";
import { getStudentsResponse } from "./studentRepository.res";
import config from "../../config/config.json";

class StudentRepository {
  public async getStudents(): Promise<getStudentsResponse> {
    const { data } = await axios.get(`${config.SERVER}/students/list`);
    return data;
  }

  public async postRegisterStudent({
    id,
    name,
    age,
  }: postRegisterStudentParam): Promise<void> {
    await axios.post("127.0.0.1:3307/student/register", { id, name, age });
  }

  public async patchEditStudent({}: patchEditStudentParam): Promise<void> {
    await axios.patch("127.0.0.1:3307");
  }
}
