import React from "react";
import { useNavigate } from "react-router-dom";
import { lecture } from "../interfaces/lecture";

interface ContentBoxProps {
  item: lecture;
  selected: boolean;
  onSelect: (checked: boolean) => void;
}

const ContentBox: React.FC<ContentBoxProps> = ({
  item,
  selected,
  onSelect,
}) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/detail/${item.id}`, {
      state: { item },
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSelect(e.target.checked);
  };

  return (
    <section className="flex flex-row w-[85vw] h-10 my-5 mx-auto cursor-pointer">
      <div className="flex w-12">
        <input
          type="checkbox"
          checked={selected}
          onChange={handleCheckboxChange}
        />
      </div>
      <p
        className="flex w-8 justify-center items-center"
        onClick={handleOnClick}
      >
        |
      </p>
      <div className="flex w-[100%] items-center" onClick={handleOnClick}>
        {item.title}
      </div>
    </section>
  );
};

export default ContentBox;
