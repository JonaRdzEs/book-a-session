import { upcomingSessions } from "../data/upcoming-sessions";
import Title from "../components/common/Title";
import SessionCard from "../components/SessionCard";

function UpcomingSessions() {
  return (
    <>
      <Title className="font-bold text-2xl text-dark-charcoal sm:text-3xl">Upcoming Sessions</Title>
      <p className="text-lg mt-3 text-dark-charcoal">
        Discover our lineup of future sessions. Explore diverse
        topics led by industry experts and join a community of enthusiastic
        learners. Browse through the sessions that will be available soon
        and prepare to enhance your skills.
      </p>
      <ul className="flex gap-6 flex-col w-full mx-auto mt-10 sm:grid sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
        {upcomingSessions.map((session) => (
          <li key={session.id}>
            <SessionCard {...session} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default UpcomingSessions;
