import React, { Component } from "react";
import Rating from "./rating";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";

function SearchApp(props) {
  return (
    <div>
      <div className="InputGroup">
        <InputGroup>
          <Input
            placeholder="Type movie name to search"
            onChange={props.HandelInputSearch}
          />

          <InputGroupAddon addonType="append">
            <Button color="secondary">Search</Button>
          </InputGroupAddon>
          <Rating minrate={props.minrate} nbrerate={props.nbrerate} />
        </InputGroup>
      </div>
    </div>
  );
}

export default SearchApp;
