import type { ReactNode } from "react";
import Title from "./common/Title";
import Tag from "./common/Tag";

type SessionCardProps = {
  image?: string;
  title: string;
  summary: string;
  tags?: string[];
  actionBtn?: ReactNode;
};

type UpcomingSessionCardProps = {
  releaseDate: string,
} & SessionCardProps;

const isUpcomingSession = (props: SessionCardProps | UpcomingSessionCardProps): props is UpcomingSessionCardProps => "releaseDate" in props;

function SessionCard(props: SessionCardProps | UpcomingSessionCardProps) {
  let dateBadge: ReactNode;

  if(isUpcomingSession(props)) {
    dateBadge = <span className="text-dark-green bg-light-green rounded-md py-1 px-2 text-sm font-semibold">Upcoming on: {props.releaseDate}</span>
  }

  const {image = "", title, summary, tags = [], actionBtn = null} = props

  return (
    <div className="bg-white pb-4 rounded-md overflow-hidden shadow-sm">
      {image ? (
        <img className="w-full h-32 object-cover shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" src={image} alt="" />
      ) : (
        <div>Placeholder</div>
      )}
      <div className="w-full px-4">
        <Title className="font-bold text-center text-lg mt-2 text-dark-charcoal" level="h4">
          {title}
        </Title>
        <p className="text-center text-base mt-1 text-dark-charcoal">{summary}</p>
        <div className="mt-10 flex justify-end items-center">
          {tags.length > 0 && (
            <div className="flex justify-start items-center gap-1 flex-wrap flex-grow">
              {[...tags].splice(0, 3).map((tag, index) => (
                <Tag key={`${tag}-${index}`}>{tag}</Tag>
              ))}
            </div>
          )}
          {dateBadge}
          {actionBtn}
        </div>
      </div>
    </div>
  );
}

export default SessionCard;
