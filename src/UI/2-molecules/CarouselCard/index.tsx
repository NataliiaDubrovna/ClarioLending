import React from "react";
import Flickity from "react-flickity-component";
import classnames from "classnames";
import Heading from "../../1-atoms/Heading";

interface CardCarouselProps {
  title: string;
  id: string;
  level?: number;
  items: JSX.Element[];
}

function CardCarousel({
  title,
  id,
  level = 2,
  items,
  className,
  ...props
}: CardCarouselProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={classnames("overflow-hidden pt-[40px] pb-[64px]", className)}
      {...props}
    >
      <Heading
        level={level}
        className={classnames(
          "mb-[30px] text-center text-center font-bold text-[26px] leading-[30px] text-luckyPoint tracking-[-0.44px]"
        )}
      >
        {title}
      </Heading>
      <Flickity
        className={classnames("card-carousel py-5 space-x-[12px]")}
        options={{ groupCells: true, initialIndex: 1 }}
      >
        {items.map((item, ix) => (
          <div key={id + ix} className={"h-fit shrink-0"}>
            {item}
          </div>
        ))}
      </Flickity>
    </section>
  );
}

export default CardCarousel;
