"use client"

import dynamic from "next/dynamic";
import React from "react";
import { Name } from "./Game";

const Game = dynamic(() => import("./Game"), {
  ssr: false,
});

const GameClient = (props: { category: string; selectedCategory: Name[] }) => {
  return <Game category={props.category} selectedCategory={props.selectedCategory} />;
};

export default GameClient;
