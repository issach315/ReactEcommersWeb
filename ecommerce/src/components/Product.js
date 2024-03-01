import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'

function Product() {
 
    const { id } = useParams(); //we destructure id from the useparamas Method and "useParamas() --> Its having entire url" from react-router DOM.
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            fetch(`https://fakestoreapi.com/products/${id}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setProduct(data)
                })

            // setProduct(await response.json());

            setLoading(false);
        }
        getProduct();
    }, [])

    const Loading = () => {
        return (
            <>
                Loading...
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
            
                    <div>
                        <div className="col-md-6">
                            <img src={product.image} alt={product.title} />

                        </div>
                        <div className="col-md-6">
                            <h4 className='text-uppercase text-black-50'>
                                {product.category}
                            </h4>
                            <h1 className='display-5'>{product.title}</h1>
                            <p className='lead fw-bolder'>
                                Rating{product.rating && product.rating.rate}
                                <i className='fa fa-star'></i>
                            </p>
                            <h3 className='display-6 fw-bold my-4'>
                                ${product.price}
                            </h3>
                            <p className='lead'>{product.description}</p>
                            <button className='btn btn-outline-dark px-4 py-2'>
                                Add To Cart
                            </button>
                            <NavLink to='/cart' className='btn btn-dark ms-2 px-3 py-2'>
                                Go To Cart
                            </NavLink>
                        </div>
                    </div>
                
            </>
        )
    }


    return (
        <div>
            <div className="container">
                <div className="row">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}

export default Product