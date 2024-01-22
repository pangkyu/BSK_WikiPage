import React from "react";

interface ContentNavigationProps {
  cases: number;
}

const ContentNavigation: React.FC<ContentNavigationProps> = ({ cases }) => {
  return (
    <section className="flex w-97 h-10 my-5 mx-auto">
      <div className="flex items-center">
        <div className="flex bg-blue-100 text-blue-600 w-15vw h-80% items-center justify-center rounded-8px text-1rem sm:w-10vw sm:text-1.2rem lg:w-8vw xl:text-1.4rem xl:w-7vw">
          현재 등록 : {cases}
        </div>

        <div className="flex">
          <button className="flex bg-white border-gray-300 border rounded-8px font-jejuGothic w-10vw justify-center m-0.3rem cursor-pointer sm:w-8vw lg:w-6vw xl:w-4vw">
            추가
          </button>
          <button className="flex bg-white border-gray-300 border rounded-8px font-jejuGothic w-10vw justify-center m-0.3rem cursor-pointer sm:w-8vw lg:w-6vw xl:w-4vw">
            삭제
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentNavigation;
