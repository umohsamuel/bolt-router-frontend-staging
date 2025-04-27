import { BaseButton } from "@/components/button";
import { routes } from "@/lib/routes";
import Image from "next/image";

export default function HeroHome() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-b from-[#202738] to-[#070816] px-[5%] pt-[60px] text-[#CDCDCD]">
      <Image
        src="/vectors/home-vector-1.svg"
        alt=""
        width={100}
        height={100}
        className="absolute left-0 top-0 z-[0] h-auto w-[20%]"
      />

      <div className="mx-auto flex w-full max-w-screen-large-max flex-col items-center justify-center gap-10 lg:flex-row lg:justify-between lg:gap-0 large-max:px-0">
        <div className="flex w-full flex-col items-center text-center lg:block lg:max-w-[50%] lg:text-left">
          <h1 className="text-3xl font-medium text-[#DCDCE4] lg:text-5xl 2xl:text-6xl">
            The Most Seamless{" "}
            <span className="text-[#366CF0]">Cross-Chain</span> Swaps
          </h1>
          <p className="mt-4 text-base font-medium lg:text-[22px] lg:leading-tight">
            Trade tokens across multiple blockchains with speed, security, and
            transparency. Powered by the best cross-chain protocols.
          </p>
          <BaseButton
            text="Start Swapping Now"
            className="mt-8"
            link={routes.protocol.base}
          />
        </div>
        <div className="w-full lg:max-w-[35%]">
          <Image
            src="/images/try.svg"
            alt=""
            width={100}
            height={100}
            draggable={false}
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}
