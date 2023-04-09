import React from "react";
import classnames from "classnames";

interface CheckListItemProps {
  icon: JSX.Element;
}

const ListItem: React.FC<
  CheckListItemProps & React.AllHTMLAttributes<HTMLLIElement>
> = ({ icon, children, ...props }) => {
  return (
    <li
      {...props}
      className={classnames(
        "space-x-[0.5rem] flex list-none items-center font-bold text-luckyPoint text-[14px] leading-[18px]",
        props.className
      )}
    >
      {icon}
      <span>{children}</span>
    </li>
  );
};

export default ListItem;
