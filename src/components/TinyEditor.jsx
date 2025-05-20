// components/TinyEditor.jsx
import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const TinyEditor = ({ name, value, onChange }) => {
  return (
    <Editor
      apiKey="807ieb4ilc5c1ogcgdnxtil4qd9nttlii4hfghdfts1gm18w" // Optional: Replace with your TinyMCE API key
      value={value}
      onEditorChange={(newValue) => {
        onChange({
          target: {
            name,
            value: newValue,
          },
        });
      }}
      init={{
        height: 300,
        menubar: false,
        plugins: [
          "advlist autolink lists link image charmap preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table code help wordcount",
        ],
        toolbar:
          "undo redo | formatselect | bold italic | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      }}
    />
  );
};

export default TinyEditor;
