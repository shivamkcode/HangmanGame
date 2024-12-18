import React from "react";
import BackButton from "@/components/backButton";

const Page = () => {
  return (
    <div className="pb-14 px-2 sm:px-4">
      <div className="bg-gradient-to-b from-[#1A043A] to-[#2B1677] fixed opacity-75 h-screen w-screen -z-50" />
      <div className="container mx-auto">
        <BackButton title={"How To Play"} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 mt-[60px] space-y-8 items-stretch lg:space-y-0">
          <div className="bg-white px-6 py-8 md:px-12 md:py-[60px] lg:px-10  rounded-3xl tracking-wider lg:flex lg:flex-col lg:gap-8 desc-card">
            <p className="text-blue text-2xl md:text-hl text-center md:col-start-1 md:col-end-1 md:row-start-1 md:row-end-3 md:self-center justify-self-start lg:mb-10">
              01
            </p>
            <p className="text-2xl text-start text-dark-navy uppercase lg:text-hm lg:text-center leading-[120%]">
              Choose a category
            </p>
            <p className="text-[#887DC0] text-base md:text-b leading-[150%] lg:mt-6 lg:text-center row-start-2 row-end-3 col-start-1 col-end-3 md:col-start-2 md:col-end-3 mt-2">
              First, choose a word category, like animals or movies. The
              computer then randomly selects a secret word from that topic and
              shows you blanks for each letter of the word.
            </p>
          </div>
          <div className="bg-white px-6 py-8 md:px-12 md:py-[60px] lg:px-10  rounded-3xl tracking-wider lg:flex lg:flex-col lg:gap-8 desc-card">
            <p className="text-blue text-2xl md:text-hl text-center md:col-start-1 md:col-end-1 md:row-start-1 md:row-end-3 md:self-center justify-self-start lg:mb-10">
              02
            </p>
            <p className="text-2xl text-start text-dark-navy uppercase lg:text-hm lg:text-center leading-[120%]">
              Guess the letters
            </p>
            <p className="text-[#887DC0] text-base md:text-b leading-[150%] lg:mt-6 lg:text-center row-start-2 row-end-3 col-start-1 col-end-3 md:col-start-2 md:col-end-3 mt-2">
              Take turns guessing letters. The computer fills in the relevant
              blank spaces if your guess is correct. If it`s wrong, you lose
              some health, which empties after eight incorrect guesses.
            </p>
          </div>
          <div className="bg-white px-6 py-8 md:px-12 md:py-[60px] lg:px-10 rounded-3xl tracking-wider lg:flex lg:flex-col lg:gap-8 desc-card">
            <p className="text-blue text-2xl md:text-hl text-center md:col-start-1 md:col-end-1 md:row-start-1 md:row-end-3 md:self-center justify-self-start lg:mb-10">
              03
            </p>
            <p className="text-2xl text-start text-dark-navy uppercase lg:text-hm lg:text-center leading-[120%]">
              WIN OR LOSE
            </p>
            <p className="text-[#887DC0] text-base md:text-b leading-[150%] lg:mt-6 lg:text-center row-start-2 row-end-3 col-start-1 col-end-3 md:col-start-2 md:col-end-3 mt-2">
              You win by guessing all the letters in the word before your health
              runs out. If the health bar empties before you guess the word, you
              lose.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
