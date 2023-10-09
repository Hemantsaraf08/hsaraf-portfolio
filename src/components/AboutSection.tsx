import React from "react";
import Button from "@/src/ui/Button";
import Lottie from "lottie-react";
import About from "../../public/animations/about.json";
import { useRef } from "react";
import HandSvg from "../../public/images/hand-waving.svg";
import SectionContainer from "../ui/SectionContainer";

function AboutSection() {
  const abtLottieref: any = useRef(null);
  return (
    <SectionContainer id="about" bgColor="bg-neutral-800">
      <div className="max-w-[50%]">
        <Lottie
          lottieRef={abtLottieref}
          animationData={About}
          loop={true}
          aria-labelledby="Hemant Saraf JS Developer Skills/Tools!"
          onSegmentStart={(e) => {
            console.log(e, "afsdfasdf");
          }}
        />
      </div>
      <div
        className="max-w-[50%] mt-5 mb-5"
        aria-label="About Hemant Saraf, Frontend Web Developer, India"
      >
        <div className=" h-10 w-10 animate-wave mb-4">
          <HandSvg />
        </div>
        <h3 className="text-3xl flex items-center gap-3 text-white">
          Hi There! I&apos;m a front-end <br /> web developer from India
        </h3>
        <p className="text-lg text-white mt-5">
          Being adaptive and curious, I learned Web
          <br />
          Development on my own and demonstrated <br /> my skills in building
          client-facing applications
          <br />
          from scratch.
        </p>
        <p className="text-lg text-white mt-5">
          I want to evolve everyday as a developer
          <br />
          working with inspiring people on challenging
          <br /> projects.
        </p>
        <p className="text-lg text-white mt-5">
          Other than coding, I&apos;m interested in music,
          <br />
          podcasts and gaming.
        </p>
        <Button
          variant="primary"
          size="small"
          text="Resume"
          className="mt-5 "
        />
      </div>
    </SectionContainer>
  );
}

export default AboutSection;
