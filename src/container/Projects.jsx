import React from "react";
import GlassCard from "../component/GlassCard";
import GradientText from "../component/GradientText";
import { ProjectsDataAPI } from "../hooks/ProjectsDataAPI";

const Projects = () => {
  const { DataExport } = ProjectsDataAPI();

  const reversedDataExport = [...DataExport].reverse();

  return (
    <div
      id="projects"
      className="min-h-screen flex justify-center items-center pt-96 pb-24"
    >
      <div className="xl:w-[45vw] w-[70vw]">
        <GradientText className="text-center" text="Projects" />
        <div className="flex flex-wrap justify-center mt-16 gap-8">
          {reversedDataExport.map((item) => {
            return (
              <GlassCard
                key={item.id}
                id={item.id}
                title={item.projectName}
                description={item.projectDesc}
                image={item.projectImage}
                link={item.projectLink}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
