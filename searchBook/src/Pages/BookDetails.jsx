import { useLocation } from "react-router-dom";

function BookDetails() {
  const location = useLocation();
  const { book } = location.state;
  return <div>{book.title}</div>;
}

export default BookDetails;
