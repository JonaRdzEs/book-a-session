import EmptyContent from "../components/EmptyContent";
import BookmarkPlus from "../components/common/icons/BookmarkPlus";
const mySessions = [];

function MySessions() {
  if (mySessions.length === 0) {
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
  return <div></div>;
}

export default MySessions;
