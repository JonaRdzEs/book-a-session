import { useEffect, useRef } from "react";
import Button from "../components/common/Button";
import BookmarkPlus from "../components/common/icons/BookmarkPlus";
import BookOff from "../components/common/icons/BookOff";
import Title from "../components/common/Title";
import EmptyContent from "../components/EmptyContent";
import { sessions } from "../data/sessions";
import type { ModalHandleProps, Session } from "../types";
import AddSessionModal from "../components/AddSessionModal";

type SessionProps = {
  id: string;
};

function Session({ id }: SessionProps) {
  const modalRef = useRef<ModalHandleProps>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const session: Session | undefined = sessions.find((el) => el.id === id);

  useEffect(() => {
    if (pRef.current && session?.description) {
      pRef.current.innerText = session.description;
    }
  }, [session?.description]);

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

  const openModal = () => modalRef?.current?.open();

  return (
    <>
      <div className="mt-10 md:w-10/12 md:mx-auto lg:w-full">
        <img
          className="rounded-sm object-cover lg:w-6/12 md:mx-auto lg:float-end lg:mx-10 lg:mb-5"
          src={session.image}
          alt=""
        />
        <div className="flex justify-center items-center flex-col gap-2 my-4 lg:mt-0 lg:items-start lg:relative">
          <Title className="text-2xl font-bold text-center lg:text-left lg:w-10/12 lg:text-3xl">
            {session.title}
          </Title>
          <span className="text-dark-gray font-bold">{session.date}</span>
          <Button
            className="hidden lg:flex lg:justify-center lg:items-center bg-navy-blue text-light-gray p-3 rounded-md mx-auto lg:absolute lg:right-0 lg:top-2"
            aria-label="Add session"
            onClick={openModal}
          >
            <BookmarkPlus width="25px" height="25px" />
          </Button>
        </div>
        <p ref={pRef} className="text-lg lg:text-xl" />
      </div>
      <Button
        className="flex justify-center items-center gap-2 flex-wrap bg-navy-blue text-light-gray w-full max-w-40 rounded-sm h-12 mt-8 mx-auto lg:hidden"
        onClick={openModal}
      >
        Add session
        <BookmarkPlus width="20px" height="20px" />
      </Button>
      <AddSessionModal ref={modalRef} sessionId={id} />
    </>
  );
}

export default Session;
