import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function ProtocolIntregration() {
  return (
    <div className="my-20 px-[5%]">
      <h1 className="text-center text-xl font-semibold text-[#DCDCE4]">
        Protocol Integrations: Built on Trust
      </h1>

      <div className="my-8 block lg:hidden">
        <Marquee autoFill={true} pauseOnHover={true} pauseOnClick={true}>
          <div className="mr-8 flex items-center gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <Image
                key={i}
                src="/images/chains/logo-placeholder.svg"
                alt=""
                width={100}
                height={30}
                className="h-[30px] w-auto"
              />
            ))}
          </div>
        </Marquee>
      </div>

      <div className="relative mt-8 hidden grid-cols-1 gap-4 md:grid-cols-2 lg:grid lg:grid-cols-4">
        <div className="absolute bottom-0 left-[calc(75%-8px)] top-0 hidden w-px bg-gradient-to-b from-[#366CF0]/10 via-[#B4C8F9] to-[#366CF0]/10 lg:block" />

        <div className="absolute left-0 right-0 top-[calc(50%+8px)] hidden h-px bg-gradient-to-r from-[#366CF0]/10 via-[#B4C8F9] to-[#366CF0]/10 lg:block" />

        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="p-16">
            <Image
              src="/images/chains/logo-placeholder.svg"
              alt=""
              width={100}
              height={30}
              className="h-[30px] w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
