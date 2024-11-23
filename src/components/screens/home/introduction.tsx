import Image from "next/image";
import { PageMainHeader, PageMainSubHeader } from "./home-headers";

export default function IntroductionHome() {
  return (
    <div className="px-[5%]">
      <PageMainSubHeader
        content="Introducing Bolt Router"
        className="mb-4 lg:mb-7"
      />
      <PageMainHeader content="Decentralized Cross-Chain Infrastructure" />

      <div className="my-6 flex flex-col items-center justify-between gap-8 lg:my-14 lg:flex-row lg:gap-0">
        <div className="w-full space-y-6 text-base font-normal text-[#CDCDCD] lg:max-w-[45%] lg:text-xl">
          <p>
            This platform is a Decentralized Exchange (DEX) designed to make
            cross-chain token swaps seamless, secure, and efficient. By
            leveraging advanced interoperability protocols and liquidity
            aggregation, it empowers users to move digital assets across
            multiple blockchains with ease while optimizing fees and ensuring
            security.
          </p>

          <p>
            As the blockchain ecosystem grows, users increasingly interact with
            different chains (e.g., Ethereum, Binance Smart Chain, Solana).
            However, moving assets between these chains is often complicated,
            expensive, and risky. This platform addresses these pain points by
            offering:
          </p>
        </div>
        <div className="w-full lg:max-w-[50%]">
          <Image
            src="/images/swap-img.svg"
            alt=""
            width={100}
            height={100}
            className="h-auto w-full"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
