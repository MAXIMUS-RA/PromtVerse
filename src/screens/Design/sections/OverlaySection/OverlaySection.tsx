import React from "react";
import { Button } from "../../../../components/ui/button";
import { useGSAP } from "../../../../hooks/useGSAP";

export const OverlaySection = (): JSX.Element => {
  const containerRef = useGSAP();
  
  const navigationItems = ["About", "Technologies", "Products", "Discover"];
  const rightNavigationItems = ["Team", "Pricing", "Buy Premium"];

  return (
    <section className="relative w-full overflow-hidden" ref={containerRef}>
      <div className="relative min-h-screen w-full">
        <img
          className="absolute w-full h-full object-cover top-0 left-0"
          alt="Vector"
          src="/vector.svg"
        />

        <img
          className="floating-star absolute w-3.5 h-3.5 top-[20%] left-[18%] z-10"
          alt="Star"
          src="/streamline-star-2-solid.svg"
        />
        <img
          className="floating-star absolute w-[21px] h-[21px] top-[70%] left-[7%] z-10"
          alt="Star"
          src="/streamline-star-2-solid.svg"
        />
        <img
          className="floating-star absolute w-14 h-6 top-[95%] left-[35%] z-10"
          alt="Star"
          src="/streamline-star-2-solid.svg"
        />
        <img
          className="floating-star absolute w-7 h-7 top-[20%] right-[30%] z-10"
          alt="Star"
          src="/streamline-star-2-solid.svg"
        />
        <img
          className="floating-star absolute w-7 h-7 top-[40%] right-[5%] z-10 hidden lg:block"
          alt="Star"
          src="/streamline-star-2-solid.svg"
        />
        <img
          className="floating-star absolute w-3.5 h-3.5 top-[18%] right-[25%] z-10"
          alt="Star"
          src="/streamline-star-2-solid.svg"
        />
        <img
          className="floating-star absolute w-3.5 h-3.5 top-[80%] right-[15%] z-10"
          alt="Star"
          src="/streamline-star-2-solid.svg"
        />
        <img
          className="floating-star absolute w-4 h-4 top-[12%] left-[6%] z-10"
          alt="Star"
          src="/streamline-star-2-solid-2.svg"
        />

        <header className="fixed top-0 left-0 right-0 z-50 py-4 border-b border-[#ffffff33] bg-[#05050580] backdrop-blur-[20px] backdrop-brightness-[100%]">
          <div className="flex items-center justify-between px-4 md:px-8 lg:px-16 xl:px-24 py-4 max-w-[1920px] mx-auto">
            <nav className="hidden lg:flex items-center gap-6">
              {navigationItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="nav-item text-white text-sm font-normal font-['Poppins'] hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  {item}
                </Button>
              ))}
            </nav>

            <Button
              variant="ghost"
              className="lg:hidden text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>

            <div className="logo flex items-center justify-center gap-[15px] lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
              <img
                className="w-[30.75px] h-[30.75px]"
                alt="Vector"
                src="/vector-1.svg"
              />
              <div className="relative">
                <span className="font-medium text-white text-[18px] md:text-[22px] font-['Manrope']">
                  Promptverse
                </span>
                <span className="font-normal text-[18px] md:text-[22px] text-white font-['Poppins']">
                  AI
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-6">
              <div className="hidden md:flex items-center gap-6">
                {rightNavigationItems.map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="nav-item text-white text-sm font-normal font-['Poppins'] hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    {item}
                  </Button>
                ))}
              </div>
              <Button className="nav-item bg-white text-black rounded-[55px] px-4 md:px-[34px] py-2 md:py-3.5 font-['Poppins'] font-medium text-sm md:text-base hover:scale-105 transition-all duration-300 hover:shadow-lg">
                Get Started
              </Button>
            </div>
          </div>
        </header>

        <div className="flex flex-col items-center gap-8 md:gap-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[878px] px-4 md:px-8">
          <div className="flex flex-col items-center gap-4 md:gap-7 w-full">
            <div className="flex flex-col items-center gap-2">
              <h3 className="hero-subtitle font-semibold tracking-[-0.40px] font-['Manrope'] text-white text-[18px] md:text-[22px] text-center">
                Promptverse AI
              </h3>
              <h1 className="hero-title font-['Manrope'] font-medium text-white text-[32px] md:text-[48px] lg:text-[64px] text-center tracking-[-0.64px] leading-[1.2] md:leading-[74px]">
                Find Inspiration.
                <br />
                Create, Generate, Produce & Automate.
              </h1>
            </div>
            <p className="hero-description font-['Manrope'] font-normal text-[#ffffff99] text-sm md:text-base text-center tracking-[-0.29px] leading-6 md:leading-7 max-w-[735px]">
              Welcome to PromptVerse. Effortlessly create content, explore
              endless prompts, and stay ahead with real-time trends. Automate
              emails, social media, and more while our AI extracts knowledge
              from any document or URL. Experience a stunning, futuristic design
              that boosts productivity.
            </p>
          </div>

          <div className="hero-buttons flex flex-col sm:flex-row items-center gap-4 md:gap-7 w-full sm:w-auto">
            <Button
              className="w-full sm:w-auto border-[1.4px] border-white  rounded-[55px] px-6 md:px-[34px] py-3 md:py-3.5 flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span className="font-['Poppins'] font-medium text-white text-sm md:text-base">
                Start Generating
              </span>
              <img className="w-5 h-5 md:w-6 md:h-6" alt="Wand icon" src="/mdi-wand.svg" />
            </Button>
            <Button className="w-full sm:w-auto bg-white text-black rounded-[55px] px-6 md:px-[34px] py-3 md:py-3.5 font-['Poppins'] font-medium text-sm md:text-base hover:scale-105 transition-all duration-300 hover:shadow-lg">
              Download
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};