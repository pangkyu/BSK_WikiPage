import React from "react";
import { useNavigate } from "react-router-dom";

interface ContentBoxProps {
  title: string;
  id?: number;
}

const ContentBox: React.FC<ContentBoxProps> = ({ title, id }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/detail/${id}`);
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
      <div>{title}</div>
    </section>
  );
};

export default ContentBox;
