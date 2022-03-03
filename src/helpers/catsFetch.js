export const catsFetch = async () => {
  try {
    const res = await fetch("http://localhost:9000/api/v1/cats");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
