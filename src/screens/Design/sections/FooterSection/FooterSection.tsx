import React from "react";

export const FooterSection = (): JSX.Element => {
  const navigationLinks = {
    column1: [
      "Schedule",
      "Courses",
      "Pricing",
      "Payment",
      "Study In Spain",
      "Books",
    ],
    column2: ["About school", "Gallery", "News", "Contacts"],
  };

  const contactInfo = {
    phones: ["+1 (406) 555-0120", "+1 (480) 555-0103"],
    email: "hello@promptverse.com",
    location: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
  };

  const socialIcons = [
    { src: "/item-6.svg", alt: "Item" },
    { src: "/item-1.svg", alt: "Item" },
    { src: "/item-2.svg", alt: "Item" },
    { src: "/item-5.svg", alt: "Item" },
  ];

  const chatIcons = [
    { src: "/item.svg", alt: "Item" },
    { src: "/item-4.svg", alt: "Item" },
    { src: "/item-3.svg", alt: "Item" },
  ];

  const languages = ["En", "Es"];

  return (
    <footer className="animate-section w-full bg-black border-t border-[#ffffff33] px-4 md:px-8 lg:px-16 py-8 md:py-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="flex flex-col gap-8 lg:w-[528px]">
            <div className="flex flex-col gap-6">
              <div className="opacity-40 font-['Poppins',Helvetica] font-normal text-white text-xs leading-[18px]">
                Navigation
              </div>

              <div className="flex flex-col sm:flex-row gap-8 sm:gap-24">
                <div className="flex flex-col gap-1.5">
                  {navigationLinks.column1.map((link, index) => (
                    <div
                      key={`nav-1-${index}`}
                      className="font-['Poppins',Helvetica] font-normal text-white text-sm leading-[19.6px] hover:text-white/80 transition-colors duration-300 cursor-pointer"
                    >
                      {link}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-1.5">
                  {navigationLinks.column2.map((link, index) => (
                    <div
                      key={`nav-2-${index}`}
                      className="font-['Poppins',Helvetica] font-normal text-white text-sm leading-[19.6px] hover:text-white/80 transition-colors duration-300 cursor-pointer"
                    >
                      {link}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[5px] lg:mt-auto">
              <div className="opacity-40 font-['Poppins',Helvetica] font-normal text-white text-xs leading-[15.6px]">
                Copyright
              </div>
              <div className="opacity-40 font-['Poppins',Helvetica] font-normal text-white text-xs leading-[15.6px]">
                Privacy
              </div>
              <div className="opacity-40 font-['Poppins',Helvetica] font-normal text-white text-xs leading-[15.6px]">
                All rights reserved
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:gap-16 flex-1">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
              <div className="flex flex-col gap-6">
                <div className="opacity-40 font-['Poppins',Helvetica] font-normal text-white text-xs leading-[18px]">
                  Contact us
                </div>

                <div className="flex flex-col sm:flex-row gap-6 sm:gap-16">
                  <div className="flex flex-col gap-[5px]">
                    {contactInfo.phones.map((phone, index) => (
                      <div
                        key={`phone-${index}`}
                        className="opacity-80 font-['Poppins',Helvetica] font-normal text-white text-sm leading-[19.6px] hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                      >
                        {phone}
                      </div>
                    ))}
                  </div>

                  <div className="opacity-80 font-['Poppins',Helvetica] font-normal text-white text-sm leading-[19.6px] hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                    {contactInfo.email}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
              <div className="flex flex-col gap-6">
                <div className="opacity-40 font-['Poppins',Helvetica] font-normal text-white text-xs leading-[18px]">
                  Follow us
                </div>

                <div className="flex gap-2.5">
                  {socialIcons.map((icon, index) => (
                    <img
                      key={`social-${index}`}
                      className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] hover:scale-110 transition-transform duration-300 cursor-pointer"
                      alt={icon.alt}
                      src={icon.src}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="opacity-40 font-['Poppins',Helvetica] font-normal text-white text-xs leading-[18px]">
                  Let&apos;s chat
                </div>

                <div className="flex gap-2.5">
                  {chatIcons.map((icon, index) => (
                    <img
                      key={`chat-${index}`}
                      className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] hover:scale-110 transition-transform duration-300 cursor-pointer"
                      alt={icon.alt}
                      src={icon.src}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="opacity-40 font-['Inter',Helvetica] font-normal text-white text-xs leading-[18px]">
                Location
              </div>

              <div className="opacity-80 font-['Poppins',Helvetica] font-normal text-white text-sm leading-[19.6px] max-w-[300px]">
                {contactInfo.location}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 lg:mt-16 pt-8 border-t border-[#ffffff33]">
          <div className="opacity-40 font-['Poppins',Helvetica] font-normal text-white text-xs leading-[18px] text-center sm:text-left">
            © 2024 — Promptverse AI
          </div>

          <div className="flex gap-8">
            {languages.map((lang, index) => (
              <div
                key={`lang-${index}`}
                className="opacity-40 font-['Poppins',Helvetica] font-medium text-white text-xs leading-[18px] hover:opacity-80 transition-opacity duration-300 cursor-pointer"
              >
                {lang}
              </div>
            ))}
          </div>
        </div>

        <img
          className="hidden xl:block absolute w-[992px] h-[992px] top-[-1300px] left-[-410px] opacity-20 pointer-events-none"
          alt="Vector"
          src="/vector-2.svg"
        />
      </div>
    </footer>
  );
};