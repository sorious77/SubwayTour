import styled from "styled-components";
import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  margin: 1vh 0;
`;

const List = ({ stations }) => {
  const content = "";

  return (
    <Container>
      <Viewer initialValue={content} />
    </Container>
  );
};

export default List;
