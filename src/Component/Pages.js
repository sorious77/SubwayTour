import { Pagination } from "react-bootstrap";

const Pages = ({ pages, prevPage, nextPage }) => {
  return (
    <Pagination className="align-self-center">
      <Pagination.Prev onClick={prevPage} />
      {pages}
      <Pagination.Next onClick={nextPage} />
    </Pagination>
  );
};

export default Pages;
