import { Button, Container } from "react-bootstrap";
import { Viewer } from "@toast-ui/react-editor";
import { useState, useEffect } from "react";
import { getPostById } from "../Firebase";
import { useLocation, useNavigate, Link } from "react-router-dom";
import DeleteModal from "../Component/DeleteModal";

const Post = () => {
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState("");
  const [post, setPost] = useState({});
  const [show, setShow] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const getDoc = async () => {
    const {
      state: { id },
    } = location;
    setId(id);

    const result = await getPostById(id);

    if (result) {
      setLoading(false);
      setPost({ ...result, id });
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  const handleDelete = async () => {
    // 진짜 삭제?
    setShow(true);
    // deletePost(id);
  };

  useEffect(() => {
    getDoc();
    console.log(location.state);
  }, []);

  return (
    <Container className="px-4 py-5 d-flex flex-column align-content-start h-100">
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          <div
            className="mb-4"
            style={{ width: "20px", cursor: "pointer" }}
            onClick={goBack}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </div>
          <h1>{post.title}</h1>
          <div className="border p-4 rounded my-4" style={{ height: "50vh" }}>
            <Viewer initialValue={post.content} />
          </div>
          <div className="d-flex justify-content-end" style={{ gap: "10px" }}>
            <Link to="/write" state={{ post }}>
              <Button variant="outline-primary">수정</Button>
            </Link>
            <Button onClick={handleDelete} variant="outline-primary">
              삭제
            </Button>
            <DeleteModal show={show} setShow={setShow} id={id} />
          </div>
        </>
      )}
    </Container>
  );
};

export default Post;
