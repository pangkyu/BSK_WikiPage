import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import useInput from "../hooks/useInput";
import { lecture } from "../interfaces/lecture";
// import Editor from "../components/Editor";

const Edit: React.FC = () => {
  const navigate = useNavigate();
  const title = useInput("");
  const content = useInput("");

  const handleCancel = () => {
    alert("글 등록이 취소되었습니다.");
    navigate("/");
  };

  const handlePost = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/data`);
      const maxId = Math.max(...response.data.map((item: lecture) => item.id));

      await axios.post(`http://localhost:3001/data`, {
        id: maxId + 1,
        title: title.value,
        content: content.value,
      });

      alert("글 등록이 완료되었습니다.");
      navigate("/test");
    } catch (error) {
      console.error(`Error Post : `, error);
      alert("글 등록이 실패했습니다.");
    } finally {
    }
  };

  return (
    <body className="flex flex-col w-screen h-screen justify-center items-center bg-gray-100">
      <section className="flex flex-col w-[90vw] h-[60vh]">
        <Header title="강의 등록" />
        <div className="flex flex-col w-full h-full bg-white overflow-y-auto">
          <div className="flex w-[98%] h-[5vh] items-center justify-end">
            <button
              className="flex border-gray-300 border cursor-pointer w-12 justify-center"
              onClick={() => handlePost()}
            >
              등록
            </button>
            <button
              className="flex  border-gray-300 border cursor-pointer w-12 justify-center"
              onClick={() => handleCancel()}
            >
              취소
            </button>
          </div>
          <div className="flex border border-black rounded-[8px] w-[80vw] mx-auto my-[3vh]">
            <input
              type="text"
              className="flex ml-1 w-[100%]"
              value={title.value}
              onChange={title.onChange}
              placeholder="제목을 입력하세요."
            />
          </div>
          <div className="flex border border-black rounded-[8px] w-[80vw] h-[50%] mx-auto">
            {/* <Editor handleQuill={() => handleQuill("")} /> */}

            <textarea
              className="flex w-[100%]"
              value={content.value}
              onChange={content.onChange}
              placeholder="내용을 입력하세요."
            />
          </div>
        </div>
      </section>
    </body>
  );
};
export default Edit;
