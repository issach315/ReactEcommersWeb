import React from 'react'
import Products from './Products'

function Home() {
    return (
        <div className='hero'>
            <div className="card text-bg-dark border-0">
                <img src="/assets/bg1.jpg" className="card-img" alt='background' height='750px'/>
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                <div className="container">
                <h5 className="card-title display-3 fw-bolder mb-0 ">New Seasons Arraival</h5>
                    <p className="card-text lead fs-2" >ChechOut All The Trends </p> 
                </div>
                   
                </div>
            </div>
            <Products />
        </div>
    )
}

export default Home