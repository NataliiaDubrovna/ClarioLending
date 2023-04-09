import React, { useState } from "react";
import Accordion from "../../1-atoms/Accordion";
import { ACCORDIONDATA } from "../../../fixtures/Accordion";

interface AccordionsBlockProps {
  accordionData?: { title: string; content: string; id: string }[];
}

const AccordionsBlock: React.FC<
  AccordionsBlockProps & React.AllHTMLAttributes<HTMLDivElement>
> = ({ accordionData, ...props }) => {
  const [accData, setAccData] = useState(
    accordionData ? accordionData : ACCORDIONDATA
  );

  return (
    <div>
      {accData.map((el, ix) => {
        return (
          <React.Fragment key={el.id}>
            <Accordion
              sequence={ix + 1}
              accordionId={el.id}
              title={el.title}
              className={"w-full"}
            >
              {el.content}
            </Accordion>
            {ix !== accData.length - 1 && (
              <span className="inline-block	ml-[14px] h-[40px] w-0 border-l-[1px] border-dashed border-blue-500 " />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AccordionsBlock;
