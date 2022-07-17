import { Form, FloatingLabel, Button } from "react-bootstrap";
import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

const Write = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  const handleInputTitle = (e) => {
    const {
      target: { value },
    } = e;
    setTitle(value);
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
      <div data-color-mode="light">
        <MDEditor height={1000} value={value} onChange={setValue} />
      </div>
      <Button className="mt-3 align-self-end" variant="outline-primary">
        Submit
      </Button>

      <MDEditor.Markdown
        style={{ padding: 15 }}
        source={value}
        linkTarget="_blank"
      />
    </Form>
  );
};

export default Write;
