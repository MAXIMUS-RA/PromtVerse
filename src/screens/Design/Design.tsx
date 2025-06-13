import React from "react";
import { ContentSection } from "./sections/ContentSection";
import { FooterSection } from "./sections/FooterSection";
import { MainContentSection } from "./sections/MainContentSection";
import { OverlaySection } from "./sections/OverlaySection";

export const Design = (): JSX.Element => {
  return (
    <div className="bg-black flex flex-col w-full min-h-screen">
      <div className="bg-black w-full">
        <OverlaySection />
        <ContentSection />
        <MainContentSection />
        <FooterSection />
      </div>
    </div>
  );
};
