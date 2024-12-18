"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import LettersButton from "./lettersButton";
import KeyboardButton from "./keyboardButton";
import Image from "next/image";
import Heart from "../public/images/icon-heart.svg";
import Menu from "./Menu";

interface GameProps {
  category: string;
  selectedCategory: Name[];
}

export enum GameState {
  Playing = "Playing",
  Won = "You Win",
  Lost = "You Lose",
  Paused = "Paused",
}

export interface Name {
  name: string;
  selected: boolean;
}

let hiddenStr = "";

const getHiddenWord = (word: string): string => {
  hiddenStr = ''
  const new_word = word
    .split(" ")
    .map((e) => {
      const array = Array.from({ length: e.length }, (_, i) => i + 1);
      const randomNumber = Math.floor((Math.random() * array.length) / 2) + 1;
      const shuffledArray = shuffleArray(array);
      const indexesToHide = shuffledArray.slice(0, randomNumber);
      const hiddenLetters = e.split("").map((letter, index) => {
        if (indexesToHide.includes(index + 1)) {
          hiddenStr += letter;
          return "_";
        }
        return letter;
      });
      return hiddenLetters.join("");
    })
    .join(" ");

    return new_word;
};

function getHiddenKeys(word: string): string {
  return word
    .split("")
    .map((e) => {
      if (e !== "_" && !hiddenStr.toLowerCase().includes(e.toLowerCase())) {
        return e.toLowerCase();
      }
    })
    .join("");
}

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function CalculateHiddenIndexs(word: string): number[] {
  const hiddenIndexes: number[] = [];
  word.split("").forEach((e: string, i: number) => {
    if (e === "_") hiddenIndexes.push(i);
  });
  return hiddenIndexes;
}

