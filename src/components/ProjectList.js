import React from "react";
// import projects from "../ProjectList";

export default function Portfolio(props) {
  const name = props.projects.name;
  const image = props.projects.image;
  return (
    <div>
      <h3>Project List</h3>
      <h4>{name}</h4>
      <img src={require(`${image}`)} alt={name} />
    </div>
  );
}
