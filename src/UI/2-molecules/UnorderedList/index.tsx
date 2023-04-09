import React from "react";
import ListItem from "../../1-atoms/ListItem";
import classnames from "classnames";

interface ULListItemProps {
  items: { icon: JSX.Element; text: string; id: string }[];
}

const ULListItem: React.FC<
  ULListItemProps & React.AllHTMLAttributes<HTMLUListElement>
> = ({ items, ...props }) => {
  // console.log({ items });
  return (
    <ul {...props} className={classnames("space-y-[15px]", props.className)}>
      {items.map((item, ix) => (
        <ListItem key={`${item.id}`} icon={item.icon}>
          {item.text}
        </ListItem>
      ))}
    </ul>
  );
};

export default ULListItem;
