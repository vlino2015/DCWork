import React from 'react';
import Product from "./Product";

class Products extends React.Component {
    constructor(props) {
        super(props);
        let products = this.getProducts();

        this.state = {
            products: products
        }
    }

    getProducts(){
        return [
            { 
                imageUrl: "http://loremflickr.com/150/150?random=1",
                productName: "Product 1",
                releasedDate: "May 31, 2018",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",        
                rating: 4,
                numOfReviews: 2
            },
            { 
                imageUrl: "http://loremflickr.com/150/150?random=2",
                productName: "Product 2",
                releasedDate: "August 31, 2018",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",        
                rating: 2,
                numOfReviews: 12          
            },
            { 
                imageUrl: "http://loremflickr.com/150/150?random=3",
                productName: "Product 3",
                releasedDate: "July 30, 2018",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",        
                rating: 5,
                numOfReviews: 2
            }]
    }

    render() {
        let listProducts = this.state.products.map((productObject)=>{
            return <Product key={productObject.productName} data={productObject}/>
        })
        return (
            <>
                {listProducts}
            </>
        );
    }
}



export default Products
