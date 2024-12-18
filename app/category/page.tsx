import React from "react";
import BackButton from "@/components/backButton";
import { headers } from "next/headers";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categories | Hangman game",
  description: "Choose any of the six categories",
};

interface Name {
  name: string;
  selected: boolean;
}

export interface Data {
  categories: {
    [key: string]: Name[];
  };
}

const Page = async () => {
  const host = (await headers()).get("host");
  const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";
  const response = await fetch(`${protocal}://${host}/api`, {
    cache: "no-store",
  });
  const data: Data = await response.json();

  return (
    <>
      <div className="fixed -z-50 h-screen w-screen bg-gradient-to-b from-[#1A043A] to-[#2B1677] opacity-75" />
      <div className="container mx-auto flex flex-col gap-6 p-6">
        <BackButton title="Pick A Category" />
        <div className="mt-14 grid grid-cols-1 gap-y-[16px] md:mt-[100px] md:grid-cols-2 md:gap-[32px] lg:mt-[150px] lg:grid-cols-3 lg:gap-x-[32px] lg:gap-y-[50px]">
          {Object.entries(data.categories).map(([category]) => (
            <Link
              href={`/category/${category}`}
              style={{
                background: "#140E66",
                borderRadius: "20px",
                padding: "1px 2px 5px 2px",
              }}
              color="blue"
              key={category}
            >
              <div className="relative overflow-hidden rounded-[20px]">
                <div
                  className="flex hover-effect justify-center rounded-[20px] bg-[#2463FF] py-[24px] text-white  md:py-[60px] lg:py-[60px] text-xl sm:text-3xl"
                  style={{ boxShadow: `inset 0px 6px 0px #3C74FF` }}
                >
                  <div className="tracking-wider text-hm uppercase">
                    {category.split("_").join(" ")}
                  </div>
                </div>
              </div>
            </Link>
          ))}
          Ba
        </div>
      </div>
    </>
  );
};

export default Page;
