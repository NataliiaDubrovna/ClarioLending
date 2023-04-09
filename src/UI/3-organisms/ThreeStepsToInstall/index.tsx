import React from "react";
import Heading from "../../1-atoms/Heading";
import AccordionsBlock from "../../2-molecules/AccordionsBlock";

interface ThreeStepsToInstallProps {}

const ThreeStepsToInstall: React.FC<
  ThreeStepsToInstallProps & React.AllHTMLAttributes<HTMLDivElement>
> = ({ ...props }) => {
  return (
    <section className={"pt-[29px] px-[19px] pb-[45px]"}>
      <Heading
        level={2}
        className={
          "font-bold text-[26px] leading-[30px] tracking-[-0.44px] mb-[19px] text-luckyPoint text-center"
        }
      >
        All you need to do <br /> is{" "}
        <span className={"text-downy"}>3 easy steps</span>.
      </Heading>
      <AccordionsBlock />
    </section>
  );
};

export default ThreeStepsToInstall;
