import React, { useState, useEffect } from "react";
import MultiSelect from 'multiselect-react-dropdown';
import './Dropdownlist.css';

const Dropdownlist = () => {

  const [data, setData] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((response) => {
        setData(response);

      })
    })

  }, [])

  console.log(data);

  const [allEntry, setAllEntry] = useState([]);

  function Submit() {
    var arr = [];
    for (var a = 0; a < allEntry.length; a++) {
      arr.push(allEntry[a].name);

    }
    alert("The Employees Name :  " + arr + "  selected.");
    console.log(arr);

  }

  return (
    <div className="main-div">
       <div className="center-div">
        <h1>Select Employee Name</h1>
            <MultiSelect
          displayValue="name"
          options={data}
          onSelect={(value) => setAllEntry(value)}
          labelledBy="Select"
          showCheckbox />

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br />
        <button type="submit" onClick={Submit}> Submit </button>

      </div>

    </div>
  );
};

export default Dropdownlist;
