import React from "react";
import Button from "@/src/ui/Button";
import Lottie from "lottie-react";
import Hero from "../../public/animations/hero.json";
import { useRef } from "react";

function ProjectsSection() {
  const heroLottieref: any = useRef(null);
  return (
    <section
      id="work"
      className="bg-neutral-700"
    >
      <div className="flex items-center justify-between container min-h-screen pt-[var(--header-ht-desktop)]">
        <div aria-label="Hemant, Frontend Developer, India">
          <h1 className="text-5xl text-white font-bold">Hi, I&apos;m Hemant</h1>
          <h3 className="text-success-500 font-bold text-2xl">
            FRONT-END DEVELOPER
          </h3>
          <p className="text-lg text-white mt-5">
            I write code that brings life to products, <br />
            while ensuring performance and scalability.
          </p>
          <Button
            variant="primary"
            size="large"
            text="Work Together"
            className="mt-5 "
          />
        </div>
        <div
          style={{ transform: "rotateY(-0.5turn)" }}
          className="cursor-pointer"
          onMouseEnter={() => {
            if (heroLottieref.current) {
              heroLottieref.current.stop();
              heroLottieref.current.play();
            }
          }}
        >
          <Lottie
            lottieRef={heroLottieref}
            animationData={Hero}
            loop={false}
            aria-labelledby="Hemant Making UI!"
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
