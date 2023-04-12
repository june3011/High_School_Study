import StudentRepository from "../repository/student/StudentRepository";
import { patchEditStudentParam } from "../repository/student/studentRepository.param";

const useModify = () => {
  const onModify = async ({ id, name, age }: patchEditStudentParam) => {
    try {
      await StudentRepository.patchEditStudent({ id, name, age });
      console.log("학생 정보 수정 성공");
    } catch (e) {
      console.log("학생 정보 수정 실패");
    }
  };
  return { onModify };
};

export default useModify;
