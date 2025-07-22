import React, { useState, useEffect, useContext } from "react";
import SearchDisplay from "./SearchDisplay";
import type { FormData } from "../types.ts";

import { AppContext } from "../../context/AppContext.tsx";

function SearchBar() {
  const { formData, setFormData } = useContext(AppContext);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${formData.searchInput}&count=1`,
      );
      const data = await response.json();
      setFormData((prevState: FormData) => ({
        ...prevState,
        searchResults: data.results[0],
      }));
      console.log(data.results[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (input: string) => {
    setFormData((prevState: FormData) => ({
      ...prevState,
      searchInput: input,
    }));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a Location"
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
      ></input>
      <button onClick={fetchData}>Search</button>
      <SearchDisplay data={formData.searchResults} />
    </div>
  );
}

export default SearchBar;
