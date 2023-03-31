import React from "react";

export interface CardProps {
  src: string;
  title: string;
  description: string;
}

const Card = (props: CardProps) => {
  return (
    <>
    <div className="card">
    <img src={props.src} alt="Avatar" />
    <div className="container">
      <h4><b>{props.title}</b></h4> 
      <p>{props.description}</p> 
    </div>
  </div></>
  );
};

export default Card;