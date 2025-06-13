import { PlayIcon, WandIcon } from "lucide-react";
import { AspectRatio } from "../../../../components/ui/aspect-ratio";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Data for feature cards
const featureCards = [
  {
    title: "Write mails and replies",
    description:
      "We are visionaries We will tell you everything you need about the market at the moment, but also predict how the cost of housing and your area will change in a few years",
  },
  {
    title: "Read pdf and attachments",
    description:
      'We do not want to sell you any specific object, our goal is to find the "right" apartment for you and remain partners for many years.',
  },
  {
    title: "Scans Images",
    description:
      "We provide a full range of services for the purchase and sale of real estate, from searching for an object and ending with paperwork.",
  },
  {
    title: "Write codes & programs",
    description:
      "The housing should make your life better. Therefore, when selecting real estate, we carefully learn your request and find only what is ideal.",
  },
  {
    title: "Research",
    description:
      "We have more than 130 objects in our portfolio, but for you we will make an individual selection with only suitable options.",
  },
  {
    title: "Automation",
    description:
      "Whether it's the legal execution of a transaction, interior design or the technical details of a building, our brokers will tell you everything.",
  },
];

// Data for audio feature tags
const audioFeatureTags = [
  "Train voice models",
  "Text-to-speech",
  "AI voice generation",
  "AI music production",
  "AI Composition",
];

