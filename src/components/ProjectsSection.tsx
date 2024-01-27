import React from "react";
import { useRef } from "react";
import SectionContainer from "../ui/SectionContainer";
import { Typography } from "../ui/Typography";
import ProjectCard from "../ui/ProjectCard";
import RollingStonesImg from "../../public/images/rollingstones-travellers-social-media.webp";
import CovidDashboardImg from "../../public/images/covid-dashboard-project.webp";
import PortfolioImg from "../../public/images/hemant-portfolio-img.webp";

function ProjectsSection() {
  const heroLottieref: any = useRef(null);
  return (
    <SectionContainer
      id="projects"
      bgColor="bg-neutral-800"
      className="flex-col justify-normal gap-10"
    >
      <div className="w-full flex flex-col gap-16 items-center overflow-hidden">
        <Typography variant="h1" className="text-white font-semibold">
          Apps I&apos;ve Built
        </Typography>
        <div
          className="flex justify-between w-full gap-16 mb-[-18px] overflow-x-scroll box-content"
          aria-label="projects cards container"
        >
          <ProjectCard
            githubLink="https://github.com/Hemantsaraf08/rollingstones"
            imgAltText="rolling stone, a social media for travellers, portfolio project"
            longDesc="A full featured social media app for travellers to connect with
            other travellers and share their travel memories through short
            videos, while maintaining post privacy."
            projectLink="https://rollingstone-s.web.app/"
            projectName="RollingStones"
            shortDesc="a social media app for travellers"
            src={RollingStonesImg}
          />
          <ProjectCard
            githubLink="https://github.com/Hemantsaraf08/reactLandingDashboard"
            projectLink="https://hemantsaraf08.github.io/reactLandingDashboard"
            imgAltText="covid dashboard with landing page,demo portfolio project"
            projectName="COVID Dashboard"
            shortDesc="data visualisation for covid"
            src={CovidDashboardImg}
            longDesc="This app uses covid public api to get state wise vaccination data and represents the data using charts for quick visualisation and interpretation."
          />
          <ProjectCard
            githubLink="https://github.com/Hemantsaraf08/hsaraf-portfolio"
            projectLink="https://hsaraf.com/"
            imgAltText="Hemant Saraf Portfolio with blogs"
            longDesc="Explore my portfolio to know more about my work and connect with me. 🚀 Check out the blogs section where I write on various front-end related subjects."
            projectName="Portfolio "
            shortDesc="personal portfolio with blog"
            src={PortfolioImg}
          />
        </div>
      </div>
    </SectionContainer>
  );
}

export default ProjectsSection;
