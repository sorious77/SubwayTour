import styled from "styled-components";
import { Form, FloatingLabel } from "react-bootstrap";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  margin: 1vh 0;
`;

const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleInputTitle = (e) => {
    const {
      target: { value },
    } = e;

    setTitle(value);
  };

  const handleInputContent = (e) => {
    const {
      target: { value },
    } = e;

    setContent(value);
  };

  return (
    <Container>
      <Form>
        <FloatingLabel className="mb-3" controlId="title" label="Title">
          <Form.Control
            type="text"
            placeholder="Enter Title"
            onInput={handleInputTitle}
          />
        </FloatingLabel>
        <FloatingLabel className="mb-3" controlId="content" label="Content">
          <Form.Control
            as="textarea"
            placeholder="Enter Content"
            style={{ height: "200px" }}
            onInput={handleInputContent}
          />
        </FloatingLabel>
      </Form>
    </Container>
  );
};

export default Write;
