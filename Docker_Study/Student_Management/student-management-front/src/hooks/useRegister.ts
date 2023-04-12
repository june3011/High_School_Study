import StudentRepository from "../repository/student/StudentRepository";
import { postRegisterStudentParam } from "../repository/student/studentRepository.param";

const useRegister = () => {
  const onRegister = async ({ name, age }: postRegisterStudentParam) => {
    try {
      await StudentRepository.postRegisterStudent({ name, age });
    } catch (e) {
      console.log(e);
    }
  };
  return { onRegister };
};

export default useRegister;
