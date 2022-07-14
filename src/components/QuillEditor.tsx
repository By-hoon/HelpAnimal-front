import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

const QuillEditor = () => {
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ align: [] }],

      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],

      [{ size: ["small", false, "large", "huge"] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["link"],
      [{ color: [] }, { background: [] }],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const { quill, quillRef } = useQuill({ modules });

  return (
    <>
      <div ref={quillRef} />
    </>
  );
};

export default QuillEditor;
