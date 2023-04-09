import React from "react";
import classnames from "classnames";
import Heading from "../../1-atoms/Heading";
import ULListItem from "../UnorderedList";
import { videoList } from "../../../fixtures/VideoBlock";

const VideoBlock: React.FC<React.AllHTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  return (
    <div
      {...props}
      className={classnames(
        "bg-ghostWhite px-[24px] pb-[50px]",
        props.className
      )}
    >
      <video
        width="750"
        height="500"
        autoPlay
        loop
        muted
        className={"mb-[35px] rounded-sm"}
      >
        <source src={"/videos/Radar_2x.mp4"} type="video/mp4" />
      </video>
      <Heading
        level={2}
        className={
          "mb-[12px] text-center font-bold text-base leading-[20px] tracking-[-0.248889px] text-luckyPoint"
        }
      >
        The anti-spy Clario app can:
      </Heading>
      <ULListItem
        items={videoList}
        className={
          "[&>li]:font-normal max-w-[235px] mx-auto [&]:space-y-[12px]"
        }
      />
    </div>
  );
};

export default VideoBlock;
