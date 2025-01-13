export default function ProductCard(props) {
    console.log(props);
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>Price : {props.price}</h2>
            <button>Add to cart</button>
        </div>
    );
}

