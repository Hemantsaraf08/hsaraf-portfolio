import Layout from "@/src/components/Layout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import Button from "@/src/ui/Button";

const Home: NextPageWithLayout = () => {
  return (
    <section id="home" className="bg-neutral-700 h-[calc(100vh-var(--header-ht-desktop))]">
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
          <Button variant="primary" size="large" text="Work Together" className="mt-5 "/>
        </div>
        <div></div>
      </div>
    </section>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
