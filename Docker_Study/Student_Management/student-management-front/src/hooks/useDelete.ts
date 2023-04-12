import { useQueryClient } from "react-query";
import { useDeleteStudentMutation } from "../queries/student/student.query";
import StudentRepository from "../repository/student/StudentRepository";

const useDelete = () => {
  const queryClient = useQueryClient();

  const deleteStudentMutation = useDeleteStudentMutation();

  const onDelete = async (id: number) => {
    // if (deleteStudentMutation.isLoading) {
    //   return;
    // }

    // if (!window.confirm("정말 삭제하시겠습니까?")) {
    //   return;
    // }

    // deleteStudentMutation.mutate(
    //   { id },
    //   {
    //     onSuccess: () => {
    //       console.log("학생 삭제 성공");
    //       queryClient.invalidateQueries("student/getStudents");
    //     },
    //     onError: () => {
    //       console.log("학생 삭제 실패");
    //     },
    //   }
    // );
    try {
      await StudentRepository.deleteStudentById({ id });
      console.log("학생 삭제 성공");
    } catch (e) {
      console.log("학생 삭제 실패");
    }
  };

  return { onDelete };
};

export default useDelete;
