import React from "react";
import { ReactComponent as LOGO } from "../../1-atoms/Icons/ClarioLogo.svg";
import classnames from "classnames";

const Footer: React.FC<React.AllHTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  return (
    <footer
      {...props}
      className={classnames(
        "bg-white pt-[40px] pb-[20px] px-[24px]",
        props.className
      )}
    >
      <LOGO className={"mb-[7px] mx-auto"} />
      <p
        className={
          "text-center font-normal text-[14px] leading-[18px] text-luckyPoint"
        }
      >
        © 2023 Clario Tech DMCC <br />
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
