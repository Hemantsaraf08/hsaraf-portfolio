import Link from "next/link";
import React from "react";
import Button from "../ui/Button";
import Lottie from "lottie-react";
import MenuIcon from "../../public/animations/menuV2.json";

function Navbar() {
  const menuLottieRef: any = React.useRef(null);
  let directionMenu = React.useRef(1);

  const handleMobileIconPress = () => {
    if (menuLottieRef.current) {
      menuLottieRef.current.setDirection(directionMenu.current);
      menuLottieRef.current.play();
      directionMenu.current = -directionMenu.current;
    }
  };
  return (
    <div className="bg-neutral-800 fixed top-0 left-0 right-0 z-10">
      <nav className="container flex items-center justify-between h-20">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h3 className="text-secondary-100 text-3xl">
              Hemant <span className="text-secondary-200">Saraf</span>
            </h3>
          </Link>
        </div>
        <button onClick={handleMobileIconPress} className="block lg:hidden">
          <Lottie
            lottieRef={menuLottieRef}
            animationData={MenuIcon}
            loop={false}
            autoplay={false}
            aria-label="mobile menu icon"
          />
        </button>
        <div className="lg:flex items-center gap-8 hidden">
          <NavLinks url="/#home" text="Home" />
          <NavLinks url="/#about" text="About Me" />
          <NavLinks url="/#work" text="Experience" />
          <NavLinks url="/#projects" text="Projects" />
          <NavLinks url="/blog" text="Blogs" />
          <Link href="/#say-hello">
            <Button variant="primary" size="small" text="Say Hello" />
          </Link>
        </div>
      </nav>
    </div>
  );
}

const NavLinks = ({ url, text }: { url: string; text: string }) => {
  return (
    <Link href={url} className="group">
      <span className="text-base text-neutral-200 group-hover:text-white transition-all duration-300 ease-out">
        {text}
      </span>
      <div className="mt-0.5 w-0 group-hover:w-full h-1 bg-secondary-500 rounded-3xl z-[-1] transition-all duration-300 ease-out"></div>
    </Link>
  );
};
export default Navbar;
