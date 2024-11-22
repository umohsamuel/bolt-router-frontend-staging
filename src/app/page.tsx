import { HomeLayout } from "@/components/layouts";
import Image from "next/image";

export default function Home() {
  return (
    <HomeLayout>
      <div className="relative text-7xl font-bold text-red-500">
        <Image
          src="/vectors/home-vector-1.svg"
          alt=""
          width={100}
          height={100}
          className="absolute left-0 top-0 z-[0] h-auto w-[20%]"
        />
        Hello bolt router
      </div>
    </HomeLayout>
  );
}
