import Title from "../components/common/Title";
import NoSession from "../components/NoSession";
import { sessions } from "../data/sessions";
import type { Session } from "../types";

type SessionProps = {
  id: string;
};

function Session({ id }: SessionProps) {
  const session: Session | undefined = sessions.find((el) => el.id === id);

  if (!session) {
    return <NoSession />;
  }

  return (
    <div>
      <img src="" alt="" />
      <div>
        <Title>{session.title}</Title>
        <span>{session.date}</span>
      </div>
      <p>{session.description}</p>
    </div>
  );
}

export default Session;
