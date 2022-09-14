import { Modal, Button } from "react-bootstrap";
import { deletePost } from "../Firebase";
import { useNavigate } from "react-router-dom";

const DeleteModal = ({ show, setShow, id }) => {
  const navigate = useNavigate();

  const handleClose = () => setShow(false);

  const handleDelete = async () => {
    try {
      const result = await deletePost(id);

      if (result) {
        navigate("/list");
      } else {
        alert("Error occured while delete post...");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>주의</Modal.Title>
      </Modal.Header>
      <Modal.Body>정말로 삭제하시겠습니까?</Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="outline-danger" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
