import { features } from "@/lib/home";
import { PageMainHeader, PageMainSubHeader } from "./home-headers";

export default function FeaturesHome() {
  return (
    <div className="large-max:px-0 max-w-screen-large-max mx-auto mt-8 w-full px-[5%]">
      <PageMainSubHeader content="Core Protocol Features" />
      <PageMainHeader
        content="Unlock Limitless Possibilities with Bolt Router"
        className="mb-4 mt-4 lg:mt-8 2xl:text-5xl"
      />
      <p className="text-center text-lg font-normal text-[#CDCDCD]">
        Experience Seamless and Secure Cross-Chain Token Swaps
      </p>

      <Features />
    </div>
  );
}

const Features = () => (
  <div className="relative mt-8 grid grid-cols-1 gap-4 text-white md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
    <div className="absolute bottom-0 left-[calc(33.333333%+8px)] top-0 hidden w-px bg-gradient-to-b from-[#366CF0]/10 via-[#B4C8F9] to-[#366CF0]/10 lg:block" />

    <div className="absolute bottom-0 left-[calc(66.666667%-8px)] top-0 hidden w-px bg-gradient-to-b from-[#366CF0]/10 via-[#B4C8F9] to-[#366CF0]/10 lg:block" />

    <div className="absolute left-0 right-0 top-[calc(50%+8px)] hidden h-px bg-gradient-to-r from-[#366CF0]/10 via-[#B4C8F9] to-[#366CF0]/10 lg:block" />

    {features.map((feature, index) => (
      <div
        className="flex flex-col items-center gap-5 lg:px-9 lg:py-9"
        key={index}
      >
        <div className="flex aspect-square items-center justify-center rounded-full bg-[#131A2A] p-4">
          {feature.icon && <feature.icon size={28} color="white" />}
        </div>
        <h3 className="text-center text-2xl font-medium">{feature.title}</h3>
        <p className="text-center text-base font-normal text-[#CDCDCD]">
          {feature.description}
        </p>
      </div>
    ))}
  </div>
);
