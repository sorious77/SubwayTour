import { Form, FloatingLabel, Button } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { Editor } from "@toast-ui/react-editor";
import { uploadNewPost } from "../Firebase";
import { useNavigate, useLocation } from "react-router-dom";

const Write = ({ user }) => {
  const [title, setTitle] = useState("");
  const contentRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const handleInputTitle = (e) => {
    const {
      target: { value },
    } = e;
    setTitle(value);
  };

  const curTime = () => {
    const date = new Date();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const h = date.getHours();
    const i = date.getMinutes();
    return (
      (date.getFullYear() % 100) +
      "-" +
      (m > 9 ? m : "0" + m) +
      "-" +
      (d > 9 ? d : "0" + d) +
      " " +
      (h > 9 ? h : "0" + h) +
      ":" +
      (i > 9 ? i : "0" + i)
    );
  };

  const handleSubmit = async () => {
    const content = contentRef.current?.getInstance().getHTML();

    const newPost = {
      title,
      content,
      // author: user.displayName,
      createdAt: curTime(),
    };

    console.log(newPost);

    const result = await uploadNewPost(newPost);

    if (!result) {
      alert("An error occurred while posting..");
    } else {
      navigate("/list");
    }
  };

  useEffect(() => {
    const loadPost = () => {
      console.log(location.state);
      /*
      console.log(post);

      if (post) {
        setTitle(post.title);
        contentRef(post.content);
      }*/
    };

    loadPost();
  }, [title]);

  return (
    <Form className="px-4 py-5 d-flex flex-column">
      <FloatingLabel className="mb-3" controlId="title" label="Title">
        <Form.Control
          type="text"
          placeholder="Enter Title"
          onChange={handleInputTitle}
        />
      </FloatingLabel>
      <Editor
        previewStyle="vertical" // 미리보기 스타일 지정
        height="65vh" // 에디터 창 높이
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
