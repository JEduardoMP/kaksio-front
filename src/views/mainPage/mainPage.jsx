// React hooks
import { useEffect, useState } from "react";
// Helpers
import { catsFetch } from "../../helpers/catsFetch";
import { randomSelect } from "../../helpers/randomSelect";

const MainPage = () => {
  const [cats, setCats] = useState([])
  console.log(cats);
  const resultData = async () => {
    const data = await catsFetch();
    const random = randomSelect(data.data.catFormat.length)
    const randomCats = random.map(i => data.data.catFormat[i]);
    return randomCats
  };

  useEffect(() => {
    const awaitResult = async () => {
      setCats(await resultData());
    }
    awaitResult()
  }, []);
  return <h1>Hola</h1>;
};
export default MainPage;
