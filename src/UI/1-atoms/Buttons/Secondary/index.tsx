import classnames from "classnames";

interface ButtonSecondaryProps {
  // size?: "l" | "s";
}

function ButtonSecondary({
  className,
  type,
  ...props
}: ButtonSecondaryProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={classnames(
        "pt-[13px] pb-[16px] justify-center text-center flex rounded-lg shadow-standard font-bold text-[14px] leading-[18px] text-luckyPoint tracking-[-0.25px]",
        className
      )}
      style={{ backgroundColor: "rgba(225, 239, 255, 0.45)" }}
      type={"button"}
      {...props}
    />
  );
}

export default ButtonSecondary;
