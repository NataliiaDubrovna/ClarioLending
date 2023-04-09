import React from "react";

interface HeadingProps {
  level: number;
}
const Heading = ({
  level,
  ...props
}: HeadingProps & React.HTMLAttributes<HTMLHeadingElement>) => {
  const Element = `h${level}`;
  return <Element {...props} />;
};

export default Heading;
