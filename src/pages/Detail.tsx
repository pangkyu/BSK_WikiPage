import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";

const Detail: React.FC = () => {
  const navigate = useNavigate();

  const {
    state: {
      item: { id, title, content },
    },
  } = useLocation();

  const handleModify = () => {
    navigate(`/modify/${id}`, {
      state: {
        item: { id, title, content },
      },
    });
  };

  return (
    <body className="flex flex-col w-screen h-screen justify-center items-center bg-gray-100">
      <section className="flex flex-col w-[90vw] h-[60vh]">
        <Header title="상세보기" />
        <div className="flex flex-col w-full h-full bg-white overflow-y-auto">
          <div className="flex w-[98%] h-[5vh] items-center justify-end">
            <button
              className="flex border-gray-300 border cursor-pointer w-12 justify-center"
              onClick={handleModify}
            >
              수정
            </button>
            <button className="flex  border-gray-300 border cursor-pointer w-12 justify-center">
              삭제
            </button>
          </div>
          <div className="flex border border-black rounded-[8px] w-[80vw] mx-auto my-[3vh]">
            <p className="flex ml-2">{title}</p>
          </div>
          <div className="flex border border-black rounded-[8px] w-[80vw] h-[50%] mx-auto">
            <p className="flex ml-2 mt-2">{content}</p>
          </div>
        </div>
      </section>
    </body>
  );
};
export default Detail;
