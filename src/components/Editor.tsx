import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface EditorProps {
  handleQuill: (value: any) => void;
}

const Editor: React.FC<EditorProps> = ({ handleQuill }) => {
  const [quillText, setQuillText] = useState("");

  useEffect(() => {
    handleQuill(quillText);
  }, [quillText, handleQuill]);

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["image"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "image",
  ];
  return (
    <>
      <ReactQuill
        theme="snow"
        value={quillText}
        onChange={(e) => setQuillText(e)}
        modules={modules}
        formats={formats}
        style={{
          width: "100vw",
          height: "80%",
        }}
      />
    </>
  );
};

export default Editor;
