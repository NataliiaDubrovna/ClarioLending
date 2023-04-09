import React from "react";
import Heading from "../../1-atoms/Heading";
import { ReactComponent as TV } from "../../1-atoms/Icons/TV.svg";
import { ReactComponent as Apple } from "../../1-atoms/Icons/Apple.svg";
import classnames from "classnames";
import MacIosBlock from "../../1-atoms/MacIosBlock";

const ProtectAllDevices: React.FC<React.AllHTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  return (
    <section
      {...props}
      className={classnames(
        "bg-ghostWhite py-[25px] px-[32px]",
        props.className
      )}
    >
      <Heading
        level={2}
        className={
          "mb-[10px] text-center font-bold text-[26px] leading-[30px] text-luckyPoint tracking-[-0.44px]"
        }
      >
        Protect all your <br />
        devices.
      </Heading>
      <p
        className={
          "mb-[20px] text-center font-normal text-base leading-[20px] text-luckyPoint tracking-[-0.248889px]"
        }
      >
        Are you working from a Windows laptop and browsing from your home Mac?
        Use Clario to enjoy total privacy on every platform and device.{" "}
      </p>
      <MacIosBlock />
    </section>
  );
};

export default ProtectAllDevices;
