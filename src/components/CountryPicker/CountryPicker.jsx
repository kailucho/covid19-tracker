import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./CountryPicker.module.css";

import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryCnange }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const getCountries = async () => {
      setCountries(await fetchCountries());
    };
    getCountries();
  }, []);

  return (
    <FormControl>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryCnange(e.target.value)}
      >
        <option value={""}>Global</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