export const ContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-[120px] md:gap-[244px] w-full py-8 md:py-16 px-4 md:px-8">
      {/* Trending Prompts Section */}
      <div className="animate-section flex flex-col items-center gap-[60px] md:gap-[124px] w-full">
        <div className="flex flex-col w-full max-w-[833px] items-center gap-4 md:gap-7">
          <h2 className="w-full [font-family:'Manrope',Helvetica] font-medium text-white text-3xl md:text-4xl lg:text-5xl text-center tracking-[-0.48px] leading-[1.2] md:leading-[56px]">
            See Trending Prompts
          </h2>

          <p className="w-full [font-family:'Poppins',Helvetica] font-normal text-[#ffffff99] text-sm md:text-base text-center tracking-[-0.29px] leading-[1.6] md:leading-[28.8px]">
            Discover endless creativity with PromptVerse. Generate diverse
            content effortlessly using prompts. Stay updated with real-time
            trends, automate tasks, and extract insights from any document or
            URL. All within a sleek, futuristic design. Create more,
            effortlessly.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-7 w-full sm:w-auto">
            <Button className="w-full sm:w-auto gap-2 border-[1.4px] border-solid border-white px-6 md:px-[34px] py-3 md:py-3.5 rounded-[55px] hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-sm md:text-base">
                Start Generating
              </span>
              <WandIcon className="w-5 h-5 md:w-6 md:h-6" />
            </Button>

            <Button className="w-full sm:w-auto bg-white text-black px-6 md:px-[34px] py-3 md:py-3.5 rounded-[55px] hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <span className="[font-family:'Poppins',Helvetica] font-medium text-black text-sm md:text-base">
                Download
              </span>
            </Button>
          </div>
        </div>

        <div className="w-full max-w-[1309px]">
          <AspectRatio ratio={16 / 9} className="md:ratio-[1308/930]">
            <img
              className="w-full h-full object-cover rounded-lg"
              alt="Clip path group"
              src="/clip-path-group.png"
            />
          </AspectRatio>
        </div>
      </div>

      {/* Images Section */}
      <div className="animate-section flex flex-col items-center gap-[60px] md:gap-[124px] w-full">
        <div className="flex flex-col w-full max-w-[833px] items-center gap-4 md:gap-7">
          <h2 className="w-full [font-family:'Manrope',Helvetica] font-medium text-white text-3xl md:text-4xl lg:text-5xl text-center tracking-[-0.48px] leading-[1.2] md:leading-[56px]">
            Images like never seen before
          </h2>

          <p className="w-full [font-family:'Poppins',Helvetica] font-normal text-[#ffffff99] text-sm md:text-base text-center tracking-[-0.29px] leading-[1.6] md:leading-[28.8px]">
            Discover endless creativity with PromptVerse. Generate diverse
            content effortlessly using prompts. Stay updated with real-time
            trends, automate tasks, and extract insights from any document or
            URL. All within a sleek, futuristic design. Create more,
            effortlessly.
          </p>
        </div>

        <Card className="feature-card w-full max-w-[1308.78px] bg-[#0d0d0d] rounded-[7.27px] p-4 md:p-[43.63px] hover:bg-[#1a1a1a] transition-all duration-300">
          <CardContent className="p-0">
            <div className="flex flex-col w-full">
              <div className="flex flex-col lg:flex-row gap-4 md:gap-[18.18px] w-full">
                <div className="w-full lg:w-1/2 rounded-[7.27px] overflow-hidden">
                  <AspectRatio ratio={1 / 1} className="w-full">
                    <div
                      className="gallery-image w-full h-full bg-cover bg-center relative"
                      style={{
                        backgroundImage: "url(/--aspectratioblock.png)",
                      }}
                    >
                      <div className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] absolute bottom-2 right-2 md:bottom-4 md:right-4 rounded-[30px] md:rounded-[50px] bg-[#d9d9d9]" />
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <div className="text-black [font-family:'Poppins',Helvetica] font-medium text-sm md:text-base mb-2">
                          Start Generating
                        </div>
                        <WandIcon className="w-5 h-5 md:w-6 md:h-6 mx-auto text-black" />
                      </div>
                    </div>
                  </AspectRatio>
                </div>

                <div className="w-full lg:w-1/2 grid grid-cols-2 gap-3 md:gap-[18.18px]">
                  <AspectRatio
                    ratio={1 / 1}
                    className="rounded-[5.45px] overflow-hidden"
                  >
                    <div
                      className="gallery-image w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage: "url(/--aspectratioblock-1.png)",
                      }}
                    />
                  </AspectRatio>

                  <AspectRatio
                    ratio={1 / 1}
                    className="rounded-[5.45px] overflow-hidden"
                  >
                    <div
                      className="gallery-image w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage: "url(/--aspectratioblock-2.png)",
                      }}
                    />
                  </AspectRatio>

                  <AspectRatio
                    ratio={1 / 1}
                    className="rounded-[5.45px] overflow-hidden"
                  >
                    <div
                      className="gallery-image w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage: "url(/--aspectratioblock-3.png)",
                      }}
                    />
                  </AspectRatio>

                  <AspectRatio
                    ratio={1 / 1}
                    className="rounded-[5.45px] overflow-hidden"
                  >
                    <div
                      className="gallery-image w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage: "url(/--aspectratioblock-4.png)",
                      }}
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="animate-section flex flex-col items-center gap-[60px] md:gap-[124px] w-full">
        <div className="flex flex-col w-full max-w-[794.82px] items-center gap-4 md:gap-7">
          <h2 className="w-full [font-family:'Manrope',Helvetica] font-medium text-white text-3xl md:text-4xl lg:text-5xl text-center tracking-[-0.48px] leading-[1.2] md:leading-[53.4px]">
            Generate audio and music
          </h2>

          <p className="w-full [font-family:'Poppins',Helvetica] font-normal text-[#ffffff99] text-sm md:text-base text-center tracking-[-0.29px] leading-[1.6] md:leading-[28.8px]">
            Discover endless creativity with PromptVerse. Generate diverse
            content effortlessly using prompts. Stay updated with real-time
            trends, automate tasks, and extract insights from any document or
            URL. All within a sleek, futuristic design. Create more,
            effortlessly.
          </p>
        </div>

        <Card className="feature-card w-full max-w-[1309.04px] bg-[#0d0d0d] rounded-[7.27px] p-4 md:p-[43.63px] hover:bg-[#1a1a1a] transition-all duration-300">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row gap-6 md:gap-[18.18px] w-full">
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex flex-col gap-6 md:gap-[29.09px]">
                  <h3 className="[font-family:'Manrope',Helvetica] font-medium text-white text-2xl md:text-3xl lg:text-[36.4px] tracking-[-0.36px] leading-[1.3] md:leading-[50.0px]">
                    Enhance Your Projects with Ultra-Realistic AI Voices
                  </h3>

                  <div className="[font-family:'Manrope',Helvetica] font-medium text-[#ffffff99] text-sm md:text-lg tracking-[-0.18px] leading-[1.6] md:leading-[28.8px]">
                    Create engaging voice content with unique AI Voices perfect
                    for your audience.
                    <br />
                    <br />
                    Generate Conversational, Long-form or Short-form Voice
                    Content With Consistent Quality and Performances.
                    <br />
                    <br />
                    Secure and Private Voice Generations with Full Commercial
                    and Copyrights
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 md:gap-[22.18px_18.18px] mt-6">
                  {audioFeatureTags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="px-4 md:px-[34px] py-2 md:py-3.5 rounded-[35.45px] border-[0.91px] border-solid border-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
                    >
                      <span className="[font-family:'Manrope',Helvetica] font-medium text-white text-sm md:text-[18.2px] tracking-[-0.18px] leading-[normal]">
                        {tag}
                      </span>
                    </Badge>
                  ))}

                  <Button className="bg-white text-black px-4 md:px-[34px] py-2 md:py-3.5 rounded-[55px] hover:scale-105 transition-all duration-300 hover:shadow-lg">
                    <span className="[font-family:'Poppins',Helvetica] font-medium text-black text-sm md:text-base text-center tracking-[0] leading-[normal]">
                      Generate now
                    </span>
                  </Button>
                </div>
              </div>

              <div className="relative w-full lg:w-[586.34px] h-[300px] md:h-[400px] lg:h-[586.34px] rounded-[7.27px] overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(0deg,rgba(4,4,4,0.5) 0%,rgba(4,4,4,0.5) 100%), url(/--aspectratioblock-5.png)",
                  }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <PlayIcon className="play-button w-[80px] h-[80px] md:w-[131px] md:h-[131px] text-white cursor-pointer hover:scale-110 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="animate-section flex flex-col w-full items-center justify-center gap-4 md:gap-7">
        <div className="flex flex-wrap w-full gap-[20px] md:gap-[40px_12px]">
          <h2 className="flex-1 [font-family:'Manrope',Helvetica] font-medium text-3xl md:text-4xl lg:text-[64px] tracking-[-1.16px] leading-[1.2] md:leading-[64px]">
            <span className="text-[#ffffff80] block md:inline">
              More features
            </span>
            <span className="text-white block">Promptverse AI </span>
            <span className="text-[#ffffff80] block md:inline">
              offers to an individual{" "}
            </span>
          </h2>
        </div>

        <div className="w-full border-t border-[#e0e0e0] pt-8 md:pt-[61px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-[1309px] mx-auto gap-8 md:gap-[60px]">
            {featureCards.map((feature, index) => (
              <div
                key={index}
                className="feature-card flex flex-col gap-[15px] hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <h3 className="[font-family:'Manrope',Helvetica] font-semibold text-white text-lg md:text-xl tracking-[-0.80px] leading-8">
                  {feature.title}
                </h3>
                <p className="[font-family:'Manrope',Helvetica] font-medium text-[#828282] text-sm md:text-base tracking-[-0.80px] leading-[1.6] md:leading-[28.8px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Card className="animate-section feature-card w-full max-w-[1308px] min-h-[300px] md:h-[474px] bg-[#0d0d0d] rounded-[19px] overflow-hidden hover:bg-[#1a1a1a] transition-all duration-300">
        <CardContent className="flex items-center justify-center h-full p-4 md:p-0 relative">
          <div className="cta-bg-element w-[100px] h-[100px] md:w-[140px] md:h-[140px] absolute top-0 right-0 rounded-[50px] md:rounded-[70px] blur-[150px] md:blur-[202px] bg-[#d9d9d9]" />

          <img
            className="absolute w-[150px] h-[150px] md:w-[249px] md:h-[249px] top-[-20px] md:top-[-34px] left-[-30px] md:left-[-57px] opacity-50"
            alt="Vector"
            src="/vector-5.svg"
          />

          <img
            className="absolute w-[30px] h-[30px] md:w-[50px] md:h-[50px] bottom-[30px] md:bottom-[59px] right-[120px] md:right-[222px] opacity-50"
            alt="Vector"
            src="/vector-4.svg"
          />

          <img
            className="absolute w-[40px] h-[40px] md:w-[63px] md:h-[63px] top-[15px] md:top-[29px] right-[25px] md:right-[46px] opacity-50"
            alt="Vector"
            src="/vector-3.svg"
          />

          <img
            className="absolute w-[30px] h-[30px] md:w-[46px] md:h-[46px] top-[20px] md:top-[37px] left-[120px] md:left-52 opacity-50"
            alt="Vector"
            src="/vector-3.svg"
          />

          <div className="flex flex-col items-center gap-8 md:gap-[58px] z-10 text-center px-4">
            <h2 className="w-full max-w-[984.72px] [font-family:'Manrope',Helvetica] font-semibold text-white text-2xl md:text-3xl lg:text-5xl text-center tracking-[-0.48px] leading-[1.3] md:leading-[74px]">
              Promptverse has no limitation. <br />
              Get Started in a journey with promptverse.
            </h2>

            <Button className="bg-white text-black px-6 md:px-[34px] py-3 md:py-3.5 rounded-[55px] hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <span className="[font-family:'Poppins',Helvetica] font-medium text-black text-sm md:text-base text-center tracking-[0] leading-[normal]">
                Create an Account
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
