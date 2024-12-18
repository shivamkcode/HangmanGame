"use client";

import Image from "next/image";
import Back from "../public/images/icon-back.svg";
import { useRouter } from "next/navigation";

type Props = {
  title: string;
};

function BackButton(props: Props) {

  const router = useRouter();

  return (
    <div className="flex items-center justify-between lg:justify-normal">
      <div className="relative rounded-full overflow-hidden">
        <div className="relative hover-effect h-[40px] w-[46px] rounded-full pink-gradient shadow-pink-bs1 md:h-[64px] md:w-[70px] lg:h-[100px] lg:w-[106px] cursor-pointer">
          <div
            className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 pr-1 -translate-y-1/2 transform md:h-[28px] md:w-[28px] lg:h-[38px] lg:w-[38px]"
            onClick={() => router.back()}
          >
            <Image src={Back} alt="back" />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end text-center md:justify-center lg:justify-center">
        <div className="relative flex justify-center items-center">
          <h1 className="text-shadow py-2 md:py-4 lg:py-8 text-5xl md:text-7xl lg:text-9xl">
            {props.title}
          </h1>
          <h1 className="gradient-text py-2 md:py-4 lg:py-8 absolute top-0 text-5xl md:text-7xl lg:text-9xl">
            {props.title}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default BackButton;
