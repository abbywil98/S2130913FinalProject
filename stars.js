import React, { useState } from "react";
import Star from "./Star";
import { createArray } from "./lib";

export default function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(3);
  
    return (
    <div>
      {createArray(totalStars).map((n, i) => (
          <Star
            key={i}
            selected={selectedStars > i}
            onSelect={() => setSelectedStars(i + 1)}
          />
        ))
      }
      <p> {selectedStars} of {totalStars} stars </p>
    </div>
  );
}