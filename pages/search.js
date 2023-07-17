import React, { useState } from "react";

const SampleData = ["BMW", "Hyundai", "VW", "Volkswagen"];

const Home = () => {
  const [filterText, setFilterText] = useState("");
  const filteredData = SampleData.filter(item =>
    item.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default function Search(props);
