import classnames from "classnames";
import React from "react";

interface ButtonPrimaryProps {
  size?: "l" | "s";
  anchor?: boolean;
}

function ButtonPrimary({
  size = "l",
  className,
  children,
  anchor = false,
  ...props
}: ButtonPrimaryProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <>
      {!anchor && (
        <button
          {...props}
          className={classnames(
            {
              "pt-[9px] pb-[10px] text-[18px] leading-[28px]": size === "l",
            },
            {
              "pt-[6px] pb-[8px] text-[14px] leading-[18px]": size === "s",
            },
            "justify-center border-none bg-neonBlue text-center text-white w-full rounded-xxl font-bold tracking-[-0.54px]",
            className
          )}
        >
          {children}
        </button>
      )}
      {anchor && (
        <a
          href={"#priceBlock"}
          className={classnames(
            {
              "pt-[9px] pb-[10px] text-[18px] leading-[28px]": size === "l",
            },
            {
              "pt-[6px] pb-[8px] text-[14px] leading-[18px]": size === "s",
            },
            "justify-center border-none bg-neonBlue text-center text-white w-full block rounded-xxl font-bold tracking-[-0.54px]",
            className
          )}
        >
          {children}
        </a>
      )}
    </>
  );
}

export default ButtonPrimary;
