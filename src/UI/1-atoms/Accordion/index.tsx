import React, { useState } from "react";
import classnames from "classnames";
import Heading from "../Heading";
import { ReactComponent as ArrowDown } from "../Icons/24px/ArrowDown.svg";

interface AccordionProps {
  title: string;
  accordionId: string;
  isExpanded?: boolean;
  level?: number;
  sequence: number;
}

const Accordion: React.FC<
  AccordionProps & React.AllHTMLAttributes<HTMLDivElement>
> = ({
  title,
  accordionId,
  children,
  isExpanded = false,
  level = 3,
  sequence,
  ...props
}) => {
  const [open, toggleOpen] = useState(isExpanded);

  return (
    <section {...props} className={classnames("flex w-full", props.className)}>
      <div
        className={classnames(
          { "bg-downy": open },
          { "bg-luckyPoint": !open },
          "w-[1.75rem] h-[1.75rem] rounded-full mr-[0.5rem] text-center pt-[1px]"
        )}
      >
        <span className={"text-white font-bold leading-[22px]"}>
          {sequence}
        </span>
      </div>
      <details
        open={open}
        aria-expanded={open}
        id={`accordion-${accordionId}`}
        aria-controls={`sec-${accordionId}`}
        onToggle={() => toggleOpen(!open)}
        aria-label={`accordion-${accordionId}`}
        className={"grow"}
      >
        <>
          <summary className={"flex justify-between items-center"}>
            <Heading
              className={classnames(
                { "text-downy": open },
                { "text-luckyPoint": !open },
                "mr-auto pt-[3px] font-normal text-base leading-[22px]"
              )}
              level={level}
            >
              {title}
            </Heading>
            <ArrowDown
              className={classnames(
                { "-rotate-180 [&>path]:fill-luckyPoint": !open },
                "shrink-0 pt-[3px]"
              )}
            />
          </summary>
        </>
        <p
          id={`sec-${accordionId}`}
          role="region"
          aria-labelledby={`accordion-${accordionId}`}
          className={
            "mt-[0.625rem] font-normal text-luckyPoint text-sm leading-[18px]"
          }
        >
          {children}
        </p>
      </details>
    </section>
  );
};

export default Accordion;
