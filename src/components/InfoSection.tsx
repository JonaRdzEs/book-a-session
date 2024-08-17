import Info from "./Info";
import BooksIcon from "./common/icons/BooksIcon";
import UserUpIcon from "./common/icons/UserUp";
import MessageCircleIcon from "./common/icons/MessageCircleIcon";
import CalendarClockIcon from "./common/icons/CalendarClockIcon";

function InfoSection() {
  return (
    <>
      <Info
        icon={<BooksIcon />}
        title="Curated Reading Lists"
        desc="Gain access to a handpicked selection of the best web development books. Stay updated with the latest trends and technologies, carefully chosen by industry experts."
      />
      <Info
        icon={<UserUpIcon />}
        title="Learn from Industry Leaders"
        desc="Join sessions led by experienced professionals and thought leaders in web development. Get insights, tips, and real-world advice directly from the experts."
      />
      <Info
        icon={<MessageCircleIcon />}
        title="Engage and Interact"
        desc="Participate in live discussions, Q&A sessions, and collaborative learning activities. Engage with fellow learners, share your ideas, and solve problems together."
      />
      <Info
        icon={<CalendarClockIcon />}
        title="Learn at Your Own Pace"
        desc="With a variety of session times and formats, you can fit learning into your schedule. Choose the sessions that work best for you and continue growing your skills."
      />
    </>
  );
}

export default InfoSection;
