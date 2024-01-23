import React from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import useInput from "../hooks/useInput";

const Modify: React.FC = () => {
  const navigate = useNavigate();
  const {
    state: {
      item: { id, title, content },
    },
  } = useLocation();
  const inputTitle = useInput(title);
  const inputContent = useInput(content);

  const handleCancel = () => {
    alert("글 수정이 취소되었습니다.");
    navigate("/");
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3001/data/${id}`, {
        id: id,
        title: inputTitle.value,
        content: inputContent.value,
      });
      alert("글 수정이 완료되었습니다.");
    } catch (error) {
      console.error(`Error Update : `, error);
      alert("글 수정이 실패했습니다.");
    } finally {
      console.log("before");
      navigate("/");
      console.log("after");
    }
  };

  return (
    <body className="flex flex-col w-screen h-screen justify-center items-center bg-gray-100">
      <section className="flex flex-col w-[90vw] h-[60vh]">
        <Header title="수정하기" />
        <div className="flex flex-col w-full h-full bg-white overflow-y-auto">
          <div className="flex w-[98%] h-[5vh] items-center justify-end">
            <button
              className="flex border-gray-300 border cursor-pointer w-12 justify-center"
              onClick={() => handleUpdate()}
            >
              등록
            </button>
            <button
              className="flex  border-gray-300 border cursor-pointer w-12 justify-center"
              onClick={handleCancel}
            >
              취소
            </button>
          </div>
          <div className="flex border border-black rounded-[8px] w-[80vw] mx-auto my-[3vh]">
            <input
              type="text"
              className="flex ml-1 w-[100%]"
              value={inputTitle.value}
              onChange={inputTitle.onChange}
              placeholder="내용을 입력하세요."
            />
          </div>
          <div className="flex border border-black rounded-[8px] w-[80vw] h-[50%] mx-auto">
            <textarea
              className="flex w-[100%]"
              value={inputContent.value}
              onChange={inputContent.onChange}
              placeholder="내용을 입력하세요."
            />
          </div>
        </div>
      </section>
    </body>
  );
};

export default Modify;
