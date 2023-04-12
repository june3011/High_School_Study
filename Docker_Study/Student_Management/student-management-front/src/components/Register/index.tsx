import { useState } from "react";
import { RegisterButton, RegisterContainer, RegisterInput } from "./style";
import useRegister from "../../hooks/useRegister";
import { useNavigate } from "react-router";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(-1);
  const { onRegister } = useRegister();
  const navigate = useNavigate();
  return (
    <RegisterContainer>
      <RegisterInput
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <RegisterInput
        value={age === -1 ? "" : age}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setAge(Number(e.target.value))
        }
      />
      <RegisterButton
        onClick={() => {
          onRegister({ name, age });
          navigate("/");
          location.reload();
        }}
      >
        등록
      </RegisterButton>
    </RegisterContainer>
  );
};

export default Register;
