import React from "react";
import Heading from "../../1-atoms/Heading";
import ButtonPrimary from "../../1-atoms/Buttons/Primary";
import classnames from "classnames";
import MacIosBlock from "../../1-atoms/MacIosBlock";

interface ProtectMeNowProps {
  text?: string;
}

const ProtectMeNow: React.FC<
  ProtectMeNowProps & React.AllHTMLAttributes<HTMLDivElement>
> = ({ text = "", ...props }) => {
  return (
    <section {...props} className={classnames("px-[24px]", props.className)}>
      <Heading
        level={2}
        className={classnames(
          { "mb-[10px]": text },
          { "mb-[40px]": !text },

          "font-bold text-[34px] leading-[36px] tracking-[-0.44px] text-center text-neonBlue"
        )}
      >
        <span className={"text-luckyPoint"}>Stop your</span>
        <br /> phone from <br />
        being spied on.
      </Heading>
      {text && (
        <p
          className={
            "text-center text-luckyPoint opacity-70  text-[16px] leading-[20px] tracking-[-0.248889px] mb-[35px] "
          }
        >
          {text}
        </p>
      )}
      <ButtonPrimary anchor>Protect me now</ButtonPrimary>
    </section>
  );
};

export default ProtectMeNow;
