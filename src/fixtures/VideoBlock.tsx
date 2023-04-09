import { ReactComponent as Check } from "../UI/1-atoms/Icons/Check.svg";
import React from "react";

const checkBullet = (
  <div
    className={
      "bg-neonBlue rounded-full w-[16px] h-[16px] flex items-center justify-center"
    }
  >
    <Check />
  </div>
);

export const videoList = [
  {
    icon: checkBullet,
    text: "reveal hidden spying apps",
    id: "check.1",
  },
  { icon: checkBullet, text: "stop silent location tracking", id: "check.2" },
  { icon: checkBullet, text: "avoid social media hacks", id: "check.3" },
  {
    icon: checkBullet,
    text: "provide 24/7 expert security help",
    id: "check.4",
  },
];
