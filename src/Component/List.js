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
              <col width="5%" />
              <col width="70%" />
              <col width="10%" />
              <col width="15%" />
            </colgroup>
            <thead>
              <tr>
                <th className="text-center">Index</th>
                <th className="px-3">Title</th>
                <th className="text-center">Author</th>
                <th className="px-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, idx) => (
                <tr key={idx}>
                  <td className="align-middle text-center">{idx + 1}</td>
                  <td className="align-middle px-3">
                    <Link to={`/post/${post.id}`}>{post.title}</Link>
                  </td>
                  <td className="align-middle text-center">{post.author}</td>
                  <td className="align-middle px-3">{post.createdAt}</td>
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
