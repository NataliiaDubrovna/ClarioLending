import React, { useRef } from "react";
import CardCarousel from "../../2-molecules/CarouselCard";
import { testimonials } from "./Testimonials";
import useOnScreen from "../../../utils/useOnScreen";

interface CarouselProps {}

const Carousel: React.FC<
  CarouselProps & React.AllHTMLAttributes<HTMLDivElement>
> = ({ ...props }) => {
  return (
    <CardCarousel
      title={testimonials.title}
      id={testimonials.id}
      items={testimonials.items}
      className={""}
    />
  );
};

export default Carousel;
