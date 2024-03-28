import React from "react";

const searchResult = ({ results }) => {
  return (
    <div className="p-10 20 hover:bg-gray-200">
      onclick={(e) => alert("you click on ${Result}")}
      {results.name}
    </div>
  );
};

export default searchResult;
