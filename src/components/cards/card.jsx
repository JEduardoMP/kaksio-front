// React router
import { useNavigate } from "react-router-dom";
// Styles
import "./card.styles.css";

const Card = (props) => {
  let navigate = useNavigate();
  const toSpecificPage = () => {
    const transform = props.catNum[0].replace(".png", "");
    navigate(`/${transform}`, { state: props });
    // console.log(props.catNum);
  };
  return (
    <button className="btn-container" onClick={() => toSpecificPage()}>
      <div className="img-container">
        <img
          style={{ maxWidth: "100%", Height: "100%" }}
          src={`data:image/png;base64,${props.image}`}
          alt={props.catNum}
        />
      </div>
      <h2>{props.name}</h2>
      <p>{props.text}</p>
    </button>
  );
};

export default Card;
