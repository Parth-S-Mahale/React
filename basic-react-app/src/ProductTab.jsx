import Product from "./Product"

function ProductTab() {

  let options = ["hi-tech", "durable", "costly"];

  let options2 = {
    a: "hi-tech", 
    b: "durable", 
    c: "costly"
  };

  return (
    <>
    
    <Product title="Laptop" price={30000} features={options}  features2={options2} />

    {/* <Product title="Phone" price={40000} features={options}  features2={options2} />

    <Product title="Pen" price={10} features={options}  features2={options2} /> */}

    </>
  )
}


export default ProductTab;