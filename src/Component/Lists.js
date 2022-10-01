import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Lists = ({ active, posts }) => {
  return (
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
            <td className="align-middle text-center">
              {(active - 1) * 10 + idx + 1}
            </td>
            <td className="align-middle px-3">
              <Link
                to={`/post/detail/${(active - 1) * 10 + idx + 1}`}
                state={{ id: post.id }}
              >
                {post.title}
              </Link>
            </td>
            <td className="align-middle text-center">{post.author}</td>
            <td className="align-middle px-3">
              {post.createdAt.substring(0, 14)}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Lists;
