import { routes } from "@/lib/routes";
import { PageMainHeader, PageMainSubHeader } from "./home-headers";
import { BaseButton } from "@/components/button";

export default function IntroductionHome() {
  return (
    <div className="mx-auto w-full max-w-screen-large-max px-[5%] pt-24 large-max:px-0">
      <PageMainSubHeader
        content="Introducing Bolt Router"
        className="mb-4 lg:mb-7"
      />
      <PageMainHeader
        content="The Premier Cross-Chain Bridge for Stablecoins & Assets Up to 100x Liquidity"
        className="lg:text-[48px] lg:leading-[70px] 2xl:text-[48px]"
      />

      <div className="mx-auto mt-4 flex max-w-screen-small-max flex-col items-center text-center">
        <p className="text-xl font-normal text-[#CDCDCD]">
          The Blue-Chip Cross-Chain Bridge for Stablecoins and Digital
          AssetsExperience Seamless, High-Efficiency Asset Transfers with Up to
          100x Concentrated Liquidity, Ensuring Faster, Cost-Effective, and
          Secure Cross-Chain Transactions Across Multiple Blockchains.
        </p>

        <BaseButton
          text="Trade Now"
          className="mt-7 px-20 py-6 text-2xl font-bold"
          link={routes.protocol.base}
        />
      </div>

      {/* <div className="my-6 flex flex-col items-center justify-between gap-8 lg:my-14 lg:flex-row lg:gap-0">
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
      </div> */}
    </div>
  );
}
