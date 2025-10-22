// "use client";

// import { Editor } from "@tinymce/tinymce-react";
// import { useRef } from "react";

// export default function TinyEditor() {
//   const editorRef = useRef<any>(null);

//   const logContent = () => {
//     if (editorRef.current) {
//       console.log("Editor content:", editorRef.current.getContent());
//     } else {
//       console.log("Editor not initialized yet");
//     }
//   };

//   return (
//     <div>
//       {/* <Editor
//         onInit={(_evt, editor) => (editorRef.current = editor)}
//         apiKey="uuzojnptfluvig4hk9rid1nmsjm1azxbu50rzoyxfjvxlnad"
//         init={{
//           height: 500,
//           menubar: false,
//           plugins: [
//             "advlist",
//             "anchor",
//             "autolink",
//             "help",
//             "image",
//             "link",
//             "lists",
//             "searchreplace",
//             "table",
//             "wordcount",
//           ],
//           toolbar:
//             "undo redo | blocks | " +
//             "bold italic forecolor | alignleft aligncenter " +
//             "alignright alignjustify | bullist numlist outdent indent | " +
//             "removeformat | help",
//           uploadcare_filters: [
//             { name: "none" },
//             { name: "adaris", amount: -100, label: "Vintage Fade" },
//             { name: "adaris", amount: 0, label: "Base" },
//             { name: "adaris", amount: 50, label: "Light" },
//             { name: "adaris", amount: 100, label: "Standard" },
//             { name: "adaris", amount: 200, label: "Intense" },
//             { name: "zevcen", amount: 200, label: "Glow Boost" },
//             { name: "galen", amount: 80, label: "Soft Focus" },
//             { name: "carris", amount: 120, label: "Sharp Contrast" },
//             { name: "ferand", amount: 60, label: "Light Touch" },
//             { name: "sorahel", amount: -50, label: "Night Mood" },
//           ],
//           content_style:
//             "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
//         }}
//       /> */}
//       <Editor
//         apiKey="uuzojnptfluvig4hk9rid1nmsjm1azxbu50rzoyxfjvxlnad"
//         onInit={(evt, editor) => (editorRef.current = editor)}
//         // value={content}
//         // onEditorChange={(newText) => setContent(newText)}
//         init={{
//           height: 600,
//           menubar: true,
//           plugins: [
//             "advlist",
//             "autolink",
//             "lists",
//             "link",
//             "image",
//             "charmap",
//             "preview",
//             "anchor",
//             "searchreplace",
//             "visualblocks",
//             "code",
//             "fullscreen",
//             "insertdatetime",
//             "media",
//             "table",
//             "help",
//             "wordcount",
//           ],
//           toolbar:
//             "undo redo | blocks | fontsizeselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media | code preview",
//           fontsize_formats:
//             "8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 40pt 56pt 64pt 72pt",
//           automatic_uploads: true,
//           paste_data_images: true,
//           images_reuse_filename: true,
//           file_picker_types: "image",
//           images_upload_handler: async (blobInfo) => {
//             return new Promise((resolve, reject) => {
//               const formData = new FormData();
//               formData.append("image", blobInfo.blob(), blobInfo.filename());

//               // fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/blogs/upload`, {
//               //   method: "POST",
//               //   body: formData,
//               //   headers: {
//               //     Authorization: `Bearer ${localStorage.getItem("token")}`,
//               //   },
//               // })
//               //   .then((response) => {
//               //     if (!response.ok) {
//               //       throw new Error(`HTTP Error: ${response.status}`);
//               //     }
//               //     return response.json();
//               //   })
//               //   .then((data) => {
//               //     resolve(data.data.url);
//               //   })
//               //   .catch((err) => {
//               //     console.error("Image upload failed", err);
//               //     reject(`Image upload failed: ${err.message}`);
//               //   });
//             });
//           },
//           content_style:
//             "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
//         }}
//       />

//       <button
//         onClick={logContent}
//         className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//       >
//         Submit
//       </button>
//     </div>
//   );
// }
// "use client";
// import { Editor } from "@tinymce/tinymce-react";
// import { useRef } from "react";
// // import "./App.css";

// export default function TinyEditor() {
//   const editorRef = useRef(null);
//   const log = () => {
//     if (editorRef.current) {
//       console.log(editorRef.current.getContent());
//     }
//   };
//   return (
//     <>
//       <Editor
//         tinymceScriptSrc="/js/tinymce.js"
//         licenseKey="gpl"
//         onInit={(_evt, editor) => (editorRef.current = editor)}
//         initialValue="<p>This is the initial content of the editor.</p>"
//         init={{
//           height: 500,
//           menubar: false,
//           plugins: [
//             "advlist",
//             "autolink",
//             "lists",
//             "link",
//             "image",
//             "charmap",
//             "anchor",
//             "searchreplace",
//             "visualblocks",
//             "code",
//             "fullscreen",
//             "insertdatetime",
//             "media",
//             "table",
//             "preview",
//             "help",
//             "wordcount",
//           ],
//           toolbar:
//             "undo redo | blocks | " +
//             "bold italic forecolor | alignleft aligncenter " +
//             "alignright alignjustify | bullist numlist outdent indent | " +
//             "removeformat | help",
//           content_style:
//             "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
//         }}
//       />
//       <button onClick={log}>Log editor content</button>
//     </>
//   );
// }

"use client";

import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

export default function TinyEditor() {
  const editorRef = useRef<any>(null);

  const logContent = () => {
    if (editorRef.current) {
      console.log("Editor content:", editorRef.current.getContent());
    }
  };

  return (
    <div>
      <Editor
        apiKey="uuzojnptfluvig4hk9rid1nmsjm1azxbu50rzoyxfjvxlnad"
        onInit={(_evt, editor) => (editorRef.current = editor)}
        init={{
          height: 600,
          menubar: true,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | fontsizeselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media | code preview",

          fontsize_formats:
            "8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 40pt 56pt 64pt 72pt",

          automatic_uploads: true,
          paste_data_images: true,
          file_picker_types: "image",

          file_picker_callback: (cb) => {
            const input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");
            input.onchange = function (this: HTMLInputElement) {
              const file = this.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = function () {
                  const id = "blobid" + new Date().getTime();
                  const blobCache = (window as any).tinymce.activeEditor
                    .editorUpload.blobCache;
                  const base64 = (reader.result as string).split(",")[1];
                  const blobInfo = blobCache.create(id, file, base64);
                  blobCache.add(blobInfo);
                  cb(blobInfo.blobUri(), { title: file.name });
                };
                reader.readAsDataURL(file);
              }
            };
            input.click();
          },

          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />

      <div className="flex justify-end">
        <button
          onClick={logContent}
          className="px-4 py-2 mt-6 bg-[#1F274B] cursor-pointer text-[14px] text-[#FFF] leading-[117%]"
        >
          Publish
        </button>
      </div>
    </div>
  );
}
