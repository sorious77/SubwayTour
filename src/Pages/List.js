import { Link } from "react-router-dom";
import { fireStore } from "../Firebase";
import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import Lists from "../Component/Lists";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

const List = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(fireStore, "post"), orderBy("createdAt"));

    onSnapshot(q, (snapshot) => {
      const posts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setPosts(posts);
      setLoading(false);
    });
  }, []);

  return (
    <Container className="my-5 d-flex flex-column">
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          <Link to="/write" className="align-self-end mb-4">
            <Button variant="outline-primary">글쓰기</Button>
          </Link>
          <Lists posts={posts} />
        </>
      )}
    </Container>
  );
};

export default List;
