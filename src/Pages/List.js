import { Link } from "react-router-dom";
import { fireStore } from "../Firebase";
import { useState, useEffect } from "react";
import { Container, Pagination, Button } from "react-bootstrap";
import Pages from "../Component/Pages";
import Lists from "../Component/Lists";
import { collection, query, onSnapshot } from "firebase/firestore";

const List = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [curPosts, setCurPosts] = useState([]);
  const [active, setActive] = useState(1);
  const [pages, setPages] = useState([]);

  const handleMovePage = async ({ target: { id: page } }) => {
    console.log(page);

    pagination(posts, +page);
  };

  const prevPage = () => {
    if (active === 1) {
      return;
    }

    pagination(posts, active - 1);
  };

  const nextPage = () => {
    if (active === Math.round(51 / 10) + 1) {
      return;
    }

    pagination(posts, active + 1);
  };

  const pagination = (posts, activePage = 1) => {
    const pages = [];

    const size = posts.length;

    setActive(activePage);
    setCurPosts(posts.slice((activePage - 1) * 10, activePage * 10));

    console.log(size, activePage, curPosts);

    for (let i = 0; i <= Math.round(size / 10); i++) {
      pages.push(
        <Pagination.Item
          key={i}
          active={activePage === i + 1}
          onClick={handleMovePage}
          id={i + 1}
        >
          {i + 1}
        </Pagination.Item>
      );
    }

    setPages(pages);
  };

  useEffect(() => {
    const q = query(collection(fireStore, "post"));

    onSnapshot(q, (snapshot) => {
      const posts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(posts);
      setPosts(posts);
      pagination(posts, 1);
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
          <Lists posts={curPosts} active={active} />
          <Pages
            className="align-self-center"
            pages={pages}
            prevPage={prevPage}
            nextPage={nextPage}
          />
          <Button
            onClick={() => {
              console.log(posts);
            }}
          >
            Log
          </Button>
        </>
      )}
    </Container>
  );
};

export default List;
