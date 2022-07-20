import { Link } from "react-router-dom";
import { getPosts } from "../Firebase";
import { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";

const List = ({ stations }) => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const getPostLists = async () => {
    const posts = await getPosts();

    console.log(posts);

    setPosts(posts);
    setLoading(false);
  };

  useEffect(() => {
    getPostLists();
  }, []);

  return (
    <Container className="my-5">
      {loading ? (
        <>Loading...</>
      ) : (
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
      )}
    </Container>
  );
};

export default List;
