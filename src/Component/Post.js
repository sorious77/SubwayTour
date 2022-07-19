import { Container } from "react-bootstrap";
import { Viewer } from "@toast-ui/react-editor";
import { useState } from "react";
import { useEffect } from "react";
import { getPostById } from "../Firebase";
import { useLocation } from "react-router-dom";

const Post = () => {
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState("");
  const [post, setPost] = useState({});

  const location = useLocation();

  const getDoc = async () => {
    const id = location.pathname.substring(6);
    setId(id);

    const result = await getPostById(id);

    if (result) {
      setLoading(false);
      setPost(result);
    }
  };

  const title = "Hoang";
  const content =
    "<h1>this</h1><p>is</p><p>hoang</p><blockquote><p>world</p></blockquote>";

  useEffect(() => {
    getDoc();
  }, []);

  return (
    <Container className="px-4 pt-5 d-flex flex-column align-content-start h-100">
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          <h1>{post.title}</h1>
          <Viewer initialValue={post.content} />
        </>
      )}
    </Container>
  );
};

export default Post;
