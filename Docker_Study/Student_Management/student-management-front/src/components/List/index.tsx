import * as S from "./style";
import { useGetStudentsQuery } from "../../queries/student/student.query";
import { useNavigate } from "react-router";
import useDelete from "../../hooks/useDelete";

const List = () => {
  const navigate = useNavigate();
  const { data: studentData } = useGetStudentsQuery();
  const { onDelete } = useDelete();
  return (
    <>
      <S.ListContainer>
        <S.ListTr>
          <S.ListTh>id</S.ListTh>
          <S.ListTh>이름</S.ListTh>
          <S.ListTh>나이</S.ListTh>
          <S.ListBtnTh></S.ListBtnTh>
          <S.ListBtnTh></S.ListBtnTh>
        </S.ListTr>
        {studentData &&
          studentData?.map((student) => {
            return (
              <S.ListTr key={student.id}>
                <S.ListTd>{student.id}</S.ListTd>
                <S.ListTd>{student.name}</S.ListTd>
                <S.ListTd>{student.age}</S.ListTd>
                <S.TdButtonWrap>
                  <S.ListBtnTd
                    TdButtonType="modify"
                    onClick={() => navigate(`/modify/${student.id}`)}
                  >
                    수정
                  </S.ListBtnTd>
                  <S.ListBtnTd
                    TdButtonType="cancle"
                    onClick={() => {
                      onDelete(student.id);
                      location.reload();
                    }}
                  >
                    삭제
                  </S.ListBtnTd>
                </S.TdButtonWrap>
              </S.ListTr>
            );
          })}
      </S.ListContainer>
    </>
  );
};

export default List;
