import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import ContentNavigation from "../components/ContentNavigation";
import ContentBox from "../components/ContentBox";
import Pagination from "../components/Pagination";
import { lecture } from "../interfaces/lecture";

const Detail: React.FC = () => {
  const [jsonData, setJsonData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const totalPages = Math.ceil(jsonData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = jsonData.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
  };

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:3000/data/data.json`);
      setJsonData(response.data.reverse());
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <body className="flex flex-col w-screen h-screen justify-center items-center bg-gray-100">
      <section className="flex flex-col w-[90vw] h-[60vh]">
        <Header title="상세보기" />
        <div className="flex flex-col w-full h-full bg-white overflow-y-auto">
          <ContentNavigation cases={jsonData.length} />
          {/* <ContentBox title="제목" />
          {currentData.map((item: lecture) => {
            return <ContentBox key={item.id} title={item.title} />;
          })} */}
        </div>
        <footer className="flex w-full h-10 bg-blue-500 justify-around items-center">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            onItemsPerPageChange={handleItemsPerPageChange}
          />
          <div className="flex w-[20%] justify-center">
            <p>{`보기 ${startIndex + 1}-${endIndex}/${jsonData.length}`}</p>
          </div>
        </footer>
      </section>
    </body>
  );
};
export default Detail;
