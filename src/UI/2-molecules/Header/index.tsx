import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../1-atoms/Icons/ClarioLogo.svg";
import ButtonPrimary from "../../1-atoms/Buttons/Primary";
import classnames from "classnames";

export const Header = ({
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <header
      {...props}
      className={classnames(
        "py-[12px] flex items-center justify-center h-[56px] sticky top-[0px] z-50 bg-white",
        props.className
      )}
    >
      <Logo className={"shrink-0"} />
    </header>
  );
};
export const HeadingWithButton = ({
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <header
      {...props}
      className={classnames(
        { hidden: scrollTop < 320 },
        "block py-[12px] flex items-center justify-center justify-between px-[24px] h-[56px] sticky top-[0px] z-40 bg-white",
        props.className
      )}
    >
      <Logo />
      <ButtonPrimary anchor size={"s"} className={"!w-[127px]"}>
        Protect me now
      </ButtonPrimary>
    </header>
  );
};
