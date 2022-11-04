import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Product.css";

function Product(props) {
  const [selected, setSelected] = useState(false);
  const { id, title, description, price, updateTotalPrice } = props;
  const navigate = useNavigate();

  function handleSelect() {
    navigate(`/products/${id}`);
  }

  function checkSelected() {
    let classes = "product";
    if (selected) {
      classes = "product selected";
    }
    return classes;
  }

  return (
    <div className="Product">
      <div className="product" onClick={handleSelect}>
        <img src="https://via.placeholder.com/150" alt="Awesome Product" />
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <p className="price">R$ {price.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default Product;