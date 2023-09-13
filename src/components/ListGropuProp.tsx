import { useState } from "react";

interface Props {
  items: String[];
  heading: String;
  clicked: (item: String) => void;
}
const ListGropuProp = ({ items, heading, clicked }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item to display</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item.toString()}
            onClick={() => {
              setSelectedIndex(index);
              clicked(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGropuProp;
