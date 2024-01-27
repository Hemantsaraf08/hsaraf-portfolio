import React from "react";
import { Typography } from "../ui/Typography";
import Image from "next/image";
import EyeSvg from "../../public/images/eye.svg";
import GithubSvg from "../../public/images/github.svg";

type Props = {
  imgAltText: string;
  src: any;
} & descProps;

interface descProps {
  projectLink: string;
  githubLink: string;
  projectName: string;
  shortDesc: string;
  longDesc: string;
}

function ProjectCard({
  imgAltText,
  src,
  githubLink,
  longDesc,
  projectLink,
  projectName,
  shortDesc,
}: Props) {
  return (
    <div
      aria-label="project card"
      className="w-[358px] h-[465px] border-neutral-600 border-8 rounded-lg bg-neutral-600 cursor-pointer"
    >
      <div className="w-[344px] h-[449px] rounded-lg bg-neutral-200 flex items-center justify-center relative">
        <div className="w-[320px] h-[425px] relative">
          <Image
            alt={imgAltText}
            src={src}
            fill
            style={{ objectFit: "cover" }}
            priority={false}
            sizes="(max-width: 900px) 100vw, 33vw"
          />
        </div>
        <DescriptionContainer
          githubLink={githubLink}
          longDesc={longDesc}
          projectLink={projectLink}
          projectName={projectName}
          shortDesc={shortDesc}
        />
      </div>
    </div>
  );
}

const DescriptionContainer = ({
  githubLink,
  longDesc,
  projectLink,
  projectName,
  shortDesc,
}: descProps) => {
  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-between group">
      <div className="h-1/2">
        <div className="flex md:opacity-100  lg:opacity-0 lg:group-hover:opacity-100 h-full items-center justify-center w-full transition-all ease-in-out delay-200">
          <a target="_blank" rel="noreferrer" href={projectLink}>
            <div className=" bg-[#00000079]  duration-300 flex font-bold h-12 items-center justify-center m-4 rounded-[50%] text-white transition-transform w-12 hover:scale-90">
              <EyeSvg className="w-1/2 h-1/2 text-white" />
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={githubLink}
          >
            <div className=" flex justify-center items-center w-12 h-12 rounded-[50%] bg-[#00000079] text-white m-4 font-bold transition-transform	 duration-300 hover:scale-90">
              <GithubSvg className="w-1/2 h-1/2 text-white" />
            </div>
          </a>
        </div>
      </div>
      <div className="h-1/2 bg-neutral-800/80 px-3 py-2 rounded-lg rounded-t-none flex flex-col justify-between">
        <div>
          <Typography
            className="text-white tracking-wider font-medium"
            variant="h4"
          >
            {projectName}
          </Typography>
          <Typography
            className="text-white tracking-widest uppercase"
            variant="small"
          >
            {shortDesc}
          </Typography>
        </div>
        <div>
          <Typography className="text-white" variant="paragraph">
            {longDesc}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
