import { ArrowUpIcon } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection = (): JSX.Element => {
  const promptData = {
    text: "Write a attractive hero title for the following website",
    url: "https://zeltalabs.com/",
  };

  const createPromptRow = (rowIndex: number) => {
    return Array(8)
      .fill(promptData)
      .map((prompt, index) => (
        <Card key={index} className="feature-card bg-[#0d0d0d] rounded overflow-hidden hover:bg-[#1a1a1a] transition-all duration-300 hover:scale-105 min-w-[300px] md:min-w-[400px] flex-shrink-0">
          <CardContent className="flex items-start justify-between gap-2.5 p-4 md:p-[27px]">
            <div className="[font-family:'Poppins',Helvetica] font-normal text-lg md:text-xl tracking-[0] leading-normal flex-1">
              <span className="text-white">{prompt.text} </span>
              <span className="text-[#1d72f2]">{prompt.url}</span>
            </div>
            <ArrowUpIcon className="w-6 h-6 md:w-[31px] md:h-[31px] text-white flex-shrink-0" />
          </CardContent>
        </Card>
      ));
  };

  return (
    <section className="animate-section flex flex-col items-center gap-[60px] md:gap-[124px] w-full px-4 md:px-8">
      <div className="flex flex-col w-full max-w-[833px] items-center gap-4 md:gap-7">
        <h2 className="[font-family:'Manrope',Helvetica] font-medium text-white text-3xl md:text-4xl lg:text-5xl text-center tracking-[-0.48px] leading-[1.2] md:leading-[56px]">
          Create more with Promptverse
        </h2>

        <p className="[font-family:'Poppins',Helvetica] font-normal text-[#ffffff99] text-sm md:text-base text-center tracking-[-0.29px] leading-[1.6] md:leading-[28.8px]">
          Discover endless creativity with PromptVerse. Generate diverse content
          effortlessly using prompts. Stay updated with real-time trends,
          automate tasks, and extract insights from any document or URL. All
          within a sleek, futuristic design. Create more, effortlessly.
        </p>
      </div>

      <div className="w-full overflow-hidden">
        <div className="flex flex-col gap-4 md:gap-7">
          <div className="prompt-row flex items-start gap-4 md:gap-[30px] overflow-x-auto pb-2 scrollbar-hide">
            {createPromptRow(0)}
          </div>

          <div className="prompt-row flex items-start gap-4 md:gap-[30px] overflow-x-auto pb-2 scrollbar-hide">
            {createPromptRow(1)}
          </div>

          <div className="prompt-row flex items-start gap-4 md:gap-[30px] overflow-x-auto pb-2 scrollbar-hide">
            {createPromptRow(2)}
          </div>
        </div>
      </div>
    </section>
  );
};