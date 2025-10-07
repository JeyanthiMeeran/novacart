import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import {toast} from 'react-toastify'

export default function ProductDetail({cartItems, setCartItems}) {

    const [products, setProduct] = useState(null);
    const[qty, setqty] = useState(1);

    const {id} = useParams();

    useEffect(() =>{
        fetch(process.env.REACT_APP_API_URL+'/product/'+ id)
        .then(res => res.json())
        .then( res => setProduct(res.product))
    },[])


    function addToCart() {
        const itemExist = cartItems.find((item) => item.products._id == item.products._id );
        const newItem = {products, qty};
        setCartItems((state) => [...state, newItem]);
        toast.success("Cart Items add Successfully!")

    }


    function increaseQty() {
        if(products.stock == qty){
            toast("out of Stock!")
            return;
        }
        setqty((state) => state + 1);
    }

    function decreaseQty() {
        if(qty > 1){
            return setqty((state) => state - 1);
        }
    }



    return products && <div className="container container-fluid">
                            <div className="row f-flex justify-content-around">
                                <div class="col-12 col-lg-5 img-fluid" id="product_image">
                                    <img src={products.images[0].images} alt="sdf" height="500" width="500"/>
                                </div>

                                <div className="col-12 col-lg-5 mt-5">
                                    <h3>{products.name}</h3>
                                    <p id="product_id">Product # {products._id}</p>

                                    <hr />

                                    <div className="rating-outer">
                                        <div class="rating-inner" style={{width : `${products.ratings/5 * 100}%`}}></div>
                                    </div>
                            

                                    <hr />

                                    <p id="product_price">{products.price}</p>
                                    <div className="stockCounter d-inline">
                                        <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>

                                        <input type="number" class="form-control count d-inline" value={qty} readOnly />

                                        <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
                                    </div>
                                    <button type="button" onClick={addToCart} disabled={products.stock == 0} id="cart_btn" class="btn btn-primary d-inline ml-4">Add to Cart</button>

                                    <hr />

                                    <p>Status: <span id="stock_status" className={products.stock > 0 ? 'text-success' : 'text-danger'}>{ products.stock > 0 ? 'In Stock' : 'Out of Stock'}</span></p>

                                    <hr />

                                    <h4 className="mt-2">Description:</h4>
                                    <p>{products.description}</p>
                                    <hr />
                                    <p id="product_seller mb-3">Sold by: <strong>{products.seller}</strong></p>
                                    
                                    <div class="rating w-50"></div>
                                            
                                </div>

                            </div>

                        </div>
}