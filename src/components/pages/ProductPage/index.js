import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

import ProductDetail from '../../ProductDetail';

export default function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  useEffect(() => {
    const url = process.env.REACT_APP_BACKEND_URI;
    const promise = axios.get(`${url}/products/${params.productId}`);
    promise.then(response => setProduct(response.data));
    promise.catch(error => console.log("error", error));
  }, [])

  return (
    <div className="ProductPage">
      {
        product ?
          <ProductDetail
            title={product.title}
            description={product.description}
            price={product.price}
          /> :
          <div>Não há nada para exibir</div>
      }
      <div className="actions">
        <button onClick={handleBack}>Voltar</button>
        <button>Selecionar</button>
      </div>
    </div>
  )
}