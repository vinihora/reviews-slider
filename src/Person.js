import React from "react";
import "./Person.css";

const Person = (props) => {
  const { id, img, name, position, description } = props.data;

  return (
    <div className="content">
      <img src={img} alt="" className="img-user" />
      <h1 className="name-user">{name}</h1>
      <h2 className="position-user">{position}</h2>
      <p className="description-user">{description}</p>
    </div>
  );
};

export default Person;
