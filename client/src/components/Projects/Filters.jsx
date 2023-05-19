import React, { useEffect, useState } from "react";
import { getFilters } from "../../http/index";
import { Autocomplete, TextField } from "@mui/material";
import { useLocation } from "react-router-dom";

export const Filters = () => {
  const [array, setArray] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getFilters().then((res) => {
      let newArray = [];
      res.data.map((row) => {
        row.TAGS.map((ele) => {
          if (!newArray.includes(ele)) newArray.push(ele);
        });
      });
      setArray(newArray);
      const searchParams = new URLSearchParams(location.search);
      setFilteredArray(searchParams.get('filter').split(','));

    });
  }, []);

  const addFilter = ()=>{
    const url = `${window.location.origin + window.location.pathname}?filter=${filteredArray}`
    window.location.href = url;
  }

  return (
    <>
    <div className="grid md:grid-cols-2 grid-cols-1 gap-3">

      <Autocomplete
        multiple
        id="tags-outlined"
        options={array}
        value={filteredArray}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        onChange={(e,v)=>setFilteredArray(v)}
        renderInput={(params) => (
          <TextField
          {...params}
            label="Apply Filter"
            placeholder="Coding"
          />
          )}
          />

      <button onClick={addFilter} className="max-w-fit bg-blue-600 text-white px-3 rounded-lg py-2">Search</button>
    </div>
    </>
  );
};
