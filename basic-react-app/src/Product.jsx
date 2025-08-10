import "./Product.css"

function Product({title, price, features, features2}) {
  
  const list = features.map((feature) => <li>{feature}</li>);

  return (
    <div className="Product">
      <h3>{title}</h3>
      <h5>Price: {price}</h5>
      <p>{list}</p>
      <p>{features2.a}</p>
    </div>
  );
}

export default Product;
