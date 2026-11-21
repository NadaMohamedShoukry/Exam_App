import { LucideIcon } from "lucide-react";

interface AuthLayoutTypes {
  title: string;
  description: string;
  icon: LucideIcon;
}
function PlatformObjectivesCard({
  title,
  description,
  icon: Icon,
}: AuthLayoutTypes) {
  return (
    <div className="flex items-start gap-5 ">
      <div className="flex items-center justify-center size-9 p-2.5 border-blue-600 border stroke-[1.5px] mt-1.5">
        <Icon className="size-6 shrink-0 text-blue-600" />
      </div>
      <div className="flex flex-col gap-2.5 ">
        <h2 className="text-xl font-semibold text-blue-600">{title}</h2>
        <p className="text-gray-700 font-normal text-[16px]">{description}</p>
      </div>
    </div>
  );
}

export default PlatformObjectivesCard;
