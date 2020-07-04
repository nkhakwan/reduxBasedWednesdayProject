import React from 'react';
import { v4 } from 'uuid';
import PropTypes from "prop-types"



export default function NewKeg(props) {
  function handleNewKegform(event) {
    event.preventDefault();
    props.onNewKegCreation(
      {
        name: event.target.name.value,
        brand: event.target.brand.value,
        img: event.target.img.value,
        price: event.target.price.value,
        content: event.target.content.value,
        quantity: (event.target.quantity.value*120),
        id: v4()
      });
  }
  
  
  return (
    <div className="form-container">

      <form className="keg-form" onSubmit={handleNewKegform}>
        <h2>Add a product</h2>
        <input type="text" name="name" placeholder="Product name" />
        <input type="url" name="img" placeholder="Image link" />
        <input type="text" name="brand" placeholder="Product Brand" />
        <input type="number" name="price" placeholder="Product Price" />
        <input type="number" name="content" placeholder="Alcohol Perentage" />
        <input type="number" name="quantity" placeholder="Quantity in Kegs" />
        <button className="add" type="submit">Add Kegs</button>
      </form>
    </div>
  )
  }
NewKeg.propTypes = {
  onNewkegCreation: PropTypes.func
};

