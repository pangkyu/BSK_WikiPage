import React from "react";

interface ContentNavigationProps {
  cases: number;
  addItem: () => void;
  deleteItem: () => void;
}

const ContentNavigation: React.FC<ContentNavigationProps> = ({
  cases,
  addItem,
  deleteItem,
}) => {
  return (
    <section className="flex w-[85vw] h-10 my-4 mx-auto">
      <div className="flex justify-around items-center">
        <div className="flex bg-blue-100 text-blue-600 w-[20vw] h-[3vh] rounded-lg items-center justify-center ">
          현재 등록 : {cases}
        </div>
        <div className="flex w-[65vw] items-center justify-end">
          <button
            className="flex border-gray-300 border cursor-pointer w-12 justify-center"
            onClick={addItem}
          >
            추가
          </button>
          <button
            className="flex  border-gray-300 border cursor-pointer w-12 justify-center"
            onClick={deleteItem}
          >
            삭제
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentNavigation;
