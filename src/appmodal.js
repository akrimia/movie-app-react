import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody
} from "reactstrap";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class AppModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title: "",
      img: "",
      rate: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handelstate = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  addMovie = movie => {
    this.props.card.concat(movie);
  };

  render() {
    const externalCloseBtn = (
      <button
        className="close"
        style={{ position: "absolute", top: "15px", right: "15px" }}
        onClick={this.toggle}
      >
        &times;
      </button>
    );
    return (
      <div>
        <div class="addmodal">
          <Button onClick={this.toggle}>
            {this.props.buttonLabel}
            <img
              class="add"
              src="http://clipart-library.com/images/8T65jX9Gc.png"
            />
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
            external={externalCloseBtn}
          >
            <ModalBody>
              <InputGroup>
                number star
                <Input
                  name="title"
                  placeholder=""
                  onChange={this.handelstate}
                />
              </InputGroup>
              <InputGroup>
                image
                <Input name="img" placeholder="" onChange={this.handelstate} />
              </InputGroup>
              <InputGroup>
                title
                <Input name="rate" placeholder="" onChange={this.handelstate} />
              </InputGroup>
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={() => {
                  this.props.addMovie({
                    title: this.state.title,
                    img: this.state.img,
                    rate: this.state.rate
                  });
                }}
              >
                Add
              </Button>{" "}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default AppModal;
