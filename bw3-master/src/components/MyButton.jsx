import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function MyButton(props) {
  return (
    <Link to={props.link}>
      <Button
        className="rounded-pill fw-semibold"
        variant={`${props.colore}`}
        onClick={props.funzione}
        type={props.type}
      >
        <div className="d-flex">
          {" "}
          {props.img && <img src={`${props.img}`} alt="img"></img>}
          {props.text}
        </div>
      </Button>
    </Link>
  );
}
export default MyButton;
