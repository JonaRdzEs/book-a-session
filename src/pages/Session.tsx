import Button from "../components/common/Button";
import BookmarkPlus from "../components/common/icons/BookmarkPlus";
import BookOff from "../components/common/icons/BookOff";
import Title from "../components/common/Title";
import EmptyContent from "../components/EmptyContent";
import { sessions } from "../data/sessions";
import type { Session } from "../types";

type SessionProps = {
  id: string;
};

function Session({ id }: SessionProps) {
  const session: Session | undefined = sessions.find((el) => el.id === id);

  if (!session) {
    return (
      <EmptyContent
        icon={BookOff}
        title="Session Not Found"
        description="The book session you're looking for doesn't seem to exist. Please check
        the URL or explore our available sessions to find one that suits your
        needs."
        actionButton={
          <Button
            to="/sessions"
            className="flex justify-center items-center w-32 h-12 text-light-gray bg-navy-blue font-bold rounded-sm"
          >
            Go to sessions
          </Button>
        }
      />
    );
  }

  const handleClick = () => {

  };

  return (
    <>
      <div className="mt-10 md:w-10/12 md:mx-auto lg:w-full lg:flex lg:items-start gap-10 lg:relative">
        <img
          className="rounded-sm object-cover lg:w-2/4 md:mx-auto"
          src={session.image}
          alt=""
        />
        <div>
          <div className="flex justify-center items-center flex-col gap-2 my-4 lg:mt-0 lg:items-start">
            <Title className="text-2xl font-bold text-center lg:text-left lg:w-4/6">
              {session.title}
            </Title>
            <span className="text-dark-gray font-bold">{session.date}</span>
          </div>
          <p className="text-lg">{session.description}</p>
        </div>
      </div>
      <Button
        className="flex justify-center items-center gap-2 flex-wrap bg-navy-blue text-light-gray w-full max-w-40 rounded-sm h-12 mt-8 mx-auto lg:absolute lg:top-[90px] lg:right-14"
        onClick={handleClick}
      >
        Add session
        <BookmarkPlus width="20px" height="20px" />
      </Button>
    </>
  );
}

export default Session;
