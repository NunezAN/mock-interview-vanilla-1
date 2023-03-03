import axios from "axios";

const fetchData = async () => {
  const fetchedData = await axios.get("https://www.boredapi.com/api/activity/");
  displayData(fetchedData);
};

fetchData();

const displayData = (fetchedData) => {
  document.getElementById("api-data").innerHTML = fetchedData.data.activity;
};
