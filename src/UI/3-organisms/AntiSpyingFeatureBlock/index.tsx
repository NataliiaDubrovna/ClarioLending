import React, { useRef } from "react";
import Heading from "../../1-atoms/Heading";
import ULListItem from "../../2-molecules/UnorderedList";
import classnames from "classnames";
import useOnScreen from "../../../utils/useOnScreen";

interface AntiSpyingFeatureBlockProps {
  title: string;
  img: JSX.Element;
  subtitle: string;
  featureList: { icon: JSX.Element; text: string; id: string }[];
  theme: { color: string; gradient: string };
}

const AntiSpyingFeatureBlock: React.FC<
  AntiSpyingFeatureBlockProps & React.AllHTMLAttributes<HTMLDivElement>
> = ({ theme, title, img, subtitle, featureList, ...props }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  if (isOnScreen) {
    console.log({ title });
  }

  const bg: { [key: string]: string } = {
    "light-purple": "after:bg-light-purple",
    "gradient-purple": "after:bg-gradient-purple",
    "light-violet": "after:bg-light-violet",
    "light-green": "after:bg-light-green",
    purple: "after:bg-purple",
  };

  return (
    <section
      ref={elementRef}
      {...props}
      className={classnames("pb-[40px] px-[24px]", props.className)}
    >
      <div
        className={`${
          bg[theme.gradient]
        } relative w-full h-[372px] mb-[15px] rounded-sm after:content-[''] after:w-full after:h-[46px] after:block after:absolute after:bottom-[1rem]
        `}
        style={{ backgroundColor: theme.color }}
      >
        {img}
      </div>
      <Heading
        level={3}
        className={
          "mb-[2px] text-center font-bold text-lg leading-[22px] text-luckyPoint tracking-[-0.417021px]"
        }
      >
        {title}
      </Heading>
      <p
        className={
          "mb-[15px] text-center font-normal text-base leading-[20px] text-luckyPoint tracking-[-0.248889px]"
        }
      >
        {subtitle}
      </p>
      <ULListItem items={featureList} />
    </section>
  );
};

export default AntiSpyingFeatureBlock;
