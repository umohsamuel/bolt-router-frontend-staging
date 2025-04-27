import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function PoweredBy() {
  return (
    <div className="flex flex-col items-center gap-6 px-[5%] text-center">
      <h1 className="text-3xl font-semibold text-[#DCDCE4] 2xl:text-[42px]">
        Powered By Leading Protocols
      </h1>

      <p className="text-lg font-normal text-[#CDCDCD]">
        Seamless cross-chain swaps enabled by the most advanced blockchain
        technologies, ensuring security, speed, and efficiency
      </p>

      <Marquee autoFill={true} pauseOnHover={true} pauseOnClick={true}>
        <div className="mt-1 flex items-center justify-between gap-20">
          {[1, 2, 3, 4].map((i) => (
            <Image
              key={i}
              src={`/images/icons/poweredby-${i}.svg`}
              alt="img"
              height={40}
              width={170}
              className="h-10 w-auto"
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
}
