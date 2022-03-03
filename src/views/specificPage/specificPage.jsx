// React Router
import { useLocation } from "react-router-dom";
// Styles
import "./specificPage.styles.css";

const SpecificPage = () => {
  let location = useLocation();
  console.log(location.state);
  return (
    <div className="main-container">
      <div className="single-img-container">
        <h2>{location.state.name}</h2>
      </div>
      <img
        src={`data:image/png;base64,${location.state.image}`}
        alt={location.state.name}
      />
      <p>{location.state.text}</p>
    </div>
  );
};
export default SpecificPage;
