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

function SessionCard({
  image = "",
  title,
  summary,
  tags = [],
  actionBtn = null,
}: SessionCardProps) {
  return (
    <div className="bg-white pb-4 rounded-md overflow-hidden">
      {image ? (
        <img className="w-full h-24 object-cover" src={image} alt="" />
      ) : (
        <div>Placeholder</div>
      )}
      <div className="w-full px-4">
        <Title className="font-bold text-center text-lg mt-2" level="h4">
          {title}
        </Title>
        <p className="text-center text-base mt-1 ">{summary}</p>
        <div className="mt-10 flex justify-end items-center">
          {tags.length > 0 && (
            <div className="flex justify-start items-center gap-1 flex-wrap flex-grow">
              {[...tags].splice(0, 3).map((tag, index) => (
                <Tag key={`${tag}-${index}`}>{tag}</Tag>
              ))}
            </div>
          )}
          {actionBtn}
        </div>
      </div>
    </div>
  );
}

export default SessionCard;
