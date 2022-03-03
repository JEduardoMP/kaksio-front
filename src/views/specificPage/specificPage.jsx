// React Router
import { useLocation } from "react-router-dom";
// Styles
import "./specificPage.styles.css";

const SpecificPage = () => {
  let location = useLocation();
  console.log(location.state);
  return (
    <div className="main-container">
      <div className="single-cat-container">
        <h2>{location.state.name}</h2>
        <div className="single-img-container">
          <img
            style={{ maxWidth: "100%" }}
            src={`data:image/png;base64,${location.state.image}`}
            alt={location.state.name}
          />
        </div>
        <p>{location.state.text}</p>
      </div>
    </div>
  );
};
export default SpecificPage;
