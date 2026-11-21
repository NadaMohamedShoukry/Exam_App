import { Code, Folder } from "lucide-react";
import { PLATFORM_OBJECTIVES } from "../lib/constants/PlatformObjective.constant";
import PlatformObjectivesCard from "../components/PlatformObjectivesCard";

function AuthVisuals() {
  return (
    <section className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center py-29 px-29 bg-blue-50/75 backdrop-blur-[200px] bg-[radial-gradient(circle_50vh_at_100%_28%,rgba(191,219,254,0.85),transparent_100%),radial-gradient(circle_at_bottom_left,rgba(191,219,254,0.7),transparent_50%)]">
      <div className="flex flex-col items-start justify-center gap-12.5">
        {/* Header Logo */}
        <div className="relative flex items-center text-xl text-blue-600 font-semibold gap-2.5">
          {/* Filled folder base */}
          <Folder className="w-8 h-8  fill-blue-600" />

          {/* White <> symbol centered inside */}
          <Code
            className="w-4 h-4 text-white absolute top-1/2 left-1/8 -translate-x-1/2 -translate-y-1/3"
            strokeWidth={2.5}
          />
          <p>Exam App</p>
        </div>

        <div className="flex flex-col gap-15">
          {/* Welcome sentance */}
          <h1 className="font-bold text-3xl">
            Empower your learning journey with our smart exam platform.
          </h1>

          {/* Platform objectives */}

          {PLATFORM_OBJECTIVES.map((objective) => (
            <PlatformObjectivesCard
              key={objective.title}
              title={objective.title}
              description={objective.description}
              icon={objective.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AuthVisuals;
