import React , {useState} from 'react';
function ProductList() {
    const [products, setProducts] = useState([
        {id : 1 , name : 'Product 1' , price : 100},
        {id : 2 , name : 'Product 2' , price : 200},
        {id : 3 , name : 'Product 3' , price : 300},
        {id : 4 , name : 'Product 4' , price : 400},
    ]);

    const totalPrice = products.reduce((sum , product) => sum + product.price , 0);

  
    return (
      <div>
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    {product.name} :- {product.price}
                </li>
            ))}
        </ul>
        <p>Total: ${totalPrice}</p>
      </div>
    );
  }

  export default ProductList;