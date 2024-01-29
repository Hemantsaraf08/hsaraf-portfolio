import React, { useState } from "react";
import SectionContainer from "../ui/SectionContainer";
import FloatingInput from "../ui/FloatingInput";
import FloatingTextArea from "../ui/FloatingTextArea";
import Button from "../ui/Button";
import { Spinner } from "../ui/Spinner";

function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [formSubmitted, setformSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!process.env.NEXT_PUBLIC_FORM_SUBMIT_URL) return;
    setIsFormSubmitting(true);
    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    fetch(process.env.NEXT_PUBLIC_FORM_SUBMIT_URL, {
      method: "POST",
      body: formData,
    }).then((res: any)=>{
      console.log(res?.data);
      setformSubmitted(true);
    }).catch((err: any)=>{
      console.log(err?.message);
    }).finally(()=>{
      setIsFormSubmitting(false);
    })
  };

  return (
    <>
      <SectionContainer
        id="say-hello"
        bgColor="bg-neutral-800"
        className="flex-col items-stretch justify-between"
      >
        <div className="flex items-center justify-between mt-4">
          <div className="max-w-[50%] mr-10">
            <h3 className="text-white text-[52px] font-bold leading-[72px]">
              Say hello and let&apos;s <br /> work together !
            </h3>
            <ul className="ml-1 mt-16 flex items-center">
              <li className="mr-5 text-xs">
                <a
                  href="https://www.linkedin.com/in/hsaraf/"
                  target="_blank"
                  className="block hover:text-white text-neutral-200"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                  </svg>
                </a>
              </li>
              <li className="mr-5 text-xs">
                <a
                  href="https://github.com/Hemantsaraf08"
                  target="_blank"
                  className="block hover:text-white text-neutral-200"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </li>
              <li className="mr-5 text-xs">
                <a
                  href="mailto:hemantsaraf08@gmail.com"
                  target="_blank"
                  className="block hover:text-white text-neutral-200"
                >
                  <span className="sr-only">Email</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 2H2C1 2 0 3 0 4v16c0 1 1 2 2 2h20c1 0 2-1 2-2V4c0-1-1-2-2-2zM2 6l10 7 10-7" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="w-[50%]">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <FloatingInput
                id="name"
                placeholder="Your Name*"
                name="name"
                value={name}
                onChange={(e) => {
                  let val = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                  setName(val);
                }}
                type="text"
                required
              />
              <FloatingInput
                id="email"
                placeholder="Your Email*"
                name="email"
                value={email}
                type="email"
                onChange={(e) => {
                  let val = e.target.value;
                  val = val.trim();
                  setEmail(val);
                }}
                required
              />
              <FloatingTextArea
                cols={12}
                rows={6}
                placeholder="Your Message*"
                name="message"
                onChange={(e) => {
                  let val = e.target.value.replace(
                    /[^a-zA-Z,;:.'@!0-9\s]/g,
                    ""
                  );
                  setMessage(val);
                }}
                value={message}
                required
              />
              <Button
                size="large"
                text={
                  isFormSubmitting
                    ? "Sending Message..."
                    : formSubmitted
                    ? "Sent, Thanks!"
                    : "Send Message"
                }
                variant="primary"
                type="submit"
                className={`justify-center ${
                  !isFormSubmitting && !formSubmitted ? "hover:animate-none animate-pulse" : ""
                }`}
                icon={isFormSubmitting ? <Spinner /> : undefined}
                disabled={isFormSubmitting || formSubmitted}
                position="left"
              />
            </form>
          </div>
        </div>
        <p className="text-xs text-center mb-[-40px] text-neutral-200 leading-normal ">
          Made with ❤️ by Hemant
        </p>
      </SectionContainer>
    </>
  );
}

export default ContactSection;
