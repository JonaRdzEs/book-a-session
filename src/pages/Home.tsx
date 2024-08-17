import homeImg from "../assets/tech-girl.jpg";
import Button from "../components/common/Button";
import InfoSection from "../components/InfoSection";

function Home() {
  return (
    <>
      <div className="flex justify-center items-center gap-2 mt-20 flex-col lg:flex-row lg:gap-8 h-auto">
        <h1 className="font-extrabold text-4xl text-center text-dark-charcoal lg:text-6xl xl:text-7xl lg:text-left">
          Elevate Your Web Development Skills with BookMate!
        </h1>
        <div className="bg-[url('/bg-shapes.svg')] w-full h-auto m-auto flex justify-center items-center xl:h-[450px] 2xl:h-[500px]">
          <img
            className="w-11/12 m-auto object-cover lg:h-8/12"
            src={homeImg}
            role="presentation"
            alt="Woman Sitting in Front Laptop"
          />
          {/* <ShapesBg className=" object-cover w-[100%] h-full" /> */}
        </div>
      </div>
      <div className="w-full flex justify-center items-center flex-col gap-5 mx-auto mt-8 xl:mt-24">
        <p className="text-center font-medium text-lg text-dark-charcoal lg:text-xl lg:w-10/12 lg:mx-auto">
          Join a community of passionate learners and stay ahead in the
          ever-evolving world of web development. Discover curated book
          sessions, expert-led discussions, and resources tailored to enhance
          your skills and knowledge.
        </p>
        <Button
          className="w-44 h-12 text-light-gray bg-coral rounded-sm flex justify-center items-center font-bold"
          to="/sessions"
        >
          See all sessions
        </Button>
      </div>
      <div className="mt-20 grid grid-cols-1 place-content-center gap-8 sm:grid-cols-2 sm:place-items-baseline">
        <InfoSection />
      </div>
    </>
  );
}

export default Home;
