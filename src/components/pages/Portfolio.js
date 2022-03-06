import React from "react";
import Projects from "../Projects";

export default function Portfolio() {
  return (
    <div>
      <h3>Project List</h3>
      {Projects.name.map((project) => (
        <div>Test</div>
      ))}
    </div>
  );
}
