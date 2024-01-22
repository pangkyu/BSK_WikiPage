import React from "react";

interface ContentBoxProps {
  title: string;
}

const ContentBox: React.FC<ContentBoxProps> = ({ title }) => {
  return (
    <section className="flex flex-row w-97 h-10 my-5 mx-auto">
      <div>
        <input type="checkbox" />
      </div>
      <p>|</p>
      <div>{title}</div>
    </section>
  );
};

export default ContentBox;
