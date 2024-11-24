import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function SupportedChains() {
  return (
    <div className="my-20 flex flex-col gap-6 px-[5%]">
      <h1 className="text-center text-[22px] font-medium leading-tight text-[##DCDCE4]">
        Supported chains
      </h1>
      <Marquee autoFill={true} pauseOnHover={true} pauseOnClick={true}>
        <div className="mr-10 flex items-center gap-10">
          {Array.from({ length: 5 }).map((_, index) => (
            <Image
              src={`/images/chains/Company-logo-${index}.svg`}
              alt=""
              key={index}
              width={86}
              height={28}
              className="h-[28px] w-auto"
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
}
