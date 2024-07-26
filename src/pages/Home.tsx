import homeImg from "../assets/tech-girl.jpg";
import Button from "../components/common/Button";
import InfoSection from "../components/InfoSection";
import ShapesBg from "../components/ShapesBg";

function Home() {
  return (
    <>
      <div className="flex justify-center items-center gap-2 mt-20 flex-col">
        <h1 className="font-extrabold text-3xl text-center">
          Elevate Your Web Development Skills with BookMate!
        </h1>
        <div className="w-full h-[280px] max-w-lg max-h-80 m-auto relative overflow-hidden flex justify-center items-center">
          <img
            className="w-11/12 m-auto object-cover"
            src={homeImg}
            role="presentation"
            alt="Woman Sitting in Front Laptop"
          />
          <ShapesBg className="absolute inset-0 -z-10 object-cover w-[110%] h-full" />
        </div>
      </div>
      <div className="w-full flex justify-center items-center flex-col gap-5 mx-auto mt-8">
        <p className="text-center font-medium text-lg">
          Join a community of passionate learners and stay ahead in the
          ever-evolving world of web development. Discover curated book
          sessions, expert-led discussions, and resources tailored to enhance
          your skills and knowledge.
        </p>
        <Button
          className="w-44 h-12 text-[#F2F2F2] bg-[#FF6F61] rounded-sm flex justify-center items-center font-bold"
          to="/sessions"
        >
          See all sessions
        </Button>
      </div>
      <div className="mt-20 flex justify-center items-center flex-col gap-8">
        <InfoSection />
      </div>
    </>
  );
}

export default Home;
