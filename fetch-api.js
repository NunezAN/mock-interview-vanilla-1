import axios from "axios";

const fetchedDatas = [];
const fetchData = async () => {
  const fetchedData = await axios.get("https://www.boredapi.com/api/activity/");
  fetchedDatas.push(fetchedData.data.activity);
  console.log(fetchedDatas);
  displayData(fetchedDatas);
};

fetchData();

const displayData = (fetchedDatas) => {
  document.getElementById("api-data").innerHTML = fetchedDatas
    .map((data) => `<div>${data}</div>`)
    .join("");
};
document
  .querySelector("#fetch-button")
  .addEventListener("click", () => fetchData());
