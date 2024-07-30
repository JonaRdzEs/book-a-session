import Title from "./common/Title";
import type { ElementType, ReactNode } from "react";

type EmptyComponentProps = {
  title: string,
  description?: string,
  icon: ElementType,
  actionButton?: ReactNode,
}

function EmptyContent({ title, description, icon, actionButton = null }: EmptyComponentProps) {
  const Icon = icon;
  return (
    <div className="w-full min-h-[75vh] flex justify-center items-center flex-col gap-6">
      <Icon width="80px" height="80px" color="#3A4E75" />
      <Title level="h2" className="font-bold text-center text-2xl text-[#333333]">
        {title}
      </Title>
      <p className="text-center text-lg">
        {description}
      </p>
      {actionButton}
    </div>
  );
}

export default EmptyContent;
