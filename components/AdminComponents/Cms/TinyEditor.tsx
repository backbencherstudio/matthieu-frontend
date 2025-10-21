"use client";

import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

export default function TinyEditor() {
  const editorRef = useRef<any>(null);

  const logContent = () => {
    if (editorRef.current) {
      console.log("Editor content:", editorRef.current.getContent());
    } else {
      console.log("Editor not initialized yet");
    }
  };

  return (
    <div>
      <Editor
        onInit={(_evt, editor) => (editorRef.current = editor)}
        apiKey="uuzojnptfluvig4hk9rid1nmsjm1azxbu50rzoyxfjvxlnad"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "anchor",
            "autolink",
            "help",
            "image",
            "link",
            "lists",
            "searchreplace",
            "table",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          uploadcare_filters: [
            { name: "none" },
            { name: "adaris", amount: -100, label: "Vintage Fade" },
            { name: "adaris", amount: 0, label: "Base" },
            { name: "adaris", amount: 50, label: "Light" },
            { name: "adaris", amount: 100, label: "Standard" },
            { name: "adaris", amount: 200, label: "Intense" },
            { name: "zevcen", amount: 200, label: "Glow Boost" },
            { name: "galen", amount: 80, label: "Soft Focus" },
            { name: "carris", amount: 120, label: "Sharp Contrast" },
            { name: "ferand", amount: 60, label: "Light Touch" },
            { name: "sorahel", amount: -50, label: "Night Mood" },
          ],
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <button
        onClick={logContent}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </div>
  );
}
