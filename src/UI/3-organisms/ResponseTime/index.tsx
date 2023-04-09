import React from "react";
import classnames from "classnames";
import ButtonPrimary from "../../1-atoms/Buttons/Primary";
import ButtonSecondary from "../../1-atoms/Buttons/Secondary";
import { ReactComponent as SandClock } from "../../1-atoms/Icons/24px/Sandclock.svg";
import Heading from "../../1-atoms/Heading";

const ResponseTime: React.FC<React.AllHTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  return (
    <section
      {...props}
      className={classnames(
        "bg-light-blue pb-[50px] pt-[33px]",
        props.className
      )}
    >
      <Heading
        level={3}
        className={
          "mb-[10px] text-center font-bold text-[26px] leading-[30px] tracking-[-0.44px] text-luckyPoint"
        }
      >
        Not sure that the app can solve your problem?
      </Heading>
      <p
        className={
          "px-[10px] mb-[16px] text-center font-normal text-[16px] leading-[20px] tracking-[-0.25 px] text-luckyPoint"
        }
      >
        You'll have Clario experts ready to jump in and help you, 24/7, just
        <br />
        when you need them.
      </p>

      <ButtonSecondary className={"w-[204px] mx-auto mb-[32px]"}>
        <SandClock className={"mr-[3px]"} />
        Response time: <span className={"font-normal ml-[6px]"}> 2 mins</span>
      </ButtonSecondary>

      <div className={"h-[503px] w-[272px] mx-auto mb-[40px]"}>
        <img
          src={"/img/PeopleBlock.png"}
          className={"w-full h-full "}
          alt={"Three steps to resolve your problem"}
        />
      </div>

      <ButtonPrimary anchor className={"!w-[184px] mx-auto"}>
        Protect me now
      </ButtonPrimary>
    </section>
  );
};

export default ResponseTime;
