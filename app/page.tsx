import Image from "next/image";
import Button from "../components/Button";
import Play from '../public/images/icon-play.svg'
import Link from "next/link";
import "./style.css";

const Page = () => {
  return (
    <div
      className="absolute mt-52 left-1/2 -translate-x-1/2 "
      style={{
        background: "#140e66b2",
        borderRadius: "48px",
        padding: "0px 4px 10px 4px",
      }}
    >
      <div
        className="-mt-1 flex h-[481px] w-80 flex-col items-center gap-14 rounded-[48px] bg-opacity-15 bg-gradient-to-b from-[#344ABA] to-[#001479af] sm:h-[500px] sm:w-[592px]"
        style={{
          boxShadow: `inset 3px 12px 0 #2463FF, inset -3px 12px 0 #2463FF `,
        }}
      >
        <div className="relative -mt-12 text-3xl uppercase text-white sm:-mt-24 sm:text-4xl">
          <div className="relative -mb-8 sm:-mb-14 ml-10 sm:ml-24">
            <h4 className="text-shadow">The</h4>
            <h4 className="absolute top-0">The</h4>
          </div>
          <div className="relative capitalize">
            <h4 className="text-shadow text-6xl py-3 sm:pb-6 sm:text-9xl">hangman</h4>
            <h4 className="absolute top-0 gradient-text text-6xl py-3 sm:pb-6 sm:text-9xl">
              hangman
            </h4>
          </div>
          <div className="relative -mt-4 ml-36 sm:-mt-8 sm:ml-72">
            <h4 className="text-shadow">game</h4>
            <h4 className="absolute top-0">game</h4>
          </div>
        </div>
        <Link href="/category">
          <div
            style={{
              background: "#243041",
              borderRadius: "200px",
              padding: "1px 4px 10px 4px",
            }}
          >
            <div className="relative overflow-hidden rounded-full">
              <div
                className="w-40 hover-effect sm:w-52 h-40 sm:h-52 rounded-full pink-gradient flex justify-center items-center"
                style={{
                  boxShadow: `inset 3px -12px 0 #9D2DF5, inset -3px -12px 0 #9D2DF5 `,
                }}
              >
                <Image
                  src={Play}
                  alt="Play"
                  height={50}
                  width={52}
                  className="h-12 sm:h-[62px] w-14 sm:w-16"
                />
              </div>
            </div>
          </div>
        </Link>
        <Link href="/howToPlay">
          <Button color="blue">How to play</Button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
