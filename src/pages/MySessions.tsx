import EmptyContent from "../components/EmptyContent";
import BookmarkPlus from "../components/common/icons/BookmarkPlus";
import { useSelector } from "../store/hooks";
import SessionCard from "../components/SessionCard";
import DeleteSessionButton from "../components/common/DeleteSessionButton";
import { sessions as availableSessions } from "../data/sessions";
import Title from "../components/common/Title";

function MySessions() {
  const { sessions } = useSelector((state) => state.userSessions);

  if (sessions.length === 0) {
    return (
      <EmptyContent
        icon={BookmarkPlus}
        title="No Sessions Available Yet"
        description="It looks like you haven’t added any sessions yet. 
          Don’t miss out on the opportunity to elevate your web development skills! 
          Add a new session to explore a new topic, 
          dive deeper into a specific technology, or share your expertise with others."
      />
    );
  }

  const sessionIds = sessions.map((session) => session.sessionId);
  const registeredSessions = availableSessions.filter((el) =>
    sessionIds.includes(el.id)
  );

  return (
    <>
      <Title
        level="h1"
        className="font-bold text-2xl text-dark-charcoal sm:text-3xl"
      >
        Registered Sessions
      </Title>
      <p className="text-lg mt-3 text-dark-charcoal">
        Here you can view all the upcoming web development sessions you've
        signed up for. Stay organized, track your learning progress, and prepare
        for each session with ease.
      </p>
      <ul className="flex gap-6 flex-col w-full mx-auto mt-10 sm:grid sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
        {registeredSessions.map((session) => (
          <li key={session.id}>
            <SessionCard
              {...session}
              actionBtn={<DeleteSessionButton id={session.id} />}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default MySessions;
