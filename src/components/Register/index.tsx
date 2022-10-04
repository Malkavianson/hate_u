import { useState } from "react";
import { api } from "../../services";
import { StyledButton } from "../../styles";
import { RegisterSection } from "./styles";

interface RegisterData {
  name: string;
  email: string;
  phone?: string;
  password: string;
}

const Register = ({ setRegister }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = ({ name, email, password }: RegisterData) => {
    const data: RegisterData = {
      name: name,
      email: email,
      phone: "(xx) xxxx-xxxx",
      password: password,
    };

    api
      .post("/user", data)
      .then((res) => {
        setRegister(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <RegisterSection>
        <div>
          <h2>Cadastre-se</h2>
          <form action="" method="post">
            <input
              type="text"
              name="rName"
              id="rName"
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="rEmail"
              id="rEmail"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="rPassword"
              id="rPassword"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          <div>
            <StyledButton
              onClick={(e) => {
                handleRegister({ name, email, password });
                e.stopPropagation();
                e.preventDefault();
              }}
              green
            >
              Cadastrar
            </StyledButton>
            <StyledButton black>Google</StyledButton>
            <a
              href="##"
              onClick={(e) => {
                setRegister(false);
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              Voltar ao login
            </a>
          </div>
        </div>
      </RegisterSection>
    </>
  );
};

export default Register;
