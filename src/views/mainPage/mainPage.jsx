// React hooks
import { useEffect, useState } from "react";
// Components
import Card from "../../components/cards/card";
// Helpers
import { catsFetch } from "../../helpers/catsFetch";
import { randomSelect } from "../../helpers/randomSelect";
// Styles
import "./mainPage.styles.css";

const MainPage = () => {
  const [cats, setCats] = useState([]);

  const resultData = async () => {
    const data = await catsFetch();
    const random = randomSelect(data.data.length);
    const randomCats = random.map((i) => data.data[i]);
    return randomCats;
  };

  useEffect(() => {
    const awaitResult = async () => {
      setCats(await resultData());
    };
    awaitResult();
  }, []);
  return (
    <div className="main-container">
      <div>
        <h1>Ugly responsive layout</h1>
        <div className="center-content">
          {cats &&
            cats.map((cat) => (
              <Card
                key={Object.values(cat).map((el) => el.id)}
                image={Object.values(cat).map((el) => el.data)}
                name={Object.values(cat).map((el) => el.name)}
                text={Object.values(cat).map((el) => el.text)}
                catNum={Object.values(cat).map((el) => el.img)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
export default MainPage;
