import React from 'react'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';



function Products() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            //fetching the produts data from the fakestoreapi
            const response = await fetch('https://fakestoreapi.com/products')
            if (componentMounted) {
                // cloning the object for read multiple times
                setData(await response.clone().json())//updating the data to state
                setFilter(await response.json())// updating the filter state for filter mens , womens , jewelary ,electronics
                setLoading(false);// updating the loading msg state while fetching data from remote location
                console.log(filter);
            }
            return () => {
                componentMounted = false;
            }
        }
        debugger
        // then call the getProduts() for data 
        getProducts();

    }, [])// empty dependecy only one time render thr 


    //show the msg for while fectching the data from remote location 
    const Loading = () => {
        return(
            <>
             Loading...
            </>
        )
    }

    // fitering the componets based on the user clickde fint he which button 
    const filterProduct =(cat)=>{
        const updatedList = data.filter((x)=>x.category === cat);
        setFilter(updatedList);// updatting with the only particular type of data example user click the mens the display only ments data
    }

    const ShowProducts = () => {
        return (
            <>
            
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(data)} >All</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className='btn btn-outline-dark me-2'  onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className='btn btn-outline-dark me-2'  onClick={()=>filterProduct('jewelery')}>Jewelery</button>
                    <button className='btn btn-outline-dark me-2'  onClick={()=>filterProduct('electronics')}>Electronic</button>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4 " >
                                <div class="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} class="card-img-top" alt={product.title} height='250px'/>
                                        <div class="card-body">
                                            <h5 class="card-title">{product.title.substring(0,12)}...</h5>
                                            <p class="card-text lead fw-bold ">${product.price}</p>
                                            <NavLink  class="btn btn-primary "  to={`/products/${product.id}`} >Buy Now</NavLink>
                                        </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }

    return (
        <div>
            <div className="container my-5 py-5 ">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='disply-6 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Products