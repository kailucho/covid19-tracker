import { useEffect, useState } from "react";
import { Cards, Chart, CountryPicker } from "./components";

import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/image.png";

function App() {
  const [data, setdata] = useState({});
  const [country, setCountry] = useState("");
  const getData = async () => {
    const res = await fetchData();
    setdata(res);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleCountryCnange = async (country) => {
    const res = await fetchData(country);
    console.log({ res });
    setdata(res);
    setCountry(country);
  };

  return (
    <div className={styles.container}>
      <img src={coronaImage} alt="COVID-19" className={styles.image} />
      <Cards data={data} />
      <CountryPicker handleCountryCnange={handleCountryCnange} />
      <Chart country={country} data={data} />
    </div>
  );
}

export default App;
