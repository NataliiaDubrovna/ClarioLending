import React from "react";
import classnames from "classnames";
import Heading from "../../1-atoms/Heading";
import ULListItem from "../../2-molecules/UnorderedList";
import { ReactComponent as ThreeDevices } from "../../1-atoms/Icons/24px/ThreeDevices.svg";
import { ReactComponent as AntiSpy } from "../../1-atoms/Icons/24px/AntiSpy.svg";
import { ReactComponent as Endless } from "../../1-atoms/Icons/24px/Endless.svg";
import { ReactComponent as FullTime } from "../../1-atoms/Icons/24px/FullTime.svg";
import ButtonPrimary from "../../1-atoms/Buttons/Primary";
import { ReactComponent as MoneyBack } from "../../1-atoms/Icons/24px/money back@2x.svg";
import { ReactComponent as OneH } from "../../1-atoms/Icons/24px/100k.svg";

const PriceBlock: React.FC<React.AllHTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  return (
    <div
      {...props}
      className={classnames(
        "p-[24px] w-full h-[920px] flex flex-col price-block",
        props.className
      )}
      id={"priceBlock"}
    >
      <Heading
        level={2}
        className={
          "mt-auto text-center font-bold text-[26px] leading-[30px] tracking-[-0.44px] text-white mb-[18px]"
        }
      >
        Start your spy-free week for as low as
      </Heading>
      <div className={"w-full bg-white mx-auto rounded-lg p-[24px] h-[633px]"}>
        <div
          className={"bg-orange rounded-xs flex px-[12px] py-[4px] mb-[10px]"}
        >
          <span
            className={"text-sorbus font-normal text-[11px] leading-[18px]"}
          >
            Special offer valid for
          </span>
          <span
            className={
              "text-sorbus font-bold text-[16px] leading-[18px] ml-auto mr-[3px]"
            }
          >
            30:00
          </span>
          <span
            className={"text-sorbus font-normal text-[11px] leading-[18px]"}
          >
            min
          </span>
        </div>

        <div
          className={
            classnames(
              "bg-ghostWhite rounded-lg w-full h-[100px] mb-[18px]",
              "relative"
            )
            // py-[20px] pr-[30px] pl-[40px]
          }
        >
          <div
            className={classnames(
              "text-neonBlue font-bold text-[42px] leading-[28px]",
              "absolute top-[20px] left-[32px] "
            )}
          >
            $
          </div>
          <div
            className={classnames(
              "text-neonBlue font-bold text-[80px] leading-[68px]",
              "absolute left-[64px] top-[14px]"
            )}
          >
            2
          </div>
          <div
            className={classnames(
              "text-neonBlue font-bold text-[24px] leading-[28px]",
              "absolute top-[14px] left-[115px]"
            )}
          >
            99
          </div>
          <div
            className={classnames(
              "text-pictonBlue opacity-30 font-bold text-[24px] leading-[28px]",
              "absolute bottom-[20px] right-[20px]"
            )}
          >
            /7 days
          </div>
        </div>

        <Heading
          level={3}
          className={
            "text-center font-bold text-[16px] leading-[34px] text-luckyPoint tracking-[-0.435556px] mb-[3px]"
          }
        >
          What you get:
        </Heading>
        <ULListItem
          items={[
            {
              icon: <ThreeDevices className={"shrink-0"} />,
              text: "Protection for 3 devices",
              id: "price.1",
            },
            {
              icon: <AntiSpy className={"shrink-0"} />,
              text: "Anti-spy checkup",
              id: "price.2",
            },
            {
              icon: <Endless className={"shrink-0"} />,
              text: "Unlimited access to anti-spying tools",
              id: "price.3",
            },
            {
              icon: <FullTime className={"shrink-0"} />,
              text: "24/7 help from security experts",
              id: "price.4",
            },
          ]}
          className={"[&]:space-y-[18px] mb-[32px] [&>li]:font-normal"}
        />
        <ButtonPrimary className={"mb-[16px]"}>Try for $2.99</ButtonPrimary>
        <p
          className={
            "mb-[16px] font-normal text-[9px] leading-[12px] opacity-50 text-luckyPoint text-center tracking-[-0.435556px]"
          }
        >
          By clicking above, you agree to try 7 days of Clario for $2.99 as a
          special offer. Your subscription will renew for $39.9/month every 2
          months. Cancel anytime or manage your subscription in your Clario
          account.
        </p>
        <ULListItem
          items={[
            {
              icon: <MoneyBack className={"shrink-0"} />,
              text: "30-day money-back guarantee",
              id: "price.5",
            },
            {
              icon: <OneH className={"shrink-0"} />,
              text: "100.000 + downloads",
              id: "price.6",
            },
          ]}
          className={
            "[&]:space-y-[16px] [&>li]:font-normal [&>li]:text-[10px] [&>li]:leading-[14px] mb-[32px]"
          }
        />
      </div>
    </div>
  );
};

export default PriceBlock;
