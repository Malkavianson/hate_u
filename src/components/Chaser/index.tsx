import { useAuth } from "../../contexts/auth";
import { StyledChaser } from "./styles";

const Chaser = () => {
  const { currentUser } = useAuth();

  return (
    <StyledChaser>
      <div id="container">
        {currentUser.chaser.map((e: any, i: any) => {
          return (
            <article key={i}>
              <div className="foto"></div>
              <div className="chaserDados">
                <p>{e.chaserName}</p>
                <span>({e.chaserId})</span>
              </div>
            </article>
          );
        })}
      </div>
    </StyledChaser>
  );
};

export default Chaser;
