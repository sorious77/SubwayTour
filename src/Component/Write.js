import { Form, FloatingLabel, Button } from "react-bootstrap";
import { useRef, useState } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { uploadNewPost } from "../Firebase";
import { useNavigate } from "react-router-dom";

const Write = ({ user }) => {
  const [title, setTitle] = useState("");
  const contentRef = useRef();
  const navigate = useNavigate();

  const handleInputTitle = (e) => {
    const {
      target: { value },
    } = e;
    setTitle(value);
  };

  const handleSubmit = async () => {
    const content = contentRef.current?.getInstance().getHTML();

    const newPost = { title, content, author: user.displayName };

    console.log(newPost);

    const result = await uploadNewPost(newPost);

    if (!result) {
      alert("An error occurred while posting..");
    } else {
      navigate("/list");
    }
  };

  return (
    <Form className="px-4 pt-5 d-flex flex-column">
      <FloatingLabel className="mb-3" controlId="title" label="Title">
        <Form.Control
          type="text"
          placeholder="Enter Title"
          onChange={handleInputTitle}
        />
      </FloatingLabel>
      <Editor
        previewStyle="vertical" // 미리보기 스타일 지정
        height="1000px" // 에디터 창 높이
        initialEditType="markdown" // 초기 입력모드 설정(디폴트 markdown)
        toolbarItems={[
          // 툴바 옵션 설정
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
          ["ul", "ol", "task", "indent", "outdent"],
          ["table", "image", "link"],
          ["code", "codeblock"],
        ]}
        ref={contentRef}
      />
      <Button
        className="mt-3 align-self-end"
        variant="outline-primary"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Form>
  );
};

export default Write;
