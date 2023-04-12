import { useState, useEffect } from "react";
import * as S from "./style";
import { useGetStudentsQuery } from "../../queries/student/student.query";
import { useNavigate, useParams } from "react-router";
import { Student } from "../../type/Student/student";
import useModify from "../../hooks/useModify";

interface Props {}

const Modify = () => {
  const { data: studentData } = useGetStudentsQuery();

  const { id } = useParams();

  const realId = Number(id);

  const [thisStudent, setThisStudent] = useState<Student>();

  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(-1);

  const { onModify } = useModify();

  const navigate = useNavigate();

  useEffect(() => {
    setThisStudent(
      studentData?.filter((student) => student.id === Number(id))[0]
    );
    setName(`${thisStudent?.name}`);
    setAge(Number(thisStudent?.age));
  }, [studentData]);

  return (
    <S.ModifyContainer>
      <S.ModifyInput
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
        name="name"
      />
      <S.ModifyInput
        value={age}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setAge(Number(e.target.value))
        }
        name="age"
      />
      <S.ModifyButton
        onClick={() => {
          onModify({ id: realId, name, age });
          navigate("/");
          location.reload();
        }}
      >
        수정
      </S.ModifyButton>
    </S.ModifyContainer>
  );
};

export default Modify;
