import Layout from "@/src/components/Layout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import dynamic from "next/dynamic";
import HeroSection from "@/src/components/HeroSection";

const AboutSection = dynamic(() => import("@/src/components/AboutSection"));
const ExperienceSection = dynamic(
  () => import("@/src/components/ExperienceSection")
);

//trial commit

const ContactSection = dynamic(()=>import("@/src/components/ContactSection"));
const ProjectsSection = dynamic(()=>import("@/src/components/ProjectsSection"));

const Home: NextPageWithLayout = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection/>
      <ContactSection/>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
