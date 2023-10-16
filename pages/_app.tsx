import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { ReactElement, ReactNode } from "react";
import Head from "next/head";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <title>Hemant Saraf - Frontend Web Developer, India | Portfolio</title>
        <meta
          name="description"
          content="Experienced Frontend Developer, specializing in React & JS. Explore my portfolio to learn more about my work and connect with me. 🚀 - Hemant Saraf."
        />
      </Head>

      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
