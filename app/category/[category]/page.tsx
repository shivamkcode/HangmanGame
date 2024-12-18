import { Metadata } from "next";
import { headers } from "next/headers";
import { Data } from "../page";
import GameClient from "@/components/GameClient";

export const generateMetadata = async ({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> => {
  const { category } = await params;
  return {
    title: `${category}`,
  };
};

const Page = async ({ params }: { params: { category: string } }) => {
  const host = (await headers()).get("host");
  const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";
  const response = await fetch(`${protocal}://${host}/api`, {
    cache: "no-store",
  });
  const data: Data = await response.json();
  const { category } = await params;

  return (
    <>
      <div className="fixed -z-50 h-screen w-screen bg-gradient-to-b from-[#1A043A] to-[#2B1677] opacity-75" />
      <div className="px-6 md:px-8 lg:px-28 py-11 md:py-16">
        <GameClient
          category={category}
          selectedCategory={data.categories[category]}
        />
      </div>
    </>
  );
};

export default Page;
