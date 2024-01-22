import React from "react";
import { useNavigate } from "react-router-dom";
import { lecture } from "../interfaces/lecture";

interface ContentBoxProps {
  item: lecture;
}

const ContentBox: React.FC<ContentBoxProps> = ({ item }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/detail/${item.id}`, {
      state: { item },
    });
  };
  return (
    <section
      className="flex flex-row w-[85vw] h-10 my-5 mx-auto cursor-pointer"
      onClick={handleOnClick}
    >
      <div className="flex w-12">
        <input type="checkbox" />
      </div>
      <p className="flex w-8 justify-center">|</p>
      <div>{item.title}</div>
    </section>
  );
};

export default ContentBox;
