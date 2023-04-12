import { useQuery, useMutation, UseQueryOptions } from "react-query";
import { getStudentsResponse } from "../../repository/student/studentRepository.res";
import { AxiosError } from "axios";
import StudentRepository from "../../repository/student/StudentRepository";
import {
  deleteStudentByIdParam,
  patchEditStudentParam,
  postRegisterStudentParam,
} from "../../repository/student/studentRepository.param";

export const useGetStudentsQuery = (
  options?: UseQueryOptions<
    getStudentsResponse,
    AxiosError,
    getStudentsResponse,
    "student/getStudents"
  >
) =>
  useQuery("student/getStudents", () => StudentRepository.getStudents(), {
    ...options,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 60,
  });

export const usePostRegisterStudentMutation = () => {
  const mutation = useMutation(({ id, name, age }: postRegisterStudentParam) =>
    StudentRepository.postRegisterStudent({ id, name, age })
  );

  return mutation;
};

export const usePatchEditStudentMutation = () => {
  const mutation = useMutation(({ id, name, age }: patchEditStudentParam) =>
    StudentRepository.patchEditStudent({ id, name, age })
  );

  return mutation;
};

export const useDeleteStudentMutation = () => {
  const mutation = useMutation(({ id }: deleteStudentByIdParam) =>
    StudentRepository.deleteStudentById({ id })
  );

  return mutation;
};
