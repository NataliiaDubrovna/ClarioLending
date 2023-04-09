import { ReactComponent as TV } from "../Icons/TV.svg";
import { ReactComponent as Apple } from "../Icons/Apple.svg";
import React from "react";
import classnames from "classnames";

const MacIosBlock: React.FC<React.AllHTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  return (
    <div
      {...props}
      className={classnames(
        "flex items-center justify-center space-x-[8px]",
        props.className
      )}
    >
      <>
        <TV className={"mr-[4px]"} />
        <span
          className={"text-luckyPoint font-bold text-[12px] leading-[18px]"}
        >
          iOS
        </span>
      </>
      <>
        <Apple className={"mr-[4px]"} />
        <span
          className={"text-luckyPoint font-bold text-[12px] leading-[18px]"}
        >
          macOS, Windows
        </span>
      </>
    </div>
  );
};

export default MacIosBlock;
