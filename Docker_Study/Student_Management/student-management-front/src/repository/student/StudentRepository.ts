import axios from "axios";
import {
  deleteStudentByIdParam,
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
    name,
    age,
  }: postRegisterStudentParam): Promise<void> {
    await axios.post(`${config.SERVER}/student/register`, { name, age });
  }

  public async patchEditStudent({
    id,
    name,
    age,
  }: patchEditStudentParam): Promise<void> {
    await axios.patch(`${config.SERVER}/student/edit`, { id, name, age });
  }

  public async deleteStudentById({
    id,
  }: deleteStudentByIdParam): Promise<void> {
    await axios.delete(`${config.SERVER}/student/delete?id=${id}`);
  }
}

export default new StudentRepository();
