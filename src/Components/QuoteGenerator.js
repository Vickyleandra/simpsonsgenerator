import React from "react";

function QuoteGenerator({ generator }) {
  return (
    <div className="QuoteGenerator">
      <img src={generator.image} alt={generator.character} />
      <ul>
        <li>Quote: {generator.quote}</li>
        <li>Character: {generator.character}</li>
      </ul>
    </div>
  );
}

export default QuoteGenerator;
