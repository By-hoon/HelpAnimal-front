import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { useEffect } from "react";

interface QuillEditorProps {
  initialValue?: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

const QuillEditor = ({ initialValue, setContent }: QuillEditorProps) => {
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

  useEffect(() => {
    if (quill) {
      if (initialValue) {
        quill.clipboard.dangerouslyPasteHTML(initialValue);
      }
      quill.on("text-change", () => {
        setContent(quill.root.innerHTML);
      });
    }
  }, [quill]);

  return (
    <>
      <div ref={quillRef} />
    </>
  );
};

export default QuillEditor;
