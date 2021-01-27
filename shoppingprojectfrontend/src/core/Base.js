import React from 'react'
import Menu from './Menu'

const Base = ({
    title="My Title",
    description="my description look good",
    storeDescription="The store you trust and the store we love to serve",
    className="bg-dark text-white py-4",
    children
}) => (
    
    <div className="container-fluid">
    <Menu />
    <div className="jumbotron bg-dark text-center text-white">
        <h1 className="display-4">{title}</h1>
        <p className="lead">{description}</p>
    </div>
    <div className={className}>{children}</div>
    <div className="footer bg-dark mt-auto py-3">
        <div className="container-fluid bg-success text-center text-white py-3">
            <h3>{storeDescription}</h3>
            <button className="btn-warning btn-lg text-white">Contact Us</button>
        </div>
        <div className="container">
            <span className="text-muted">
                An amazing store that you love
                    </span>
                        </div>
        
    </div>
    
        
    </div>
    
    
)

export default Base