const Game: React.FC<GameProps> = ({ category, selectedCategory }) => {

  const [word, setWord] = useState(shuffleArray(selectedCategory)[0].name);
  const hiddenWord = getHiddenWord(word)
  const [hiddenKeys, setHiddenKeys] = useState(
    getHiddenKeys(hiddenWord),
  );
  const [hiddenIndexes, setHiddenIndexes] = useState(
    CalculateHiddenIndexs(hiddenWord),
  );
  const correctWord = word.split("");
  const keyBoard = "abcdefghi jklmnopqr stuvwxyz";
  const [hiddenLetters, setHiddenLetters] = useState(
    hiddenWord.split(""),
  );
  const [selectedBox, setSelectedBox] = useState(
    Number(CalculateHiddenIndexs(hiddenWord)[0]),
  );
  const [clickedKey, setClickedKey] = useState("");
  const [health, setHealth] = useState(8);
  const [isRed, setIsRed] = useState(false);
  const [gameState, setGameState] = useState<GameState>(GameState.Playing);
  const gameStatusText = getGameStatusText(gameState);
  const [showCard, setShowCard] = useState(false);

  function getGameStatusText(gameState: GameState): string {
    switch (gameState) {
      case GameState.Playing:
        return "Playing";
      case GameState.Won:
        return "You Win";
      case GameState.Lost:
        return "You Lose";
      default:
        return "Paused";
    }
  }

  function playGame() {
    const newWord = shuffleArray(selectedCategory)[0].name;
    const _hiddenWord = getHiddenWord(newWord);
    const _hiddenKeys = getHiddenKeys(_hiddenWord);
    const _hiddenIndexes = CalculateHiddenIndexs(_hiddenWord);
    setWord(newWord);
    setHiddenKeys(_hiddenKeys);
    setHiddenIndexes(_hiddenIndexes);
    setHiddenLetters(_hiddenWord.split(""));
    setSelectedBox(Number(_hiddenIndexes[0]));
    setClickedKey("");
    setHealth(8);
    setGameState(GameState.Playing);
    setShowCard(false);
  }

  useEffect(() => {
    if (clickedKey && correctWord[selectedBox]?.toLowerCase() === clickedKey) {
      setHiddenLetters((prevHiddenLetters) => {
        const updatedHiddenLetters = [...prevHiddenLetters];
        updatedHiddenLetters[selectedBox] = correctWord[selectedBox];
        return updatedHiddenLetters;
      });
      const updatedHiddenIndexes = hiddenIndexes.filter(
        (e) => e !== selectedBox,
      );
      const num = hiddenIndexes.filter(
        (e) => e !== selectedBox && correctWord[e] === clickedKey,
      );
      num.length > 0
        ? setHiddenKeys(hiddenKeys)
        : setHiddenKeys(hiddenKeys + clickedKey);
      setHiddenIndexes(updatedHiddenIndexes);
      setClickedKey("");
      if (updatedHiddenIndexes.length) {
        updateSelectedBoxPosition(selectedBox, hiddenIndexes);
      } else {
        setGameState(GameState.Won);
        setShowCard(true);
      }
    } else if (
      clickedKey &&
      correctWord[selectedBox]?.toLowerCase() !== clickedKey
    ) {
      if (health === 1) {
        setGameState(GameState.Lost);
        setShowCard(true);
      }
      setHealth(health - 1);
      setClickedKey("");
      setIsRed(true);
      setTimeout(() => {
        setIsRed(false);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickedKey]);

  const updateSelectedBoxPosition = (
    currPos: number,
    posArr: Array<number>,
  ): void => {
    const posInArr = posArr.indexOf(currPos);
    if (posInArr < posArr.length - 1) {
      setSelectedBox(posArr[posInArr + 1]);
    } else {
      setSelectedBox(posArr[0]);
    }
  };

  const handleKeyAction = (e: KeyboardEvent) => {
    const regex = /^[a-zA-Z]$/;
    if (regex.test(e.key)) {
      setClickedKey(e.key);
    }
  };

  useLayoutEffect(() => {
    // playGame();
    window.addEventListener("keydown", handleKeyAction);
    return () => {
      window.removeEventListener("keydown", handleKeyAction);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <header className="flex justify-between">
        <div className="flex gap-4 sm:gap-8 md:gap-10 justify-center items-center">
          <Menu
            gameStatusText={gameStatusText}
            setGameState={setGameState}
            showCard={showCard}
            setShowCard={setShowCard}
            playAgain={playGame}
          />
          <h1 className="text-3xl md:text-5xl lg:text-[88px] text-white">
            {category.split("_").join(" ")}
          </h1>
        </div>
        <div className="flex gap-4 sm:gap-8 md:gap-10 justify-center items-center">
          <div className="bg-white w-14 sm:w-40 md:w-60 h-4 sm:h-8 rounded-full p-1 sm:px-3 sm:py-2">
            <div
              style={{
                width: `${(100 * health) / 8}%`,
                backgroundColor: isRed ? "red" : "blue",
                transition: "background-color 1s ease",
                opacity: isRed ? "1" : `${(1 * 2 * health) / 8}`,
              }}
              className={`bg-dark-navy h-full rounded-full`}
            />
          </div>
          <Image
            style={{
              scale: isRed ? ".9" : "1",
              transition: "scale 1s ease",
            }}
            className="h-6 sm:h-12 w-[26px] sm:w-14"
            src={Heart}
            alt="heart"
            height={24}
            width={26}
          />
        </div>
      </header>
      <main className="flex justify-center gap-x-14 flex-wrap gap-3 mt-20 sm:mt-24 md:mt-20">
        {hiddenLetters
          .join("")
          .split(" ")
          .map((e, i) => {
            const wordIndexOffset =
              hiddenLetters.join("").split(" ").slice(0, i).join("").length + i;
            return (
              <div className="flex flex-wrap justify-center gap-2" key={i}>
                {e.split("").map((l, j) => (
                  <LettersButton
                    key={j}
                    index={j + wordIndexOffset}
                    letter={l}
                    active={selectedBox}
                    setSelectedBox={setSelectedBox}
                  />
                ))}
              </div>
            );
          })}
      </main>
      <section className="flex flex-col gap-6 mt-20">
        {keyBoard.split(" ").map((e,i) => (
          <div className="flex justify-center gap-2" key={i}>
            {e.split("").map((l, i) => (
              <KeyboardButton
                key={i}
                letter={l}
                disabled={hiddenKeys.split("").includes(l)}
                setClickedKey={setClickedKey}
              />
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Game;
