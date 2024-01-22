import React from "react";

interface ContentBoxProps {
  title: string;
}

const ContentBox: React.FC<ContentBoxProps> = ({ title }) => {
  return (
    <section className="flex flex-row w-[85vw] h-10 my-5 mx-auto cursor-pointer">
      <div className="flex w-12">
        <input type="checkbox" />
      </div>
      <p className="flex w-8 justify-center">|</p>
      <div>{title}</div>
    </section>
  );
};

export default ContentBox;
