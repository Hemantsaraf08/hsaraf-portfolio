import React from "react";
import Lottie from "lottie-react";
import Hero from "../../public/animations/reactjs.json";
import { useRef } from "react";
import SectionContainer from "../ui/SectionContainer";
import Label from "../ui/Label";
import { Typography } from "../ui/Typography";
import Chip from "../ui/Chip";

function ExperienceSection() {
  const heroLottieref: any = useRef(null);
  return (
    <SectionContainer id="work" bgColor="bg-neutral-800">
      <div className="w-[40%]">
        <Lottie
          lottieRef={heroLottieref}
          animationData={Hero}
          loop={true}
          aria-labelledby="Tech stack MERN react nextjs native"
        />
      </div>
      <div className="w-[60%] h-[calc(100vh-var(--header-ht-desktop))] py-4 overflow-auto relative">
        <div className="absolute top-4 right-4">
          <Label text="Experience" />
        </div>
        <div className="py-4 flex flex-col gap-8 pr-2">
          <div
            className="flex flex-col gap-4"
            aria-label="Senior Software Engineer Experience"
          >
            <Typography
              variant="paragraph-small"
              as={"p"}
              className="text-neutral-200"
            >
              FEB 2023 - PRESENT
            </Typography>
            <Typography variant="h5" className="text-white">
              Senior Programmer (Frontend), Biz4Solutions Pvt Ltd
            </Typography>
            <ul>
              <li>
                <Typography variant="paragraph" className="text-neutral-200">
                  <b className="font-medium">Frontend Lead</b> of POD in{" "}
                  <b className="font-medium">HDFC mobile banking app.</b>
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph" className="text-neutral-200">
                  <b className="font-medium">Collaborated</b> closely with
                  Product Design, Backend, and Testing teams for effective
                  information gathering, API development, modifications, and bug
                  fixes.
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph" className="text-neutral-200">
                  Built{" "}
                  <b className="font-medium">Reusable component library</b> for
                  web which led to faster product development and improved
                  consistency.
                </Typography>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <Chip text="React Native" />
              <Chip text="NextJS" />
              <Chip text="Jest" />
              <Chip text="Tailwind CSS" />
              <Chip text="Javascript" />
              <Chip text="Typescript" />
              <Chip text="React Testing Library" />
            </div>
          </div>
          <div
            className="flex flex-col gap-4"
            aria-label="Software Engineer Experience"
          >
            <Typography
              variant="paragraph-small"
              as={"p"}
              className="text-neutral-200"
            >
              OCT 2021 - JAN 2023
            </Typography>
            <Typography variant="h5" className="text-white">
              Frontend Developer, Ekahal (Advensure.io)
            </Typography>
            <ul>
              <li>
                <Typography variant="paragraph" className="text-neutral-200">
                  Demonstrated{" "}
                  <b className="font-medium">end-to-end project ownership</b> by
                  independently developing the UI and functionality of four
                  projects assigned.
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph" className="text-neutral-200">
                  <b className="font-medium">Improved performance</b> of
                  existing apps <b className="font-medium">by 40%</b> through code splitting, and lazy loading
                  techniques which lead to <b className="font-medium">client satisfaction</b> as it reduced FCP
                  time by 5 sec .
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph" className="text-neutral-200">
                Building responsive apps using react and vanilla JS.
                </Typography>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <Chip text="ReactJS" />
              <Chip text="Redux" />
              <Chip text="Javascript" />
              <Chip text="NextJS" />
              <Chip text="Express" />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default ExperienceSection;
