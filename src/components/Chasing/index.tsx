import { useAuth } from "../../contexts/auth";
import { StyledChasing } from "./styles";

const Chasing = () => {
  const { currentUser } = useAuth();

  return (
    <StyledChasing>
      <div id="container">
        {currentUser.chasing.map((e: any, i: any) => {
          return (
            <article key={i}>
              <div className="foto"></div>
              <div className="chasingDados">
                <p>{e.chasingName}</p>
                <span>({e.chasingId})</span>
              </div>
            </article>
          );
        })}
      </div>
    </StyledChasing>
  );
};

export default Chasing;
