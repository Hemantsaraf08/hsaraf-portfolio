import React from "react";
import Layout from "@/src/components/Layout";
import { ReactElement } from "react";
import SectionContainer from "@/src/ui/SectionContainer";

function BlogList() {
  return (
    <SectionContainer bgColor="bg-neutral-700" className="items-start justify-center">
      <div>index</div>
      <div>index</div>
    </SectionContainer>
  );
}

BlogList.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default BlogList;
