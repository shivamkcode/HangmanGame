"use client";
import Image from "next/image";
import React from "react";
import MenuIcon from "../public/images/icon-menu.svg";
import Button from "./Button";
import Link from "next/link";
import { GameState } from "./Game";

interface MenuProps {
  text?: string;
  gameStatusText?: string;
  showCard: boolean;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
  setShowCard: React.Dispatch<React.SetStateAction<boolean>>;
  playAgain: () => void;
}

const Menu: React.FC<MenuProps> = (props) => {
  const updateGameState = () => {
    if (
      [GameState.Won, GameState.Lost].includes(
        props.gameStatusText as GameState,
      )
    ) {
      props.playAgain();
    }
    props.setGameState(GameState.Paused);
    props.setShowCard(false);
  };

  return (
    <>
      <div
        className="relative overflow-hidden rounded-full"
        onClick={() => props.setShowCard(true)}
      >
        <div className="pink-gradient rounded-full w-10 md:w-16 lg:w-24 h-10 md:h-16 lg:h-24 flex justify-center items-center cursor-pointer hover-effect">
          <Image
            className="w-4 md:w-6 lg:w-9 h-[14px] md:h-5 lg:h-8"
            src={MenuIcon}
            alt="menu"
            width={16}
            height={14}
          />
        </div>
      </div>
      {props.showCard && (
        <>
          <div className="fixed z-40 top-0 left-0 h-screen w-screen bg-gradient-to-b from-[#1A043A] to-[#2B1677] opacity-75" />
          <div
            className="absolute z-50 top-1/4 left-1/2 -translate-x-1/2"
            style={{
              background: "#140e66b2",
              borderRadius: "48px",
              padding: "0px 4px 10px 4px",
            }}
          >
            <div
              className="relative flex flex-col items-center justify-center gap-8 rounded-[48px] bg-opacity-15 bg-gradient-to-b from-[#344ABA] to-[#001479af] w-80 md:w-[592px] h-[445px] lg:h-[534px]"
              style={{
                boxShadow: `inset 3px 12px 0 #2463FF, inset -3px 12px 0 #2463FF `,
              }}
            >
              <div className="absolute -top-14 md:-top-[84px]">
                <div className="relative capitalize">
                  <h4 className="text-shadow py-5 text-7xl md:text-9xl">
                    {props.gameStatusText}
                  </h4>
                  <h4 className="absolute top-0 gradient-text text-7xl py-5 md:text-9xl">
                    {props.gameStatusText}
                  </h4>
                </div>
              </div>
              <Button onClick={updateGameState} color="blue" autoFocus={true}>
                {props.gameStatusText !== GameState.Paused
                  ? "Next Game"
                  : "Continue"}
              </Button>
              <Link href={"/category"}>
                <Button color="blue">New Category</Button>
              </Link>
              <Link href={"/"}>
                <Button color="pink">Quit Game</Button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
