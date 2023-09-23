import Layout from "@/src/components/Layout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import Button from "@/src/ui/Button";
import Lottie from "lottie-react";
import Hero from "../public/animations/hero.json";
import { useRef, useEffect } from "react";

const Home: NextPageWithLayout = () => {
  const heroLottieref: any = useRef(null);
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <section
      id="home"
      className="bg-neutral-700 h-[calc(100vh-var(--header-ht-desktop))]"
    >
      <div className="flex items-center justify-between container h-full">
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
            aria-labelledby="Hemant Coding UI!"
          />
        </div>
      </div>
    </section>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
