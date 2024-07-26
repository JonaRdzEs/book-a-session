import Title from "./common/Title";
import BookOff from "./common/icons/BookOff";
import Button from "./common/Button";

function NoSession() {
  return (
    <div className="w-full min-h-[75vh] flex justify-center items-center flex-col gap-6">
      <BookOff width="80px" height="80px" color="3A4E75" />
      <Title level="h2" className="font-bold text-center text-2xl">
        No session found
      </Title>
      <p className="text-center text-lg">
        It seems the session you are trying to access does not exist
      </p>
      <Button
        to="/sessions"
        className="flex justify-center items-center w-32 h-10 text-[#F2F2F2] bg-[#3A4E75] font-bold rounded-sm"
      >
        Go to sessions
      </Button>
    </div>
  );
}

export default NoSession;
