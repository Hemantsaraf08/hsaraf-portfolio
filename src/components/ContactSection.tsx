import React from "react";
import SectionContainer from "../ui/SectionContainer";
import FloatingInput from "../ui/FloatingInput";
import FloatingTextArea from "../ui/FloatingTextArea";
import Button from "../ui/Button";

function ContactSection() {
  return (
    <SectionContainer id="say-hello" bgColor="bg-neutral-700">
      <div className="max-w-[50%] mr-12">
        <h3 className="text-white text-[52px] font-bold leading-[72px]">
          Say hello and 
          let&apos;s <br/> work together !
        </h3>
      </div>
      <div className="max-w-[50%]">
        <form className="flex flex-col gap-6">
          <FloatingInput id="email" placeholder="Email" value="afsd@a.com" type="email" />
          <FloatingTextArea
            cols={12}
            rows={6}
            placeholder="Your Message"
            onChange={() => console.log("adsf")}
          />
          <Button size="large" text="Submit" variant="primary" type="submit" />
        </form>
      </div>
    </SectionContainer>
  );
}

export default ContactSection;
