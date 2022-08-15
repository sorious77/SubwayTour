import { Link } from "react-router-dom";
import { getPosts, getPostCount } from "../Firebase";
import { useState, useEffect } from "react";
import { Container, Table, Pagination } from "react-bootstrap";

const List = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [size, setSize] = useState(0);
  const [page, setPage] = useState(1);

  const getPostLists = async () => {
    const posts = await getPosts(page);
    const size = await getPostCount();

    setPosts(posts);
    setLoading(false);
    setSize(size);
  };

  useEffect(() => {
    getPostLists();
  }, []);

  return (
    <Container className="my-5 d-flex flex-column">
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          <Table striped bordered hover>
            <colgroup>
              <col width="10%" />
              <col width="60%" />
              <col width="15%" />
              <col width="15%" />
            </colgroup>

            <thead>
              <tr>
                <th>Index</th>
                <th>Title</th>
                <th>Author</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, idx) => (
                <tr key={idx}>
                  <td className="align-middle">{idx + 1}</td>
                  <td className="align-middle">
                    <Link to={`/post/${post.id}`}>{post.title}</Link>
                  </td>
                  <td className="align-middle">{post.author}</td>
                  <td className="align-middle">{post.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination className="align-self-center">
            <Pagination.Prev />
            <Pagination.Item key={1} active={1 === 1}>
              1
            </Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </>
      )}
    </Container>
  );
};

export default List;
