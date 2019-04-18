import React from "react";
import { Card, CardImg, CardTitle, CardColumns, CardBody } from "reactstrap";
import Rating from "./rating";

function ViewApp(props) {
  return (
    <CardColumns>
      {props.card.map(el => (
        <Card>
          <CardImg top width="100%" src={el.img} alt={el.title} />
          <CardBody>
            <CardTitle>{el.title}</CardTitle>
            <Rating nbrerate={el.rate} />
          </CardBody>
        </Card>
      ))}
    </CardColumns>
  );
}

export default ViewApp;
