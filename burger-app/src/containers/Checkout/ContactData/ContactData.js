import React from "react";
import classes from "./ContactData.css";
import axios from "../../../axios-orders";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends React.Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
  };

  orderHandler = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Rich",
        address: {
          street: "Test",
          zipCode: "10001",
          country: "USA",
        },
        email: "yo@gmail.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        console.log(response);
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ loading: false });
        console.log(error);
      });
    console.log(this.props.ingredients);
  };

  render() {
    let form = (
      <form>
        FORM
        <input type="text" name="name" placeholder="Your Name" />
        <input type="text" name="email" placeholder="Your Email" />
        <input type="text" name="street" placeholder="Your Street" />
        <input type="text" name="postal-code" placeholder="Your Postal Code" />
        <Button buttonType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter Your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
