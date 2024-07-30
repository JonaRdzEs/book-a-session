import type { ReactNode } from "react";

type InfoProps = {
  icon: ReactNode;
  title: string;
  desc: string;
};

function Info({ icon, title, desc }: InfoProps) {
  return (
    <div className="flex justify-center items-center flex-col gap-3">
      {icon}
      <h4 className="text-center text-xl font-extrabold text-dark-charcoal">{title}</h4>
      <p className="text-center text-md font-medium text-dark-charcoal">{desc}</p>
    </div>
  );
}

export default Info;
