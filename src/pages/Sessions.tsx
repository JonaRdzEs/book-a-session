import SeeSessionButton from "../components/common/SeeSessionButton";
import Title from "../components/common/Title";
import SessionCard from "../components/SessionCard";
import { sessions } from "../data/sessions";

function Sessions() {
  return (
    <>
      <Title level="h1" className="font-bold text-2xl text-dark-charcoal sm:text-3xl">Explore Our Web Development Sessions</Title>
      <p className="text-lg mt-3 text-dark-charcoal">
        Dive into a variety of expertly curated sessions designed to enhance
        your web development skills. Whether you're a beginner looking to get
        started or an experienced developer seeking to stay current with the
        latest trends, our sessions offer something for everyone.
      </p>
      <ul className="flex gap-6 flex-col w-full mx-auto mt-10 sm:grid sm:grid-cols-2 sm:gap-5">
        {sessions.map((session) => (
          <li key={session.id}>
            <SessionCard {...session} actionBtn={<SeeSessionButton id={session.id} />} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Sessions;
