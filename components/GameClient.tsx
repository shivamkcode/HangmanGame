"use client"

import dynamic from "next/dynamic";
import React from "react";

const Game = dynamic(() => import("./Game"), {
  ssr: false,
});

const GameClient = (props: { category: string; selectedCategory: any }) => {
  return <Game category={props.category} selectedCategory={props.selectedCategory} />;
};

export default GameClient;
