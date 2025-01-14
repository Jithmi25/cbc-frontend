import axios from "axios";
import { useEffect, useState } from "react";
export default function AdminProduct(){


const [products,setProducts] = useState(
[
    {
        "_id": "677bd61d9e6add16e82ed2c4",
        "productId": "BP001",
        "productName": "Radiant Glow Face Cream",
        "altName": [
            "Brightening Cream",
            "Glow Enhancer"
        ],
        "images": [
            "https://example.com/images/radiant-glow-cream-front.jpg",
            "https://example.com/images/radiant-glow-cream-back.jpg",
            "https://example.com/images/radiant-glow-cream-usage.jpg"
        ],
        "price": 1499,
        "lastPrice": 1999,
        "description": "A luxurious face cream enriched with natural ingredients like aloe vera and vitamin C to brighten skin tone and reduce dark spots.",
        "stockCount": 120,
        "__v": 0
    },
    {
        "_id": "677e735259ffbe72fc9d6e3b",
        "productId": "BP002",
        "productName": "Radiant Glow white Face Cream",
        "altName": [
            "Brightening Cream",
            "Glow Enhancer"
        ],
        "images": [
            "https://example.com/images/radiant-glow-cream-front.jpg",
            "https://example.com/images/radiant-glow-cream-back.jpg",
            "https://example.com/images/radiant-glow-cream-usage.jpg"
        ],
        "price": 149.9,
        "lastPrice": 199.9,
        "description": "A luxurious face cream enriched with natural ingredients like aloe vera and vitamin C to brighten skin tone and reduce dark spots.",
        "stockCount": 140,
        "__v": 0
    }
]
)

useEffect(
    ()=>{
        axios.get("http://localhost:3000/api/product").then((res)=>{
            console.log(res)
        })
    },[]
)

console.log(products)

    return(
        <div>
            <h1>Admin Product Page</h1>
            {
            products.map(
                (product,index)=>{
                    return(
                        <div key={product._Id}>
                            {index}
                            {product.productName}
                        </div>
                    )
                }
            )
            }
        </div>
    )
}
{/* <div>
<h1>Admin Product Page</h1>
{products.length > 0 ? (
  products.map((product) => (
    <div key={product._id}>
      <h3>{product.productName}</h3>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <p>Stock: {product.stockCount}</p>
      <div>
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={product.productName} style={{ width: "100px", margin: "5px" }} />
        ))}
      </div>
    </div>
  ))
) : (
  <p>Loading products...</p>
)}
</div>
}
 */}
